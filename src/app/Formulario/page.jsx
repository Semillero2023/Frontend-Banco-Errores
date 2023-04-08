//Importar React
"use client";
import React, {useState} from 'react';
import {AgregarRegistro} from './ArrayObjects';
import { Button, Col, Container, Figure, Row, Tab, Table, Form } from 'react-bootstrap';
import styles from './estilo.module.css'
//Codigo principal
export default function Formulario (){
    //Varoables para almacenar los valores del formulario jsx
    const [Nombre_Error, setNombre] = useState(" ");
    const [Tipo_Error, setTipo] = useState(" ");
    const [Codigo_Retorno, setRC] = useState(" ");
    const [ID_Mensaje_Error, setID] = useState(" ");
    const [Complejidad, setComplejidad] = useState(1);
    const [Reportado_Por, setUsuario] = useState(" ");
    const [Fecha, setFecha] = useState("");
    const [Resultado_Esperado, setEsperado] = useState(" ");
    const [Resultado_Obtenido, setObtenido] = useState(" ");
    const [Descripcion_Error, setDescripcion] = useState(" ");
    const [Solucion, setSolucion] = useState(" ");
    const [Fuentes, setFuentes] = useState(" ");

    const [FileStatus, setFileStatus]  = useState(true);
    const [ReturnCode, setReturnCode]  = useState(false);
    const [Abend, setAbend]  = useState(false);

    //Funciones para cambir el valor del formulario
    const CambiarNombre = (e) => {
      setNombre(e.target.value); 
    }
    const CambiarRC = (e) => {
      setRC(e.target.value); 
    }
    const CambiarID = (e) => {
      setID(e.target.value); 
    }
    const CambiarComplejidad = (e) => {
      setComplejidad(e.target.value); 
    }
    const CambiarUsuario = (e) => {
      setUsuario(e.target.value); 
    }
    const CambiarFecha = (e) => {
      setFecha(e.target.value); 
    }
    const CambiarEsperado = (e) => {
      setEsperado(e.target.value); 
    }
    const CambiarObtenido = (e) => {
      setObtenido(e.target.value); 
    }
    const CambiarDescripcion = (e) => {
      setDescripcion(e.target.value); 
    }
    const CambiarSolucion = (e) => {
      setSolucion(e.target.value); 
    }
    const CambiarFuentes = (e) => {
      setFuentes(e.target.value); 
    }
    //Submitir el formulario
    const Submitir = () => {
      AgregarRegistro (
        Nombre_Error,
        Tipo_Error + ',' + Codigo_Retorno,
        ID_Mensaje_Error,
        Complejidad,
        Reportado_Por,
        Fecha,
        Resultado_Esperado,
        Resultado_Obtenido,
        Descripcion_Error,
        Solucion,
        Fuentes
      );
    }
    //Cambiar entre Abend y File Status
    const ActivarFileStatus = () => {
      setFileStatus(true);
      setReturnCode(false);
      setAbend(false);
      setTipo('File Status ');
    }
    const ActivarAbend = () => {
      setFileStatus(false);
      setReturnCode(false);
      setAbend(true);
      setTipo('Abend ');
    }
    const ActivarReturnCode = () => {
      setFileStatus(false);
      setReturnCode(true);
      setAbend(false);
      setTipo('Codigo de retorno ');
    }
    //Retornar el formulario jsx
    return (  
      <>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
              <Form>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indicar el nombre del error </Form.Label>
                  <Form.Control placeholder='Nombre del error' value={Nombre_Error} onChange={CambiarNombre}></Form.Control>
                  <Form.Text className="text-muted"> El nombre del error debera ser unico</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indicar el tipo de error y el codigo de retorno</Form.Label>

                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Row>  
                          <Col md={4}>
                              <Form.Check
                                inline
                                className={styles.texto}
                                label="File Status"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                onClick={ActivarFileStatus}                  
                              />
                          </Col>                  
                          
                          <Col md={4}>
                              <Form.Check
                                inline
                                className={styles.texto}
                                label="Abend"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                onClick={ActivarAbend}
                              />
                          </Col>
                          
                          <Col md={4}>
                              <Form.Check
                                inline
                                className={styles.texto}
                                label="Codigo de retorno"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                onClick={ActivarReturnCode}
                              />
                          </Col>                         
                          </Row>
                        </div>
                      ))}

                    <Row>

                      <Col md={4}>
                        { FileStatus==true ?
                          <>
                          <Form.Control placeholder='00' type='number' value={Codigo_Retorno} onChange={CambiarRC} pattern='^\d{2}$' required></Form.Control>
                                
                          </> 
                          :
                          <>
                          <Form.Control placeholder='00'  disabled> </Form.Control>
                          </>
                        }                       
                      </Col>

                      <Col md={4}>
                      { Abend==true ?
                          <>
                          <Form.Control placeholder='U0001' value={Codigo_Retorno} onChange={CambiarRC} pattern='^S\d{3,4}\sU\d{3,4}$' required></Form.Control>
                               
                          </> 
                          :
                          <>
                          <Form.Control placeholder='U0001'   disabled></Form.Control>
                          </>
                      }         
                      </Col>

                      <Col md={4}>
                      { ReturnCode==true ?
                          <>
                          <Form.Control placeholder='0000' type='number' value={Codigo_Retorno} onChange={CambiarRC} pattern='^\d{2}$' required></Form.Control>
                                
                          </> 
                          :
                          <>
                          <Form.Control placeholder='0000'  disabled></Form.Control>
                          </>
                        }
                      </Col>
                    </Row>                                            
                </Form.Group>

              <Row>
                <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.texto}> Indicar el ID del error </Form.Label>
                      <Form.Control placeholder='Tipo de error' value={ID_Mensaje_Error} onChange={CambiarID}></Form.Control>
                    </Form.Group>
                </Col>               
                <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.texto}> Nivel de complejidad del error : {Complejidad} </Form.Label>
                      <Form.Range placeholder='Tipo de error' min="1" max="5" value={Complejidad} onChange={CambiarComplejidad}></Form.Range>
                    </Form.Group>
                </Col>              
              </Row>         
                
              <Row>
                <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.texto}> Escribe tu nombre </Form.Label>
                      <Form.Control placeholder='Tipo de error' value={Reportado_Por} onChange={CambiarUsuario}></Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.texto}> Fecha del error </Form.Label>
                      <Form.Control type='date' placeholder='Tipo de error' value={Fecha} onChange={CambiarFecha}></Form.Control>
                    </Form.Group>
                </Col>
              </Row>          
                               
                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indica el resultado esperado </Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Indique el resultado esperado" value={Resultado_Esperado} onChange={CambiarEsperado} ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indica el resultado obtenido (El resultado que aparecio en el spool) </Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Indique el resultado que obtuvo" value={Resultado_Obtenido} onChange={CambiarObtenido} ></Form.Control>
                </Form.Group>

                <Row className={`mb-7, ${styles.spool}`}>
                   <br></br>
                   <p>{Resultado_Obtenido}</p>     
                   <br></br>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Describir el error </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Indique la descripcion del error" value={Descripcion_Error} onChange={CambiarDescripcion} ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indicar la solucion del error </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Indique la solucion utilizada" value={Solucion} onChange={CambiarSolucion} ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indicar las fuentes de consulta (Separadas por comas) </Form.Label>
                  <Form.Control value={Fuentes} onChange={CambiarFuentes} ></Form.Control>
                </Form.Group>
              </Form>
          </Col>
        </Row>
        <Row>
            <Col xs lg="2"></Col>
            <Col md="auto">
              <Button onClick={Submitir} variant="secondary" size="lg">Subir mi solucion</Button>
            </Col>
            <Col xs lg="2"> </Col> 
        </Row>
      </Container>               

      </>       
    );
  }