//создадим новый класс WoodenDoor
class WoodenDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getWidth() {
    return this.width
  }
  getHeight() {
    return this.height
  }
}

//создадим фабрику
const DoorFactory = {
  makeDoor: (width, height) =>
  new WoodenDoor(width, height)
}

//создадим новый экземпляр
const door = DoorFactory.makeDoor(100, 200);
console.log('Width:', door.getWidth());
console.log('Height:', door.getHeight());
