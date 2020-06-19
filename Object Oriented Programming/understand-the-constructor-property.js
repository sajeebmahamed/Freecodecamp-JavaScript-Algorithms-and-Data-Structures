function Dog(name) {
  this.name = name;
}

const joinDogFraternity = (candidate) => candidate.constructor === Dog ? true:false
