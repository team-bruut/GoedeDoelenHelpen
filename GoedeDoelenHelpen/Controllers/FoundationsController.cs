using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GoedeDoelenHelpen.Data;
using System.Xml.Serialization;
using System.IO;
using System.Collections;
using GoedeDoelenHelpen.Models;

namespace GoedeDoelenHelpen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoundationsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FoundationsController(ApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// return top 50 result orderd by name
        /// </summary>
        /// <param name="model">search model</param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public async Task<IEnumerable<Foundation>> Search([FromBody]SimpleSearch model)
        {
            if (!await _context.Foundations.AnyAsync())
            {
                var serializer = new XmlSerializer(typeof(List<beschikking>), new XmlRootAttribute("publicatieAnbiInstellingen"));
                IEnumerable<Foundation> EFFoundations = new List<Foundation>();
                using (Stream stream = typeof(Program).Assembly.
                   GetManifestResourceStream("GoedeDoelenHelpen.Files.anbi.xml"))
                {
                    var foundations = (List<beschikking>)serializer.Deserialize(new StreamReader(stream));
                    EFFoundations = foundations.ToList().Select((f, index) => new Foundation { FiscusNumber = f.fiscaalNummer, Name = f.aliasNaam ?? f.naam });

                    await _context.Foundations.AddRangeAsync(EFFoundations);
                    await _context.SaveChangesAsync();
                }
            }
            return _context.Foundations.Where(f => f.Name.Contains(model.Q)).OrderBy(f => f.Name).Take(50);
        }

        private bool FoundationExists(int id)
        {
            return _context.Foundations.Any(e => e.Id == id);
        }
    }
}