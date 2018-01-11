﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChatterBoxWebApi.Data;
using ChatterBoxWebApi.Models;

namespace ChatterBoxWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Conversations")]
    public class ConversationsController : Controller
    {
        private readonly ChatterContext _context;

        public ConversationsController(ChatterContext context)
        {
            _context = context;
        }

        // GET: api/Conversations
        [HttpGet]
        public IEnumerable<Conversation> GetConversations()
        {
            return _context.Conversations;
        }

        // GET: api/Conversations/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetConversation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var conversation = await _context.Conversations.SingleOrDefaultAsync(m => m.ConversationID == id);

            if (conversation == null)
            {
                return NotFound();
            }

            return Ok(conversation);
        }

        // PUT: api/Conversations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConversation([FromRoute] int id, [FromBody] Conversation conversation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != conversation.ConversationID)
            {
                return BadRequest();
            }

            _context.Entry(conversation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConversationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Conversations
        [HttpPost]
        public async Task<IActionResult> PostConversation([FromBody] Conversation conversation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Conversations.Add(conversation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConversation", new { id = conversation.ConversationID }, conversation);
        }

        // DELETE: api/Conversations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConversation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var conversation = await _context.Conversations.SingleOrDefaultAsync(m => m.ConversationID == id);
            if (conversation == null)
            {
                return NotFound();
            }

            _context.Conversations.Remove(conversation);
            await _context.SaveChangesAsync();

            return Ok(conversation);
        }

        private bool ConversationExists(int id)
        {
            return _context.Conversations.Any(e => e.ConversationID == id);
        }
    }
}