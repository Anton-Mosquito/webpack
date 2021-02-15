const curry = (fn) => {
  const arity = fn.length;
  console.log("arity", arity);

  return function f1(...args) {
    console.log("f1 args", args);
    if (args.length >= arity) return fn(...args);
    else
      return function f2(...moreArgs) {
        console.log("f2", moreArgs);
        const newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
  };
};

const add = (a, b, c) => {
  return a + b + c;
};

const carriedAdd = curry(add);

console.log(carriedAdd(1)(2)(3));
