import { getCookie } from './util.js';
const MODEL = Symbol('RestaurantModel');
const VIEW = Symbol('RestaurantView');
const AUTH = Symbol('AUTH');
const USER = Symbol('USER');

class RestaurantController {
    constructor(RestaurantModel, viewRestaurant, auth) {
        this[MODEL] = RestaurantModel;
        this[VIEW] = viewRestaurant;
        this[AUTH] = auth;
        this[USER] = null;

        this.onLoad();
        this[VIEW].bindInit(this.handleInit);
        this[VIEW].bindCloseWindow();

    }
    onInit = () => {
        this.onCategories();
        this.onAllergenes();
        this.onMenus();
        this.onRestaurants();
        this.onDishes();
    };

    handleInit = () => {
        this.onInit();
    }

    onLoad = async () => {
        await this.createData();
        this.onDishes();

        // if (getCookie('accetedCookieMessage') !== 'true') {
        //     this[VIEW].showCookiesMessage();
        // }

        const userCookie = getCookie('activeUser');
        if (userCookie) {
            const user = this[AUTH].getUser(userCookie);
            if (user) {
                this[USER] = user;
                this.onOpenSession();
            }
        } else {
            this.onCloseSession();
        }
        this.onInit();
    };

    onCategories() {
        const categories = this[MODEL].categories;
        this[VIEW].showCategoriesMenu(categories);
        this[VIEW].bindCategoriesMenu(this.handlerShowCategory);
        this[VIEW].showCategories(categories);
        this[VIEW].bindCategoriesMain(this.handlerShowCategoryDishes);

    }

    onAllergenes() {
        const allergenes = this[MODEL].allergenes;
        this[VIEW].showAllergenesMenu(allergenes);
        this[VIEW].bindAllergenesMenu(this.handlerShowAllergen);
    }

    onMenus() {
        const menus = this[MODEL].menus;
        this[VIEW].showMenusMenu(menus);
        this[VIEW].bindMenusMenu(this.handlerShowMenu);
    }

    onRestaurants() {
        const restaurants = this[MODEL].restaurants;
        this[VIEW].showRestaurantsMenu(restaurants);
        this[VIEW].bindRestaurantsMenu(this.handlerShowRestaurant);

    }

    onDishes() {
        const dishes = this[MODEL].dishes;
        this[VIEW].showDishesMenu(dishes);
        this[VIEW].bindDishesMenu(this.handlerShowDish);
        this[VIEW].showDishes(dishes);
        this[VIEW].bindDishes(this.handlerShowDish);
    }

    onOpenSession() {
        this.onInit();
        this[VIEW].showAuthUserProfile(this[USER]);
        this[VIEW].showAdminMenu();
        this[VIEW].bindNewDIsh(this.handlerNewDish);
        this[VIEW].bindDelDIsh(this.handlerDelDish);
        this[VIEW].bindNewRestaurant(this.handlerNewRestaurant);
        this[VIEW].bindNewCat(this.handlerNewCat);
        this[VIEW].bindDelCat(this.handlerDelCat);
        this[VIEW].bindDishToMenu(this.handlerAsigDishMenu);
        this[VIEW].bindCloseSession(this.handleCloseSession);
        this[VIEW].bindDishFav(this.handlerDishFav);
        this[VIEW].bindVerDishFav(this.handlerVerDishFav);
    }

    onCloseSession() {
        this[USER] = null;
        this[VIEW].deleteUserCookie();
        this[VIEW].showIdentificationLink();
        this[VIEW].bindIdentificationLink(this.handleLoginForm);
        this[VIEW].removeAdminMenu();
    }

    async createData() {
        await fetch("../js2/data.json", { method: "post" }).then((response) => response.json()).then((data) => {

            for (const dish of data.dishes) {
                this[MODEL].addDish(this[MODEL].createDish(dish.name, dish.description, dish.ingredients, dish.image));

            }

            for (const category of data.categories) {
                const storedCategory = this[MODEL].createCategory(category.name, category.description);
                this[MODEL].addCategory(storedCategory);
                if (category.dishes) {
                    for (const dish of category.dishes) {
                        const sotredDish = this[MODEL].createDish(dish);
                        this[MODEL].assignCategoryToDish(storedCategory, sotredDish);
                    }
                }
            }

            for (const allergen of data.allergenes) {
                const storedAllergen = this[MODEL].createAllergen(allergen.name, allergen.description)
                this[MODEL].addAllergen(storedAllergen);
                if (allergen.dishes) {
                    for (const dish of allergen.dishes) {
                        const storedDish = this[MODEL].createDish(dish);
                        this[MODEL].assignAllergenToDish(storedDish, storedAllergen)
                    }
                }

            }

            for (const menu of data.menus) {
                const storedMenu = this[MODEL].createMenu(menu.name, menu.description);
                this[MODEL].addMenu(storedMenu);
                if (menu.dishes) {
                    for (const dish of menu.dishes) {
                        const storedDish = this[MODEL].createDish(dish);
                        this[MODEL].assignDishToMenu(storedMenu, storedDish);
                    }
                }

            }

            for (const restaurant of data.restaurants) {
                this[MODEL].addRestaurant(this[MODEL].createRestaurant(restaurant.name, restaurant.description));

            }
        });
    }

    handlerShowCategory = (name) => {
        const category = this[MODEL].createCategory(name);
        const dishes = this[MODEL].getDishesInCategory(category);
        this[VIEW].showDishesInCategory(dishes);
    }

    handlerShowAllergen = (name) => {
        const allergen = this[MODEL].createAllergen(name);
        const dishes = this[MODEL].getDishesWithAllergen(allergen);
        this[VIEW].showAllergenesDish(dishes);
    }

    handlerShowMenu = (name) => {
        const menu = this[MODEL].createMenu(name);
        const dishes = this[MODEL].getDishesInMenu(menu);
        this[VIEW].showDishesInMenu(dishes);
    }

    handlerShowRestaurant = (name) => {
        const restaurant = this[MODEL].createRestaurant(name);
        this[VIEW].showRestaurants(restaurant);
    }

    handlerShowDish = (name) => {
        const dish = this[MODEL].createDish(name);
        this[VIEW].showDishesMain(dish);
        this[VIEW].bindShowDishInfoWindows(this.handlerShowDishInfoWindows);
        this.onDishes();
    }

    handlerShowCategoryDishes = (name) => {
        const category = this[MODEL].createCategory(name);
        const dishes = this[MODEL].getDishesInCategory(category);
        this[VIEW].showDishesInCategory(dishes);
    }

    handlerShowDishInfoWindows = (name) => {
        try {
            const dish = this[MODEL].createDish(name);
            this[VIEW].showDishInfoWindows(dish);
        } catch {
            this[VIEW].showDishInfoWindows(null, "No existe")
        }
    }

    //Creacion de platos
    handlerNewDish = () => {
        this[VIEW].showNewDishForm();
        this[VIEW].bindNewDishForm(this.handleCreateDish);
    }

    handleCreateDish = (name, image, desc) => {
        const dish = this[MODEL].createDish(name, desc, [], image);
        let done; let
            error;
        try {
            this[MODEL].addDish(dish);
            done = true;
            this.onDishes();
        } catch (exception) {
            done = false;
            error = exception;
        }
        this[VIEW].showNewDishModal(done, dish, error);
    };

    //Borrado de platos
    handlerDelDish = () => {
        this[VIEW].showDelDishForm(this[MODEL].dishes);
        this[VIEW].bindDelDishForm(this.handleRemoveDish, this.handlerShowDish);
    }

    handleRemoveDish = (name) => {
        let done; let error; let dish;
        try {
            dish = this[MODEL].createDish(name);
            this[MODEL].removeDish(dish);
            done = true;
            this.onDishes();
        } catch (exception) {
            done = false;
            error = exception;
        }
        this[VIEW].showDelDishModal(done, dish, error);
    };

    //Nueva categoria
    handlerNewCat = () => {
        this[VIEW].showNewCatForm();
        this[VIEW].bindNewCatForm(this.handleCreateCat);
    }

    handleCreateCat = (name, desc) => {
        const cat = this[MODEL].createCategory(name, desc);
        let done; let
            error;
        try {
            this[MODEL].addCategory(cat);
            done = true;
            this.onCategories();
        } catch (exception) {
            done = false;
            error = exception;
        }
        this[VIEW].showNewCatModal(done, cat, error);
    };

    //Borrado de categorias
    handlerDelCat = () => {
        this[VIEW].showDelCatForm(this[MODEL].categories);
        this[VIEW].bindDelCatForm(this.handleRemoveCat, this.handlerShowCategory);
    }

    handleRemoveCat = (name) => {
        let done; let error; let cat;
        try {
            cat = this[MODEL].createCategory(name);
            this[MODEL].removeCategory(cat);
            done = true;
            this.onCategories();
        } catch (exception) {
            done = false;
            error = exception;
        }
        this[VIEW].showDelCatModal(done, cat, error);
    };

    //Nuevo restaurante
    handlerNewRestaurant = () => {
        this[VIEW].showNewRestaurantForm();
        this[VIEW].bindNewRestaurantForm(this.handleCreateRestaurant);
    }

    handleCreateRestaurant = (name, desc) => {
        const restaurant = this[MODEL].createRestaurant(name, desc);
        let done; let
            error;
        try {
            this[MODEL].addRestaurant(restaurant);
            done = true;
            this.onRestaurants();
        } catch (exception) {
            done = false;
            error = exception;
        }
        this[VIEW].showNewRestaurantModal(done, restaurant, error);
    };

    //CatToDish
    handlerAsigDishMenu = () => {
        this[VIEW].showDishToMenu(this[MODEL].dishes, this[MODEL].menus);
    }

    //---------------------------------------------USER----------------------------------------------------------------------
    handleLoginForm = () => {
        this[VIEW].showLogin();
        this[VIEW].bindLogin(this.handleLogin);
    };

    handleLogin = (username, password, remember) => {
        if (this[AUTH].validateUser(username, password)) {
            this[USER] = this[AUTH].getUser(username);
            this.onOpenSession();
            this[VIEW].showMessage(this[USER]);
            if (remember) {
                this[VIEW].setUserCookie(this[USER]);
            }
        } else {
            this[VIEW].showInvalidUserMessage();
        }
    };

    handleCloseSession = () => {
        this.onCloseSession();
        this.onInit();
    };


    //---------------------------------------------------------------DISH FAV--------------------------------------------------------------
    handlerDishFav = () => {
        this[VIEW].showDishFav(this[MODEL].dishes);
        this[VIEW].bindAddDishFav(this.handleAddDishFav);
    }

    handleAddDishFav = (name) => {
        let done; let error; let dish;
        try {
            dish = this[MODEL].createDish(name);
            let favoriteDishes = JSON.parse(localStorage.getItem('favoriteDishes')) || [];
            if (!favoriteDishes.some(dish => dish.name === name)) {
                favoriteDishes.push(dish);
                localStorage.setItem('favoriteDishes', JSON.stringify(favoriteDishes));
                done = true;
            } else {
                done = false;
            }
        } catch (exception) {
            done = false;
            error = exception;
        }
        this[VIEW].showAddDishModal(done, dish, error);
    };

    handlerVerDishFav = () => {
        this[VIEW].showVerDishFav(this[VIEW].getVerDishes());
    }
}
export default RestaurantController;
