/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
    let swapped;
    let x = array;
    do {
        swapped = false;
        for(let i=0; i < array.length; i++){
            if (x[i] > x[i+1]){
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapped = true;
            }
        }
    } while (swapped);
    return x; 
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
    for(let i=1; i < array.length; i++){
        let j = i - 1;
        let temp = array[i];
        while (j >= 0 && array[j] > temp){
          array[j + 1] = array[j];
          j--;
        }
        array[j+1] = temp;
      }
      return array;
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (arr) {
}

function merge(left, right) {
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (a, start = 0, end = (a.length -1)) {
    const pivot = a[Math.floor((start + end) / 2)];//middle element
    let left = start;
    let right = end;
    while (left <= right) {
        while (a[left] < pivot) {
            left++;
        }
        while (a[right] > pivot) {
            right--;
        }
        if (left <= right) {
            break;
        }
        let temp = a[left];
        a[left] = a[right];
        a[right] = temp;
        left++;
        right--;

        if (start < left - 1) { //more elements on the left side of the pivot
            quickSort(a, start, left - 1);
        }
        if (right + 1 < end) { //more elements on the right side of the pivot
            quickSort(a, right + 1, end);
        }
    }
    return a;
}

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
