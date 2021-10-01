import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employee/employee.component';

/******** Services Import *****************/
import { EmployeeService } from './services/employee.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [AppComponent, HelloComponent, EmployeeComponent],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
