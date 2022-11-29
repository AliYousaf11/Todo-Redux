const initialState = {
  list: [],
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "Added") {
    const { id, data } = action.payload;
    return {
      ...state,
      list: [
        ...state.list,
        {
          id:id,
          data:data,
        }
      ]
    };
  } 
  
  
  else if (action.type === "Del") {
    const newList = state.list.filter((ele) => ele.id !== action.id);
    return {
      ...state,
      list: newList
    };
  } 
  else if (action.type === "Clear") {
    return {
      ...state,
      list: [],
    };
  }
  else{
    return state;
  }
};
