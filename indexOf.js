function indOf(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;

        }
    }
    return -1;

}
console.log(indOf([1, 2, 3, 4, 5, 6], 3));