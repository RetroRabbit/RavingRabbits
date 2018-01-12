using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatterBoxWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ChatterBoxWebApi.Data
{
    public class ChatterContext : DbContext
    {
        public ChatterContext(DbContextOptions<ChatterContext> options) : base(options)
        {

        }

        public DbSet<Message> Messages { get; set; }
        public DbSet<Conversation> Conversations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Message>().ToTable("Message");
            modelBuilder.Entity<Conversation>().ToTable("Conversation");
        }
    }
}
