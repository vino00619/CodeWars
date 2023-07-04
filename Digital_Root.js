// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//if the length of the input is greater than one, split and add until its length become 1

function digitalRoot(n) {
    if(n === undefined){
        return(0);
    }
    let str = n.toString()
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += parseInt(str[i])
    }
    if (res > 9) {
        return digitalRoot(res);
    } else {
       return (res);
    }
}
digitalRoot();
