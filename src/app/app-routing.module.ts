import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './pages/contents/content.component';
import { LayoutComponent } from './layout-default/layout.component';
import { CarouselComponent } from './pages/carousel/carousel.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: ContentComponent },
            { path: 'carousel', component: CarouselComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
