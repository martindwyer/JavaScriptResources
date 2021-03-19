/*
Splitting Strings
You are given a string and integer K as arguments. 
Split the string into an array of strings, where each element 
is no longer than K characters long. Return the resulting array.

The argument string will always be at least K characters long.

Requirements
Must return an array of strings

Example #1
solve("aabbbcccd", 3)
> ["aab", "bbc", "ccd"]

Example #2
solve("abcdefgh", 5)
> ["abcde","fgh"]
*/

const solve = (strArg, k) => {
  let answer = [];
  let j = 0;
  while (j < strArg.length) {
    answer.push(strArg.slice(j, j + k));
    j = j + k;
  }
  return answer;
};

console.log(solve('aabbbcccd', 3));

console.log(solve('abcdefgh', 5));
