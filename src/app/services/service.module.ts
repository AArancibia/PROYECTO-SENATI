import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SidebarService} from "./shared/sidebar.service";
import {SharedService} from "./shared/shared.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService
  ],
  declarations: []
})

export class ServiceModule {}
