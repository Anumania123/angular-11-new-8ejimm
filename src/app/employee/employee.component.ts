import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services';
import { Employee } from '../model/employee';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  rowData: any;
  public employees: Employee[];
  public columnDefs: ColDef[];

  /* "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }*/

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
    this.columnDefs = this.createColumnDefs();
  }

  private createColumnDefs() {
    return [
      {
        headerName: 'User Name',
        field: 'name',
        filter: true,
        enableSorting: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Email Id',
        field: 'email',
        filter: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Address',
        field: 'address.street',
        filter: true,
        sortable: true,
        editable: true,
        cellRenderer: '<a href="edit-user">{{email}}</a>',
      },
      {
        headerName: 'Company Name',
        field: 'company.name',
        filter: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Mobile',
        field: 'phone',
        filter: true,
        editable: true,
      },
    ];
  }
}
