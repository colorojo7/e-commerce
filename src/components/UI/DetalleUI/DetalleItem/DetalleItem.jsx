import Contador from "../../../contador/Contador"

const DetalleItem = (p) => {
    const onAdd =(cantidad)=>console.log(cantidad);

  return (
    <div>
            
        <img src={p.img} alt="imagen del item" className="w-50"/>
        <h2>{p.titulo}</h2>
        <h3>{p.precio}</h3>
        <Contador 
            stock={10}
            init={1}
            onAdd={onAdd}
        />
        Producto id {p.id}
    </div>
  )
}

export default DetalleItem