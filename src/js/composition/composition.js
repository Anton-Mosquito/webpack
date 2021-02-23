function createProgrammer(name) {
  const programmer = { name };
  return {
    ...programmer,
    ...canCode(programmer),
  };
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding`),
  };
}

function canAngulra({ name }) {
  return {
    angulra: () => console.log(`${name} is creating Angulra app...`),
  };
}

function canNodeJs({ name }) {
  return {
    nodeJS: () => console.log(`${name} is creating NodeJS app...`),
  };
}

function canReactAndVieW({ name }) {
  return {
    react: () => console.log(`${name} is creating React app...`),
    view: () => console.log(`${name} is creating View app...`),
  };
}

function createFrontEnd(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canAngulra(programmer),
    ...canReactAndVieW(programmer),
  };
}

function createBackEnd(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canNodeJs(programmer),
  };
}

function createFullStack(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canNodeJs(programmer),
    ...canAngulra(programmer),
  };
}

const programmer = createProgrammer("Oleg");
programmer.code();

const front = createFrontEnd("Vasya");
front.code();
front.angulra();
front.react();
front.view();

const back = createBackEnd("Ilya");
back.code();
back.nodeJS();

const full = createFullStack("Vova");
full.code();
full.angulra();
full.nodeJS();
