const address = {
    street: '4th Street',
    city: 'Namakkal',
    pinCode: '637409',
}

function showAddress(address){
    for(let key in address){
        console.log(key,address[key]);
    }
}
showAddress(address);
