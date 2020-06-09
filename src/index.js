window.$l = (arg) => {
    const arr = Array.from( document.querySelectorAll(arg) );
    return arr.length === 1 ? arr[0] : arr;
}
