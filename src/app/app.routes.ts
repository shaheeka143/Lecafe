import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'Menu',component:MenuComponent},
    {path:'Services',component:ServicesComponent},
    {path:'AboutUs',component:AboutusComponent},
    {path:'ContactUs',component:ContactUsComponent}
];

