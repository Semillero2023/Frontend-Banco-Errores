//Importa el modulo de estilos para el navbar
import styles from '../styles/NavBar.module.css'
//Para poder usar los links se debe hacer referencia a la libreria next
import Link from 'next/link'
//Links para usar el NAVBAR
const links = [
  {
    label: 'Inicio',
    ruta: '/',
  },
  {
    label: 'Documentacion',
    ruta: '/Documentacion',
  },
  {
    label: 'Formulario',
    ruta: '/Formulario',
  },
  {
    label: 'Carga Masiva',
    ruta: '/CargaMasiva',
  }  
]

export function navbar (){
    return (
        <header className={styles.header}>
        <nav>
          <ul className={styles.navbar}>
            {links.map((x) => {
              return (
                <li key={x['label']}>
                  <Link href={x['ruta']}>
                    {x['label']}
                  </Link>
                </li>
              )               
            })}
          </ul>
        </nav>
      </header>
    );
}