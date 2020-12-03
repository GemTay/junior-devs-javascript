class EmployeeReport {
    constructor() {}

    getAllOver18(employees) {
        let employeesOver18 = employees.filter(e => e.age >= 18);
        let employeeNamesOver18 = employeesOver18.map(e => e.name)
        return employeeNamesOver18;
    };
}

module.exports = EmployeeReport;