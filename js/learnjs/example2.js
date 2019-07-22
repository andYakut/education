function aclean(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i].length == arr[j].length) {
        first = arr[i];
        first = first.toLowerCase().split('').sort().join('');
        second = arr[j];
        second = second.toLowerCase().split ('').sort().join('');

        if(first == second) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
  }
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
aclean(arr)

console.log(arr);