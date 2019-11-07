import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {ContentComponent} from './components/content.component';
import {CategoryComponent} from './components/category.component';

const appRoutes : Routes = [
    {
        path : '',
        component : UserComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'content',
        component : ContentComponent
    },
    {
        path : 'category',
        component : CategoryComponent
    },
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);

