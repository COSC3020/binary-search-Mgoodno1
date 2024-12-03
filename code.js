function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (list[middle] === element) {
            if (middle === 0 || list[middle - 1] !== element) {
                return middle;
            }
            right = middle - 1;
        } else if (list[middle] < element) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}
