// En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500,
//  realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 
//  y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
let aprobados = 0;
let desaprobados = 0;
let repeticion = true
let empleados = []
let arrayDesaprobados = []


let emp = new Empleados;
while(repeticion =true){
let nombre= parseFloat(prompt("empleado: "))
let sueldo= parseFloat(prompt("suldo: "))
 emp(nombre,sueldo)




new Persona


if(notaIngresada >= 7 && notaIngresada<11 ){
    aprobados = aprobados + 1
    arrayAprobados.push(notaIngresada)
    // aprobados++
    //aprobados += 1
}else if (notaIngresada<7 && notaIngresada>0 ){
    desaprobados=desaprobados+1
    arrayDesaprobados.push(notaIngresada)
}else{
    console.log("Error en el ingreso de datos")
}
repeticion += 1
}
console.log("aprobaron: " + aprobados)
console.log(arrayAprobados);
console.log("desaprobaron: " + desaprobados)
console.log(arrayDesaprobados);
