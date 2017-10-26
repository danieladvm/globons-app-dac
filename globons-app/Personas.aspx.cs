using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;

namespace globons_app
{
    public partial class Personas : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod(EnableSession = true)]
        public static string GetPersonas()
        {
            string tabla = "<table id='tabla-listado-personas' class='table table-striped'>";

            tabla += "<tr>";
            tabla += "<td><strong>Nombre</strong></td>";
            tabla += "<td><strong>Apellido</strong></td>";
            tabla += "<td><strong>Nro documento</strong></td>";
            tabla += "<td><strong>Fecha nacimiento</strong></td>";
            tabla += "<td></td>";
            tabla += "</tr>";

            for (int i = 0; i < 10; i++)
            {
                tabla += "<tr>";
                tabla += "<td>Nombre " + i + "</td>";
                tabla += "<td>Apellido " + i + "</td>";
                tabla += "<td>Nro documento " + i + "</td>";
                tabla += "<td>Fecha nacimiento " + i + "</td>";
                tabla += "<td>";
                tabla += "<button class='borrar-persona btn btn-default' name='action' data-id='" + i + "'>";
                tabla += "<span class='glyphicon glyphicon-remove'></span>";
                tabla += "</button>";
                tabla += "</td>";
                tabla += "</tr>";
            }

            tabla += "</table>";

            return tabla;
        }

        [WebMethod(EnableSession = true)]
        public static string SetPersona(Modelo.Persona persona)
        {

            return "RESULTADO AL INSERTAR";
        }

        [WebMethod(EnableSession = true)]
        public static string DeletePersona(string idPersona)
        {

            return "RESULTADO AL ELIMINAR";
        }
    }
}