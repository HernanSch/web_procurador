import Carousel from 'react-bootstrap/Carousel';
import "./Carrusel.scss"

function Carrusel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://kilometrosquecuentan.goodyear.eu/wp-content/uploads/2017/06/madrid-mirador-gran-via.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='textoCarrusel'>RECLAMACION GRATIS LA CLAUSULA SUELO Y LOS GASTOS DE HIPOTECA</h3>
          <p className='textoCarrusel'>Abonamos abogado, procurador y economista.</p>
          <p className='textoCarrusel'>100% gratuito, sin porcentaje de los recuperado.</p>
          <p className='textoCarrusel'>Demandas individuales.</p>
          <p className='textoCarrusel'>Estudio y reclamacion precia gratuita</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/11/08103504/vistas-desde-cerro-tio-pio.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='textoCarrusel'>DERECHO DE SUCESIONES</h3>
          <p className='textoCarrusel'>Poco después de un fallecimiento , se crean obligaciones para los herederos, no sólo de naturaleza jurídica, sino también administrativa y fiscal,  asumiendo el abogado en estos casos un papel importante en el proceso de planificación de la sucesión, la calificación de los herederos y en el esclarecimiento de otras cuestiones que se plantean, a saber, en la asistencia al «cabeça de casal», a quien compete la administración de la herencia, en el desempeño del cargo y en el cumplimiento de las obligaciones administrativas y fiscales.</p>
        </Carousel.Caption>
      </Carousel.Item>     
    </Carousel>
  );
}

export default Carrusel;