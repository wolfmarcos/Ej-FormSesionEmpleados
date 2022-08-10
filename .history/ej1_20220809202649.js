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
let mas=document.querySelector("main");
// reseteo
const forms = document.querySelector(".forms")

// email.conten(/\w+@+\./)  

let anime=document.querySelector(".url-animada")
let imga=document.querySelector(".imga")
let hijosTotal = imga.children;

const BucleColores = (i) => {  
    return new Promise((p)=>{setTimeout(setInterval(() => p(hijosTotal[i].classList.toggle("repe")),100), 900) }) }

const bucle= async()=>{
   const todo=[];
 for (let i = 0; i < hijosTotal.length; i++)  {
        //   hijosTotal[i].classList.toggle("a").sleep(1000)
    //    BucleColores(i).them(console.log(i));  
      
      todo [i]= await BucleColores(i) 
       console.log(todo[i]+"asd"+i)

   }
  }

  anime.addEventListener("click", (e) => {
    console.log("click")
    bucle()
 
        
    })

valdarCampos = (nombres, sueldos) => {


    let declaracion = true
    console.log(nombres.value)

    if (!nombres.value) {
        declaracion = formNul(nombres, "llene los campos")
    }
    if (!sueldos.value) {
        declaracion = formNul(sueldos, "ingrese una cifra")
    } else {
        if (!isNaN(parseInt(sueldos))) { console.log("nuemero:"+isNaN(parseInt(sueldos)))
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
    if (/^[a-zA-Z0-9\_\-]{1,16}$/.test(nombres.value)) {
        console.log("correcto" + /^[a-zA-Z0-9\_\-]{4,16}$/.test(nombres.value))
    } else {
        console.log("incorrecto:" + /^[a-zA-Z0-9\_\-]{4,16}$/.test(nombres.value));
        declaracion = formNul(nombres, "solo letra y numeros ")
    }
    console.log(declaracion)

    return (true == declaracion)
}

formNul = (inputs, error) => {
    const suPadre = inputs.parentElement
    const donde = suPadre.querySelector("p")
    // const errores=0  .agrega p
    donde.innerText = error;

    // donde.className = 'agrega'
    // donde.classList.add("agrega")
    suPadre.classList.add("f")
    return false
}
// // const remover=document.querySelector(".forms div")
// let nr2=remover[0].children
// let nr1=remover[1].children




forms.addEventListener("submit", (e) => {
    let verifica = true
    // nr1[1].classList.replace("borde","b")
    //  nr2[1].classList.replace("borde","b")
    // forms.classList.remove("p")
    document.querySelector(".a").className = "h a c"
    document.querySelector(".b").className = "h b c"
    //  document.querySelector(".hb").className = 'hb'

    //  forms.classList.add("p")
    // remover.classList.replace("borde","b")
    e.preventDefault();

    verifica = valdarCampos(nombres, sueldos);
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

        sessionStorage.setItem('empleadoss', empleados)
        sessionStorage.setItem(i, i++)
        // repeticion=confirm("ingresar otro  empleado")
        //   Object.values() 
        // empleados[0]=sessionStorage.getItem('empleadoss')


        console.log(empleados)
        console.log(sessionStorage.getItem(i))

        //  for (let cada of empleados){console.log(cada.sueldos);};  
        //   localStorage.href="#"
        // location
        nombres.value = "";
        sueldos.value = "";
        // forms.classList.add("ok")
        // forms.classList.add("f")  
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


const rotar=document.querySelector(".rota");


document.querySelector("#empleadosMas300").addEventListener("click", (e) => {
   
    rotar.className="rota"
   
    document.querySelector(".x").addEventListener("click", (n) => {
        mas.className="nv"
        e.target.innerText="sueldos de mas de 300"
        rotar.className="rota"
        
        
    //  console.log(mas)
    })
    
    try {

         let seve =mas.classList.toggle("nv");
      
        
        if(!seve){
            rotar.className="rota setGira"
            e.target.innerText="salir"}
        else{e.target.innerText="sueldos de mas de 300"
    
       
    }
      
       
    



        console.log(typeof empleados[0].sueldos)

        const emas300 = empleados.filter((x) => parseInt(x.sueldos) > 300)
        console.log(emas300.length + "cantidad" + emas300[0])
        // datos.outerHTML =""
        if (emas300.length >= 0) {
            for (let cada of emas300) {
                // console.log(cada);
            };
     
     

            resud = ""
            for (n of emas300) {
                // resud += `<div >${n.nomebres}</div>  <div>${n.sueldos}</div> <div class="datos">+</div> `
                
                resud += `<tr class="datos">
                <td>${n.nomebres}</td> <td>${n.sueldos}</td> </tr> `
                
                // '<div>'+n.nomebres+'</div>'+'<div>'+n.sueldos+'</div>'

                //     <div>${n.nomebres}</div> 
                //      <div>${n.sueldos}</div>

                // console.log(resud)

            }
            console.log(resud)
            // datos.outerHTML=
            // `<div class="contenedorR">
            // <div>nombre</div>
            // <div>sueldo</div>
            // ${resud}
            // </div>`

            datos.outerHTML = resud;
            document.querySelector(".final").innerText = resud;
        } else {
            datos.innerText = "no se encontro sueldo mas de 300"
        }
        console.log("no se encontro sueldo mas de 300")
    } catch (error) {
        datos.innerText = "sin datos"
    }

return
})



// let sueldo= parseFloat(prompt("suldo: "));
//  new emp(nombre,sueldo)

// console.log("aprobaron: " + aprobados)
// console.log(arrayAprobados);
// console.log("desaprobaron: " + desaprobados)
// console.log(arrayDesaprobados);

