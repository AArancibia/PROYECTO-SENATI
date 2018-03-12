import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DetalleProductoComponent} from "./dashboard/detalle-producto/detalle-producto.component";

const pageRoutes: Routes = [
   { path: '',
     component: PagesComponent,
     children: [
       { path: '', component: DashboardComponent},
       { path: 'det', component: DetalleProductoComponent}
     ]
   }
];

export const PagesRoutes = RouterModule.forChild(pageRoutes)
