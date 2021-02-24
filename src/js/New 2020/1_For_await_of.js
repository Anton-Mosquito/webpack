const delay = (id, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(id), ms));

const promises = [delay(1, 250), delay(2, 500), delay(3, 1500)];

async function old() {
  for (const promise of await Promise.all(promises)) {
    console.log("Old", promise);
  }
}

// old();

async function modern() {
  for await (const promise of promises) {
    console.log("Modern", promise);
  }
}

modern();
