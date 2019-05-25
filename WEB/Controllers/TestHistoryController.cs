using System;
using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using Microsoft.AspNet.Identity;
using WEB.Models;

namespace WEB.Controllers
{
    [Authorize]
    [RoutePrefix("api/history/test")]
    public class TestHistoryController : ApiController
    {
        private readonly ITestHistoryService _testHistoryService;

        public TestHistoryController(ITestHistoryService service)
        {
            _testHistoryService = service;
        }

        [AllowAnonymous] //TODO DELETE
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAllTestHistories()
        {
            IEnumerable<TestHistoryDTO> testHistories;
            try
            {
                testHistories = _testHistoryService.GetAll();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<IEnumerable<TestHistoryDTO>, IEnumerable<TestHistoryModel>>(testHistories);
            return Ok(Mapper.Map<IEnumerable<TestHistoryDTO>, IEnumerable<TestHistoryModel>>(testHistories));
        }

        [HttpGet]
        [Route("{id}")]
        //[Route("~api/history/test/{id}")]
        public IHttpActionResult GetTestHistory(int id)
        {
            TestHistoryDTO testHistory;
            try
            {
                testHistory = _testHistoryService.GetById(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<TestHistoryDTO, TestHistoryModel>(testHistory);
            return Ok(Mapper.Map<TestHistoryDTO, TestHistoryModel>(testHistory));
        }

        [HttpGet]
        [Route("statistic/{id}")]
//        [Route("~/api/history/test/statistic/{id}")]
        public IHttpActionResult GetTestHistoryStatistics(int id)
        {
            TestStatisticsDTO testStatisticsDto;

            try
            {
                testStatisticsDto = _testHistoryService.GetTestHistoryStatistics(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Ok(Mapper.Map<TestStatisticsDTO, TestStatisticsModel>(testStatisticsDto));
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult CreateTestHistory([FromBody] TestHistoryModel testHistory)
        {
            testHistory.UserId = User.Identity.GetUserId();

            TestHistoryDTO testHistoryDTO;
            try
            {
                testHistoryDTO = _testHistoryService.Insert(Mapper.Map<TestHistoryModel, TestHistoryDTO>(testHistory));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Ok(Mapper.Map<TestHistoryDTO, TestHistoryModel>(testHistoryDTO));
        }

        [Route("")]
        [HttpPut]
        public IHttpActionResult UpdateTestHistory([FromBody] TestHistoryModel testHistory)
        {
            bool updateResult;

            try
            {
                updateResult = _testHistoryService.Update(Mapper.Map<TestHistoryModel, TestHistoryDTO>(testHistory));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            if (updateResult) return Ok();
            else return BadRequest();
        }

        [Route("")]
        [HttpDelete]
        public IHttpActionResult DeleteTestHistory([FromBody] TestHistoryModel testHistory)
        {
            TestHistoryDTO testHistoryDTO;

            try
            {
                testHistoryDTO = _testHistoryService.Delete(Mapper.Map<TestHistoryModel, TestHistoryDTO>(testHistory));
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok(Mapper.Map<TestHistoryDTO, TestHistoryModel>(testHistoryDTO));
        }
    }
}