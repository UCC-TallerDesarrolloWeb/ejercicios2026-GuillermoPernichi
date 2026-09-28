/**
 * Conversión de unidades de metros, pies, yardas y pulgadas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input en el html
 * @param {number} valor - Valor ingresado por el usuario
 */
 convertirUnidades = (id, valor) => {
    let metros, pulgadas, pies, yardas;
    valor = valor.replace(",",".");
    if(isNaN(valor)){
        alert("Se ingreso un valor incorrecto: " + id);
        metros = "";
        pulgadas = "";
        pies = "";
        yardas = "";
    }else if(id==="metro"){
        metros = valor;
        pulgadas = valor*39.3701;
        pies = valor*3.28084;
        yardas = valor*1.09361;
    }
    else if(id==="pie"){
        pies = valor;
        pulgadas = valor*12;
        metros = valor*0.3048;
        yardas = valor*0.333333;
    }
    else if(id==="yarda"){
        yardas = valor;
        pulgadas = valor*36;
        metros = valor*0.9144;
        pies = valor*3;
    }
    else if(id==="pulgada"){
        pulgadas = valor;
        pies = valor*0.0833333;
        metros = valor*0.0254;
        yardas = valor*0.0277778;
    }
    document.getElementById("metro").value = Math.round(metros*100)/100;
    document.getElementById("pulgada").value = Math.round(pulgadas*100)/100;
    document.getElementById("pie").value = pies.toFixed(2);
    document.getElementById("yarda").value = yardas.toFixed(2);
}
/**
 * Conversión de grados a radianes
 * @method convertirGR
 * @param {string} id - Id del elemento input en el html
 */
function convertirGR(id){
    let grad, rad;
    if(id==="grados"){
        grad = document.getElementById("grados").value;
        rad = grad*Math.PI/180;
    }else{
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
/**
*  Mostra u ocultar div según selección del usuario
* @method mostrarOcultar
* @param {string} valor - Valor del id del radio button seleccionado
*/
mostrarOcultar = (valor) => {
    const displayDiv = valor==="val_mostrar" ? 'block' : 'none';
    document.getElementById("unDiv").style.display = displayDiv;
    //if(valor==="val_mostrar"){
    //    document.getElementById("unDiv").style.display = 'block';
    //}else{
    //    document.getElementById("unDiv").style.display = 'none';
    //}
}
/**
 * Calcula la suma de 2 valores ingresados por el usuario
 * @method calcularSuma
 */
function calcularSuma(){
    let sum1, sum2;
    sum1 = Number(document.getElementById("nums1").value);
    sum2 = document.getElementById("nums2").value;
    document.getElementById("totalS").innerText = sum1 + Number(sum2);
}
/**
 * Calcula la resta de 2 valores ingresados por el usuario
 * @method calcularResta
 */
function calcularResta(){
    let res1, res2;
    res1 = document.getElementById("numr1").value;
    res2 = document.getElementById("numr2").value;
    document.getElementById("totalR").innerText = res1 - res2;
}
/**
 * Calcula el producto de 2 valores ingresados por el usuario
 * @method calcularMultiplicacion
 */
function calcularMultiplicacion(){
    let mult1, mult2;
    mult1 = document.getElementById("numm1").value;
    mult2 = document.getElementById("numm2").value;
    document.getElementById("totalM").innerText = mult1 * mult2;
}
/**
 * Calcula el cociente de 2 valores ingresados por el usuario
 * @method calcularDivision
 */
function calcularDivision(){
    let div1, div2;
    div1 = document.getElementById("numd1").value;
    div2 = document.getElementById("numd2").value;
    document.getElementById("totalD").innerText = div1 / div2;
}