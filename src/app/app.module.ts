import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 0b6f52ee594f52c52de0c8e9b7d0350b40516477

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    HeroComponent,
    FooterComponent
>>>>>>> 0b6f52ee594f52c52de0c8e9b7d0350b40516477
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
