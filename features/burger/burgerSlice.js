const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    burgerBase : 3000
}


const burgerSlice = createSlice({
    name : 'burger',
    initialState : initialState,
    reducers : {
        burger_order : (state) => {
            state.burgerBase--
        }
    }
})

console.log(burgerSlice)

module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions

