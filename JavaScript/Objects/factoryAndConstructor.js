//Factory Function
function createAddress(street, city, pinCode){
    return{
        street,
        city,
        pinCode
    }
}

//Constructor Function
function CreateAddress(street,city,pinCode){
    this.street = street,
    this.city = city,
    this.pinCode = pinCode
}

const addressOne = createAddress('4th Street', 'Namakkal', 637409);

const addressTwo = new CreateAddress('5th Street', 'Coimbatore', 641105)

console.log('Address using Factory',addressOne);
console.log('Address using Constructor',addressTwo);
