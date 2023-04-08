export class Registro {
    constructor(nombre, tipo, numero, id, complejidad, usuario, fecha, esperado, obtenido, descripcion, solucion, fuentes) {
        this.Nombre_Error = nombre.toString()
        this.Tipo_Error = tipo.toString()
        this.Codigo_Retorno = numero.toString()
        this.ID_Mensaje_Error = id.toString()
        this.Complejidad = complejidad.toString()
        this.Reportado_Por = usuario.toString()
        this.Fecha = fecha.toString()
        this.Resultado_Esperado = esperado.toString()
        this.Resultado_Obtenido = obtenido.toString()
        this.Descripcion_Error = descripcion.toString()
        this.Solucion = solucion.toString()
        this.Fuentes = fuentes.toString()
        this.Utilidad = 0
    }
}