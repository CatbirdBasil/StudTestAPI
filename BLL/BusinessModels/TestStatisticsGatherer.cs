using System.Collections.Generic;
using BLL.DTO;

namespace BLL.BusinessModels
{
    public class TestStatisticsGatherer
    {
        private readonly TestDTO _test;
        private readonly IEnumerable<TestHistoryDTO> _testHistories;
        private bool _includesAverageCompletionTime;
        private bool _includesAverageScore;
        private bool _includesNumberOfCompletions;

        public TestStatisticsGatherer(TestDTO test, IEnumerable<TestHistoryDTO> testHistories)
        {
            _test = test;
            _testHistories = testHistories;
            ResetFlags();
        }

        private void ResetFlags()
        {
            _includesAverageScore = false;
            _includesAverageCompletionTime = false;
            _includesNumberOfCompletions = false;
        }

        public TestStatisticsGatherer IncludeAverageScore()
        {
            _includesAverageScore = true;
            return this;
        }

        public TestStatisticsGatherer IncludeAverageCompletionTime()
        {
            _includesAverageCompletionTime = true;
            return this;
        }

        public TestStatisticsGatherer IncludeNumberOfCompletions()
        {
            _includesNumberOfCompletions = true;
            return this;
        }

        public TestStatisticsDTO Gather()
        {
            double? averageScore = 0;
            double? averageCompletionTime = 0;
            int? numberOfCompletions = 0;

            foreach (var testHistory in _testHistories)
            {
                if (testHistory.IsDone) numberOfCompletions++;
                if (_includesAverageCompletionTime)
                    averageCompletionTime = testHistory.IsDone
                        ? averageCompletionTime + testHistory.TimeSpent
                        : averageCompletionTime;

                if (_includesAverageScore && testHistory.IsDone) averageScore += GetScore(testHistory);
            }

            var result = new TestStatisticsDTO();
            result.TestId = _test.Id;
            result.AverageScore = _includesAverageScore ? averageScore / numberOfCompletions : null;
            result.AverageCompletionTime =
                _includesAverageCompletionTime ? averageCompletionTime / numberOfCompletions : null;
            result.NumberOfCompletions = _includesNumberOfCompletions ? numberOfCompletions : null;

            return result;
        }

        private double GetScore(TestHistoryDTO testHistory)
        {
            int maxScore = testHistory.Test.Questions.Count;
            int score = 0;

            foreach (var answer in testHistory.Answers)
            {
                // TODO Make more precise
                if (answer.Answer != null)
                {
                    if (answer.Answer.IsCorrect) score++;
                }
                else
                {
                    AnswerDTO searchedAnswer = answer.Question.Answers.Find((currAnswer) =>
                        currAnswer.Text.Trim().ToLower().Equals(answer.Text.Trim().ToLower()));

                    if (searchedAnswer != null) score++;
                }
            }

            if (score > maxScore) return 100;

            return (score / maxScore) * 100;
        }
    }
}