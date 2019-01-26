
const  chai = require('chai').assert;
const  app =  require('../app.js');
const  { describe } =  require('mocha');
const request = require('request');

const sayHello = app.sayHello();
const addNumbers = app.addNumbers(1, 5);
const baseUrl = 'https://swapi.co/api';
describe('App', ()=> {
    it('App should return hello', ()=>{

        chai.equal(sayHello, 'Hello');
    });

    it('function should return type of String', ()=>{

        chai.typeOf(sayHello, 'String');
    });

    it('Number should return a value greater than 5', ()=>{

        chai.isAbove(addNumbers, 5);
    });
    describe('Luke', () => {
        it('Should return the name', () => {
            request.get({url: `${baseUrl}/people/1`}, (err, res, body)=>{
                
            });
        })
    });
});
