import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjNavbarComponent } from './components/proj-navbar/proj-navbar.component';
import { ProjFooterComponent } from './components/proj-footer/proj-footer.component';
import { ProjSwipperComponent } from './components/proj-swipper/proj-swipper.component';
import { TailorMadeFeaturesComponent } from './pages/tailor-made-features/tailor-made-features.component';
import { RealStoriesFromRealCustomersComponent } from './pages/real-stories-from-real-customers/real-stories-from-real-customers.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjNavbarComponent,
    ProjFooterComponent,
    ProjSwipperComponent,
    TailorMadeFeaturesComponent,
    RealStoriesFromRealCustomersComponent,
    AchievementsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
