import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/Context.jsx";
import { useForm } from "../../../helpers/useForm.jsx"

const initialForm = {
    name:"",
    email:"",
    emailConfirmation:"",
    phone:""
}
const validationsForm = (form)=>{
    let errors={};

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone=/^([0-9]){5,10}$/;
    

    if(!form.name.trim()){
        errors.name= "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
        errors.name= "El campo 'Nombre' solo permite letras y espacios";
    }

    if(!form.email.trim()){
        errors.email= "El campo 'email' es requerido";
    } else if(!regexEmail.test(form.email.trim())){
        errors.email= "Ingresa un email valido"
    }

    if(form.emailConfirmation.trim()!==form.email.trim()){
        errors.emailConfirmation= "Los email no coinciden";
    }

    if(!form.phone.trim()){
        errors.phone= "El campo 'Telefono' es requerido";
    } else if(!regexPhone.test(form.phone.trim())){
        errors.phone="Ingresa solo numeros, entre 5 y 10 caractereres"
    }

    return errors;
}

const ContactForm = () => {
    const [orderConfirmed, setOrderConfirmed]=useState({})
    const [confirmMessege, setConfirmMessege]=useState(false)
    const {
        form, 
        errors, 
        handleChange, 
        handleBlur, 
    }= useForm(initialForm,validationsForm)
    
    const {cartList, total$, vaciarCarrito}=useCartContext()
    const generarOrden =(e)=>{
        e.preventDefault();
        if(Object.keys(errors).length ===0){
            const order ={
                buyer: form,
                item : cartList.map( ({titulo,id,precio,cantidad})=> ({titulo,id,precio, cantidad})),
                total: total$,
                date: new Date()
            }
            const db= getFirestore()
            const queryOrder=collection(db,'orders')
            addDoc(queryOrder, order)
            .then( resp => setOrderConfirmed(resp) )
            .catch( resp => console.log(resp) )
            .finally(()=>setConfirmMessege(true))
        }
    }
  return (
    
    <>
        { ! confirmMessege ? 
            <div className="d-flex border m-5">
            <form onSubmit={generarOrden} className="form-group col-12 p-5 d-flex">
                <div className="col-6">
                    <label htmlFor="name">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required

                    />
                    {errors.name&& <p className="alert alert-danger">{errors.name}</p>}
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required

                    />
                    {errors.email&& <p className="alert alert-danger">{errors.email}</p>}

                    <label htmlFor="emailConfirmationl">Confirmar e-mail</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    name="emailConfirmation"
                    value={form.emailConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required

                    />
                    {errors.emailConfirmation&& <p className="alert alert-danger">{errors.emailConfirmation}</p>}

                    <label htmlFor="name">Telefono</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required 

                    />
                    {errors.phone&& <p className="alert alert-danger">{errors.phone}</p>}
                </div>
                <div className="col-6 d-flex flex-wrap justify-content-center px-5 align-items-center">
                    <input type="submit" value="Comprar" className="btn btn-primary col-12 fs-3 h-25" /> 
                </div>
            </form>
        </div>
        :
            <div className="d-flex flex-wrap justify-content-center alert alert-success">
                <p className="col-12 text-center fs-3"> Esto es una confirmacion de tu pedido</p>
                <p className="col-12 text-center fs-3 fw-bold">  {orderConfirmed.id} </p>
                <Link 
                    to="/"
                    onClick={()=> vaciarCarrito()}
                    className="btn btn-primary"
                    >Cerrar
                </Link>
                 
            </div>

        }
    
    </>
  )
}

export default ContactForm