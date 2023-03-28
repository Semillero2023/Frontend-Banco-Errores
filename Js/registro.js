/** Esta clase construye los datos del 
 * registro de errores
 * @param {string} nombre
 * @param {string} tipo
 * @param {number} numero
 * @param {string} id
 * @param {string} complejidad
 * @param {string} usuario
 * @param {string} fecha
 * @param {string} esperado
 * @param {string} obtenido
 * @param {string} descripcion
 * @param {string} solucion
 * @param {string} fuentes
 * @param {number} utilidad
 * @returns {Registro}
 */


export class Registro {
    constructor(nombre, tipo, numero, id, complejidad, usuario, fecha, esperado, obtenido, descripcion, solucion, fuentes) {
        this.nombreError = nombre.toString()
        this.tipoError = tipo.toString()
        this.codigoRetorno = numero.toString()
        this.idMensajeError = id.toString()
        this.complejidad = complejidad.toString()
        this.usuarioReporte = usuario.toString()
        this.diaReporte = fecha.toString()
        this.resultadoEsperado = esperado.toString()
        this.resultadoObtenido = obtenido.toString()
        this.descripcionError = descripcion.toString()
        this.solucionImplementada = solucion.toString()
        this.fuentesConsulta = fuentes.toString()
        this.utilidad = 0
    }
}