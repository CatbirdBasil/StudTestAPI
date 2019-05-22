using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using DAL.Entities;
using Microsoft.AspNet.Identity.EntityFramework;

namespace DAL.EF
{
    public class ApplicationDbContext : IdentityDbContext
    {
        static ApplicationDbContext()
        {
            Database.SetInitializer<ApplicationDbContext>(new IdentityContextInitializer());
        }

        public ApplicationDbContext(string connectionStr) : base(connectionStr)
        {
        }

        public DbSet<Test> Tests { get; set; }
        public DbSet<TestGroup> TestGroups { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        public DbSet<TestHistory> TestHistories { get; set; }
        public DbSet<AnswerHistory> AnswerHistories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Test>().ToTable("Test");
            modelBuilder.Entity<TestGroup>().ToTable("TestGroup");
            modelBuilder.Entity<Question>().ToTable("Question");
            modelBuilder.Entity<Answer>().ToTable("Answer");
            modelBuilder.Entity<TestHistory>().ToTable("TestHistory");
            modelBuilder.Entity<AnswerHistory>().ToTable("AnswerHistory");

            modelBuilder.Entity<Test>().HasMany(t => t.Questions)
                .WithRequired(q => q.Test).WillCascadeOnDelete(true);

            modelBuilder.Entity<Question>().HasMany(q => q.Answers)
                .WithRequired(a => a.Question).WillCascadeOnDelete(true);

            modelBuilder.Entity<AnswerHistory>().HasRequired(ah => ah.Question)
                .WithMany(q => q.AnswerHistories).WillCascadeOnDelete(false);

            modelBuilder.Entity<Answer>().HasMany(a => a.AnswerHistories)
                .WithRequired(ah => ah.Answer).WillCascadeOnDelete(false);
        }

        public override int SaveChanges()
        {
            try
            {
                return base.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {
                var errorMessages = ex.EntityValidationErrors
                    .SelectMany(x => x.ValidationErrors)
                    .Select(x => x.ErrorMessage);

                var fullErrorMessage = string.Join("; ", errorMessages);

                var exceptionMessage = string.Concat(ex.Message, " The validation errors are: ", fullErrorMessage);

                throw new DbEntityValidationException(exceptionMessage, ex.EntityValidationErrors);
            }
        }
    }
}