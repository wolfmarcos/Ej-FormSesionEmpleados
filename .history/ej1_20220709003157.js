// En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500,
//  realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 
//  y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
let aprobados = 0;
let desaprobados = 0;
let repeticion = true
let empleados = []
let arrayDesaprobados = []


let emp = new Empleados;
document.createElement("empleadoHTML")
while(repeticion =true){
let nombre= parseFloat(prompt("empleado: "))
let sueldo= parseFloat(prompt("suldo: "))
 emp(nombre,sueldo)











repeticion += 1
repeticion=confirm("ingresar otro  empleado")
}
console.log("aprobaron: " + aprobados)
console.log(arrayAprobados);
console.log("desaprobaron: " + desaprobados)
console.log(arrayDesaprobados);
