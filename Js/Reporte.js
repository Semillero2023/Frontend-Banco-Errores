function generarPDF(){
    const Cuerpo = document.getElementById("cuerpo");

    html2pdf(Cuerpo,{
        margin : 5,
        filename : "Reporte.pdf",
        image : {
            type : 'jpeg',
            quality : 0.98
        },
        html2canvas : {
            scale : 3,
            logging : true,
            dpi : 192,
            letterRendering : true
        },
        jsPDF : {
            unit : 'mm',
            format : 'Letter',
            orientation : 'portrait'
        }
    });
}

//Cuando se de clic al boton de generar pdf
document.addEventListener("DOMContentLoaded", () => {
    const $BotonReporte = document.querySelector("#GenerarPDF");
    $BotonReporte.addEventListener("click", () => {
        generarPDF();
});
})