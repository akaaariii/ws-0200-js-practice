/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
    let myStr = "";
    myStr = str.slice(str.length-num);
    
    
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
    return str.replace(/[aeiou]/ig,"");
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
    let count = 0;
    if(s1.match(s2)){
        count++;
    }
    return count;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1
    let flag = true;
    while(left <= right){
        if(str[left] == str[right]){
            left++;
            right--;
        } else {
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
    let isPrime = false;
    if(num == 1){
        isPrime = false;
    } else if(num == 2){
        isPrime = true;
    } else {
        for(let i=2; i<num; i++){
            if(num % i == 0){
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
    }
    return isPrime;
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
    let sum = 0;
    if(array[i] == 4){
        array[i] == array[i+1] == 0;
    for(let i=0; i<array.length; i++){
        
            sum += i;
        }
    return sum;
    }
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
