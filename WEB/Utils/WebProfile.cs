using BLL.DTO;
using WEB.Models;

namespace WEB.Utils
{
    public class WebProfile : AutoMapper.Profile
    {
        public WebProfile()
        {
            CreateMap<TestDTO, TestModel>().ReverseMap();
            CreateMap<TestGroupDTO, TestGroupModel>().ReverseMap();

            CreateMap<QuestionDTO, QuestionModel>();

            CreateMap<QuestionModel, QuestionDTO>().ForMember(dest => dest.Test,
                src => src.Ignore());

            CreateMap<AnswerDTO, AnswerModel>();
            CreateMap<AnswerModel, AnswerDTO>().ForMember(dest => dest.Question,
                src => src.Ignore());

            CreateMap<TestHistoryDTO, TestHistoryModel>().ReverseMap();
            CreateMap<AnswerHistoryDTO, AnswerHistoryModel>();
            CreateMap<AnswerHistoryModel, AnswerHistoryDTO>().ForMember(dest => dest.TestHistory,
                src => src.Ignore());
        }
    }
}