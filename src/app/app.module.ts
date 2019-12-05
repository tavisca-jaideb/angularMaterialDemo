import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EmployeePickAnItemComponent } from "./employee-pick-an-item/employee-pick-an-item.component";
import { SidenavComponent } from "./employee-pick-an-item/sidenav/sidenav.component";
import { ProductsComponentComponent } from "./employee-pick-an-item/products-component/products-component.component";
import { ItemsListComponent } from "./employee-pick-an-item/products-component/items-list/items-list.component";
import { DetailscomponentComponent } from "./employee-pick-an-item/detailscomponent/detailscomponent.component";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BasicComponent } from "./employee-pick-an-item/basic/basic.component";
@NgModule({
  declarations: [
    AppComponent,
    EmployeePickAnItemComponent,
    SidenavComponent,
    ProductsComponentComponent,
    ItemsListComponent,
    DetailscomponentComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
