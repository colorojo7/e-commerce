const productos = [
    {id: '1', titulo: 'BMW SPORT', categoria: 'autos',stock: '3',precio: '150000',  img:'public/imagenes/Auto_1.webp'},
    {id: '2', titulo: 'TESLA SEDAN', categoria: 'autos',stock: '1',precio: '25000',  img:'public/imagenes/Auto_2.jpg'},
    {id: '3', titulo: 'YAMAHA R1', categoria: 'motos',stock: '4',precio: '15000',  img:'public/imagenes/Moto_1.png'},
    {id: '4', titulo: 'YAMAHA MT07', categoria: 'motos',stock: '5',precio: '10000',  img:'public/imagenes/Moto_2.png'},
    {id: '5', titulo: 'MILLONARIO SEALING', categoria: 'yates',stock: '1',precio: '250000',  img:'public/imagenes/Yate_1.jpeg'},
    {id: '6', titulo: 'YATE LIBERTADORES', categoria: 'yates',stock: '2',precio: '130000',  img:'public/imagenes/Yate_2.webp'},
    {id: '7', titulo: 'BMW SPORT', categoria: 'autos',stock: '3',precio: '150000',  img:'public/imagenes/Auto_1.webp'},
    {id: '8', titulo: 'TESLA SEDAN', categoria: 'autos',stock: '1',precio: '25000',  img:'public/imagenes/Auto_2.jpg'},
    {id: '9', titulo: 'YAMAHA R1', categoria: 'motos',stock: '4',precio: '15000',  img:'public/imagenes/Moto_1.png'},
    {id: '10',titulo: 'YAMAHA MT07', categoria: 'motos',stock: '5',precio: '10000',  img:'public/imagenes/Moto_2.png'},
    {id: '11',titulo: 'MILLONARIO SEALING', categoria: 'yates',stock: '1',precio: '250000',  img:'public/imagenes/Yate_1.jpeg'},
    {id: '12',titulo: 'YATE LIBERTADORES', categoria: 'yates',stock: '2',precio: '130000',  img:'public/imagenes/Yate_2.webp'}
  
  ]
  
  
export const gFetch = (id) =>{
    return new Promise((res, rej)=> {
        setTimeout(()=>{
            res(id ? productos.find( item => item.id == id ) : productos);
        },1000)
     
        //rej( 'Algo salio mal' );
  })
  } 

