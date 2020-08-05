class RealCustomer {
	constructor(name) {
		this.name = name;
	}
	
	getName() {
		return this.name;
	}
	
	isNil() {
		return false;
	}
}

class NullCustomer {
	constructor() {
		
	}
	
	getName() {
		return 'Not Available in Customer Database';
	}
	
	isNil() {
		return true;
	}
}

class CustomerFactory {
	contructor() {
		
	}
	
	getCustomer(name) {
		this.customers = ['Rob', 'Joe', 'Julie'];
		for(var i = 0; i < this.customers.length; i++) {
			if(this.customers[i] === name) {
				return new RealCustomer(name);
			}
		}
		return new NullCustomer();
	}
}

const customer1 = new CustomerFactory();
const customer1_obj = customer1.getCustomer('Rob');
const customer2 = new CustomerFactory();
const customer2_obj = customer2.getCustomer('Bob');
const customer3 = new CustomerFactory();
const customer3_obj = customer3.getCustomer('Julie');
const customer4 = new CustomerFactory();
const customer4_obj = customer4.getCustomer('Laura');

console.log('Customers');
console.log(customer1_obj.getName());
console.log(customer2_obj.getName());
console.log(customer3_obj.getName());
console.log(customer4_obj.getName());
