function binarySearch(list, element) {
    for ( i = 0; i < list.length; i++) {
        if (list[i] == element) {
            answer = list[i];
            return i;
        }

    }
    return -1;
}
