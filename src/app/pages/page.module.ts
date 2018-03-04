import {NgModule} from "@angular/core";
import {PagesComponent} from "./pages.component";
import {PagesRoutes} from "./pages.routes";
import {NopagefoundComponent} from "../shared/nopagefound/nopagefound.component";
import {SidebarComponent} from "../shared/sidebar/sidebar.component";
import {HeaderMenuComponent} from "../shared/header-menu/header-menu.component";
import {MedicosComponent} from "./medicos/medicos.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    UsuariosComponent,
    MedicosComponent,
    HeaderMenuComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    PagesRoutes,
    RouterModule
  ]
})

export class PageModule{}
