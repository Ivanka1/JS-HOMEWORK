//TASR 3.1

function recursive_numbers_from_Nto0(numb) {
    console.log(numb);
    if ( numb == 0 )return;
    return recursive_numbers_from_Nto0(numb-1);

}
console.log(recursive_numbers_from_Nto0(3));