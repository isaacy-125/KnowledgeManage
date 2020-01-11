var array = [1, 6, 7, 4, 5, 8, 9, 0, 2, 3];
/*
* 初始冒泡排序
 先两两数字比较
 - -
 1 6 7 4 5 8 9 0 2 3
   - -
 1 6 7 4 5 8 9 0 2 3
     - -
 1 6 4 7 5 8 9 0 2 3
       - -
 1 6 4 5 7 8 9 0 2 3
         - -
 1 6 4 5 7 8 9 0 2 3
           - -
 1 6 7 4 5 8 9 0 2 3
             - -
 1 6 7 4 5 8 0 9 2 3
               - -
 1 6 7 4 5 8 0 2 9 3
                 - -
 1 6 7 4 5 8 0 2 3 9
 这样第一轮循环 最后9为排序完之后的有序数列
 如果要所有排序完 需要循环array.length次

* */
function bubbleSort(arr) {
    var length = array.length;
    if (!length) {
        return [];
    }
    for (let i = 0; i < length; i++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
}

/*
* 第二版优化
* 在最后的几部循环中
* - -
* 1 2 3 5 6 7 8 9
*   - -
* 1 2 3 5 6 7 8 9
* - -
* 1 2 3 5 6 7 8 9
* 最后的 1 2 3待排序数组其实已经排好序了
* 但是却还是循环比较大小
* 所以在循环初始时 设置mark标记
* 如果在这次循环中 没有进行排序 则说明已排好序 不用再进行下面的循环了
* */
function bubbleSortMark(arr) {
    let length = arr.length;
    if (!length) {
        return [];
    }
    for (let i = 0; i < length; i++) {
        let mark = true; // 如果在一轮比较中没有出现需要交互的数据，说明数组已经有序，
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                mark = false;
            }
        }
        if (mark) {
            console.log('mark为true', arr, i);
            return;
        }
    }
    return arr;
}
bubbleSortMark(array)
