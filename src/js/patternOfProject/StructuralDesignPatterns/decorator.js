class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.usAWS = true;
  server.awsInfo = function () {
    return server.url;
  };
  return server;
}

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}

const s1 = aws(new Server("12.34.56.78", "8080"));
// console.log(s1.awsInfo());
// console.log(s1.usAWS);

const s2 = azure(new Server("34.87.55.66", "1000"));
// console.log(s2.url);
// console.log(s2.isAzure);

class Coffe {
  constructor() {}
  cost() {
    return 5;
  }
}

const sugar = (coffe) => {
  const cost = coffe.cost();
  coffe.cost = () => {
    cost + 1;
  };
};

const small = (coffe) => {
  const cost = coffe.cost();
  coffe.cost = () => {
    cost - 1;
  };
};

const large = (coffe) => {
  const cost = coffe.cost();
  coffe.cost = () => {
    cost + 2;
  };
};

const withMilk = (coffe) => {
  const cost = coffe.cost();
  coffe.cost = () => {
    cost + 1;
  };
};

const largeWithMilk = (coffe) => {
  large(coffe);
  withMilk(coffe);
  sugar(coffe);
  const cost = coffe.cost();
  coffe.cost = () => {
    cost;
  };
};

const coffe = new Coffe();
// sugar(coffe);
// large(coffe);
largeWithMilk(coffe);
console.log(coffe.cost());
