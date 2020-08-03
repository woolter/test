import Page from 'src/pages/page';
import employeesSelector from '@selectors/employees/employees'

class EmployeesPage extends Page {

    public selectAllCheckBox(){
        this.allCheckbox.forEach(singleCheckBox => singleCheckBox.click())
    }
    
    public selectFirsCheckBox(){
        this.allCheckbox[0].click();
    }
    
    public selectXCheckBox(x: number){
        this.allCheckbox[0].click();
    }
    
    public expandAll(){
        this.allArrows.forEach(singleArrow => singleArrow.click())
    }

    public selectXEmployee(position: number){
        this.selectXCheckBox(position);
        this.viewData();
    }

    public viewData(){
        this.viewDataBtn.click();
    }


    public open() {
        return super.open();
    }
    private get allNames(): WebdriverIO.ElementArray { return $$(employeesSelector.elm.allCheckbox) }
    private get allCheckbox(): WebdriverIO.ElementArray { return $$(employeesSelector.elm.allCheckbox) }
    private get allArrows(): WebdriverIO.ElementArray { return $$(employeesSelector.elm.allArrows) }
    private get viewDataBtn(): WebdriverIO.Element { return $(employeesSelector.btn.view) }

}

export default new EmployeesPage();