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
import { SignupComponent } from './signup/signup.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { environment } from './environment';
import { AngularFireModule } from '@angular/fire';
import "firebase/database";

const firebaseConfig = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  databaseURL: environment.firebase.databaseURL,
  storageBucket: environment.firebase.storageBucket
}

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
    LoginComponent,
    SignupComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
