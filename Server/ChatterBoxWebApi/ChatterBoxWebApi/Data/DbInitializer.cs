using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatterBoxWebApi.Models;

namespace ChatterBoxWebApi.Data
{
    public class DbInitializer
    {
        public static void Initialize(ChatterContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Conversations.Any())
            {
                return;   // DB has been seeded
            }

            var conversations = new Conversation[]
            {
            new Conversation{User_1="Arsalan",User_2="Johan"},
            new Conversation{User_1="Johan",User_2="Arsalan"},
            new Conversation{User_1="Lunga",User_2="Nonto"},
            new Conversation{User_1="Nonto",User_2="Lubga"},
            new Conversation{User_1="Law",User_2="HD"},
            new Conversation{User_1="HD",User_2="Law"}
            };
            foreach (Conversation c in conversations)
            {
                context.Conversations.Add(c);
            }
            context.SaveChanges();

            var messages = new Message[]
            {
            new Message{ConversationID=1,Msg="Hellow",UserSent="Arsalan"},
            new Message{ConversationID=1,Msg="Hellow",UserSent="Johan"},
            new Message{ConversationID=2,Msg="Hellow",UserSent="Johan"},
            new Message{ConversationID=2,Msg="Hellow",UserSent="Arsalan"},
            new Message{ConversationID=3,Msg="Hellow",UserSent="Lunga"},
            new Message{ConversationID=3,Msg="Hellow",UserSent="Nonto"},
            new Message{ConversationID=4,Msg="Hellow",UserSent="Nonto"},
            new Message{ConversationID=4,Msg="Hellow",UserSent="Lunga"},
            new Message{ConversationID=5,Msg="Hellow",UserSent="Law"},
            new Message{ConversationID=5,Msg="Hellow",UserSent="HD"},
            new Message{ConversationID=6,Msg="Hellow",UserSent="HD"},
            new Message{ConversationID=6,Msg="Hellow",UserSent="Law"}
            };
            foreach (Message e in messages)
            {
                context.Messages.Add(e);
            }
            context.SaveChanges();
        }
    }
}
