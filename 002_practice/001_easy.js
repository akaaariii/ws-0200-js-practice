
/**
 *  文字列の長さ
 *
 *  lengthをも使わずに引数で渡された文字列の長さを求める関数を定義してください
 *
 *  example:
 *    'banana' => output: 5
 *    'cucumber' => output: 8
 *    '' => output: 0
 *
 */

function length(str) {
    let count = 0;
    for(let i=0; i<=str.length-1; i++)
        if(!str.charAt(i) == "")
            count++;
    return count;
}

/**
 *  文字列の反転
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *
 */
function reverse(str) {
    let myStr = "";
    for(let i=str.length-1; i>=0; i--){
        myStr += str.charAt(i);
    }
    return myStr;
}

/**
 *  指定された文字列の位置を返却
 *
 *  指定された文字列の位置を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: 4
 *    'work', w => output: 0
 *    'bicycle', a => output: -1
 *
 */

function findIndex(str, char) {
    return str.indexOf(char);
}

/**
 *  指定された文字列を指定された文字で分割
 *
 *  指定された文字列aを指定された一文字bで分割して配列を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: ['libr', 'ry']
 *    'apple,banana,pineapple', w => output: ['apple', 'banana', 'pineapple']
 *    'bicycle', a => output: ['bicycle']
 *
 */

function split(a, b) {
    return a.split(b);
}

/**
 *  配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

function sum(array) {
    let sum = 0;
    for(let i=0; i<=array.length-1; i++){
        sum += array[i];
    }
    return sum;
}

/**
 *  配列の平均
 *
 *  渡された配列の平均を整数(小数切り捨て)で返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 5
 *    [2, 5, 3] => output: 3
 *    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => output: 5
 *    [1] => output: 1
 *    [] => output: 1
 *
 */

function average(array) {
    let sum = 0;
    if(array == ""){
        return 0;
    } else {
        for(let i=0; i<=array.length-1; i++){
            sum += array[i];
        }
    }
    let ave = sum / array.length;
    return Math.floor(ave);
}

/**
 *  配列の結合
 *
 *  渡された二つの配列を連結する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9], [3, 4] => output: [1, 3, 7, 9, 3, 4]
 *    ['h', 'o', 'm', 'e'], ['w', 'o', 'r', 'k'] => output: ['h', 'o', 'm', 'e', 'w', 'o', 'r', 'k']
 *    [], [] => output: []
 *
 */

function concat(a, b) {
    return a.concat(b);
}

/**
 *  2.1.2 配列の個数
 *
 *  渡された配列の要素数を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 4
 *    [2, 5, 3] => output: 3
 *    [1] => output: 1
 *
 */

function size(array) {
    // let count = 0;
    // for(let i=0; i<=array.length-1; i++){
    //     count++;
    // }
    // return count;

    return array.length;
}

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 9, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *    [] => 表示しない
 *
 */

function minMax(array) {
    let maxNum = array[0];
    let minNum = array[0];
    if(array == ""){
        return null;
    } else {
        for(let i=1; i<=array.length-1; i++){
            if(array[i] > maxNum){
                maxNum = array[i];
            }
        }
        for(let j=1; j<=array.length-1; j++){
            if(array[j] < minNum){
                minNum = array[j];
            }
        }
        console.log("max: " + maxNum + ", min: " + minNum);
    }

    // array.sort();
    // if(array == ""){
    //     return null;
    // } else {
    //     let maxNum = array[array.length-1];
    //     let minNum = array[0];
    //     console.log("max: " + maxNum + ", min: " + minNum);
    // }
}

/**
 *  連番
 *
 *  指定された数字のまでの連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [0, 1, 2, 3, 4]
 *    0 => []
 *
 */

function seq(num) {
    let arr = [];
    if(num == 0){
        return arr;
    } else {
        for(let i=0; i<num; i++){
            arr[i] = i;
        }
    }
    return arr;
}

/**
 *  奇数の連番
 *
 *  指定された数字までの奇数の連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [1, 3, 5]
 *    10 => [1, 3, 5, 7, 9]
 *    0 => []
 *
 */

function omitSeq(num) {
    let arr = [];
    if(num % 2 == 1){
        for(let i=0; i<(num+1)/2; i++){
            arr[i] = (i*2)+1;
        }
    } else {
        for(let j=0; j<num/2; j++){
            arr[j] = (j*2)+1;
        }
    }
    return arr;
}

/**
 *  指定された数値以下の配列
 *
 *  指定された数字以下を抜き出した配列を返す関数を定義してください
 *
 *  example:
 *    [1, 7, 5, 4], 3 => [1]
 *    [1, 7, 5, 4], 7 => [1, 7, 5, 4]
 *    [], 7 => []
 *
 */

function filter(array, num) {
    let myArr = array.filter(function(value) {
        return value <= num;
    })
    return myArr;
}



/**
 *  Fizz Buzz
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */

function fizzBuzz () {
    let count = 1;
    while(count <= 100){
        if(count % 3 == 0 && count % 5 == 0){
            console.log(count + " FizzBuzz");
        } else if(count % 3 == 0){
            console.log(count + " Fizz");
        } else if(count % 5 == 0){
            console.log(count + " Buzz");
        } else {
            console.log(count);
        }
        count++;
    }
}

module.exports = {
  length,
  reverse,
  findIndex,
  split,
  sum,
  size,
  average,
  minMax,
  concat,
  seq,
  filter,
  omitSeq,
  fizzBuzz
}
