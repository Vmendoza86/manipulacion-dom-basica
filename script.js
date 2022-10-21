const input1 = document.querySelector('#txtnum1');
const input2 = document.querySelector('#txtnum2');
const btn = document.querySelector('#btncalcular');
const rsuma = document.querySelector('#rsuma');
const rresta = document.querySelector('#rresta');
const rmultiplicacion = document.querySelector('#rmultiplicacion');
const rdivision = document.querySelector('#rdivision');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    let suma,resta,multiplicacion,division;

    suma = parseInt(input1.value) + parseInt(input2.value);
    resta = parseInt(input1.value) - parseInt(input2.value);
    multiplicacion = (input1.value) * parseInt(input2.value);
    division = parseInt(input1.value) / parseInt (input2.value);
    rsuma.innerText = ("El resultado de la suma es :" + suma);
    rresta.innerText = ("El resultado de la resta es :" + resta);
    rmultiplicacion.innerText = ("El resultado de la multiplicacion es :" + multiplicacion);
    rdivision.innerText = ("El resultado de la division es :" + division);

}
