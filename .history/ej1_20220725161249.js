// En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500,
//  realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 
//  y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
let aprobados = 0;
let i= 0;
let repeticion = true;
resu=querySelector("")
// let arrayDesaprobados = []
const empleados = [[],[]];

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
    // for (let cada of empleados){console.log( cada[1]);};  

    console.log(empleados)
    empleados.forEach( cada => console.log( cada["nomebres"]));
});




document.querySelector("#agregarHTML").addEventListener("click", (e) => {
const emas300= empleados.filter((x)=>x.sueldo>=300)

}


 // let sueldo= parseFloat(prompt("suldo: "));
        //  new emp(nombre,sueldo)





// console.log("aprobaron: " + aprobados)
// console.log(arrayAprobados);
// console.log("desaprobaron: " + desaprobados)
// console.log(arrayDesaprobados);
