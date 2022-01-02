import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"home",component:HomeComponent},
      {path:"countries",component:CountriesComponent},
      {path:"**",redirectTo:"Home"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
