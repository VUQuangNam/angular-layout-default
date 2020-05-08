import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout-default/layout.component';
import { FilterComponent } from './filters/filter.component';
import { ContentComponent } from './pages/contents/content.component';
import { HeaderComponent } from './headers/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './pages/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LayoutComponent,
        FilterComponent,
        ContentComponent,
        FooterComponent,
        CarouselComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
