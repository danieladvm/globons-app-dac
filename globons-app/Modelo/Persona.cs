using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace globons_app.Modelo
{
    public class Persona
    {
        public int idPersona;
        public string nombre;
        public string apellido;
        public long numeroDocumento;
        public DateTime fechaNacimiento;
        public List<Direccion> direcciones;
    }
}