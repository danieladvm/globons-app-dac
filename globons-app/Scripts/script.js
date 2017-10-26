(function ($) {
    $(function () {

        $("#direcciones").on("click", "#agregar-direccion", function (e) {
            e.preventDefault();
            var cantDir = $(".direccion").size();
            cantDir++;
            var direccion = '<div id="div-direccion-' + cantDir + '" class="form-group">'
            direccion += '<div class="col-sm-offset-2 col-sm-5">'
            direccion += '<input class="direccion form-control" type="text" name="name" placeholder="Dirección" />'
            direccion += '</div>'
            direccion += '<div class="col-sm-5">'
            direccion += '<button class="borrar btn btn-default" name="action">'
            direccion += '<span class="glyphicon glyphicon-remove"></span>'
            direccion += '</button>'
            direccion += '</div>'
            direccion += '</div>'
            $("#direcciones").append(direccion);
        })

        $("#direcciones").on("click", ".borrar", function (e) {
            e.preventDefault();

            var cantDir = parseInt($(".direccion").size());

            if (cantDir > 1) {
                $(this).parent().parent().remove();
            }
        })

    });
})(jQuery);