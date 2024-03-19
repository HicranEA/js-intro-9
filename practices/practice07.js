//TASK-1
/*You are given a JS Array below:
-Count how many users are older than 30    -> 2
-Count how many users live in Chicago      -> 2
-Count how many users live in IL      -> 3
-Count how many users’ emails has Gmail domain   -> 2
- Find and store all the users name younger than 35     -> [ 'Tech', 'Jane', 'Alex' ]
- Find average of ages of all users     -> 28
*/
const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

//console.log(users.filter(x => x.age > 30).length);
const ageOlder30 = users.reduce((counter, curr) => {
    if(curr.age > 30) return counter + 1;
    else return counter;
}, 0);

console.log(ageOlder30);

//console.log(users.filter(x => x.address.city === 'Chicago').length);
const cityChicago = users.reduce((counter, curr) => curr.address.city.toLowerCase() === 'chicago' ? counter + 1: counter, 0);
console.log(cityChicago);

//console.log(users.filter(x => x.address.state === 'IL').length);

const stateIL = users.reduce((counter, curr) => curr.address.state.toLowerCase() === 'il' ? counter + 1: counter, 0);
console.log(stateIL);


//console.log(users.filter(x => x.email.includes('gmail')).length);
const emailGmail = users.reduce((counter, curr) => {
    if(curr.email.includes('gmail')) return counter + 1;
    return counter;
}, 0);

console.log(emailGmail);

//const ageYounger35 = users.filter(x => x.age < 35).map((x) => x.firstName);
console.log(ageYounger35);
const younger35 = users.reduce((arr, curr) => curr.age < 35 ? arr.concat(curr.firstName) : arr, []);
console.log(younger35);

const avgAge = users.reduce((sum, curr) => curr.age + sum, 0) / users.length;
console.log(avgAge);

/*
TASK-2
You are given a JS Array below:
- Find the most expensive product    -> MacBook Pro 16-inch
- Find the least expensive product    -> AirPods Pro
- Find the product with the biggest quantity    -> AirPods Pro
- Find the product with the smallest quantity   -> MacBook Pro 16-inch
- Find all the product names    -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
*/

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

const mostExpensive = appleStore.reduce((max, curr) => {
    if(max.price > curr.price) return max;
    return curr;
},
    {}
);
console.log(mostExpensive.productName);

const leastExpensive = appleStore.reduce((min, curr) => min.price < curr.price ? min : curr, {});
console.log(leastExpensive.productName);

const biggestQuantity = appleStore.reduce((max, curr) => max.quantity > curr.quantity ? max : curr, {});
console.log(biggestQuantity.productName);

const leastQuantity = appleStore.reduce((min, curr) => min.quantity < curr.quantity ? min : curr, {});
console.log(leastQuantity.productName);

const allProductNames = appleStore.map((name) => name.productName);
console.log(allProductNames);

/*
TASK-3
You are given a JS Array below:
- Find the cheapest book in the bookstore           -> To Kill a Mockingbird
- Find the most expensive book in the bookstore   -> Harry Potter and the Sorcerer's Stone
- Find all Classic books         -> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]
*/

const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
       {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];


const cheapestBook = bookstore.reduce((min, curr) => min.price < curr.price ? min : curr, {});
console.log(cheapestBook.title);

const mostExpensiveBook = bookstore.reduce((max, curr) => max.price > curr.price ? max : curr, {});
console.log(mostExpensiveBook.title);

/*const classicBooks = bookstore.filter(x => x.genre === "Classic");
console.log(classicBooks.map(gen => gen.title));
*/

const classicBooks = bookstore.reduce((acc, curr) => (curr.genre === 'Classic') ? acc.concat(curr.title) : acc, []);

/*const classicBooks = bookstore.reduce((acc, curr) => {
    if(curr.genre === 'Classic') acc.push(curr.title);
    return acc;
}, []);
*/


console.log(classicBooks);

/*
TASK-4You are given a JS Array below:
- Calculate the total price of products in the cart     -> 2444
- Find the brands of all the products in the cart   -> [ 'Dell', 'Apple', 'Sony' ]
- Find all the items in the cart with their quantity  -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
*/

const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};


let sumPrice = 0;
for(let i = 0; i < shoppingCart.items.length; i++) {
    sumPrice += (shoppingCart.items[i].price * shoppingCart.items[i].quantity);
}

console.log(sumPrice);

const productBrand = shoppingCart.items.map(name=> name.specifications.brand) 
console.log(productBrand);

const arrItem = shoppingCart.items.map(name=> name.productName);
const arrQuantity= shoppingCart.items.map(name=> name.quantity);

let arrItemAndQuantity = [];
for (let i = 0; i < arrItem.length; i++) {
    arrItemAndQuantity[i] = arrItem[i].concat(', ', arrQuantity[i]);
}

console.log(arrItemAndQuantity);
