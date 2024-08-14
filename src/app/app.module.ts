import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TabMenu } from 'primeng/tabmenu';
import { NgxMarqueeModule } from 'ngx-marquee';
@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        NgxMarqueeModule

    ],
})
export class AppModule { }