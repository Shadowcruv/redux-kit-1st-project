const configureStore = require('@reduxjs/toolkit').configureStore;
const pizzaReducer = require('../features/pizza/pizzaSlice')
const burgerReducer = require('../features/burger/burgerSlice') //you can only have one default export in a file to this imports the variable you exported in that pizzaSlice file
const logger = require('redux-logger').createLogger();
const productReducer = require('../features/product/productSlice')




const store = configureStore({
    reducer : {
        pizza : pizzaReducer,
        burger : burgerReducer,  // multiple reducers can been passed here
        product : productReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports=store; 