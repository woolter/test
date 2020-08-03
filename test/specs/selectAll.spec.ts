
import EmployeesPage from '@pages/employees.page';

describe('Select and validate ALL', () => {
    it('should select all employees', () => {
        EmployeesPage.open();
        EmployeesPage.selectFirsCheckBox();
        EmployeesPage.viewData();

        browser.pause(2000);

        // Expect
 
    });
});


