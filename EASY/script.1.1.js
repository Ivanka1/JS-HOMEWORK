function that_returns_onl_pair_numbers(arr) {
    for ( var i=0; i < arr.length; i++)
    {
        if (arr[i]%2!==1)
        {
            console.log(arr[i]);
        }
    }
}
var arr = [1,20,3,41,5,6,8,9,];
that_returns_onl_pair_numbers (arr);