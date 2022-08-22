
const node20 = ["Node23", "Node19", false];
const node23 = [false, "Node57", false];
const node19 = [false, false, "Node67"]; 
const node67 = [true, "Node99", true];
const node99 = ["Node99", true, 99];
const node57 = ["Node57", true, 57];

function head() {

    //Imprimir el nodo 57
    if (node20[0] === "Node23"){
        if (node23[1]=== "Node57") {
            console.table(node57);
        }else {
            console.log(null);
        }
    } else {
        console.log(null);
    }
    
    //Imprimir el nodo 99
    if (node20[1] === "Node19") {
        if (node19[2] === "Node67") {
            if (node67[1] === "Node99") {
                console.table(node99);
            }else {
                console.log("No se encontró el procedimiento que buscaba");
            }
        }else {
            console.log(null);
        }
    }
}

//Mandamos a llamar a la funcion

head();
