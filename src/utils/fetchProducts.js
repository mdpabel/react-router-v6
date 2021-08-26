function fetchProducts() {
  return fetch("https://fakestoreapi.com/products", { method: "GET" }).then(
    (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(new Error(`No products found`));
      }
    },
    (err) => Promise.reject(new Error(`Something went wrong, ${err.message}`))
  );
}

function fetchProduct(search) {
  return fetch(`https://fakestoreapi.com/products/${search}`, {
    method: "GET",
  }).then(
    (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(
          new Error(`No products found with the id of ${search}`)
        );
      }
    },
    (err) => Promise.reject(new Error(`Something went wrong, ${err.message}`))
  );
}

export { fetchProducts, fetchProduct };
