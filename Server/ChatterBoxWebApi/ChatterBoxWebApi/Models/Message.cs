using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatterBoxWebApi.Models
{
    public class Message
    {
        public int MessageId { get; set; }
        public string Msg { get; set; }
        public string UserSent { get; set; }
        public int ConversationID { get; set; }

        public Conversation Conversation { get; set; } //need to delete this line
    }
}
