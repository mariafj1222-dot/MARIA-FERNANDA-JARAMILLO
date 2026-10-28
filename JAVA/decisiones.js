
console.log("===== GLOW MAKEUP =====");

// 1. ACUMULADOR DE VENTAS

const meta = 100000;

let ventas = 0;

ventas += 45000;
ventas += 70000;

console.log("Ventas acumuladas:", ventas);


// 2. DECISIONES

if (ventas >= meta) {

    console.log("Meta cumplida");

} else if (ventas >= meta * 0.8) {

    console.log("Casi");

} else {

    console.log("Falta");
}


// 3. CICLO FOR: VENTAS DE 5 DIAS

console.log("===== VENTAS DE 5 DIAS =====");

let ventasDias = 0;

for (let dia = 1; dia <= 5; dia++) {

    let ventaDia = dia * 10000;

    ventasDias += ventaDia;

    console.log("Dia", dia, ":", ventasDias);
}


// 4. CICLO WHILE: META EXTRA

console.log("===== META EXTRA =====");

let metaExtra = 200000;

let intentos = 0;

while (ventasDias < metaExtra) {

    ventasDias += 25000;

    intentos++;
}

console.log("Meta extra alcanzada:", ventasDias);

console.log("Intentos extra:", intentos);


// 5. ADAPTACION: VENTAS DE 7 DIAS

console.log("===== VENTAS DE 7 DIAS =====");

let ventasSemanales = 0;

for (let dia = 1; dia <= 7; dia++) {

    let ventaDia = dia * 15000;

    ventasSemanales += ventaDia;

    console.log("Dia", dia, ":", ventasSemanales);
}


// 6. DECISIONES CON TRES NIVELES

console.log("===== CLASIFICACION =====");

const metaSemanal = 200000;

if (ventasSemanales >= metaSemanal) {

    console.log("Meta cumplida");

} else if (ventasSemanales >= metaSemanal * 0.8) {

    console.log("Casi");

} else {

    console.log("Falta");
}


// 7. WHILE CON CONTADOR PARA META EXTRA

console.log("===== META EXTRA SEMANAL =====");

let metaFinal = 500000;

let intentosExtra = 0;

while (ventasSemanales < metaFinal) {

    ventasSemanales += 25000;

    intentosExtra++;
}

console.log("Ventas finales:", ventasSemanales);

console.log("Intentos extra:", intentosExtra);


// 8. DOS PRUEBAS

console.log("===== PRUEBAS =====");

let prueba1 = 420000;

let meta1 = 200000;

if (prueba1 >= meta1) {

    console.log("Prueba 1: Meta cumplida");

} else if (prueba1 >= meta1 * 0.8) {

    console.log("Prueba 1: Casi");

} else {

    console.log("Prueba 1: Falta");
}


let prueba2 = 420000;

let meta2 = 600000;

if (prueba2 >= meta2) {

    console.log("Prueba 2: Meta cumplida");

} else if (prueba2 >= meta2 * 0.8) {

    console.log("Prueba 2: Casi");

} else {

    console.log("Prueba 2: Falta");
}
