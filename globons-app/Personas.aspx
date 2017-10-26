<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Personas.aspx.cs" Inherits="globons_app.Personas" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table id="listado-personas" class="table table-striped">
        <tr>
            <td><strong>Curso</strong></td>
            <td><strong>Horas</strong></td>
            <td><strong>Horario</strong></td>
        </tr>
        <tr>
            <td>Dreamweaver</td>
            <td>60</td>
            <td>16:00 - 20:00</td>
        </tr>
        <tr>
            <td>Dreamweaver</td>
            <td>60</td>
            <td>16:00 - 20:00</td>
        </tr>
        <tr>
            <td>Dreamweaver</td>
            <td>60</td>
            <td>16:00 - 20:00</td>
        </tr>
        <tr>
            <td>Dreamweaver</td>
            <td>60</td>
            <td>16:00 - 20:00</td>
        </tr>
        <tr>
            <td>Dreamweaver</td>
            <td>60</td>
            <td>16:00 - 20:00</td>
        </tr>
    </table>

    <div class="form-horizontal">
        <div class="form-group">
            <label for="nombre" class="col-sm-2 control-label">Nombre</label>
            <div class="col-sm-10">
                <input id="nombre" class="form-control" type="text" placeholder="Nombre" />
            </div>
        </div>
        <div class="form-group">
            <label for="apellido" class="col-sm-2 control-label">Apellido</label>
            <div class="col-sm-10">
                <input id="apellido" class="form-control" type="text" name="name" placeholder="Apellido" />
            </div>
        </div>
        <div class="form-group">
            <label for="nro-doc" class="col-sm-2 control-label">Número documento</label>
            <div class="col-sm-10">
                <input id="nro-doc" class="form-control" type="text" name="name" placeholder="Número documento" />
            </div>
        </div>
        <div class="form-group">
            <label for="fecha-nac" class="col-sm-2 control-label">Fecha nacimiento</label>
            <div class="col-sm-10">
                <input id="fecha-nac" class="form-control" type="text" name="name" placeholder="Fecha nacimiento" />
            </div>
        </div>

        <div id="direcciones">
            <div class="form-group">
                <label for="add" class="col-sm-2 control-label">Direcciones</label>
                <div class="col-sm-10">
                    <button id="agregar-direccion" class="btn btn-default" name="action">
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>
                </div>
            </div>
            <div id="div-direccion" class="form-group">
                <div class="col-sm-offset-2 col-sm-5">
                    <input class="direccion form-control" type="text" name="name" placeholder="Dirección" />
                </div>
                <div class="col-sm-5">
                    <button class="borrar btn btn-default" name="action">
                        <span class="glyphicon glyphicon-remove"></span>
                    </button>
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-5">
                <button type="submit" class="btn btn-default">Agregar</button>
            </div>
        </div>
    </div>
</asp:Content>
