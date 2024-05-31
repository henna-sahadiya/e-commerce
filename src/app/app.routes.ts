import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:'product',component:ProductComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {path:'product/:id',component:SingleComponent
        
    }
];
