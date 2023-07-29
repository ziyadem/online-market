let initialState = {
  items: [],
  total: 2342,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      let product = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (product) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            product: action.payload,
            count: 1,
          },
        ],
      };
    }

    case "INC_ITEM_COUNT": {
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.payload ? { ...i, count: i.count + 1 } : i
        ),
      };
    }

    case "DEC_ITEM_COUNT": {
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.payload
            ? { ...i, count: i.count === 1 ? 1 : i.count - 1 }
            : i
        ),
      };
    }

    case "REMOVE_ITEM_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((i) => i.product.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
}

export default cartReducer;
