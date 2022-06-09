function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload.product],
        value: state.value + action.payload.product.price,
        quantity: state.quantity + 1,
        saveForLater: state.saveForLater.filter(
          (item) => item.id !== action.payload.product.id
        ),
      };

    case "REMOVE_FROM_CART":
      const itemsAfterRemoval = state.items.filter(
        (item) => item.id !== action.payload.product.id
      );
      return {
        ...state,
        items: itemsAfterRemoval,
        quantity: state.quantity - 1,
        value: state.value - action.payload.product.price,
      };

    case "INCREASE_QUANTITY":
      const itemsAfterQuantityIncreased = state.items.map((item) =>
        item.id === action.payload.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        items: itemsAfterQuantityIncreased,
        value: state.value + action.payload.product.price,
      };

    case "DECREASE_QUANTITY":
      const itemsAfterQuantityDecreased = state.items.map((item) =>
        item.id === action.payload.product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      return {
        ...state,
        items: itemsAfterQuantityDecreased,
        value: state.value - action.payload.product.price,
      };

    case "SAVE_FOR_LATER":
      return {
        ...state,
        saveForLater: [...state.saveForLater, action.payload.product],
        items: state.items.filter(
          (item) => item.id !== action.payload.product.id
        ),
        quantity: state.quantity - 1,
        value: state.value - action.payload.product.price,
      };

    default:
      return state;
  }
}

export default cartReducer;
