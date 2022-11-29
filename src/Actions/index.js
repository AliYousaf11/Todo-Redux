export const Add = (data) => {
  return {
    type: "Added",
    payload: {
      id:new Date().getTime().toString(),
      data:data,
    },
  };
};
export const Delete = (id) => {
  return {
    type: "Del",
    id,
  };
};
export const Remove = () => {
  return {
    type: "Clear",
  };
};
