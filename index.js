const store = require('./app/store');

const pizzaActions = require('./features/pizza/pizzaSlice').pizzaActions

const {burgerActions} = require('./features/burger/burgerSlice')

const fetchProducts = require('./features/product/productSlice').fetchProducts

console.log("Initial State", store.getState())



// const unsuscribe = store.subscribe(()=>{
//     console.log('Update State', store.getState());
// })

// store.dispatch(pizzaActions.pizza_order())
// store.dispatch(burgerActions.burger_order())

// store.dispatch(fetchProducts()).then(
//     () =>{
//             console.log("finall", store.getState())

//     }
// )

store.dispatch(fetchProducts())

// unsuscribe();