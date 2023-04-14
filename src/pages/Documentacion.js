import React from "react";
import { showErrors } from "../querys/getAllDocs";
import Tarjeta from "../components/Tarjeta";

class Documentacion extends React.Component {

    state = {
        errores : []
    }

    async componentDidMount(){
        const arrayErrores = await showErrors()
        this.setState({errores : arrayErrores})
        // arrayErrores.forEach((doc) => {
        //    console.log(doc.id, " => ", doc.data());
        // });
    }

    render(){

        const documents = [];
        this.state.errores.forEach((doc) => {
            documents.push(
                <Tarjeta
                   x = {doc.data()}
                   key = {doc.id}
                />
            )
        })

        return(
            <>
            {documents}     
            </>
        );
    }
}

export default Documentacion;