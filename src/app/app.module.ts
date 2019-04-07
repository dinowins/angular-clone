import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageMastComponent } from './homepage/homepage-mast/homepage-mast.component';
import { RegionCasterComponent } from './homepage/region-caster/region-caster.component';
import { SignupHeroComponent } from './homepage/signup-hero/signup-hero.component';
import { FavoritesBarComponent } from './favorites-bar/favorites-bar.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HomepageMastComponent,
    RegionCasterComponent,
    SignupHeroComponent,
    FavoritesBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
