//Importar React
"use client";
import React from 'react';
//Importar arreglo de soluciones
import {RetornarSoluciones} from '../Formulario/ArrayObjects'
//Importar componente de tarjeta
import {Tarjeta} from './tarjeta'
//Funcion de retorno de pagina
export default function Documentacion() {
    return ( 
      <>
      {
        RetornarSoluciones().map((x) => {
          return (
            <>
            {Tarjeta(x)}
            </>
          )
          
        })
      }       
      </>
    );
  }