// Liskov substitution principles

// class Person {}

// class Member extends Person {
//   access() {
//     console.log("You have access");
//   }
// }

// class Guest extends Person {
//   isGuest = true;
// }

// class Frontend extends Member {
//   canCreateFrontend() {}
// }

// class Backend extends Member {
//   canCreateBackend() {}
// }

// class PersonFromDiferentCompany extends Guest {
//   access() {
//     throw new Error('You don"t have access');
//   }
// }

// function openSecreteDoor(person) {
//   person.access();
// }

// openSecreteDoor(new Frontend());
// openSecreteDoor(new Backend());
// openSecreteDoor(new PersonFromDiferentCompany())

//================================

class Component {
  isComponent = true;
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {
  onInit() {}
}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error("Render is impossible here!");
  }

  wrapComponent(component) {
    component.wrapper = true;
    return component;
  }
}

function renderComponent(component) {
  console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
