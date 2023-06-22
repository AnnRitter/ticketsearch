const selectCartModule = (state) => state.cart
export const selecTicketCount = (state, id) => selectCartModule(state)[id] || 0