const assert = require('chai').assert
const EmployeeReport = require('../src/employeeReport.js');

const employees = [
    { name: 'Max', age: 17 },
    { name: 'Sepp', age: 18 },
    { name: 'Nina', age: 15 },
    { name: 'Mike', age: 51 },
  ];

describe('employeeReport', function() {
  describe('with a list of employees', function() {
    it('should return everyone over 18', function() {
        let employeeReport = new EmployeeReport();
        let result = employeeReport.getAllOver18(employees);

        assert.equal(['Sepp', 'Mike'], result);
    });
  });
});