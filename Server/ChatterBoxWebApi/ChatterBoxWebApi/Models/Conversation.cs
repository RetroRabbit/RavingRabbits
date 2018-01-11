using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatterBoxWebApi.Models
{
    public class Conversation
    {
        public int ConversationID { get; set; }
        public string User_1 { get; set; }
        public string User_2 { get; set; }

        public ICollection<Message> Messages { get; set; }
    }
}
