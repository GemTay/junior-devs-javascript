const assert = require('chai').assert
// const assert = chai.assert;
// import EmployeeReport from '../employeeReport.js'
const employeeReport = require('../employeeReport')

const employees = [
    { name: 'Max', age: 17 },
    { name: 'Sepp', age: 18 },
    { name: 'Nina', age: 15 },
    { name: 'Mike', age: 51 },
  ];

describe('employeeReport', function() {
  describe('with a list of employees', function() {
    it('should return everyone over 18', function() {
        let result = employeeReport.getAllOver18(employees);

        assert.equal(['Sepp', 'Mike'], result);
    });
  });
});