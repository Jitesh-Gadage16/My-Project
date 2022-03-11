export const addItemToList = (item, next) => {
    let list = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("list")) {
        list = JSON.parse(localStorage.getItem("list"));
      }
      list.push({
        ...item,
        count: 1
      });
      localStorage.setItem("list", JSON.stringify(list));
      next();
    }
  };
  

  export const loadList = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("list")) {
        return JSON.parse(localStorage.getItem("list"));
      }
    }
  };

  export const loadListCount = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("list")) {
        return JSON.parse(localStorage.getItem("list").length);
      }
    }
  };

  export const removeItemFromList = productId => {
    let list = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("list")) {
        list = JSON.parse(localStorage.getItem("list"));
      }
      list.map((product, i) => {
        if (product._id === productId) {
          list.splice(i, 1);
        }
      });
      localStorage.setItem("list", JSON.stringify(list));
    }
    return list;
  };
  


  