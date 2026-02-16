const { burgerActions } = require('../burger/burgerSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    pizzaBase : 1000
}

const pizzaSlice = createSlice({
    name : 'pizza',
    initialState,
    reducers : {
        pizza_order : (state)=> {
            state.pizzaBase--
        }
    },
    extraReducers : (builder) => {
        builder.addCase(burgerActions.burger_order, (state) => {
            state.pizzaBase--
        })
    }
})

console.log(pizzaSlice)


module.exports = pizzaSlice.reducer; //Default export
module.exports.pizzaActions = pizzaSlice.actions; //Named export

