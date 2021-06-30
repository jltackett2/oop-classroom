class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.contents = [];
  }

  add(student) {
    this.contents.push(student);
    return this;
  }

  has(item) {
    return this.contents.includes(item);
  }
}

module.exports = Room
