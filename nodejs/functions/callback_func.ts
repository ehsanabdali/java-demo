const greeting = (message:string) => console.log(`Hello ${message}`);

interface definitionInterface{
    (message:string):void;
}

function sayHello(callback: definitionInterface) {
  callback('World!')
}
sayHello(greeting);