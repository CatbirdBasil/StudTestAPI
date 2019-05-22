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
    [RoutePrefix("api/test")]
    public class TestController : ApiController
    {
        private readonly ITestService _testService;

        public TestController(ITestService service)
        {
            _testService = service;
        }

        [AllowAnonymous] //TODO DELETE
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAllTests()
        {
            IEnumerable<TestDTO> tests;
            try
            {
                tests = _testService.GetAll();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>(tests);
            return Ok(Mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>(tests));
        }

        [HttpGet]
//        [Route("~/api/test/user/{id}")]
        [Route("user/{id}")]
        public IHttpActionResult GetUserTests(string id)
        {
            IEnumerable<TestDTO> tests;
            try
            {
                tests = _testService.GetTestsByUserId(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>(tests);
            return Ok(Mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>(tests));
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetTest(int id)
        {
            TestDTO test;
            try
            {
                test = _testService.GetById(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<TestDTO, TestModel>(test);
            return Ok(Mapper.Map<TestDTO, TestModel>(test));
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult CreateTest([FromBody] TestModel test)
        {
            test.UserId = User.Identity.GetUserId();
            TestDTO testDTO;

            try
            {
                testDTO = _testService.Insert(Mapper.Map<TestModel, TestDTO>(test));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Ok(Mapper.Map<TestDTO, TestModel>(testDTO));
        }

        [Route("")]
        [HttpPut]
        public IHttpActionResult UpdateTest([FromBody] TestModel test)
        {
            bool updateResult;

            try
            {
                updateResult = _testService.Update(Mapper.Map<TestModel, TestDTO>(test));
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
        public IHttpActionResult DeleteTest([FromBody] TestModel test)
        {
            TestDTO testDTO;

            try
            {
                testDTO = _testService.Delete(Mapper.Map<TestModel, TestDTO>(test));
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok(Mapper.Map<TestDTO, TestModel>(testDTO));
        }
    }
}