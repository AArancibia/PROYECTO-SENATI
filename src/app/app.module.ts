import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.route";
import {PageModule} from "./pages/page.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
