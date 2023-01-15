import { useState } from "react";
import { useCartContext } from "../../../../context/Context";
import AfterAdd from "../../../AfterAdd/AfterAdd";
import Contador from "../../../contador/Contador"

const DetalleItem = (p) => {
    const{ addToCart, cartList }= useCartContext()
    const [buttonsType,setButonsType]=useState('contador')
    
    const onAdd =(cantidad)=>{
        addToCart({ ...p, cantidad })
        setButonsType('AfterAdd')
    };

    
  return (
    <div className="d-flex flex-wrap">
            
        <img src={p.img} alt="imagen del item" className="col-6"/>
        <div className="col-6">
          <h2 className="text-center">{p.titulo}</h2>
          <h3 className="m-3">U$D {p.precio} -.</h3>
          <div className="m-5">
            {
              buttonsType==='contador'?
                <Contador 
                  stock={10}
                  init={1}
                  onAdd={onAdd}
            />
            :
            <AfterAdd/>
            }
          </div>
        </div>
        
        
        Producto id {p.id}
    </div>
  )
}

export default DetalleItem