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

// reseteo
const forms=document.querySelector(".forms")

// email.conten(/\w+@+\./)  

valdarCampos = (nombres,sueldos) => {
    
    
    let declaracion = true
    console.log(nombres.value)
   
    if (!nombres.value) {
        declaracion =  formNul(nombres, "llene los campos")
    } 
    if (!sueldos.value) {
        declaracion = formNul(sueldos, "ingrese una cifra")
    } else {
        if (!isNaN(sueldos)) {
            declaracion = formNul(sueldos, "no es numero")
        }
    }
    if (sueldos.value.length > 4) { 
        declaracion = formNul(sueldos, "menos de 5 cifras")
    }
       if (nombres.value.length > 10) { 
        declaracion = formNul(nombres, "menos de 10 caracteres")
    }
    if (nombres.value.length < 3) {
        declaracion = formNul(nombres, "mas de 3 caracteres")
    }
    // if (nombre.test(".")) {alert("NO")}else{     error=1}
    if (/^[a-zA-Z0-9\_\-]{4,16}$/.test(nombres.value))
     {
        console.log("correcto"+/^[a-zA-Z0-9\_\-]{4,16}$/.test(nombres.value)) }
       else{ console.log("incorrecto:" + /^[a-zA-Z0-9\_\-]{4,16}$/.test(nombres.value));
        declaracion = formNul(nombres, "solo letra y numeros ")
    }
    console.log(declaracion)

    return (true == declaracion)
}

formNul = (inputs, error) => {
    const suPadre = inputs.parentElement
    const donde = suPadre.querySelector("p")
    // const errores=0
    donde.innerText = error;
    inputs.classList.add("borde")
    return false
}
const remover=document.querySelector(".forms div")
// let nr2=remover[0].children
// let nr1=remover[1].children
forms.addEventListener("submit", (e) => {
    let verifica=true
    // nr1[1].classList.replace("borde","b")
    //  nr2[1].classList.replace("borde","b")
    forms.className = 'form-control falla'
    // forms.classList.add("f")
    // remover.classList.replace("borde","b")
    e.preventDefault();
    
     verifica = valdarCampos(nombres,sueldos);
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
        forms.classList.add("f")  
    }
    // else {   
       
    //     forms.classList.add("f")  
    //   }
    
        
    

    
        
  
    
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