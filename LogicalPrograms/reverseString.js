//Reverse String Using For
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = ('India is my country');

const result = reverseString(string);
console.log(result);

//Reverse String Using Function
console.log(reverseString(string))

