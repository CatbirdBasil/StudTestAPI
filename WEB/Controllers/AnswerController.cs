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
    [RoutePrefix("api/answer")]
    public class AnswerController : ApiController
    {
        private readonly IAnswerService _answerService;

        public AnswerController(IAnswerService service)
        {
            _answerService = service;
        }

        [AllowAnonymous] //TODO DELETE
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAllAnswers()
        {
            IEnumerable<AnswerDTO> answers;
            try
            {
                answers = _answerService.GetAll();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<IEnumerable<AnswerDTO>, IEnumerable<AnswerModel>>(answers);
            return Ok(Mapper.Map<IEnumerable<AnswerDTO>, IEnumerable<AnswerModel>>(answers));
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetAnswer(int id)
        {
            AnswerDTO answer;
            try
            {
                answer = _answerService.GetById(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<AnswerDTO, AnswerModel>(answer);
            return Ok(Mapper.Map<AnswerDTO, AnswerModel>(answer));
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult CreateAnswer([FromBody] AnswerModel answer)
        {
            AnswerDTO answerDTO;

            try
            {
                answerDTO = _answerService.Insert(Mapper.Map<AnswerModel, AnswerDTO>(answer));
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok(Mapper.Map<AnswerDTO, AnswerModel>(answerDTO));
        }

        [Route("")]
        [HttpPut]
        public IHttpActionResult UpdateAnswer([FromBody] AnswerModel answer)
        {
            bool updateResult;

            try
            {
                updateResult = _answerService.Update(Mapper.Map<AnswerModel, AnswerDTO>(answer));
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
        public IHttpActionResult DeleteAnswer([FromBody] AnswerModel answer)
        {
            AnswerDTO answerDTO;

            try
            {
                answerDTO = _answerService.Delete(Mapper.Map<AnswerModel, AnswerDTO>(answer));
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok(Mapper.Map<AnswerDTO, AnswerModel>(answerDTO));
        }
    }
}