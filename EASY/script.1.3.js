function that_returns_average_number_of_values(arr) {
    var sum =0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum/arr.length);
}
that_returns_average_number_of_values([1,4,2]);