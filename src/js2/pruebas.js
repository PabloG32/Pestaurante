
// Modelo
class Categoria {
    constructor(nombre, platos) {
        this.nombre = nombre;
        this.platos = platos;
    }
}

class Plato {
    constructor(nombre, descripcion, precio, alergenos) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.alergenos = alergenos;
    }
}

class Alergeno {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Menu {
    constructor(nombre, platos) {
        this.nombre = nombre;
        this.platos = platos;
    }
}

class Restaurante {
    constructor(nombre, menus) {
        this.nombre = nombre;
        this.menus = menus;
    }
}

// Controlador
window.onload = function () {
    // Crear objetos iniciales
    const categorias = [
        new Categoria("Entrantes", [
            new Plato("Ensalada César", "Mezcla de lechugas, pollo, crutones y aderezo César", 9.99, ["Gluten", "Lácteos"]),
            new Plato("Croquetas de jamón", "Croquetas caseras de jamón ibérico", 7.50, ["Gluten", "Lácteos"]),
            new Plato("Nachos", "Nachos con guacamole", 10.50, ["Lácteos"]),
            new Plato("Patatas", "Patatas con huevo y jamon", 15.99, ["Huevos"])

        ]),
        new Categoria("Platos principales", [
            new Plato("Paella de marisco", "Paella con mariscos frescos", 15.99, ["Crustáceos"]),
            new Plato("Pasta", "Macarrones boloñesa", 15.00, []),
            new Plato("Sopa", "Sopa de verdura", 12.99, []),
            new Plato("Gazpacho", "Gazpacho andaluz", 7.99, [])
        ]),
        new Categoria("Platos segundos", [
            new Plato("Solomillo", "Solomillo de pavo", 15.99, []),
            new Plato("Dorada", "Dorada con naranja", 19.99, []),
            new Plato("Lagarto", "Lagarto con salsa de setas", 19.99, []),
            new Plato("Entrecot", "Entrecot de ternera a la parrilla con guarnición", 19.99, [])
        ]),
    ];

    const alergenos = [
        new Alergeno("Gluten"),
        new Alergeno("Lácteos"),
        new Alergeno("Crustáceos"),
        new Alergeno("Huevos")
    ];

    const menus = [
        new Menu("Menú del día 1", [
            categorias[0].platos[0],
            categorias[1].platos[2],
            categorias[2].platos[0]
        ]),
        new Menu("Menú del día 2", [
            categorias[0].platos[1],
            categorias[1].platos[3],
            categorias[2].platos[2]
        ]),
        new Menu("Menú del día 3", [
            categorias[0].platos[2],
            categorias[1].platos[1],
            categorias[2].platos[1]
        ]),
    ];

    const restaurantes = [
        new Restaurante("Restaurante 1", [
            menus[0]
        ]),
        new Restaurante("Restaurante 2", [
            menus[1]
        ]),
        new Restaurante("Restaurante 3", [
            menus[2]
        ]),

    ];
    cargarContenidoInicial(categorias, alergenos, menus, restaurantes);
}

// Función para cargar el contenido inicial
function cargarContenidoInicial(categorias) {
    const contenido = document.getElementById('contenido');
    const menu = document.getElementById('menu');

    // Limpiar contenido y menú
    contenido.innerHTML = '';
    menu.innerHTML = '<li><a href="#" id="inicio">Inicio</a></li>';

    // Agregar enlaces al menú
    categorias.forEach(categoria => {
        const categoriaId = categoria.nombre.replace(/\s+/g, '-').toLowerCase(); // Convertir nombre de categoría en ID
        menu.innerHTML += `<li><a href="#${categoriaId}">${categoria.nombre}</a></li>`;

        // Agregar categoría al contenido
        contenido.innerHTML += `
                    <section id="${categoriaId}">
                        <h2>${categoria.nombre}</h2>
                        <ul>
                            ${categoria.platos.map(plato => `<li>${plato.nombre}</li>`).join('')}
                        </ul>
                    </section>
                `;
    });

    // Agregar evento al enlace de inicio
    document.getElementById('inicio').addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenidoInicial(categorias);
    });
}