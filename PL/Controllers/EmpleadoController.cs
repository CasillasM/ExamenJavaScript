using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PL.Controllers
{
    public class EmpleadoController : Controller
    {
        //
        // GET: /Empleado/
        public ActionResult GetAll()
        {
            return View();
        }
        [HttpGet]
        public JsonResult Get()
        {
            ML.Result result = BL.Empleado.GetAll();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetEstado()
        {
            ML.Result result = BL.Estado.GetAll();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetById(int IdEmpleado)
        {
            ML.Result result = BL.Empleado.GetById(IdEmpleado);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Add(ML.Empleado empleado)
        {

            ML.Result result = BL.Empleado.Add(empleado);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(ML.Empleado empleado)
        {
        
            ML.Result result = BL.Empleado.Update(empleado);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Delete(int IdEmpleado)
        {
            ML.Result result = BL.Empleado.Delete(IdEmpleado);
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult Form()
        {
            return View(new ML.Empleado());
        }
	}
}