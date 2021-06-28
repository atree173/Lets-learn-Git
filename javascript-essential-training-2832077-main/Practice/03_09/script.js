/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newStrapLength1: function (lengthLeft1, lengthRight1) {
    this.strapLength.left = lengthLeft1;
    this.strapLength.right = lengthRight1;
  },
};
console.log("Before: ", backpack.strapLength.left);
backpack.newStrapLength(19, 20);
console.log(" First change: ", backpack.strapLength.left);
backpack.newStrapLength1(21, 22);
console.log(" Second change: ", backpack.strapLength.left);
