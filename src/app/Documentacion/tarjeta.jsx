//Importar React
"use client";
import React, {useState} from 'react';
//Importar css
import styles from './Documentacion.module.css'
import { Button, Col, Container, Figure, Row, Tab, Table } from 'react-bootstrap';
import { PDFViewer, Text , Document , Page } from '@react-pdf/renderer';
//Componentes de imagen, para el reporte
import Image from 'next/image'
import ImagenBanco from '../styles/Banco.png' 
//Compoente de PDF
import {Reporte} from './Reporte'
import { PDFDownloadLink } from '@react-pdf/renderer';
//Componente HTML a omitir
/*
   <Container>
                            <Row>
                                <Col md={8}></Col>
                                <Col md={4}>

                                <Image
                                    src={ImagenBanco}
                                    alt="Banco Industrial"
                                    width={240} 
                                    height={100} 
                                />

                                </Col>                              
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <h2>Reporte de error</h2>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <th>Nombre del error</th>
                                                <td >{x['Nombre_Error']}</td>
                                            </tr>
                                            <tr>
                                                <th>Tipo del error</th>
                                                <td>{x['Tipo_Error']}</td>
                                            </tr>
                                            <tr>
                                                <th>Codigo de retorno</th>
                                                <td>{x['Codigo_Retorno']}</td>
                                            </tr>
                                            <tr>
                                                <th>ID del mensaje del error</th>
                                                <td>{x['ID_Mensaje_Error']}</td>
                                            </tr>
                                            <tr>
                                                <th>Nivel de complejidad</th>
                                                <td>{x['Complejidad']}</td>
                                            </tr>
                                            <tr>
                                                <th>Reportado Por</th>
                                                <td>{x['Reportado_Por']}</td>
                                            </tr>
                                            <tr>
                                                <th>Dia del reporte</th>
                                                <td>{x['Fecha']}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <h5><strong>Resultado esperado: </strong></h5>
                                    <p>{x['Resultado_Esperado']}</p>                                   
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <h5><strong>Resultado obtenido: </strong></h5>
                                    <p className={styles.spool}>{x['Resultado_Obtenido']}</p>                                   
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <h5><strong>Descripcion del error</strong></h5>
                                    <p>{x['Descripcion_Error']}</p>                                   
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <h5><strong>Solucion implementada: </strong></h5>
                                    <p>{x['Solucion']}</p>                                   
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <h5><strong>Fuentes de consulta: </strong></h5>
                                    <p>{x['Fuentes']}</p>                                   
                                </Col>
                            </Row>
                        </Container>

*/
//Funcion principal
export function Tarjeta(x) {
 //Evalua si la tajeta se debera expandir o no   
    const [grande, setGrande] = useState(false);
    const CambiarEstado = (e) => {
        if (grande == true ){
            setGrande (false);
        }
        else {
            setGrande (true);
        }
    }   
 //Funcion de retorno de pagina   
    if(grande){
        return (
            <>
                 <div key ={x['Nombre_Error']} className={ styles.TarjetaExpandida} onClick={e => CambiarEstado()}>
                    <div className={styles.TarjetaExpandidaEncabezado}> 
                      <h5 className={styles.TextoEncabezadoExpandido}> Reporte completo del error {x['ID_Mensaje_Error']} </h5>
                    </div>  
                    <div className={styles.TextoTarjetaExpandida}>
                                    
                        <Row>                         
                                <PDFViewer style={{width: '100%', height: '90vh'}}>                                   
                                        {Reporte(x)}                                     
                                </PDFViewer>
                        </Row>
                        
                    </div>
                               
                 </div>
                 
            </> 
          );
    }
    else {
        return (
                 <div key ={x['Nombre_Error']} className={styles.Tarjeta } onClick={e => CambiarEstado()}>
                    <>
                        <div className={styles.TarjetaEncabezado}> 
                        <h5 className={styles.TextoEncabezado}> {x['ID_Mensaje_Error'] + " " } {x['Nombre_Error']} </h5>
                        </div>
                    </>
                    <>
                        <div className= {`${styles.CajonValoracion} ${ x['Complejidad'] == 1 ? styles.Nivel_1 : ""}
                                                                    ${ x['Complejidad'] == 2 ? styles.Nivel_2 : ""}
                                                                    ${ x['Complejidad'] == 3 ? styles.Nivel_3 : ""}
                                                                    ${ x['Complejidad'] == 4 ? styles.Nivel_4 : ""}
                                                                    ${ x['Complejidad'] == 5 ? styles.Nivel_5 : ""}`} > 
                            <h5 className={styles.DificultadRotulo}>Complejidad</h5>                
                            <h5 className={styles.Dificultad}> {x['Complejidad']} </h5>
                        </div>
                    </>  
                     <div className={styles.TextoTarjeta}>
                        <h5 className={styles.Subtitulo}> <strong>Tipo de error        : </strong> {x['Tipo_Error']} </h5>
                        <h5 className={styles.Subtitulo}> <strong>Codigo de retorno    : </strong> {x['Codigo_Retorno']} </h5>
                        <h5 className={styles.Subtitulo}> <strong>Reportado por        : </strong> {x['Reportado_Por']} </h5>
                        <h5 className={styles.Subtitulo}> <strong>Fecha del reporte    : </strong> {x['Fecha']} </h5>
                        <h5 className={styles.Subtitulo}> <strong>Descripcion del error: </strong> </h5>                   
                        <p className={styles.Texto}>
                            {x['Descripcion_Error']} 
                        </p>
                    </div>   
                    
             
                 </div>
          );
    }
  }