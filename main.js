//In mathematics, a Kaprekar number for a given base is a non-negative integer, the representation of whose square in that base can be split into two parts that add up to the original number again. For instance, 45 is a Kaprekar number, because 45² = 2025 and 20+25 = 45

/*
    Kaprekar's Constant
    By Er.Prasanna Brabourame
*/

var num = "174";
kaprekar(num);

function kaprekar(num){

    s1 = parseInt(num.split("").sort().join(""));
    s2 = parseInt(num.split("").sort(function(a,b){return b-a}).join(""));
    n = (s1 > s2) ? s1 -s2 : s2 - s1;
    if(n === parseInt(num)){
        return n;
    } else {
        return kaprekar(String(n));
    }
}
