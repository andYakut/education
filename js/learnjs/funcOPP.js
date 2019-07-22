function CoffeeMachine(power, capacity) {
  this.waterAmount = 0;
  var running = false;

  var WATER_HEAT_CAPACITY = 4200;
  var timerId = null;

  var self = this;

  function getBoilTime() {
    running = true;
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  };

  this.addWater = function(amount) {
    if(amount < 0 || amount === undefined || amount === null) {
      throw new Error("Неподходящее значение");
    }
    if(this.waterAmount + amount < capacity) this.waterAmount += amount;
    else throw new Error("Нельзя залить больше, чем " + capacity);
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.isRunning = function() {
    return running;
  }

  this.getWaterAmount = function() {
    return this.waterAmount;
  };

  this.getPower = function() {
    return power;
  };

  var onReady = function() {
    alert( 'Кофе готово!' );
  };

  this.setOnReady = function(fn) {
    onReady = fn;
  }

  this.run = function() {
    timerId = setTimeout(function() {
      running = false;
      onReady();
    }, 
    getBoilTime());
  };

  this.stop = function() {
    clearTimeout(timerId);
  };

}

//Наследование
function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.call(this, power);

  var food = [];

  this.addFood = function(item) {
    if(arguments.length === 1) {
      if((power / 100 < food.length + 1) && this._enabled) {
        food.push(item);
      }
    } else {
      console.log("here");
      console.log("args", arguments.length);
      console.log((power / 100 < (food.length + arguments.length)));
      if((power / 100 < (food.length + arguments.length)) && this._enabled) {
        console.log("and here")
        for(var i = 0; i < arguments.length; i++) {
          food.push(arguments[i]);
        }
      }
    } 
  }

  this.getFood = function() {
    return food.slice();
  }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт");