import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrimeNgModules } from './prime-ng/prime-ng.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [BrowserModule, AppRoutingModule, PrimeNgModules],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
