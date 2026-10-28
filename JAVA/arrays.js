
console.log("===== GLOW MAKEUP =====");

// 1. CREAR LOS ARRAYS

const productos = [
    "Gloss",
    "Labial",
    "Rimel",
    "Rubor",
    "Esponja"
];

const precios = [
    25000,
    35000,
    28000,
    40000,
    15000
];


// 2. LEER LOS ARRAYS

console.log("Primer producto:", productos[0]);

console.log("Cantidad de productos:", productos.length);

console.log("Ultimo producto:", productos[productos.length - 1]);


// 3. AGREGAR UN PRODUCTO

productos.push("Delineador");
precios.push(20000);


// 4. ELIMINAR EL ULTIMO PRODUCTO

productos.pop();
precios.pop();


// 5. BUSCAR UN PRODUCTO

console.log("¿Tenemos Gloss?", productos.includes("Gloss"));


// 6. FILTRAR PRODUCTOS ECONOMICOS

const baratos = precios.filter(p => p <= 30000);

console.log("Productos económicos:", baratos);


// 7. CALCULAR PRECIOS CON IVA

const conIva = precios.map(p => Math.round(p * 1.19));

console.log("Precios con IVA:", conIva);


// 8. MOSTRAR LOS PRODUCTOS EN HTML

const lista = document.getElementById("lista");

productos.forEach((p, i) => {

    const li = document.createElement("li");

    li.textContent = p + " - $" + precios[i];

    lista.appendChild(li);

});
