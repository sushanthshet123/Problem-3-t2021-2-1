// Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
// e.g. 1)
// input : 2
// output :
// 1
// 2 , 1
// 1

// e.g. 2)
// input : 4
// output :
// 1
// 2 , 1
// 1 , 2 , 3
// 4 , 3 , 2 , 1
// 1 , 2 , 3
// 2 , 1
// 1

// e.g. 3)
// input : 5
// output :
// 1
// 2 , 1
// 1 , 2 , 3
// 4 , 3 , 2 , 1
// 1 , 2 , 3 , 4 , 5
// 4 , 3 , 2 , 1
// 1 , 2 , 3
// 2 , 1
// 1


let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
      string += j;
    }
    string += "\n";
  for (let k = 1; k <= i; k++) {
    string += k;
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
    for(let j = n-i;j>=1;j--){
        string += j;
    }
    string += "\n";
  for (let k = 1; k <= n - i; k++) {
    string += k;
}
string += "\n";
}

let Arr = string.split('\n');
console.log(Arr[0]);
console.log(Arr[2]);
console.log(Arr[5]);
console.log(Arr[6]);
console.log(Arr[9]);
console.log(Arr[10]);
console.log(Arr[13]);
console.log(Arr[14]);
console.log(Arr[17]);