//Cuando se de clic al boton de generar pdf
document.addEventListener("DOMContentLoaded", () => {
    const $BotonReporte = document.querySelector("#GenerarPDF");
    $BotonReporte.addEventListener("click", () => {

        var Nombre_Error = "Nombre_Error"  ;
        var Tipo_Error =  "Tipo_Error" ;     
        var Codigo_Retorno = "Codigo_Retorno" ;
        var ID_Mensaje_Error = "ID_Mensaje_Error" ; 
        var Complejidad =  "Complejidad" ;       
        var Reportado_Por = "Reportado_Por" ;                      
        var Fecha = "Fecha"  ;                
        var Resultado_Esperado = "Resultado_Esperado" ;      
        var Resultado_Obtenido = "Resultado_Obtenido" ;    
        var Descripcion_Error = "Descripcion_Error" ;       
        var Solucion = "Solucion" ;              
        var Fuentes = "Fuentes";      
        
        var Nombre_Error_Texto = "Nombre_Error"  ;
        var Tipo_Error_Texto =  "Tipo_Error" ;     
        var Codigo_Retorno_Texto = "Codigo_Retorno" ;
        var ID_Mensaje_Error_Texto = "ID_Mensaje_Error" ; 
        var Complejidad_Texto =  "Complejidad" ;       
        var Reportado_Por_Texto = "Reportado_Por" ;                      
        var Fecha_Texto = "Fecha"  ;                
        var Resultado_Esperado_Texto = "Resultado_Esperado" ;      
        var Resultado_Obtenido_Texto = "Resultado_Obtenido" ;    
        var Descripcion_Error_Texto = "Descripcion_Error" ;       
        var Solucion_Texto = "Solucion" ;              
        var Fuentes_Texto = "Fuentes";    
        var hola = 'HOLA MUNDO COMO LES VAIWADUWADASDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSssssssssssssssssssSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'

         const docPDF = new jsPDF('p','mm','Letter',true,16);
         docPDF.text('Hola Mundo en PDF', 10, 10);
         docPDF.setFont("Arial");
         docPDF.setFontSize(28);
         docPDF.text('Hola Mundo en PDF', 10, 10);
         docPDF.text('Hola Mundo en PDF', 10, 10);
         docPDF.text('Hola Mundo en PDF', 10, 10);
         docPDF.text('Hola Mundo en PDF', 10, 10);

         //Margenes
         docPDF.line(0.5,0.5,0.5,11.25);
         docPDF.line(7.75,0.5,7.75,11.25);
         //Insertar saltos de linea donde habran parrafos muy largos
         var TextLines = docPDF.setFont("Arial")
                               .setFontSize(12)
                               .splitTextToSize(hola,185);
         let DesplazamientoVertical = 30;
         docPDF.text(10,DesplazamientoVertical + 12/72, TextLines);
         DesplazamientoVertical += (TextLines.length + 0.5) *12 /72 ;
         //Fin de la inserccion de parrafos

         //Tabla inicio
         docPDF.table(100,100, 
            [
                {
                    "Valor1" : "Hola",
                    "Valor2" : "mundo"
                }
            ],
            ["Valor1","Valor2"]
            );
         //Fin de tabla
         docPDF.save('Reporte.pdf');
    } )
})