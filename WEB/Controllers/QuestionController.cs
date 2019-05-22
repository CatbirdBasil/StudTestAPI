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
    [RoutePrefix("api/question")]
    public class QuestionController : ApiController
    {
        private readonly IQuestionService _questionService;

        public QuestionController(IQuestionService service)
        {
            _questionService = service;
        }

        [AllowAnonymous] //TODO DELETE
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAllQuestions()
        {
            IEnumerable<QuestionDTO> questions;
            try
            {
                questions = _questionService.GetAll();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<IEnumerable<QuestionDTO>, IEnumerable<QuestionModel>>(questions);
            return Ok(Mapper.Map<IEnumerable<QuestionDTO>, IEnumerable<QuestionModel>>(questions));
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetQuestion(int id)
        {
            QuestionDTO question;
            try
            {
                question = _questionService.GetById(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            Mapper.Map<QuestionDTO, QuestionModel>(question);
            return Ok(Mapper.Map<QuestionDTO, QuestionModel>(question));
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult CreateQuestion([FromBody] QuestionModel question)
        {
            QuestionDTO questionDTO;

            try
            {
                questionDTO = _questionService.Insert(Mapper.Map<QuestionModel, QuestionDTO>(question));
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok(Mapper.Map<QuestionDTO, QuestionModel>(questionDTO));
        }

        [Route("")]
        [HttpPut]
        public IHttpActionResult UpdateQuestion([FromBody] QuestionModel question)
        {
            bool updateResult;

            try
            {
                updateResult = _questionService.Update(Mapper.Map<QuestionModel, QuestionDTO>(question));
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
        public IHttpActionResult DeleteQuestion([FromBody] QuestionModel question)
        {
            QuestionDTO questionDTO;

            try
            {
                questionDTO = _questionService.Delete(Mapper.Map<QuestionModel, QuestionDTO>(question));
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok(Mapper.Map<QuestionDTO, QuestionModel>(questionDTO));
        }
    }
}