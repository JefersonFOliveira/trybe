
function palindromo(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] != string[string.length - index - 1] ) { 
      return false;
    }else {
      return true
      }
  }
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));
