// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then((response) => response.json());
    return Promise.resolve("data from fetch");
  }
}

class LocalStorage {
  get() {
    const dtaFromLocalStorage = "data from localStorage";
    // return localStorage.getItem("key");
    return dtaFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request("vk.com");
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.localStorage.get(key);
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const db = new Database(new FetchClient());
const db1 = new Database(new LocalStorageClient());

console.log(db1.getData("asdasd"));
