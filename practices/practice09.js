const {Actions} = require("../utils/Actions.js");

function test1() {
    Actions.visitUrl('www.example.com')
    .then((data) => {
        console.log(data);
        Actions.login('TechGlobal', 'Test1234')
        .then((data) => {
            console.log(data);
            Actions.validateTitle('Title')
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err)
    })
  }
  
  test1();


async function test2() {
    try {
        console.log(await Actions.visitUrl('www.example.com'));
        console.log(await Actions.login('TechGlobal', 'Test1234'));
        console.log(await Actions.validateTitle('title'));
        } 
        catch(err) {
            console.log(err);
        }
    }


test2();