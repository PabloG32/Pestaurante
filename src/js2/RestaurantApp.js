import RestaurantsManager from "./RestaurantModel.js";

import RestaurantController from "./RestaurantController.js";
import RestaurantView from "./RestaurantView.js";


const RestaurantApp = new RestaurantController(RestaurantsManager.getInstance(), new RestaurantView());



/*
const categorias = [
    new Category("Entrantes", [
        new Dish("Ensalada César", "Mezcla de lechugas, pollo, crutones y aderezo César", 9.99, ["Gluten", "Lácteos"]),
        new Dish("Croquetas de jamón", "Croquetas caseras de jamón ibérico", 7.50, ["Gluten", "Lácteos"]),
        new Dish("Nachos", "Nachos con guacamole", 10.50, ["Lácteos"]),
        new Dish("Patatas", "Patatas con huevo y jamon", 15.99, ["Huevos"])

    ]),
    new Category("Platos principales", [
        new Dish("Paella de marisco", "Paella con mariscos frescos", 15.99, ["Crustáceos"]),
        new Dish("Pasta", "Macarrones boloñesa", 15.00, []),
        new Dish("Sopa", "Sopa de verdura", 12.99, []),
        new Dish("Gazpacho", "Gazpacho andaluz", 7.99, [])
    ]),
    new Category("Platos segundos", [
        new Dish("Solomillo", "Solomillo de pavo", 15.99, []),
        new Dish("Dorada", "Dorada con naranja", 19.99, []),
        new Dish("Lagarto", "Lagarto con salsa de setas", 19.99, []),
        new Dish("Entrecot", "Entrecot de ternera a la parrilla con guarnición", 19.99, [])
    ]),
];

const alergenos = [
    new Allergen("Gluten"),
    new Allergen("Lácteos"),
    new Allergen("Crustáceos"),
    new Allergen("Huevos")
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
    new Restaurant("Restaurant 1", [
        menus[0]
    ]),
    new Restaurant("Restaurant 2", [
        menus[1]
    ]),
    new Restaurant("Restaurant 3", [
        menus[2]
    ]),

];
*/

export default RestaurantApp;