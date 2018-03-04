import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const pageRoutes: Routes = [
   { path: '',
     component: PagesComponent,
     children: [
       { path: '', component: DashboardComponent}
     ]
   }
];

export const PagesRoutes = RouterModule.forChild(pageRoutes)
