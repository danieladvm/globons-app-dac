(function ($) {
    $(function () {

        GetPersonas();
        $("#fecha-nac").datepicker({
            maxDate: 0,
            dateFormat: "dd/mm/yy"
        });
        
        $("#agregar-persona").click(function (e) {
            Valida();
            SetPersona();
            GetPersonas();
            $('#myModal').modal('hide')
        });

        $("#direcciones").on("click", "#agregar-direccion", function (e) {
            e.preventDefault();
            var cantDir = $(".direccion").size();
            cantDir++;
            var direccion = '<div id="div-direccion-' + cantDir + '" class="form-group">'
            direccion += '<div class="col-sm-offset-3 col-sm-7">'
            direccion += '<input class="direccion form-control" type="text" name="name" placeholder="Dirección" />'
            direccion += '</div>'
            direccion += '<div class="col-sm-2">'
            direccion += '<button class="borrar-direccion btn btn-default" name="action">'
            direccion += '<span class="glyphicon glyphicon-remove"></span>'
            direccion += '</button>'
            direccion += '</div>'
            direccion += '</div>'
            $("#direcciones").append(direccion);
        })

        $("#direcciones").on("click", ".borrar-direccion", function (e) {
            e.preventDefault();

            var cantDir = parseInt($(".direccion").size());

            if (cantDir > 1) {
                $(this).parent().parent().remove();
            }
        })

        $("#listado-personas").on("click", ".borrar-persona", function (e) {
            e.preventDefault();
            var id = $(this).data("id");
        });

    });
})(jQuery);

function GetPersonas() {
    $.ajax({
        method: "POST",
        url: "Personas.aspx/GetPersonas",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (response) {
        if (response.d != null) {
            $("#listado-personas").html(response.d);
        }
    }).fail(function (xhr, status, error) {
        alert("Hubo un error");
    });
}

function SetPersona() {
    var persona = new Object();
    var direccion;
    persona.idPersona = 0;
    persona.nombre = $("#nombre").val();
    persona.apellido = $("#apellido").val();
    persona.numeroDocumento = $("#nro-doc").val();
    persona.fechaNacimiento = $("#fecha-nac").val();
    
    $(".direccion").map(function () {
        direccion = new Object();
        direccion.idDireccion = 0;
        direccion.calle;
        direccion.numero;
        persona.direcciones.push(direccion);
    });

    $.ajax({
        method: "POST",
        url: "Personas.aspx/SetPersona",
        data: "{ persona:" + JSON.stringify(persona) + " }",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (response) {
        if (response.d != null) {
            GetPersonas();
        }
    }).fail(function (xhr, status, error) {
        alert("Hubo un error");
    });
}

function DeletePersona() {
    $.ajax({
        method: "POST",
        url: "Personas.aspx/DeletePersona",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (response) {
        if (response.d != null) {
            $("#listado-personas").html(response.d);
        }
    }).fail(function (xhr, status, error) {
        alert("Hubo un error");
    });
}

function Valida() {

}