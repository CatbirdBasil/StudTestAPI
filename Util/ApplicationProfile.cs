using System;
using BLL.DTO;
using DAL.Entities;

namespace Util
{
    public class ApplicationProfile : AutoMapper.Profile
    {
        public ApplicationProfile()
        {
            CreateMap<UserDTO, User>().ReverseMap();

            CreateMap<TestDTO, Test>().ForMember(dest => dest.User, opts => opts.Ignore());

            CreateMap<Test, TestDTO>()
                .ForMember(dest => dest.Username, opts => opts.MapFrom(src => src.User.UserName));

            CreateMap<TestGroupDTO, TestGroup>().ReverseMap();

            CreateMap<QuestionDTO, Question>().ForMember(dest => dest.Type,
                opts => opts.MapFrom(src => (QuestionType) Enum.Parse(typeof(QuestionType), src.Type)));

            CreateMap<Question, QuestionDTO>().ForMember(dest => dest.Type,
                opts => opts.MapFrom(src => src.Type.ToString()));


            CreateMap<AnswerDTO, Answer>().ReverseMap();
            CreateMap<TestHistoryDTO, TestHistory>().ReverseMap();
            CreateMap<AnswerHistoryDTO, AnswerHistory>().ReverseMap();
        }
    }
}