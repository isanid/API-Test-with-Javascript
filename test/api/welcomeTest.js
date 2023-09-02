// cara panggil chai
const assert = require('chai').assert;
const app = require('../../assert');
//Asserting 
// cara Assert menggunakan chai 
describe('Welcome Test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(),"Welcome to Test QA")
    })
})