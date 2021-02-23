const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

const url = "https://jsonplaceholder.typicode.com/todos";

async function fetchAsyncAwait() {
  console.log("Fetch todo started");
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data ", data);
  } catch (e) {
    console.error(e);
  } finally {
  }
}

// fetchAsyncAwait();

const fetchProducts = () => Promise.resolve({ data: [1, 2, 3] });
const fetchAdditional = (products) => Promise.resolve({ data: [2, 3, 4] });

const getProducts = async () => {
  const products = await fetchProducts();
  if (!products.data.length) {
    return products.data;
  }
  return await fetchAdditional(products.data);
};
getProducts();
