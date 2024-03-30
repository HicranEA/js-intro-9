class Customer {
    constructor(name, age, membershipType, membershipCost){
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }

    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`;
    }

    upgradeMembership() {
        this.membershipType = 'Premium';
        this.membershipCost = this.membershipCost * 1.2;
    }
}

class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost){
        super(name, age, membershipType, membershipCost)
    }

    applyDiscount() {
        this.membershipCost *= 0.9;
    }
}

class BusinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost );
        this.duration = duration;
    }

    extendContract() {
        this.duration++;
        this.membershipCost *= 0.85;
    }
}

const customer1 = new Customer('John Doe', 35, 'Basic', 50);
const vipCustomer1 = new VIPCustomer('Jane Smith', 35, 'Gold', 100);
const businessCustomer1 = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

customer1.upgradeMembership();
vipCustomer1.applyDiscount();
businessCustomer1.extendContract();

//console.log(customer1.getDetails());
//console.log(vipCustomer1.getDetails());
//console.log(businessCustomer1.getDetails());

for(const customer of [customer1, vipCustomer1, businessCustomer1]) {
    console.log(customer.getDetails());
}
