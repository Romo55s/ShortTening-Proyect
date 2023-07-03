import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { HomeShorterBarComponent } from './components/home-shorter-bar/home-shorter-bar.component';
import { AdvancedStatsComponent } from './components/advanced-stats/advanced-stats.component';
import { BoostLinksComponent } from './components/boost-links/boost-links.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeTitleComponent,
    HomeShorterBarComponent,
    AdvancedStatsComponent,
    BoostLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
