(function ($) {
    $(function () {

        GetPersonas();

        $("#fecha-nac").datepicker({
            maxDate: 0,
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true
        });

        $("#fecha-nac").datepicker($.datepicker.regional["es"]);

        $("#enviar-persona").click(function (e) {
            e.preventDefault();


            $('#form-persona').validator().on('submit', function (e) {
                if (e.isDefaultPrevented()) {
                    alert("Noooooooooooo")
                } else {
                    alert("Siiiiiiiiiii")
                }
            });

            SetPersona();
            GetPersonas();
            $('#myModal').modal('hide');
        });

        $("#direcciones").on("click", "#agregar-direccion", function (e) {
            e.preventDefault();
            var cantDir = $(".direccion").size();
            cantDir++;
            AgregaDireccion(cantDir);
        })

        $("#direcciones").on("click", ".borrar-direccion", function (e) {
            e.preventDefault();

            var cantDir = parseInt($(".direccion").size());

            if (cantDir > 1) {
                $(this).parent().parent().remove();
            }
        })

        $("#listado-personas").on("click", ".editar-persona", function (e) {
            e.preventDefault();
            //var idPersona = $(this).data("id");
            //GetPersona(idPersona);
            $('#myModal').modal('show');
        });

        $("#listado-personas").on("click", ".borrar-persona", function (e) {
            e.preventDefault();
            var idPersona = $(this).data("id");
            DeletePersona(idPersona);
        });

        $('#myModal').on('hide.bs.modal', function () {
            LimpiaForm();
        });

        $('#myModal').on('show.bs.modal', function () {
            $('#form-persona').validator();
        });

    });
})(jQuery);

function LimpiaForm() {
    $('#form-persona').validator('destroy');

    $("#enviar-persona").removeData("id");
    $("#nombre").val(undefined);
    $("#apellido").val(undefined);
    $("#nro-doc").val(undefined);
    $("#fecha-nac").val(undefined);

    $.each($(".borrar-direccion"), function (i, v) {
        $(this).click();
    });
}

function AgregaDireccion(i) {
    if ($("#div-direccion-" + i).size() > 0) {
        i++;
        AgregaDireccion(i);
    }
    else {
        var direccion = '<div id="div-direccion-' + i + '" class="form-group">'
        direccion += '<div class="direccion col-sm-offset-3 col-sm-7">'
        direccion += '<input class="calle form-control col-sm-5" type="text" name="name" placeholder="Calle" data-error="Debe ingresar una calle" required />'
        direccion += '<input class="numero form-control col-sm-2" type="text" name="name" placeholder="Número" data-error="Debe ingresar un número" required />'
        direccion += '</div>'
        direccion += '<div class="col-sm-2">'
        direccion += '<button class="borrar-direccion btn btn-default" name="action">'
        direccion += '<span class="glyphicon glyphicon-remove"></span>'
        direccion += '</button>'
        direccion += '</div>'
        direccion += '</div>'

        $("#direcciones").append(direccion);
    }
}

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

function GetPersona(idPersona) {
    var direccion;

    $.ajax({
        method: "POST",
        url: "Personas.aspx/GetPersona",
        data: "{ idPersona:" + idPersona + " }",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (response) {
        if (response.d != null) {
            var persona = JSON.parse(response.d);
            $("#enviar-persona").data("id", persona.idPersona);
            $("#nombre").val(persona.nombre);
            $("#apellido").val(persona.apellido);
            $("#nro-doc").val(persona.numeroDocumento);
            $("#fecha-nac").val(persona.fechaNacimiento);

            $.each(persona.direcciones, function (i, v) {
                direccion = v;
                if (i == 0) {
                    $("#div-direccion.direccion.calle").val(direccion.calle);
                    $("#div-direccion.direccion.numero").val(direccion.numero);
                }
                else {
                    AgregaDireccion(i);
                    $("#div-direccion-" + i + ".direccion.calle").val(direccion.calle);
                    $("#div-direccion-" + i + ".direccion.numero").val(direccion.numero);
                }
            });
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
    persona.direcciones = new Array();

    $(".direccion").map(function () {
        direccion = new Object();
        direccion.idDireccion = 0;
        direccion.calle = $(this).find(".calle").val();
        direccion.numero = $(this).find(".numero").val();
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

function DeletePersona(idPersona) {
    $.ajax({
        method: "POST",
        url: "Personas.aspx/DeletePersona",
        data: "{ idPersona:" + idPersona + " }",
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