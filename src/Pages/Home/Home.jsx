import React from 'react'
import Carrusel from '../../Components/Carrusel/Carrusel'
import Formulario from '../../Components/Formulario/Formulario'
import './Home.scss'

const Service = ({title, description}) => (
  <article className='service'>
    <h3 className='service-title'>{title}</h3>
    <p className='service-description'>{description}</p>
  </article>
)

const Services = () => (
  <section className='services'>
    <Service title='Reclamación Gratuita' description='Abonamos los honorarios de su Abogado, Procurador y Perito Economista. 100% gratuito' />
    <Service title='Derecho Bancario' description='Abogados especialistas en reclamaciones bancarias, con amplia experiencia y gran cantidad de sentencias' />
    <Service title='Todo Tipo de Reclamaciones' description='Consúltenos su caso. Seguro que podemos ayudarle con su reclamación a su banco y completamente gratis' />
    <Service title='Trabajamos a nivel Nacional' description='Podemos llevar su reclamación bancaria o producto financiero en toda España' />
    <Service title='Demandas Individuales' description='Nunca optamos por presentar demandas colectivas o grupales. Solo demandas individuales' />
    <Service title='Consultas y Estudio Gratuito' description='Abogados especialistas en derecho bancario estudiarán su asunto gratis y sin compromiso' />
  </section>
)

const Home = () => (
  <main className='container'>
    <header className='carrusel'>
      <Carrusel />
    </header>
    <Services />
    <footer className='formulario'>
      <Formulario />
    </footer>
  </main>
)

export default Home