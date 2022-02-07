$(document).ready(function () {
    GetAll();
    EstadoGetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:10261/api/Empleado/GetAll',
        success: function (result) { //200 OK
            $('#Empleados tbody').empty();
            $.each(result.Objects, function (i, empleado) {
                var filas =
                    '<tr>'
                        + '<td class="text-center"> '
                            + '<a href="#" onclick="GetById(' + empleado.IdEmpleado + ')">'
                                + '<img  style="height: 25px; width: 25px;" src="../Img/Editar.jpg" />'
                            + '</a> '
                        + '</td>'
                        + "<td  id='id' class='text-center'>" + empleado.IdEmpleado + "</td>"
                        + "<td class='text-center'>" + empleado.NumeroNomina + "</td>"
                        + "<td class='text-center'>" + empleado.Nombre + "</ td>"
                        + "<td class='text-center'>" + empleado.ApellidoPaterno + "</td>"
                        + "<td class='text-center'>" + empleado.ApellidoMaterno + "</td>"
                        + "<td class='text-center'>" + empleado.IdEstado + "</td>"
                        + "<td class='text-center'>" + empleado.Estado.Nombre + "</td>"

                        //+ '<td class="text-center">  <a href="#" onclick="return Eliminar(' + subCategoria.IdSubCategoria + ')">' + '<img  style="height: 25px; width: 25px;" src="../img/delete.png" />' + '</a>    </td>'
                        + '<td class="text-center"> <button class="btn btn-danger" onclick="Eliminar(' + empleado.IdEmpleado + ')"><span class="glyphicon glyphicon-trash" style="color:#FFFFFF"></span></button></td>'

                    + "</tr>";
                $("#Empleados tbody").append(filas);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};

function EstadoGetAll() {
    $("#ddlEstados").empty();
    $.ajax({
        type: 'GET',
        url: 'http://localhost:10261/api/Estado/GetAll',
        success: function (result) {
            $("#ddlEstados").append('<option value="' + 0 + '">' + 'Seleccione una opción' + '</option>');
            $.each(result.Objects, function (i, estado) {
                $("#ddlEstados").append('<option value="'
                                           + estado.IdEstado + '">'
                                           + estado.Nombre + '</option>');
            });
        }
    });
}

//function EstadosGetAll() {
//    $("#ddlEstado").empty();
//    $.ajax({
//        type: 'GET',
//        url: 'http://localhost:10261/api/Estado/GetAll',
//        success: function (result) {
//            $("#ddlEstado").append('<option value="' + 0 + '">' + 'Seleccione una opción' + '</option>');
//            $.each(result.Objects, function (i, estado) {
//                $("#ddlEstado").append('<option value="'
//                                           + estado.IdEstado + '">'
//                                           + estado.Nombre + '</option>');
//            });
//        }
//    });
//}



function Add(empleado) {

    //var AgregarEmpleado =
    //    {
    //    IdEmpleado: 0,
    //    NumeroNomina: $('#txtNumeroNomina').val(),
    //    Nombre: $('#txtNombre').val(),
    //    ApellidoPaterno: $('#txtApellidoPaterno').val(),
    //    ApellidoMaterno: $('#txtApellidoMaterno').val(),
    //    Estado:
    //    {
    //        IdEstado: $('#ddlEstados').val()
    //    }
       
    //}
    $.ajax({
        type: 'POST',
        url: 'http://localhost:10261/api/Empleado/Add',
        dataType: 'json',
        data: JSON.stringify(empleado),
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
            //$('#myModal').modal('show');           
            //alert('Se Agrego con exito el empleado');
            //GetAll();

            //$('#myModal').modal('hide');
            ////$('#ModalForm').modal('hide');
            //GetAll();
            //Console(respond);
            $('#myModal').modal();
            $('#ModalForm').modal('hide');
            GetAll();
            Console(respond);
           
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};


function GetById(IdEmpleado) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:10261/api/Empleado/GetById/' + IdEmpleado,
        success: function (result) {
            $('#txtIdEmpleado').val(result.Object.IdEmpleado);
            $('#txtNumeroNomina').val(result.Object.NumeroNomina);
            $('#txtNombre').val(result.Object.Nombre);
            $('#txtApellidoPaterno').val(result.Object.ApellidoPaterno);
            $('#txtApellidoMaterno').val(result.Object.ApellidoMaterno);
            $('#ddlEstados').val(result.Object.IdEstado);
            $('#txtNombreEstado ').val(result.Object.Estado.Nombre);
            $('#ModalForm').modal('show');
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }


    });

}


function Update(empleado) {

    //var AgregarEmpleado = {
    //    IdEmpleado: $('#txtIdEmpleado').val(),
    //    NumeroNomina: $('#txtNumeroNomina').val(),
    //    Nombre: $('#txtNombre').val(),
    //    ApellidoPaterno: $('#txtApellidoPaterno').val(),
    //    ApellidoMaterno: $('#txtApellidoMaterno').val(),
    //    Estado:
    //    {
    //        IdEstado: $('#ddlEstados').val()
    //    }

    //}
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:10261/api/Empleado/Update',
        datatype: 'json',
        data: JSON.stringify(empleado),
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
            $('#myModal').modal();
            $('#ModalForm').modal('hide');
            GetAll();
            Console(respond);
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });

};


function Eliminar(IdEmpleado) {

    if (confirm("¿Estas seguro de eliminar el Empleado seleccionado?")) {
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:10261/api/Empleado/Delete/' + IdEmpleado,
            success: function (result) {
                $('#myModal').modal();
                GetAll();
            },
            error: function (result) {
                alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
            }
        });

    };
};


function Guardar() {

    var empleado = {
        IdEmpleado: $('#txtIdEmpleado').val(),
        NumeroNomina: $('#txtNumeroNomina').val(),
        Nombre: $('#txtNombre').val(),
        ApellidoPaterno: $('#txtApellidoPaterno').val(),
        ApellidoMaterno: $('#txtApellidoMaterno').val(),
        Estado:
        {
            IdEstado: $('#ddlEstados').val()
        }

    }
    if ($('#txtIdEmpleado').val() == 0)
    {
        Add(empleado);
    }
    else
    {
        Update(empleado);
    }
}



function ShowModal() { 
    //$('#ModalForm').modal('show');
    //EstadosGetAll();
    $('#txtIdEmpleado').val("");
    $('#txtNumeroNomina').val("");
    $('#txtNombre').val("");
    $('#txtApellidoPaterno').val("");
    $('#txtApellidoMaterno').val("");
    $('#ddlEstados').val(0);
    $('#ModalForm').modal('show');

    $('#ldlTitulo').modal('Agregar Empleado')
}

//function InicializarController() {

//    //var empleado = {
//    //    IdEmpleado: $('#txtIdEmpleado').val(""),
//    //    NumeroNomina: $('#txtNumeroNomina').val(""),
//    //    Nombre: $('#txtNombre').val(""),
//    //    ApellidoPaterno: $('#txtApellidoPaterno').val(""),
//    //    ApellidoMaterno: $('#txtApellidoMaterno').val(""),
//    //    Estado:
//    //    {
//    //        IdEstado: $('#ddlEstados').val("")
//    //    }
//    //}
    
//    $('#txtIdEmpleado').val("");
//    $('#txtNumeroNomina').val("");
//    $('#txtNombre').val("");
//    $('#txtApellidoPaterno').val("");
//    $('#txtApellidoMaterno').val("");
//    $('#ddlEstados').val(0);
//    $('#ModalForm').modal('show');

//    GetAll();
//    EstadoGetAll();
//}



//function Add() {

//    const invoice =
//    {
//        version: '3.3',
//        total: 1.16,
//        id:'bdb3cb94-1919-4a99-b8ef-bd0d8873a409'
//    }
//    $.ajax({
//        type: 'POST',
//        dataType: 'json',
//        data: JSON.stringify(invoice),
//        contentType: 'application/json; charset=utf-8',
//        success: function (result) {
//            $('#Modal').modal();
//            $('#ModalForm').modal('hide');
//            GetAll();
//            Console(respond);

//        },
//        error: function (result) {
//            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
//        }
//    });
//};