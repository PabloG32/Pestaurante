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

// Vista
function cargarContenidoInicial(categorias, alergenos, menus, restaurantes) {
    // Función para mostrar los platos de una categoría
    function mostrarPlatosDeCategoria(categoria) {
        const zonaCentral = document.querySelector('.content');
        zonaCentral.innerHTML = '';

        const categoriaHTML = document.createElement('div');
        categoriaHTML.classList.add('categoria-seleccionada');
        categoriaHTML.innerHTML = `<h2>${categoria.nombre}</h2>`;
        categoria.platos.forEach(plato => {
            const platoElement = document.createElement('div');
            platoElement.classList.add('plato');
            platoElement.innerHTML = `
                <h3>${plato.nombre}</h3>
                <p>${plato.descripcion}</p>
                <p>Precio: ${plato.precio} €</p>
                <p>Alergenos: ${plato.alergenos.join(', ')}</p>
            `;
            categoriaHTML.appendChild(platoElement);
        });
        zonaCentral.appendChild(categoriaHTML);
    }

    // Función para manejar el clic en un enlace de categoría
    function clicEnCategoria(event) {
        event.preventDefault();
        const nombreCategoria = event.target.textContent;
        const categoriaSeleccionada = categorias.find(categoria => categoria.nombre === nombreCategoria);
        if (categoriaSeleccionada) {
            mostrarPlatosDeCategoria(categoriaSeleccionada);
        }
    }

    // Mostrar las categorías en la zona central
    const zonaCentral = document.querySelector('.content');
    zonaCentral.innerHTML = '';

    const categoriasHTML = document.createElement('div');
    categoriasHTML.classList.add('categorias');
    categorias.forEach(categoria => {
        const categoriaElement = document.createElement('div');
        categoriaElement.classList.add('categoria');
        categoriaElement.innerHTML = `<h3>${categoria.nombre}</h3>`;
        // Mostrar los platos de la categoría
        categoriaElement.addEventListener('click', clicEnCategoria);
        categoria.platos.forEach(plato => {
            const platoElement = document.createElement('div');
            platoElement.classList.add('plato');
/*             platoElement.innerHTML = `
                <h4>${plato.nombre}</h4>
                <p>${plato.descripcion}</p>
                <p>Precio: ${plato.precio} €</p>
                <p>Alergenos: ${plato.alergenos.join(', ')}</p>
            `; */
            categoriaElement.appendChild(platoElement);
        });
        categoriasHTML.appendChild(categoriaElement);
    });
    zonaCentral.appendChild(categoriasHTML);

    // Mostrar el menú con enlaces a las categorías
    const menuCategorias = document.createElement('nav');
    menuCategorias.innerHTML = '<h3>Menú de Categorías</h3>';
    const listaCategorias = document.createElement('ul');
    categorias.forEach(categoria => {
        const itemMenu = document.createElement('li');
        const enlace = document.createElement('a');
        enlace.textContent = categoria.nombre;
        enlace.href = '#' + categoria.nombre.toLowerCase().replace(' ', '-');
        enlace.addEventListener('click', clicEnCategoria);
        itemMenu.appendChild(enlace);
        listaCategorias.appendChild(itemMenu);
    });
    menuCategorias.appendChild(listaCategorias);
    zonaCentral.insertBefore(menuCategorias, zonaCentral.firstChild);
}
