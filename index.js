const div = document.getElementById("cards")
const boton = document.getElementById("boton")
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")
const canillas = [
    
    
    {
    id:1,
    nombre: "Honey",
    precio: 600,
    imagen : "https:img.freepik.com/foto-gratis/vista-frontal-vasos-cerveza-trigo_23-2148755010.jpg?w=740&t=st=1664490272~exp=1664490872~hmac=d1d9870d01a08d7dc2974cda190780817a204a95c0048df24310da2d4a6cefbd"
    },
    {
    id:2,
    nombre: "Ipa",
    precio: 670,
    imagen :  "https://img.freepik.com/foto-gratis/vaso-cerveza-fria-fotografia-macro_53876-42355.jpg?size=626&ext=jpg"
    },
    {
    id:3,
    nombre: "Apa",
    precio: 650,
    imagen : "https://img.freepik.com/fotos-premium/vaso-lleno-cerveza-fria-mesa-madera_434193-1800.jpg?size=626&ext=jpg"
    },
    {
    id:4,
    nombre: "Stout",
    precio: 620,
    imagen : "https://t3.ftcdn.net/jpg/04/89/40/54/240_F_489405409_JvVFrGwcP4kHhKOLoKPCLAlFaPODhDvn.jpg"
    },
    {
    id:5,
    nombre: "Scotish",
    precio: 600,
    imagen : "https://img.freepik.com/foto-gratis/mujer-cerveza-artesana-bar_23-2148111256.jpg?size=626&ext=jpg"
    },
    {
    id:6,
    nombre: "Golden",
    precio: 550,
    imagen : "https://img.freepik.com/foto-gratis/vaso-cerveza-espuma-mesa-madera_181624-56017.jpg?t=st=1664491174~exp=1664491774~hmac=28f9f777147d1bfdd15bd8284f05396b8b01fd55032c59985db7743f747c09d5"
    }
];


canillas.forEach(item => {
    let productoRenderizado = document.createElement("div")
    productoRenderizado.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="nombre">${item.nombre}</h5>        
        <p class= "precio">Precio: $${item.precio}</p>
    </div>
    </div>
            <button id="${item.id}" class="comprar">Comprar</button>
    </div>
    `
    div.append(productoRenderizado)
    document.getElementById(`${item.id}`).addEventListener("click", () => console.log(`soy ${item.nombre}`))
})


const buscadorCanillas = (input) => {
    console.log(input)
    let buscadorCanillas = canillas.find(canillas => canillas.nombre.includes(input))
    console.log(buscadorCanillas);
    inputAfter.value = ``


}


botonInput.addEventListener("click",() => buscadorCanillas(inputAfter.value))