class RestauranteView {
    constructor() {
        this.main = document.getElementsByTagName('main')[0];
        this.categoriesMenu = document.getElementById('categories-menu');
        this.allergenesMenu = document.getElementById('allergenes-menu');
        this.menusMenu = document.getElementById('menus-menu');
        this.restaurantsMenu = document.getElementById('restaurants-menu');
        this.dishesMenu = document.getElementById('dishes-menu');
        this.categories = document.getElementById('cat-centro');
        this.dishes = document.getElementById('platos-centro');
        this.restaurantsCentral = document.getElementById('restaurantsCentral');
        this.dishesCategory = document.getElementById('platosCategorias');

    }

    init() {

    }

    bindInit(handler) {
        document.getElementById('init').addEventListener('click', (event) => {
            handler();
        });
    }

    //Categories
    showCategoriesMenu(categories) {
        this.categoriesMenu.replaceChildren();
        for (const category of categories) {
            this.categoriesMenu.insertAdjacentHTML('beforeend', `<li><a data-category="${category.name}" class="dropdown-item" href="#">${category.name}</a></li>`)
        }
    }

    bindCategoriesMenu(handler) {
        for (const li of this.categoriesMenu.children) {
            li.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.category);
            });
        }
    }

    showCategories(categories) {
        this.categories.replaceChildren();
        for (const category of categories) {
            this.categories.insertAdjacentHTML('beforeend', `
            <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>${category.name}</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                    dy=".3em">${category.name}</text>
            </svg>
            <div class="card-body">
                <p class="card-text">${category.name}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" data-cat="${category.name}" class="btn btn-sm btn-outline-secondary">Ver</button>
                    </div>
                </div>
            </div>
            </div>
        </div>`)
        }
    }

    //Allergenes
    showAllergenesMenu(allergenes) {
        this.allergenesMenu.replaceChildren();
        for (const allergen of allergenes) {
            this.allergenesMenu.insertAdjacentHTML('beforeend', `<li><a data-allergen="${allergen.name}" class="dropdown-item" href="#">${allergen.name}</a></li>`)
        }
    }

    bindAllergenesMenu(handler) {
        for (const a of this.allergenesMenu.children) {
            a.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.allergen);
            });
        }
    }

    showAllergenesDish(dishes) {
        this.main.replaceChildren();
        for (const dish of dishes) {
            this.main.insertAdjacentHTML('beforeend', `
            <div class="container px-4 py-5" id="featured-3">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div
                        class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg class="bi" width="1em" height="1em">
                            <img src="${dish.image}" alt="${dish.name}" width="100%" height="100%">
                        </svg>
                    </div>
                    <h3 class="fs-2 text-body-emphasis">${dish.name}</h3>
                    <p>${dish.description}.</p>
                </div>
            </div>
        </div>
            
            `)
        }
    }

    //Menus
    showMenusMenu(menus) {
        this.menusMenu.replaceChildren();
        for (const menu of menus) {
            this.menusMenu.insertAdjacentHTML('beforeend', `<li><a data-menu="${menu.name}" class="dropdown-item" href="#">${menu.name}</a></li>`)
        }
    }

    bindMenusMenu(handler) {
        for (const a of this.menusMenu.children) {
            a.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.menu);
            });
        }
    }

    showDishesInMenu(dishes) {
        this.main.replaceChildren();
        for (const dish of dishes) {
            this.main.insertAdjacentHTML('beforeend', `
            <div class="container px-4 py-5" id="featured-3">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div
                        class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg class="bi" width="1em" height="1em">
                            <img src="${dish.image}" alt="${dish.name}" width="100%" height="100%">
                        </svg>
                    </div>
                    <h3 class="fs-2 text-body-emphasis">${dish.name}</h3>
                    <p>${dish.description}.</p>
                </div>
            </div>
        </div>
            
        `)
        }

    }

    //Restaurant
    showRestaurantsMenu(restaurants) {
        this.restaurantsMenu.replaceChildren();
        for (const restaurant of restaurants) {
            this.restaurantsMenu.insertAdjacentHTML('beforeend', `<li><a data-restaurants="${restaurant.name}" class="dropdown-item" href="#">${restaurant.name}</a></li>`)
        }
    }

    bindRestaurantsMenu(handler) {
        for (const a of this.restaurantsMenu.children) {
            a.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.restaurants);
            });
        }
    }

    showRestaurants(restaurant) {
        this.main.replaceChildren();
        this.main.insertAdjacentHTML('beforeend', `
        <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="../img/restaurante.jpg" alt="restaurante" width="50%" height="50%">
        <h1 class="display-5 fw-bold text-body-emphasis">${restaurant.name}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">${restaurant.description}</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Ubicación</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Reseñas</button>
          </div>
        </div>
      </div>
        `);
    }

    //Platos
    showDishesMenu(dishes) {
        this.dishesMenu.replaceChildren();
        for (const dish of dishes) {
            this.dishesMenu.insertAdjacentHTML('beforeend', `<li><a data-dishes="${dish.name}" class="dropdown-item" href="#">${dish.name}</a></li>`)
        }
    }

    bindDishesMenu(handler) {
        for (const a of this.dishesMenu.children) {
            a.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.dishes);
            });
        }
    }

    showDishesMain(dish) {
        this.main.replaceChildren();
        this.main.insertAdjacentHTML('beforeend', `
            <div class="container px-4 py-5" id="featured-3">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div
                        class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg class="bi" width="1em" height="1em">
                            <img src="${dish.image}" alt="${dish.name}" width="100%" height="100%">
                        </svg>
                    </div>
                    <h3 class="fs-2 text-body-emphasis">Nombre: ${dish.name}</h3>
                    <p>Descripción: ${dish.description}.</p>
                </div>
            </div>
        </div>
            
        `)

    }

    obtenerDishesAleatorios(iterable) {
        const dishes = [...iterable];
        // Generar tres números aleatorios entre 0 y la longitud del array de dishes
        const aleatorios = Array.from({ length: 3 }, () => Math.floor(Math.random() * dishes.length));
        // Devolver los dishes correspondientes a las posiciones aleatorias generadas
        return aleatorios.map(posicion => dishes[posicion]);

    }

    showDishes(dishes) {
        const platosAleatorios = this.obtenerDishesAleatorios(dishes);
        this.dishes.replaceChildren();
        for (const dish of platosAleatorios) {
            this.dishes.insertAdjacentHTML('beforeend', `
            <div class="col">
            <div class="card shadow-sm">
            <img src="${dish.image}" alt="${dish.name}">
                <div class="card-body">
                <p class="card-text">${dish.name}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#info${dish.name}">Ver</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <!-- Modal info -->
        <div class="modal fade" id="info${dish.name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" id="modalHeader">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${dish.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <p>
                            Nombre: ${dish.name}
                            <br><br>
                            Descripción: ${dish.description}
                            <br><br>
                            Ingredientes: ${dish.ingredients}
                            <br><br>
                            Imagen: <img src="${dish.image}" alt="${dish.name}" width="200px" height="140px">
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div> <!--Fin modal-->
        `)
        }
    }

    bindDishes(handler) {
        for (const div of this.dishes.children) {
            div.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.dish);
            });
        }
    }

    showDishesInCategory(dishes) {
        this.main.replaceChildren();
        for (const dish of dishes) {
            this.main.insertAdjacentHTML('beforeend', `
            <div class="container px-4 py-5" id="featured-3">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div
                        class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg class="bi" width="1em" height="1em">
                            <img src="${dish.image}" alt="${dish.name}" width="100%" height="100%">
                        </svg>
                    </div>
                    <h3 class="fs-2 text-body-emphasis">${dish.name}</h3>
                    <p>${dish.description}.</p>
                </div>
            </div>
        </div>
            
        `)
        }

    }

    bindCategoriesMain(handler) {
        for (const buttom of this.categories.children) {
            buttom.addEventListener('click', (event) => {
                handler(event.target.dataset.cat);
            });
        }
    }
}
export default RestauranteView;