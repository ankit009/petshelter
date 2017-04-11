var addressValidator = require('address-validator');
var Address = addressValidator.Address;
var _ = require('underscore');
 
//any of the props in this object are optional, also spelling does not have to be exact. 
var address = new Address({
    street: '100 North Washington St',
    city: 'Bostont',
    state: 'Mass',
    country: 'US'
});
 
//the passed in address does not need to be an address object it can be a string. (address objects will give you a better likelihood of finding an exact match) 
//address = '100 North Washington St, Boston, MA, US';
 
//`addressValidator.match.streetAddress` -> tells the validator that you think the input should be a street address. This data makes the validator more accurate.  
// But, sometimes you dont know.. in that cause you should use `addressValidator.match.unknown` 
addressValidator.validate(address, addressValidator.match.Country, function(err, exact, inexact){
    console.log('input: ', address.toString())
    console.log('match: ', _.map(exact, function(a) {
      return a.toString();
    }));
    console.log('did you mean: ', _.map(inexact, function(a) {
      return a.toString();
    }));
 
    //access some props on the exact match 
    var first = exact[0];
    //console.log(first.streetNumber + ' '+ first.street);
});