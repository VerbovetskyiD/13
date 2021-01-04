function palindrome(num, step = 0) {
    const obj = {
        result: num,
        step: step
    };
    const reversNum = +num.toString().split('').reduce( (a, b) => b + a, '');
    if (num === reversNum) {
        return obj;
    } else {
        return palindrome(num + reversNum, ++step);
    }
}
//проверка
console.log(palindrome(312));
console.log(palindrome(96));
