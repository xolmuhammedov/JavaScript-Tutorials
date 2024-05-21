// Define classes and interfaces
class Thing {
    name: string;
    description: string;
  
    constructor(name: string, description: string) {
      this.name = name;
      this.description = description;
    }
  }
  
  interface Action {
    performAction(thing: Thing): void;
  }
  
  // Implementations of the Action interface
  class MoveAction implements Action {
    performAction(thing: Thing) {
      console.log(`${thing.name} moved!`);
    }
  }
  
  class TalkAction implements Action {
    performAction(thing: Thing) {
      console.log(`${thing.name} said something!`);
    }
  }
  
  // Main function with a loop
  function main() {
    const things: Thing[] = [];
    // Create many Thing objects...
  
    const actions: Action[] = [];
    // Create many Action objects...
  
    for (const thing of things) {
      for (const action of actions) {
        action.performAction(thing);
      }
    }
  }
  
  main();
  