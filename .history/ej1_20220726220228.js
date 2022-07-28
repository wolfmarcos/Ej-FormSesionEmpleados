// En una empresa trabajan n empleados cuyos  nombre y sueldo se carga por un formulario desde el celular. sueldos oscilan entre $100 y $500,
//  realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran menos de  $200  en una tabla y mas de $300  en otra tabla
//  recuerde cargar los datos como  un nuevo objeto. Además el programa deberá informar el importe que gasta la empresa en sueldos total del personal.
let aprobados = 0;
let i= 0;
let repeticion = true;
resu=document.querySelector(".contenedorR2")

datos=document.querySelector(".datos")
// let arrayDesaprobados = []
const empleados = [];
let resud="";
let nombre= document.querySelector(".nombres").values;
let sueldo= document.querySelector(".sueldos").values;
formulario=

document.querySelector(".form").addEventListener("submit", (e) => {
    
    e.preventDefault()   ;
  
        //   empleados[i]=[nombre,sueldo,(i+"pepito") ] ;
        //  empleados[i].push(nombre,sueldo );
        empleados[0]={nomebres:nombre,sueldos:sueldo,id:(i+"pepito") } 
        i = i + 1;
        // repeticion=confirm("ingresar otro  empleado")
    
    //   Object.values() 
    console.log(nombre)
    //  for (let cada of empleados){console.log(cada.sueldos);};  
//   localStorage.href="#"
// location
  
});







// let emp = new Empleados;
document.querySelector("#agregarHTML").addEventListener("click", (e) => {
    
    
    while(repeticion == true){
        let nombre= prompt("empleado: ");
        let sueldo= parseInt(prompt("sueldo: "));
        //   empleados[i]=[nombre,sueldo,(i+"pepito") ] ;
        //  empleados[i].push(nombre,sueldo );
        empleados[i]={nomebres:nombre,sueldos:sueldo,id:(i+"pepito") } 
        i = i + 1;
        repeticion=confirm("ingresar otro  empleado")
    };
    //   Object.values() 
    for (let cada of empleados){console.log(cada.sueldos);};  
   
  
});

 
// empleados.forEach( cada => console.log( cada["nomebres"]));


document.querySelector("#empleadosMas300").addEventListener("click", (e) => {
    console.log(typeof empleados[0].sueldos) 
const emas300= empleados.filter((x)=>x.sueldos>300)
console.log(emas300)
for (let cada of emas300){console.log( cada[1]);}; 


for (n of emas300){ 
    resud+= `<div>${n.nomebres}</div>  <div>${n.sueldos}</div>`
    // '<div>'+n.nomebres+'</div>'+'<div>'+n.sueldos+'</div>'
  
    //     <div>${n.nomebres}</div> 
    //      <div>${n.sueldos}</div>
   
console.log(resud)

}

// datos.outerHTML=
// `<div class="contenedorR">
// <div>nombre</div>
// <div>sueldo</div>
// ${resud}
// </div>`

datos.outerHTML=resud;



})   



 // let sueldo= parseFloat(prompt("suldo: "));
        //  new emp(nombre,sueldo)

// console.log("aprobaron: " + aprobados)
// console.log(arrayAprobados);
// console.log("desaprobaron: " + desaprobados)
// console.log(arrayDesaprobados);
