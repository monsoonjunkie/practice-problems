function sort (arr) {
    let y = arr.length-1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < y; i++) {
            if (arr[i].charCodeAt(0) > arr[i + 1].charCodeAt(0)) {
                let temporary = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temporary;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

