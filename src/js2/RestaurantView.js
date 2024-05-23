import { newDishValidation, newCatValidation, newRestaurantValidation } from '../js2/validation.js';
const EXCECUTE_HANDLER = Symbol('excecuteHandler');
class RestauranteView {
    constructor() {
        this.main = document.getElementsByTagName('main')[0];
        this.header = document.getElementsByTagName('header')[0];
        this.categoriesMenu = document.getElementById('categories-menu');
        this.allergenesMenu = document.getElementById('allergenes-menu');
        this.menusMenu = document.getElementById('menus-menu');
        this.restaurantsMenu = document.getElementById('restaurants-menu');
        this.dishesMenu = document.getElementById('dishes-menu');
        this.categories = document.getElementById('cat-centro');
        this.dishes = document.getElementById('platos-centro');
        this.restaurantsCentral = document.getElementById('restaurantsCentral');
        this.dishesCategory = document.getElementById('platosCategorias');
        this.infoWindow = null;
        this.closeButton = document.getElementById('closeWindow');
        this.newDish = document.getElementById('newDish');
        this.delDish = document.getElementById('delDish');
        this.newCat = document.getElementById('newCategory');
        this.delCat = document.getElementById('delCategory');
        this.newRestaurant = document.getElementById('newRestaurant');

    }

    // [EXCECUTE_HANDLER](handler, handlerArguments, scrollElement, data, url, event) {
    //     handler(...handlerArguments);
    //     const scroll = document.querySelector(scrollElement);
    //     if (scroll) scroll.scrollIntoView();
    //     history.pushState(data, null, url);
    //     event.preventDefault();
    // }

    // init() {

    // }

    bindInit(handler) {
        document.getElementById('init').addEventListener('click', (event) => {
            handler();
            //this[EXCECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#', event);
        });
    }

    //Categories
    showCategoriesMenu(categories) {
        this.categoriesMenu.replaceChildren();
        for (const category of categories) {
            this.categoriesMenu.insertAdjacentHTML('beforeend', `<li><a id="cat-menu" data-category="${category.name}" class="dropdown-item" href="#">${category.name}</a></li>`)
        }
    }

    bindCategoriesMenu(handler) {
        for (const li of this.categoriesMenu.children) {
            li.firstElementChild.addEventListener('click', (event) => {
                handler(event.currentTarget.dataset.category);
                // const { category } = event.currentTarget.dataset;
                // this[EXCECUTE_HANDLER](
                //     handler,
                //     [category],
                //     '#cat-menu',
                //     { action: 'showCategoriesMenu', category },
                //     `#${category}`,
                //     event,
                // );
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
                        <button type="button" data-cat="${category.name}" class="btn btn-sm btn-outline-secondary" href="#cat-centro">Ver</button>
                    </div>
                </div>
            </div>
            </div>
        </div>`)
        }
    }

    bindCategoriesMain(handler) {
        for (const buttom of this.categories.children) {
            buttom.addEventListener('click', (event) => {
                handler(event.target.dataset.cat);
            });
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
        const navCats = document.getElementById('navCats');
        const container = navCats.nextElementSibling;
        container.replaceChildren();
        for (const dish of dishes) {
            this.dishesMenu.insertAdjacentHTML('beforeend', `<li><a data-dishes="${dish.name}" class="dropdown-item" href="#">${dish.name}</a></li>`)
        }
    }

    bindDishesMenu(handler) {
        // for (const a of this.dishesMenu.children) {
        //     a.firstElementChild.addEventListener('click', (event) => {
        //         handler(event.currentTarget.dataset.dishes);
        //     });
        // }
        const navCats = document.getElementById('navCats');
        const links = navCats.nextElementSibling.querySelectorAll('a');
        for (const link of links) {
            link.addEventListener('click', (event) => {
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
                    <button type="button" class="btn btn-sm btn-outline-secondary btnInfo" id="btnInfo" data-name="${dish.name}">Info</button>
                </div>
            </div>
        </div>
            
        `)

    }

    obtenerDishesAleatorios(iterable) {
        const dishes = [...iterable];
        const aleatorios = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * dishes.length);
            aleatorios.push(dishes[randomIndex]);
            dishes.splice(randomIndex, 1);
        }
        return aleatorios;
    }

    showDishes(dishes) {
        const platosAleatorios = this.obtenerDishesAleatorios(dishes);
        this.dishes.replaceChildren();
        for (const dish of platosAleatorios) {
            this.dishes.insertAdjacentHTML('beforeend', `
            <div class="col">
            <div class="card shadow-sm">
            <img src="${dish.image}" alt="${dish.name}" class="card-img-top" style="height: 300px; object-fit: cover;">
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

    //Ventana Info
    showDishInfoWindows(dish, message = "") {
        let main = this.infoWindow.document.querySelector('main');
        const header = this.infoWindow.document.querySelector('header nav');
        main.replaceChildren();
        header.replaceChildren();
        if (dish) {
            this.infoWindow.document.title = `${dish.name}`;
            header.insertAdjacentHTML('beforeend', `<h1 dataname="${dish.name}" class="display-5">${dish.name}</h1>`);
            main.insertAdjacentHTML('beforeend', `
            <div class="row d-flex
            justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-12">
                        <div class="images p-3">
                            <div class="text-center p-4"> <img id="main-image" src="${dish.image}" width="50%" height="50%" /> </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="dish p-4">
                            <div class="mt-4 mb-3"> <span
                                    class="text-uppercase text-muted description">${dish.description}</span>
                                <div class="price d-flex flex-row align-itemscenter">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br><br>
            `);
            main.insertAdjacentHTML('beforeend', '<button class="btn btn-danger" onClick = "window.close()" > Cerrar</button > ');
        }
        else {
            main = document.createElement('div');
            main.classList.add('container');
            main.classList.add('mt-5');
            main.classList.add('mb-5');
            main.insertAdjacentHTML('beforeend', `<div div class="row d-flex
            justify - content - center">${message}</div>`);
        }
        this.infoWindow.document.body.scrollIntoView();

    }

    bindShowDishInfoWindows(handler) {
        const bOpen = document.getElementById("btnInfo");
        bOpen.addEventListener('click', (event) => {
            if (!this.infoWindow || this.infoWindow.closed) {
                this.infoWindow = window.open("info.html", "InfoWindow", "with=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no",);
                this.infoWindow.addEventListener("DOMContentLoaded", () => {
                    handler(event.target.dataset.name);
                });
            } else {
                handler(event.target.dataset.name);
                this.infoWindow.focus();
            }
        });
    }

    //Cerrar ventana auxiliar
    bindCloseWindow() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => {
                if (this.infoWindow && !this.infoWindow.closed) {
                    this.infoWindow.close();
                }
            });
        }
    }


    //--------------------------------------------------------------PLATO----------------------------------------------------------
    //Añadir un plato
    bindNewDIsh(handler) {
        this.newDish.addEventListener('click', (event) => {
            handler(event.currentTarget.dataset);
        });
    }

    //Formulario para crear un nuevo plato
    showNewDishForm() {
        this.main.replaceChildren();
        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('my-3');
        container.id = 'new-dish';
        container.insertAdjacentHTML(
            'afterbegin',
            '<h1 class="display-5">Nuevo plato</h1>',
        );
        container.insertAdjacentHTML(
            'beforeend',
            `<form name="fNewDish" role="form" class="row g-3" novalidate>
            <div class="col-md-6 mb-3">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Nombre*</span>
                    <input type="text" class="form-control" id="ncName" name="ncName" placeholder="Nombre del plato" value=""
                        required>
                    <div class="invalid-feedback">El nombre es obligatorio.</div>
                    <div class="valid-feedback">Correcto.</div>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">URL de la imagen*</span>
                    <input type="url" class="form-control" id="ncUrl" name="ncUrl" placeholder="URL de la imagen" value=""
                        required>
                    <div class="invalid-feedback">La URL no es válida.</div>
                    <div class="valid-feedback">Correcto.</div>
                </div>
            </div>
            <div class="col-md-12 mb-3">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Descripción*</span>
                    <input type="text" class="form-control" id="ncDescription" name="ncDescription"
                        placeholder="Descripción del plato" value="" required>
                    <div class="invalid-feedback">La descripción es obligatoria.</div>
                    <div class="valid-feedback">Correcto.</div>
                </div>
            </div>
            <div class="mb-12">
                <button class="btn btn-primary" type="submit">Enviar</button>
                <button class="btn btn-secondary" type="reset">Cancelar</button>
            </div>
        </form>
        `,
        );
        this.main.append(container);
    }

    bindNewDishForm(handler) {
        newDishValidation(handler);
    }

    //Modal para añadir un plato
    showNewDishModal(done, dish, error) {
        const messageModalContainer = document.getElementById('messageModal');
        const messageModal = new bootstrap.Modal('#messageModal');
        const title = document.getElementById('messageModalTitle');
        title.innerHTML = 'Nuevo plato';
        const body = messageModalContainer.querySelector('.modal-body');
        body.replaceChildren();
        if (done) {
            body.insertAdjacentHTML('afterbegin', `<div class="p-3">El plato
        <strong>${dish.name}</strong> ha sido añadido correctamente.</div>`);
        } else {
            body.insertAdjacentHTML(
                'afterbegin',
                `<div class="error text-danger p-3"><i class="bi bi-exclamationtriangle"></i> El plato <strong>${dish.name}</strong> ya está
        creado.</div>`,
            );
        }
        messageModal.show();
        const listener = (event) => {
            if (done) {
                document.fNewDish.reset();
            }
            document.fNewDish.ncName.focus();
        };
        messageModalContainer.addEventListener('hidden.bs.modal', listener, {
            once: true
        });
    }

    //Borrar plato
    bindDelDIsh(handler) {
        this.delDish.addEventListener('click', (event) => {
            handler(event.currentTarget.dataset);
        });
    }

    //Formulario para borrar un plato
    showDelDishForm(dishes) {
        this.main.replaceChildren();
        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('my-3');
        container.id = 'remove-dish';
        container.insertAdjacentHTML(
            'afterbegin',
            '<h1 class="display-5">Eliminar un plato</h1>',
        );
        const row = document.createElement('div');
        row.classList.add('row');
        for (const dish of dishes) {
            row.insertAdjacentHTML('beforeend', `<div class="col-lg-3 col-md-6">
        <div class="dish-list-image"><img src="${dish.image}" alt="${dish.name}" class="card-img-top" style="height: 300px; object-fit: cover;"/>
        </div>
        
        <div class="dish-list-text">
        <a data-dish="${dish.name}"><h3>${dish.name}</h3></a>
        </div>
        <div><button class="btn btn-danger" data-dish="${dish.name}" type='button'>Eliminar</button></div>
        <br>
        </div>`);
        }
        container.append(row);
        this.main.append(container);
    }

    bindDelDishForm(delHandler) {
        const removeContainer = document.getElementById('remove-dish');
        const buttons = removeContainer.getElementsByTagName('button');
        for (const button of buttons) {
            button.addEventListener('click', function (event) {
                delHandler(this.dataset.dish);
            });
        }
        const categoryLinks = removeContainer.querySelectorAll('a[data-dish]');
    }

    //Modal del borrado de platos
    showDelDishModal(done, dish, error) {
        const messageModalContainer = document.getElementById('messageModal');
        const messageModal = new bootstrap.Modal('#messageModal');
        const title = document.getElementById('messageModalTitle');
        title.innerHTML = 'Borrado de platos';
        const body = messageModalContainer.querySelector('.modal-body');
        body.replaceChildren();
        if (done) {
            body.insertAdjacentHTML('afterbegin', `<div class="p-3">El plato
        <strong>${dish.name}</strong> ha sido eliminado correctamente.</div>`);
        } else {
            body.insertAdjacentHTML(
                'afterbegin',
                `<div class="error text-danger p-3"><i class="bi bi-exclamationtriangle"></i> El plato <strong>${dish.name}</strong> no se ha podido borrar.</div>`,
            );
        }
        messageModal.show();
        const listener = (event) => {
            if (done) {
                const removeDish = document.getElementById('remove-dish');
                const button = removeDish.querySelector(`button.btn[data-dish="${dish.name}"]`);
                button.parentElement.parentElement.remove();
            }
        };
        messageModalContainer.addEventListener('hidden.bs.modal', listener, {
            once: true
        });
    }

    //----------------------------------------------------CATEGORIA------------------------------------------------------------------
    //Añadir categoria
    bindNewCat(handler) {
        this.newCat.addEventListener('click', (event) => {
            handler(event.currentTarget.dataset);
        });
    }

    //Formulario para añadir una categoria
    showNewCatForm() {
        this.main.replaceChildren();
        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('my-3');
        container.id = 'new-cat';
        container.insertAdjacentHTML(
            'afterbegin',
            '<h1 class="display-5">Nueva categoria</h1>',
        );
        container.insertAdjacentHTML(
            'beforeend',
            `<form name="fNewCat" role="form" class="row g-3" novalidate>
            <div class="col-md-6 mb-3">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Nombre*</span>
                    <input type="text" class="form-control" id="ncName" name="ncName" placeholder="Nombre de la categoria"
                        value="" required>
                    <div class="invalid-feedback">El nombre es obligatorio.</div>
                    <div class="valid-feedback">Correcto.</div>
                </div>
            </div>
            <div class="col-md-12 mb-3">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Descripción*</span>
                    <input type="text" class="form-control" id="ncDescription" name="ncDescription"
                        placeholder="Descripción de la categoria" value="" required>
                    <div class="invalid-feedback">La descripción es obligatoria.</div>
                    <div class="valid-feedback">Correcto.</div>
                </div>
            </div>
            <div class="mb-12">
                <button class="btn btn-primary" type="submit">Enviar</button>
                <button class="btn btn-secondary" type="reset">Cancelar</button>
            </div>
        </form>`,
        );
        this.main.append(container);
    }

    bindNewCatForm(handler) {
        newCatValidation(handler);
    }

    //Modal para añadir una categoria
    showNewCatModal(done, cat, error) {
        const messageModalContainer = document.getElementById('messageModal');
        const messageModal = new bootstrap.Modal('#messageModal');
        const title = document.getElementById('messageModalTitle');
        title.innerHTML = 'Nuevo plato';
        const body = messageModalContainer.querySelector('.modal-body');
        body.replaceChildren();
        if (done) {
            body.insertAdjacentHTML('afterbegin', `<div class="p-3">La categoría
        <strong>${cat.name}</strong> ha sido añadida correctamente.</div>`);
        } else {
            body.insertAdjacentHTML(
                'afterbegin',
                `<div class="error text-danger p-3"><i class="bi bi-exclamationtriangle"></i> La categoria <strong>${cat.name}</strong> ya está
        creado.</div>`,
            );
        }
        messageModal.show();
        const listener = (event) => {
            if (done) {
                document.fNewCat.reset();
            }
            document.fNewCat.ncName.focus();
        };
        messageModalContainer.addEventListener('hidden.bs.modal', listener, {
            once: true
        });
    }

    //Borrar categoria
    bindDelCat(handler) {
        this.delCat.addEventListener('click', (event) => {
            handler(event.currentTarget.dataset);
        });
    }

    //Formulario para borrar un plato
    showDelCatForm(categories) {
        this.main.replaceChildren();
        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('my-3');
        container.id = 'remove-cat';
        container.insertAdjacentHTML(
            'afterbegin',
            '<h1 class="display-5">Eliminar una categoria</h1>',
        );
        const row = document.createElement('div');
        row.classList.add('row');
        for (const cat of categories) {
            row.insertAdjacentHTML('beforeend', `<div class="col-lg-3 col-md-6">
            <div class="dish-list-text">
            <a data-cat="${cat.name}"><h3>${cat.name}</h3></a>
            </div>
            <div><button class="btn btn-danger" data-cat="${cat.name}" type='button'>Eliminar</button></div>
            <br>
            </div>`);
        }
        container.append(row);
        this.main.append(container);
    }

    bindDelCatForm(handler) {
        const removeContainer = document.getElementById('remove-cat');
        const buttons = removeContainer.getElementsByTagName('button');
        for (const button of buttons) {
            button.addEventListener('click', function (event) {
                handler(this.dataset.cat);
            });
        }
        const categoryLinks = removeContainer.querySelectorAll('a[data-cat]');
    }

    //Modal de borrar una cat
    showDelCatModal(done, cat, error) {
        const messageModalContainer = document.getElementById('messageModal');
        const messageModal = new bootstrap.Modal('#messageModal');
        const title = document.getElementById('messageModalTitle');
        title.innerHTML = 'Borrado de categoria';
        const body = messageModalContainer.querySelector('.modal-body');
        body.replaceChildren();
        if (done) {
            body.insertAdjacentHTML('afterbegin', `<div class="p-3">La categoria
            <strong>${cat.name}</strong> ha sido eliminada correctamente.</div>`);
        } else {
            body.insertAdjacentHTML(
                'afterbegin',
                `<div class="error text-danger p-3"><i class="bi bi-exclamationtriangle"></i> La categoria <strong>${cat.name}</strong> no se ha podido borrar.</div>`,
            );
        }
        messageModal.show();
        const listener = (event) => {
            if (done) {
                const removeCat = document.getElementById('remove-cat');
                const button = removeCat.querySelector(`button.btn[data-cat="${cat.name}"]`);
                button.parentElement.parentElement.remove();
            }
        };
        messageModalContainer.addEventListener('hidden.bs.modal', listener, {
            once: true
        });
    }

    //--------------------------------------------------------------------RESTAURANTE----------------------------------------------
    //Añadir restaurante
    bindNewRestaurant(handler) {
        this.newRestaurant.addEventListener('click', (event) => {
            handler(event.currentTarget.dataset);
        });
    }

    //Formulario para añadir un restaurante
    showNewRestaurantForm() {
        this.main.replaceChildren();
        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('my-3');
        container.id = 'new-restaurant';
        container.insertAdjacentHTML(
            'afterbegin',
            '<h1 class="display-5">Nuevo restaurante</h1>',
        );
        container.insertAdjacentHTML(
            'beforeend',
            `<form name="fNewRestaurant" role="form" class="row g-3" novalidate>
            <div class="col-md-6 mb-3">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Nombre*</span>
                    <input type="text" class="form-control" id="nrName" name="nrName" placeholder="Nombre del restaurante"
                        value="" required>
                    <div class="invalid-feedback">El nombre es obligatorio.</div>
                    <div class="valid-feedback">Correcto.</div>
                </div>
            </div>
            <div class="col-md-12 mb-3">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Descripción*</span>
                    <input type="text" class="form-control" id="nrDescription" name="nrDescription"
                        placeholder="Descripción del restaurante" value="" required>
                    <div class="invalid-feedback">La descripción es obligatoria.</div>
                    <div class="valid-feedback">Correcto.</div>
                </div>
            </div>
            <div class="mb-12">
                <button class="btn btn-primary" type="submit">Enviar</button>
                <button class="btn btn-secondary" type="reset">Cancelar</button>
            </div>
        </form>`,
        );
        this.main.append(container);
    }

    bindNewRestaurantForm(handler) {
        newRestaurantValidation(handler);
    }

    //Modal de restaurante añadido
    showNewRestaurantModal(done, restaurant, error) {
        const messageModalContainer = document.getElementById('messageModal');
        const messageModal = new bootstrap.Modal('#messageModal');
        const title = document.getElementById('messageModalTitle');
        title.innerHTML = 'Nuevo restaurante';
        const body = messageModalContainer.querySelector('.modal-body');
        body.replaceChildren();
        if (done) {
            body.insertAdjacentHTML('afterbegin', `<div class="p-3">El restaurante
        <strong>${restaurant.name}</strong> ha sido añadido correctamente.</div>`);
        } else {
            body.insertAdjacentHTML(
                'afterbegin',
                `<div class="error text-danger p-3"><i class="bi bi-exclamationtriangle"></i> El restaurante <strong>${restaurant.name}</strong> ya está
        creado.</div>`,
            );
        }
        messageModal.show();
        const listener = (event) => {
            if (done) {
                document.fNewrestaurant.reset();
            }
            document.fNewrestaurant.nrName.focus();
        };
        messageModalContainer.addEventListener('hidden.bs.modal', listener, {
            once: true
        });
    }
}
export default RestauranteView;