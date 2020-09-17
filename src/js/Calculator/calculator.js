const buttons = document.querySelectorAll(".calculator__num");
const outPut = document.querySelector(".calculator__value");
const operands = document.querySelectorAll(".calculator__num-operators");
const equal = document.querySelector(".calculator__num-equal");
const clear = document.querySelector(".calculator__num-clear");
const outPutData = document.querySelector(".calculator>label");
const memory = document.querySelector(".calculator__num-memory");
const insertResult = document.querySelector(".calculator__num-res");

const calculator = () => {
  let map = new Map();

  const updateData = (arr) => {
    const arrData = ["div", "mul", "sub", "add"];
    for (let index = 0; index < arr.length; index++) {
      arr[index].dataset.value = arrData[index];
    }
  };
  const mem = () => {
    map.set("memory", outPut.value);
    console.log(map);
  };
  const isertResult = () => {
    outPut.value += map.get("memory");
    outPutData.innerHTML += ` ${outPut.value} `;
  };

  function actions() {
    map.set(this.getAttribute("data-value"), outPut.value);
    outPut.value = "";
    outPutData.innerHTML += this.innerHTML;
    console.log(map);
  }
  function inputData() {
    outPut.value += this.innerHTML;
    outPutData.innerHTML += this.innerHTML;
    equal.addEventListener("click", result);
  }
  function result() {
    if (map.has("div")) {
      outPut.value = Number(map.get("div")) / Number(outPut.value);
      outPutData.innerHTML += ` ${this.innerHTML} `;
      map.clear();
    } else if (map.has("mul")) {
      outPut.value = Number(map.get("mul")) * Number(outPut.value);
      outPutData.innerHTML += ` ${this.innerHTML} `;
      map.clear();
    } else if (map.has("sub")) {
      outPut.value = Number(map.get("sub")) - Number(outPut.value);
      outPutData.innerHTML += ` ${this.innerHTML} `;
      map.clear();
    } else if (map.has("add")) {
      outPut.value = Number(map.get("add")) + Number(outPut.value);
      outPutData.innerHTML += ` ${this.innerHTML} `;
      map.clear();
    }
  }

  updateData(operands);

  
  operands.forEach((elem) => {
    elem.addEventListener("click", actions);
  });

  buttons.forEach((element) => {
    element.addEventListener("click", inputData);
  });

  clear.addEventListener("click", () => {
    outPut.value = "";
    outPutData.innerHTML = "";
    equal.removeEventListener("click", result);
  });
  memory.addEventListener("click", mem);
  insertResult.addEventListener("click", isertResult);
};
calculator();
