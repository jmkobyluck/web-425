import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShopPartsComponent } from './shop-parts/shop-parts.component';
import { ShopServicesComponent } from './shop-services/shop-services.component';
import { ShopSummaryComponent } from './shop-summary/shop-summary.component';
import { AdminPartsComponent } from './admin-parts/admin-parts.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: ShopHomeComponent,
        children: [
          {
            path: '',
            component: ShopPartsComponent,
            outlet: 'parts',
          },
          {
            path: '',
            component: ShopServicesComponent,
            outlet: 'services',
          },
          {
            path: '',
            component: ShopSummaryComponent,
            outlet: 'summary',
          },
        ],
      },
      {
        path: 'admin',
        component: AdminHomeComponent,
        children: [
          {
            path: '',
            component: AdminPartsComponent,
            outlet: 'parts',
          },
          {
            path: '',
            component: AdminServicesComponent,
            outlet: 'services',
          },
        ],
      },
      {
        path: '',
        component: SidenavComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
