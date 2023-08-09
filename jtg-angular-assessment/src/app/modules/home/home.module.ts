import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjNavbarComponent } from './components/proj-navbar/proj-navbar.component';
import { ProjFooterComponent } from './components/proj-footer/proj-footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjNavbarComponent,
    ProjFooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
