//Importa los estilos globales (Los usados por defecto)
import './styles/globals.css'
//Importa el componente de NavBar
import { navbar } from "./Components/NavBar"
export default function RootLayout({ children }) {
//Children significa renderizar todo lo que esta debajo de el
 return (
    <html lang="es">
      <head>
        <title>Biblioteca Semillero 2023</title>
      </head>
      <body>
        {navbar()}
        {children}
      </body>
    </html>
  )
}
