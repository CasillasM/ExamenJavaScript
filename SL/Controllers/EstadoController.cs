using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SL.Controllers
{
    public class EstadoController : ApiController
    {

        [HttpGet]
        [Route("api/Estado/GetAll")]
        public IHttpActionResult GetAll()
        {
            ML.Estado estado = new ML.Estado();
     
            ML.Result result = BL.Estado.GetAll();
            if (result.Correct)
            {
                return Content(HttpStatusCode.OK, result);
            }
            else
            {
                return Content(HttpStatusCode.NotFound, result);
            }
        }

    }
}
