import { toast } from "react-toastify";

// get all products form local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");

  if (all) {
    const favorites = JSON.parse(all);
    console.log(favorites);
    return favorites;
  } else {
    return [];
  }
};

// add a product to local storage

const addFavorite = (product) => {
  const favorites = getAllFavorites();
  const isExist = favorites.find(
    (item) => item.product_id == product.product_id
  );

  if (isExist) {
    return toast.warning("Product Already Exist !!");
  }

  favorites.push(product);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully Add a Product !");
};

// remove a product form local storage

const removeFavorite = (id) => {
  // get all previsosly data
  const favorites = getAllFavorites();
  const remaining = favorites.filter((item) => item.product_id != id);

  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Successfully Remove a Product !");
};

export { addFavorite, getAllFavorites, removeFavorite };
