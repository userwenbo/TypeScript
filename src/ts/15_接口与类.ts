interface Alarm {
  alert(): any;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
  alert() {
      console.log('SecurityDoor alert');
  }
}

class Car implements Alarm {
  alert() {
      console.log('Car alert');
  }
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car2 implements Alarm, Light {
  alert() {
      console.log('Car alert');
  }
  lightOn() {
      console.log('Car light on');
  }
  lightOff() {
      console.log('Car light off');
  }
}

interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}