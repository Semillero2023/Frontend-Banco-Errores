import { Registro } from './Registro';

const registro = new Registro("nombre", "tipo", "numero", "id", "complejidad", "usuario", "fecha", "esperado", "obtenido", "descripcion", "solucion", "fuentes")

//Arreglo general de elementos
let ListadoSoluciones = [];

/* 
Borrar despues, solo son registros de prubea
*/
let reg1 = {
    'Codigo_Retorno' : " CODIGO DE RETORNO",
    'Complejidad'  :  "1",
    'Descripcion_Error' :  " DESCRIPCION",
    'Fecha' :  "2023-04-20",
    'Fuentes' : " FUENTES DE CONSULTA",
    'ID_Mensaje_Error' : " ID DEL ERROR",
    'Nombre_Error' : " NOMBRE 1",
    'Reportado_Por' : "Juan el caballo del meme",
    'Resultado_Esperado' : " ESPERADO",
    'Resultado_Obtenido' : " OBTENIDO",
    'Solucion' : " SOLUCION",
    'Tipo_Error' : " TIPO DE ERROR",
    'Utilidad' :  0
}

let reg2 = {
    'Codigo_Retorno' : " CODIGO DE RETORNO",
    'Complejidad'  :  "2",
    'Descripcion_Error' :  " DESCRIPCION",
    'Fecha' :  "2023-04-20",
    'Fuentes' : " FUENTES DE CONSULTA",
    'ID_Mensaje_Error' : " ID DEL ERROR",
    'Nombre_Error' : " NOMBRE 2",
    'Reportado_Por' : "Juan el caballo del meme",
    'Resultado_Esperado' : " ESPERADO",
    'Resultado_Obtenido' : " OBTENIDO",
    'Solucion' : " SOLUCION",
    'Tipo_Error' : " TIPO DE ERROR",
    'Utilidad' :  0
}

let reg3 = {
    'Codigo_Retorno' : " CODIGO DE RETORNO",
    'Complejidad'  :  "3",
    'Descripcion_Error' :  " DESCRIPCION",
    'Fecha' :  "2023-04-20",
    'Fuentes' : " FUENTES DE CONSULTA",
    'ID_Mensaje_Error' : " ID DEL ERROR",
    'Nombre_Error' : " NOMBRE 3",
    'Reportado_Por' : "Juan el caballo del meme",
    'Resultado_Esperado' : " ESPERADO",
    'Resultado_Obtenido' : " OBTENIDO",
    'Solucion' : " SOLUCION",
    'Tipo_Error' : " TIPO DE ERROR",
    'Utilidad' :  0
}

let reg4 = {
    'Codigo_Retorno' : " CODIGO DE RETORNO",
    'Complejidad'  :  "4",
    'Descripcion_Error' :  " DESCRIPCION",
    'Fecha' :  "2023-04-20",
    'Fuentes' : " FUENTES DE CONSULTA",
    'ID_Mensaje_Error' : " ID DEL ERROR",
    'Nombre_Error' : " NOMBRE 4",
    'Reportado_Por' : "Juan el caballo del meme",
    'Resultado_Esperado' : " ESPERADO",
    'Resultado_Obtenido' : " OBTENIDO",
    'Solucion' : " SOLUCION",
    'Tipo_Error' : " TIPO DE ERROR",
    'Utilidad' :  0
}

let reg5 = {
    'Codigo_Retorno' : " CODIGO DE RETORNO",
    'Complejidad'  :  "5",
    'Descripcion_Error' :  " DESCRIPCION",
    'Fecha' :  "2023-04-20",
    'Fuentes' : " FUENTES DE CONSULTA",
    'ID_Mensaje_Error' : " ID DEL ERROR",
    'Nombre_Error' : " NOMBRE 5",
    'Reportado_Por' : "Juan el caballo del meme",
    'Resultado_Esperado' : " ESPERADO",
    'Resultado_Obtenido' : " OBTENIDO",
    'Solucion' : " SOLUCION",
    'Tipo_Error' : " TIPO DE ERROR",
    'Utilidad' :  0
}
ListadoSoluciones.push(reg1);
ListadoSoluciones.push(reg2);
ListadoSoluciones.push(reg3);
ListadoSoluciones.push(reg4);
ListadoSoluciones.push(reg5);

/*
Fin registros de prueba
*/

//Funcion agregar registros, sera llamada desde el script principal
export function AgregarRegistro(e_nombre, e_numero, e_ID, e_complejidad,
    e_usuario, e_fecha, e_esperado, e_obtenido, e_descripcion,
    e_solucion, e_fuentes) {
    let ErrorSeparado = e_numero.toString().split(",");
    let TipoError = ErrorSeparado[0];
    let CodigoError = ErrorSeparado[1];

    //Se crea un objeto json para guardar el registro nuevo       
    // "Nombre del error"  
    registro.Nombre_Error = e_nombre
    // "Tipo de error"
    registro.Tipo_Error = TipoError
    // "Codigo de retorno" 
    registro.Codigo_Retorno = CodigoError
    // "ID del mensaje de error" 
    registro.ID_Mensaje_Error = e_ID
    // "Complejidad"
    registro.Complejidad = e_complejidad
    // "Reportado por"
    registro.Reportado_Por = e_usuario
    // "Dia del reporte"
    registro.Fecha = e_fecha
    // "Resultado esperado" : 
    registro.Resultado_Esperado = e_esperado
    // "Resultado obtenido" 
    registro.Resultado_Obtenido = e_obtenido
    // "Descripcion del error" 
    registro.Descripcion_Error = e_descripcion
    // "Solucion implementada" 
    registro.Solucion = e_solucion
    // "Fuentes de consulta" 
    registro.Fuentes = e_fuentes
    // "utilidad" : 0
    registro.Utilidad = 0

    //Se convierte el objeto a formato JSON
    let ToJson = toJson();

    //El registro se agrega al arreglo de soluciones
    ListadoSoluciones.push(ToJson);

    //Imprimir el objeto agregado
    console.log(ListadoSoluciones);
}
//Retornar el listado de soluciones
export function RetornarSoluciones() {
    return ListadoSoluciones;
}

function toJson() {

    const ToJson = {
        Nombre_Error: registro.Nombre_Error,
        Tipo_Error: registro.Tipo_Error,
        Codigo_Retorno: registro.Codigo_Retorno,
        ID_Mensaje_Error: registro.ID_Mensaje_Error,
        Complejidad: registro.Complejidad,
        Reportado_Por: registro.Reportado_Por,
        Fecha: registro.Fecha,
        Resultado_Esperado: registro.Resultado_Esperado,
        Resultado_Obtenido: registro.Resultado_Obtenido,
        Descripcion_Error: registro.Descripcion_Error,
        Solucion: registro.Solucion,
        Fuentes: registro.Fuentes,
        Utilidad: registro.Utilidad
    }
    return ToJson;
}