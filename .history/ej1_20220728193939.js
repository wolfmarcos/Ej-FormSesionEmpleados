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
let declaracion = true
valdarCampos = () => {


    if (!nombres.value) {
        formNul(nombres, "llene los campos")
    } else {
        declaracion = formOk(nombres)
    }


    if (!sueldos.value) {
        declaracion = formNul(sueldos, "ingrese una cifra")
    } else {
        if (!isNaN(sueldos)) {
            declaracion = formNul(sueldos, "no es numero")
        }
    }
    console.log(declaracion)
    return (true == declaracion)
}
formOk = (inputs) => {
    // const teta=/\w/
    if (inputs.value.lenght < 20) {
        declaracion = formNul(inputs, "menos de 20 caracteres")
    }
    if (inputs.value.lenght > 3) {
        declaracion = formNul(inputs, "mas de 3 caracteres")
    }
    // if (nombre.test(".")) {alert("NO")}else{     error=1}
    if (!/[a-z]/.test(inputs.value)) {
        console.log("es:" + !/\w/.test(inputs.value));
        declaracion = formNul(inputs, "solo letra ")
    }

    return (true == declaracion)
}



formNul = (inputs, error) => {
    const suPadre = inputs.parentElement
    const donde = suPadre.querySelector("p")
    // const errores=0
    donde.innerText = error
    inputs.classList.add("borde")
    return false
}








const forms=document.querySelector(".forms")
// email.conten(/\w+@+\./)  


forms.addEventListener("submit", (e) => {

    e.preventDefault();

    const verifica = valdarCampos();
    console.log("final :" + verifica)
    if (verifica) {
        nombre = nombres.value
        sueldo = sueldos.value





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
        nombres.value="";
        sueldos.value="";
        forms.classList.add("ok")
    }
    else {   forms.classList.add("f")    }
    
        
    

    
        
  
    
});







// let emp = new Empleados;
document.querySelector("#agregarHTML").addEventListener("click", (e) => {
    nombre = nombres.value
    sueldo = sueldos.value

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