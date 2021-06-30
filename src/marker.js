class Marker {
  constructor (size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }

  write(someString) {
    let returnString = ''
    for (var char in someString) {
      if (this.remainingInk > 0) {
        returnString += someString[char];
      }
      if (someString[char] !== " " && this.remainingInk > 0) {
        this.remainingInk --;
      }
    }
    return returnString
  }

}

module.exports = Marker


