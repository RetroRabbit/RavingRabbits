﻿// <auto-generated />
using ChatterBoxWebApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace ChatterBoxWebApi.Migrations
{
    [DbContext(typeof(ChatterContext))]
    [Migration("20180111093926_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ChatterBoxWebApi.Models.Conversation", b =>
                {
                    b.Property<int>("ConversationID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("User_1");

                    b.Property<string>("User_2");

                    b.HasKey("ConversationID");

                    b.ToTable("Conversation");
                });

            modelBuilder.Entity("ChatterBoxWebApi.Models.Message", b =>
                {
                    b.Property<int>("MessageId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ConversationID");

                    b.Property<string>("Msg");

                    b.Property<string>("UserSent");

                    b.HasKey("MessageId");

                    b.HasIndex("ConversationID");

                    b.ToTable("Message");
                });

            modelBuilder.Entity("ChatterBoxWebApi.Models.Message", b =>
                {
                    b.HasOne("ChatterBoxWebApi.Models.Conversation", "Conversation")
                        .WithMany("Messages")
                        .HasForeignKey("ConversationID");
                });
#pragma warning restore 612, 618
        }
    }
}
