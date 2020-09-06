import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import of component
import { AppComponent } from './app.component';

// import of modules dependencies
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
