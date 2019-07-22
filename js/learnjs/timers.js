function printNumbersInterval() {
  var i = 1;
  var timerId = setTimeout(function run() {
    console.log(i);
    if(i < 20) setTimeout(run, 100); 
    i++;
  }, 100);
}

//Функция-задержка
function delay(f, ms) {
  return function() {
    var saveArgs = arguments;
    var saveThis = this;

    console.log(saveThis);

    setTimeout(function() {
      f.apply(saveThis, saveArgs)
    }, ms);
  }
}

//Тормозилка
function throttle(f, ms) {
  var isThrottled = false,
    saveArgs,
    saveThis;

  function wrapper() {
    if(isThrottled) {
      saveArgs = arguments;
      saveThis = this;
      return
    }

    f.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if(saveArgs) {
        wrapper.apply(saveThis, saveArgs);
        saveArgs = saveThis = null;
      }
    }, ms);
  }

  return wrapper;
}

var f = function(x) {
  console.log(x);
}

var f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
f1000(4);
f1000(5);