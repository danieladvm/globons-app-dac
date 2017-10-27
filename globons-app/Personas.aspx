<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Personas.aspx.cs" Inherits="globons_app.Personas" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Agregar persona
    </button>

    <div id="listado-personas">
    </div>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Agregar persona</h4>
                </div>
                <div id="form-persona" class="form-horizontal">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="nombre" class="col-sm-3 control-label">Nombre</label>
                            <div class="col-sm-9">
                                <input id="nombre" class="form-control" type="text" placeholder="Nombre" data-error="Debe ingresar un nombre" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="apellido" class="col-sm-3 control-label">Apellido</label>
                            <div class="col-sm-9">
                                <input id="apellido" class="form-control" type="text" name="name" placeholder="Apellido" data-error="Debe ingresar un apellido" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="nro-doc" class="col-sm-3 control-label">Número documento</label>
                            <div class="col-sm-9">
                                <input id="nro-doc" class="form-control" type="number" name="name" placeholder="Número documento" data-error="Debe ingresar el número de documento" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="fecha-nac" class="col-sm-3 control-label">Fecha nacimiento</label>
                            <div class="col-sm-9">
                                <input id="fecha-nac" class="form-control" type="text" name="name" placeholder="Fecha nacimiento" data-error="Debe ingresar una fecha de nacimiento" required />
                            </div>
                        </div>

                        <div id="direcciones">
                            <div class="form-group">
                                <label for="agregar-direccion" class="col-sm-3 control-label">Direcciones</label>
                                <div class="col-sm-9">
                                    <button id="agregar-direccion" class="btn btn-default" name="action">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                </div>
                            </div>
                            <div id="div-direccion" class="form-group">
                                <div class="direccion col-sm-offset-3 col-sm-7">
                                    <input class="calle form-control col-sm-5" type="text" name="name" placeholder="Calle" data-error="Debe ingresar una calle" required />
                                    <input class="numero form-control col-sm-2" type="number" name="name" placeholder="Número" data-error="Debe ingresar un número" required />
                                </div>
                                <div class="col-sm-2">
                                    <button class="borrar-direccion btn btn-default" name="action">
                                        <span class="glyphicon glyphicon-remove"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        <button type="submit" id="enviar-persona" class="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</asp:Content>
