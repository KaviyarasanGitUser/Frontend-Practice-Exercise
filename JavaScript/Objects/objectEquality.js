function CreateAddress(street,city,pinCode){
    this.street = street,
    this.city = city,
    this.pinCode = pinCode
}

function areEqual(addressOne,addressTwo){
    return addressOne.street === addressTwo.street && 
    addressOne.city === addressTwo.city && 
    addressOne.pinCode === addressTwo.pinCode
}

function areSame(addressOne, addressTwo){
    return addressOne === addressTwo;
}

const addressOne = new CreateAddress('x','y','z');
const addressTwo = new CreateAddress('x','y','z');
const addressThree = addressOne;


console.log(areEqual(addressOne,addressTwo));
console.log(areSame(addressOne,addressTwo));
console.log(areSame(addressOne,addressThree));

