
import { Registro } from './registro.js';

const registro = new Registro("nombre", "tipo", "numero", "id", "complejidad", "usuario", "fecha", "esperado", "obtenido", "descripcion", "solucion", "fuentes")

//Arreglo general de elementos
let ListadoSoluciones = [];
//Funcion agregar registros, sera llamada desde el script principal
export function AgregarRegistro(e_nombre, e_numero, e_ID, e_complejidad,
    e_usuario, e_fecha, e_esperado, e_obtenido, e_descripcion,
    e_solucion, e_fuentes) {
    let ErrorSeparado = e_numero.toString().split(",");
    let TipoError = ErrorSeparado[0];
    let CodigoError = ErrorSeparado[1];

    //Se crea un objeto json para guardar el registro nuevo       
    // "Nombre del error"  
    registro.nombreError = e_nombre
    // "Tipo de error"
    registro.tipoError = TipoError
    // "Codigo de retorno" 
    registro.codigoRetorno = CodigoError
    // "ID del mensaje de error" 
    registro.idMensajeError = e_ID
    // "Complejidad"
    registro.complejidad = e_complejidad
    // "Reportado por"
    registro.usuarioReporte = e_usuario
    // "Dia del reporte"
    registro.diaReporte = e_fecha
    // "Resultado esperado" : 
    registro.resultadoEsperado = e_esperado
    // "Resultado obtenido" 
    registro.resultadoObtenido = e_obtenido
    // "Descripcion del error" 
    registro.descripcionError = e_descripcion
    // "Solucion implementada" 
    registro.solucionImplementada = e_solucion
    // "Fuentes de consulta" 
    registro.fuentesConsulta = e_fuentes
    // "utilidad" : 0
    registro.utilidad = 0

    //Se convierte el objeto a formato JSON
    let ToJson = toJson();

    //El registro se agrega al arreglo de soluciones
    ListadoSoluciones.push(ToJson);

    //Imprimir el objeto agregado
    console.log(toJson);
}
//Retornar el listado de soluciones
export function RetornarSoluciones() {
    return ListadoSoluciones;
}

function toJson() {

    const ToJson = {
        nombreError: registro.nombreError,
        tipoError: registro.tipoError,
        codigoRetorno: registro.codigoRetorno,
        idMensajeError: registro.idMensajeError,
        complejidad: registro.complejidad,
        usuarioReporte: registro.usuarioReporte,
        diaReporte: registro.diaReporte,
        resultadoEsperado: registro.resultadoEsperado,
        resultadoObtenido: registro.resultadoObtenido,
        descripcionError: registro.descripcionError,
        solucionImplementada: registro.solucionImplementada,
        fuentesConsulta: registro.fuentesConsulta,
        utilidad: registro.utilidad
    }

    return ToJson;
}
