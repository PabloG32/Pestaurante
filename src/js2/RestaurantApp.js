import RestaurantsManager from "./RestaurantModel.js";

import RestaurantController from "./RestaurantController.js";
import RestaurantView from "./RestaurantView.js";


const RestaurantApp = new RestaurantController(RestaurantsManager.getInstance(), new RestaurantView());

// const historyActions = {
//     init: () => {
//         RestaurantApp.handleInit();
//     },
//     showCategoriesMenu: () => RestaurantApp.handlerShowCategory()
// };

// window.addEventListener('popstate', (event) => {
//     if (event.state) {
//         historyActions[event.state.action](event);
//     }
// });

// history.replaceState({ action: 'init' }, null);

export default RestaurantApp;