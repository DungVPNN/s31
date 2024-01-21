function dainhat(a)  {
    var words = a.split(' ');
    var maxLength = words[0];
    for (var i = 1; i < words.length; i++) {
      if (words[i].length > maxLength.length) {
        maxLength = words[i];
      }
    }
    return [maxLength,maxLength.length];
}
let a = "Thieu dep zaiiiiiiii";
console.log(dainhat(a));