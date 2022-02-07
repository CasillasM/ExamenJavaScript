using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class Empleado
    {
        public static ML.Result GetAll()
        {
            ML.Result result = new ML.Result();
            try
            {
                using (DL.MDeLunaLeenkenEntities context = new DL.MDeLunaLeenkenEntities())
                {
                    var query = context.EmpleadoGetAll().ToList();
                    result.Objects = new List<object>();
                    if (query != null)
                    {
                        result.Objects = new List<object>();
                        foreach (var obj in query)
                        {
                            ML.Empleado empleado = new ML.Empleado();
                            empleado.IdEmpleado = obj.IdEmpleado;
                            empleado.NumeroNomina = obj.NumeroNomina;
                            empleado.Nombre = obj.NombreEmpleado;
                            empleado.ApellidoPaterno = obj.ApellidoPaterno;
                            empleado.ApellidoMaterno = obj.ApellidoMaterno;
                            empleado.IdEstado = obj.IdEstado.Value;
                            empleado.Estado = new ML.Estado();
                            empleado.Estado.Nombre = obj.NombreEstado;
                            result.Objects.Add(empleado);
                        }
                        result.Correct = true;
                        
                    }
                    else
                    {
                        result.ErrorMessage = "No se encuentran registros";
                        result.Correct = false;

                    }

                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }

            return result;
 
        }

        public static ML.Result Add(ML.Empleado empleado)
        {
            ML.Result result = new ML.Result();
            try
            {
                using (DL.MDeLunaLeenkenEntities context = new DL.MDeLunaLeenkenEntities())
                {
                    var query = context.EmpleadoAdd(empleado.NumeroNomina, empleado.Nombre, empleado.ApellidoPaterno, empleado.ApellidoMaterno, empleado.Estado.IdEstado);
                    if (query > 0)
                    {
                        result.Correct = true;
                    }
                    else
                    {
                        result.ErrorMessage = "No se encuentran registros";
                        result.Correct = false;

                    }

                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }

            return result;

        }


        public static ML.Result Update(ML.Empleado empleado)
        {
            ML.Result result = new ML.Result();
            try
            {
                using (DL.MDeLunaLeenkenEntities context = new DL.MDeLunaLeenkenEntities())
                {
                    var query = context.EmpleadoUpdate(empleado.IdEmpleado,empleado.NumeroNomina, empleado.Nombre, empleado.ApellidoPaterno, empleado.ApellidoMaterno, empleado.Estado.IdEstado);
                    if (query > 0)
                    {
                        result.Correct = true;
                    }
                    else
                    {
                        result.ErrorMessage = "No se encuentran registros";
                        result.Correct = false;

                    }

                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }

            return result;

        }

        public static ML.Result Delete(int IdEmpleado)
        {
            ML.Result result = new ML.Result();
            try
            {
                using (DL.MDeLunaLeenkenEntities context = new DL.MDeLunaLeenkenEntities())
                {
                    var query = context.EmpleadoDelete(IdEmpleado);
                    if (query > 0)
                    {
                        result.Correct = true;
                    }
                    else
                    {
                        result.ErrorMessage = "No se encuentran registros";
                        result.Correct = false;

                    }

                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }

            return result;

        }

        public static ML.Result GetById(int IdEstado)
        {
            ML.Result result = new ML.Result();
            try
            {
                using (DL.MDeLunaLeenkenEntities context = new DL.MDeLunaLeenkenEntities())
                {
                    var query = context.EmpleadoGetById(IdEstado).FirstOrDefault();
                    result.Object = new List<object>();
                    if (query != null)
                    {
                            result.Objects = new List<object>();
                    
                            ML.Empleado empleado = new ML.Empleado();
                            empleado.IdEmpleado = query.IdEmpleado;
                            empleado.NumeroNomina = query.NumeroNomina;
                            empleado.Nombre = query.NombreEmpleado;
                            empleado.ApellidoPaterno = query.ApellidoPaterno;
                            empleado.ApellidoMaterno = query.ApellidoMaterno;
                            empleado.IdEstado = query.IdEstado.Value;
                            empleado.Estado = new ML.Estado();
                            empleado.Estado.Nombre = query.NombreEstado;
                            result.Object = empleado;
                        
                            result.Correct = true;

                    }
                    else
                    {
                        result.ErrorMessage = "No se encuentran registros";
                        result.Correct = false;

                    }

                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }

            return result;

        }


    }
}
