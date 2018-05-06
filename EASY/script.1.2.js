function that_returns_min_and_max_numbers (arr) {

    function min_and_max_numbers(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    arr.sort(min_and_max_numbers);
    console.log('max: '+arr[arr.length -1]+', min: '+arr[0]);
}
that_returns_min_and_max_numbers([1,92,-5,25]);