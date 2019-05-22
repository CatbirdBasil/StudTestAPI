using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Diagnostics;
using DAL.Entities;

namespace DAL.EF
{
    public class IdentityContextInitializer : DropCreateDatabaseAlways<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            User ivan = new User {Email = "ivan@gmail.com", UserName = "shavr"};

            ivan.PasswordHash = "1";

            //
            TestGroup programmingGroup = new TestGroup {Name = "Programming"};

            Test CSharpTest = new Test
            {
                Title = "CSharpTest", UserId = ivan.Id, User = ivan, Group = programmingGroup,
                CreationDate = DateTime.Now,
                Text = "This test is supposed to show you your approximate level of C# knowledge"
            };

            Question bestLangQuestion = new Question
            {
                Test = CSharpTest, TestId = CSharpTest.Id, Position = 1, Type = QuestionType.ChooseOne,
                Text = "What is the best programming language?", TimeLimit = 120
            };

            Answer javaBlAnswer = new Answer
                {Question = bestLangQuestion, QuestionId = bestLangQuestion.Id, Text = "Java", IsCorrect = false};
            Answer cSharpBlAnswer = new Answer
                {Question = bestLangQuestion, QuestionId = bestLangQuestion.Id, Text = "C#", IsCorrect = true};
            Answer lispBlAnswer = new Answer
                {Question = bestLangQuestion, QuestionId = bestLangQuestion.Id, Text = "Lisp", IsCorrect = false};
            Answer pythonBlAnswer = new Answer
                {Question = bestLangQuestion, QuestionId = bestLangQuestion.Id, Text = "Python", IsCorrect = false};

            Question correctCodeQuestion = new Question
            {
                Test = CSharpTest, Position = 2, Type = QuestionType.ChooseMultiple,
                Text = "Check the correct C# code", TimeLimit = 180
            };

            Answer varCcAnswer = new Answer
            {
                Question = correctCodeQuestion, QuestionId = correctCodeQuestion.Id, Text = "var var1 = 1",
                IsCorrect = true
            };
            Answer tsCcAnswer = new Answer
            {
                Question = correctCodeQuestion, QuestionId = correctCodeQuestion.Id,
                Text = "var1: string = \"variable\"", IsCorrect = false
            };
            Answer andCcAnswer = new Answer
            {
                Question = correctCodeQuestion, QuestionId = correctCodeQuestion.Id,
                Text = "bool isTrue = ((1 == 1) and (2 == 2))", IsCorrect = false
            };
            Answer plusCcAnswer = new Answer
            {
                Question = correctCodeQuestion, QuestionId = correctCodeQuestion.Id, Text = "var var1 = ++1",
                IsCorrect = true
            };

            context.Users.Add(ivan);
            context.Tests.Add(CSharpTest);
            context.Questions.AddRange(new List<Question> {bestLangQuestion, correctCodeQuestion});
            context.Answers.AddRange(new List<Answer>
            {
                javaBlAnswer, cSharpBlAnswer, lispBlAnswer, pythonBlAnswer, varCcAnswer, tsCcAnswer, andCcAnswer,
                plusCcAnswer
            });

            try
            {
                context.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                string er = "";

                foreach (var eve in e.EntityValidationErrors)
                {
                    er += "Entity of type " + eve.Entry.Entity.GetType().Name + " in state " + eve.Entry.State +
                          " has the following validation errors:";
                    foreach (var ve in eve.ValidationErrors)
                    {
                        er += "\n + Property - " + ve.PropertyName + " Error - " + ve.ErrorMessage;
                    }
                }

                Debug.Write(er);
                throw new DbEntityValidationException(er);
            }


            base.Seed(context);
        }
    }
}