import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ShopPartsComponent } from './shop-parts/shop-parts.component';
import { ShopServicesComponent } from './shop-services/shop-services.component';
import { ShopSummaryComponent } from './shop-summary/shop-summary.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPartsComponent } from './admin-parts/admin-parts.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ShopHomeComponent,
    ShopPartsComponent,
    ShopServicesComponent,
    ShopSummaryComponent,
    AdminHomeComponent,
    AdminPartsComponent,
    AdminServicesComponent,
    NavbarComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
