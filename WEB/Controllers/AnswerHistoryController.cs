using System;
using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using WEB.Models;

namespace WEB.Controllers
{
    [Authorize]
    [RoutePrefix("api/history/answer")]
    public class AnswerHistoryController : ApiController
    {
        private readonly IAnswerHistoryService _answerHistoryService;

        public AnswerHistoryController(IAnswerHistoryService service)
        {
            _answerHistoryService = service;
        }

        [AllowAnonymous] //TODO DELETE
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAllAnswerHistories()
        {
            IEnumerable<AnswerHistoryDTO> answerHistories;
            try
            {
                answerHistories = _answerHistoryService.GetAll();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<IEnumerable<AnswerHistoryDTO>, IEnumerable<AnswerHistoryModel>>(answerHistories);
            return Ok(Mapper.Map<IEnumerable<AnswerHistoryDTO>, IEnumerable<AnswerHistoryModel>>(answerHistories));
        }

        [HttpGet]
        [Route("{id}")]
        //[Route("~api/history/answer/{id}")]
        public IHttpActionResult GetAnswerHistory(int id)
        {
            AnswerHistoryDTO answerHistory;
            try
            {
                answerHistory = _answerHistoryService.GetById(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<AnswerHistoryDTO, AnswerHistoryModel>(answerHistory);
            return Ok(Mapper.Map<AnswerHistoryDTO, AnswerHistoryModel>(answerHistory));
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult CreateAnswerHistory([FromBody] AnswerHistoryModel answerHistory)
        {
            AnswerHistoryDTO answerHistoryDTO;

            try
            {
                answerHistoryDTO =
                    _answerHistoryService.Insert(Mapper.Map<AnswerHistoryModel, AnswerHistoryDTO>(answerHistory));
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok(Mapper.Map<AnswerHistoryDTO, AnswerHistoryModel>(answerHistoryDTO));
        }

        [Route("")]
        [HttpPut]
        public IHttpActionResult UpdateAnswerHistory([FromBody] AnswerHistoryModel answerHistory)
        {
            bool updateResult;

            try
            {
                updateResult =
                    _answerHistoryService.Update(Mapper.Map<AnswerHistoryModel, AnswerHistoryDTO>(answerHistory));
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
        public IHttpActionResult DeleteAnswerHistory([FromBody] AnswerHistoryModel answerHistory)
        {
            AnswerHistoryDTO answerHistoryDTO;

            try
            {
                answerHistoryDTO =
                    _answerHistoryService.Delete(Mapper.Map<AnswerHistoryModel, AnswerHistoryDTO>(answerHistory));
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok(Mapper.Map<AnswerHistoryDTO, AnswerHistoryModel>(answerHistoryDTO));
        }
    }
}