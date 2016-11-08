var year: any = 2014;
console.log(year.length);

year = new Date().getFullYear().toString();
console.log(year.length);

function getLength(text: any) {
  return text.length;
}

getLength(2016); // Error
getLength("2016"); // OK
getLength([ 1, 2, 3]); // OK
getLength(new Date()); // Error



