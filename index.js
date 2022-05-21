const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};

// Solution #1 using a thisArg: 

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   this.signatories.forEach(function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   }, this); //thisArg is being use as a second argument after the function expression. This explicitly provides a context for the function used inside forEach.
// };

// printCard.call(messageConfig);




// A slight variation on this idea would be to invoke bind on the function expression in the forEach:

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);
//   const contextBoundForEachExpr = function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   }.bind(this);

//   this.signatories.forEach(contextBoundForEachExpr);
// };

// printCard.call(messageConfig);




// Solution #2
// Alternatively, we could assign that value to a variable and leverage function-level scope and closures to regain access to the outer context.

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   const outerContext = this;

//   this.signatories.forEach(function (signatory) {
//     const message = `${outerContext.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   });
// };

// printCard.call(messageConfig);



// Solution #3
// Arrow function is automatically bound to its parent's context and does not create a context of its own.

const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  // Wow! Elegant! And notice the arrow function's `this` is the same `this`
  // that printCard has; specifically, the `thisArg` that was passed to it
  this.signatories.forEach((signatory) =>
    console.log(`${this.closing[signatory]}, ${signatory}`)
  );
};

printCard.call(messageConfig)