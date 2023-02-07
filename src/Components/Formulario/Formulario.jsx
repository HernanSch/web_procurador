import {Formik, Field, Form, ErrorMessage} from 'formik';
import emailjs from 'emailjs-com'
import React, { useState } from 'react';
import "./Formulario.scss"

export default function ContactForms() {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    function SendEmail(object) {
        emailjs.send('service_oh92ohi', 'template_b08av83', object,'ndJpUY8dQjxQIsGob')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }
    
      return (

        <Formik
          initialValues={{
                    nombre: '',
                    apellidos: '',
                    correo: '',
                    telefono: '',
                    pais: '',
                    mensaje: ''
                }}
                
                validate={(valores) => {
                    let errores = {};

                    //Valiudacion nombre
                    if(!valores.nombre){
                        errores.nombre = 'Por favor introduzca un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = 'Introduzca un nombre valido'
                    }
                    //Validacion apellido
                    if(!valores.apellidos){
                        errores.apellidos = 'Por favor introduzca un apellidos'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidos)){
                        errores.apellidos = 'Introduzca un apellido valido'
                    }
                    //Validacion telefono
                    if(!valores.telefono){
                        errores.telefono = 'Por favor introduzca un telefono'
                    } else if(/^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/.test(valores.telefono)){
                        errores.telefono = 'Introduzca un telefono valido'
                    }
                    //Valiudacion correo
                    if(!valores.correo){
                        errores.correo = 'Por favor introduzca un correo electrónico'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'Introduzca un correo válido'
                    }

                    return errores;
                }}
                onSubmit={(valores, {resetForm, actions}) => {
                    resetForm();
                    console.log(valores)
                    console.log('Formulario enviado')
                    cambiarFormularioEnviado(true)
                    setTimeout(() => cambiarFormularioEnviado(false),5000);
                    setTimeout(() => {
                    SendEmail(valores)
                    actions.setSubmitting(false)
                    }, 1000)
                }}           
            >
                {( {values, errors} ) => (
            <Form className='formulario'>
            <h1 className='formulario__TituloContacto'>Contáctenos</h1>
            <div>
                <label htmlFor="nombre"></label>
                <Field 
                    className='formulario__cajaInput' 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    placeholder="Nombre" 
                />
                <ErrorMessage name='nombre' component={() => (
                    <div className='error'>{errors.nombre}</div>
                )} />
            </div>
            <div>
                <label htmlFor="apellidos"></label>
                <Field 
                    className='formulario__cajaInput'
                    type="text" 
                    id="apellidos" 
                    name="apellidos"
                    placeholder="Apellidos" 
                />
                <ErrorMessage name='apellidos' component={() => (
                    <div className='error'>{errors.apellidos}</div>
                )} />
            </div>
            <div>
                <label htmlFor="correo"></label>
                <Field 
                    className='formulario__cajaInput'
                    type="email" 
                    id="correo" 
                    name="correo"
                    placeholder="Correo eletrónico"                         
                />                        
                <ErrorMessage name='correo' component={() => (
                    <div className='error'>{errors.correo}</div>
                )} /> 
            </div>
            <div>
                <label htmlFor="telefono"></label>
                <Field 
                    className='formulario__cajaInput'
                    type="number" 
                    id="telefono" 
                    name="telefono"
                    placeholder="Telefono de contacto"                         
                />                        
                <ErrorMessage name='telefono' component={() => (
                    <div className='error'>{errors.telefono}</div>
                )} /> 
            </div>
            <div>
                <label htmlFor="pais"></label>
                <Field className='formulario__cajaInput' name="pais" as="select">
                    <option value="Pais">Pais de residencia</option>
                    <option value="Argentina">Argentina</option>
                    <option value="España">España</option>
                    <option value="Mexico">Mexico</option>
                </Field>
            </div>
            <div>
                <Field className="formulario__caja" name="mensaje" as="textarea" placeholder="Mensaje">

                </Field>
            </div>
            <button className='formulario__botonEnviar' type='submit'>Enviar</button>
            {formularioEnviado && <p className='exito'>Formulario enviado correctamente</p>}
            </Form>
          )}
        </Formik>
      )
  }