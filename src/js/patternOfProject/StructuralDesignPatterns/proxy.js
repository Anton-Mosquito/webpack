function networkFetch(url) {
  return `${url} - Answer from server`;
}

const cache = new Set();
const proxy = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - Answer from cache`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

console.log(proxy("angular.io"));
console.log(proxy("react.io"));
console.log(proxy("angular.io"));
