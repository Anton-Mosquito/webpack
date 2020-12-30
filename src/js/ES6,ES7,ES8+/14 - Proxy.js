const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Fiels is ${prop} doesnt have`;
  },
  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log("Length shoud be more 2 Symbold " + value.length);
    }
  },
};

const obj = {
  login: "tester",
  password: "1234",
};

const formProxy = new Proxy(obj, validator);

// console.log(formProxy);
// console.log(formProxy.login);
// console.log(formProxy.password);
// console.log(formProxy["user-name"]);

// formProxy.password = 12;

function log(msg) {
  console.log("[Log]:" + msg);
}
const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (thisArg.length === 1) {
      Reflect.apply(target, thisArg, argArray);
    } else {
      console.log("Quantity of arguments");
    }
  },
});

proxy("Custom message");
proxy("message", "message2");
