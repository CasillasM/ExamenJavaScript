using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class Estado
    {
        public static ML.Result GetAll()
        {
            ML.Result result = new ML.Result();
            try
            {
                using (DL.MDeLunaLeenkenEntities context = new DL.MDeLunaLeenkenEntities())
                {
                    var query = context.EstadoGetAll().ToList();
                    result.Objects = new List<object>();
                    if (query != null)
                    {
                        result.Objects = new List<object>();
                        foreach (var obj in query)
                        {
                            ML.Estado estado = new ML.Estado();
                            estado.IdEstado = obj.IdEstado;
                            estado.Nombre = obj.Nombre;
                            result.Objects.Add(estado);
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
    }
}