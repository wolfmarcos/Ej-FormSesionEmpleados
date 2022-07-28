// En una empresa trabajan n empleados cuyos  nombre y sueldo se carga por un formulario desde el celular. sueldos oscilan entre $100 y $500,
//  realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran menos de  $200  en una tabla y mas de $300  en otra tabla
//  recuerde cargar los datos como  un nuevo objeto. Además el programa deberá informar el importe que gasta la empresa en sueldos total del personal.
let aprobados = 0;
let i = 0;
let repeticion = true;
resu = document.querySelector(".contenedorR2")

datos = document.querySelector(".datos")
// let arrayDesaprobados = []
const empleados = [];
let resud = "";
let nombres = document.querySelector("#nombres");
let sueldos = document.querySelector("#sueldos");

valdarCampos=()=>{

   
    if (!nombres.value)
    { formNul(nombres,"llene los campos")} 
     elseformOk(nombres)}
    
    
     if (!sueldos.value) { formNul(sueldos,"ingrese una sifra")} else{if (!isNaN(sueldos)){formNul(sueldos,"no es numero")}}
return true
}
formOk = (inputs) => {

    // const teta=/\w/
       
        if (inputs.lenght > 20) {alert("NO1")}
        if (inputs.lenght < 3) {alert("NO2")}
        // if (nombre.test(".")) {alert("NO")}else{     error=1}
        if (/\w/.test(inputs)) {formNul(inputs,"solo letra y numeros")}
        
        return true
    
        
    }

  

formNul=(inputs,error)=>{
    const suPadre=inputs.parentElement
    const donde= suPadre.querySelector("p")
    // const errores=0
    donde.innerText=error
    return false
}









  // email.conten(/\w+@+\./)  

    
document.getElementById("form").addEventListener("submit", (e) => {
    
    e.preventDefault();
    console.log(valdarCampos())
        nombre=nombres.value
        sueldo=sueldos.value
    
    
    
    //   empleados[i]=[nombre,sueldo,(i+"pepito") ] ;
    //  empleados[i].push(nombre,sueldo );


    //   localStorage
    empleados[i] = {
        nomebres: nombre,
        sueldos: sueldo,
        id: (i + "pepito")
    }
    sessionStorage.setItem(i, i++)
    sessionStorage.setItem('empleadoss', empleados)
    // repeticion=confirm("ingresar otro  empleado")
    //   Object.values() 
    // empleados[0]=sessionStorage.getItem('empleadoss')


    console.log(empleados)
    console.log(sessionStorage.getItem(i))

    //  for (let cada of empleados){console.log(cada.sueldos);};  
    //   localStorage.href="#"
    // location

});







// let emp = new Empleados;
document.querySelector("#agregarHTML").addEventListener("click", (e) => {
nombre=nombres.value
sueldo=sueldos.value

    while (repeticion == true) {
        let nombre = prompt("empleado: ");
        let sueldo = parseInt(prompt("sueldo: "));
        //   empleados[i]=[nombre,sueldo,(i+"pepito") ] ;
        //  empleados[i].push(nombre,sueldo );
        empleados[i] = {
            nomebres: nombre,
            sueldos: sueldo,
            id: (i + "pepito")
        }
        i = i + 1;
        repeticion = confirm("ingresar otro  empleado")
    };
    //   Object.values() 
    for (let cada of empleados) {
        console.log(cada.sueldos);
    };


});


// empleados.forEach( cada => console.log( cada["nomebres"]));


document.querySelector("#empleadosMas300").addEventListener("click", (e) => {
    console.log(typeof empleados[0].sueldos)
    const emas300 = empleados.filter((x) => x.sueldos > 300)
    console.log(emas300)
    for (let cada of emas300) {
        console.log(cada[1]);
    };


    for (n of emas300) {
        resud += `<div>${n.nomebres}</div>  <div>${n.sueldos}</div>`
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

    datos.outerHTML = resud;



})



// let sueldo= parseFloat(prompt("suldo: "));
//  new emp(nombre,sueldo)

// console.log("aprobaron: " + aprobados)
// console.log(arrayAprobados);
// console.log("desaprobaron: " + desaprobados)
// console.log(arrayDesaprobados);