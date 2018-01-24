import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: HomeComponent },

            { path: 'bonjour', loadChildren: 'app/modules/bonjour/bonjour.module#BonjourModule', },
            { path: 'aurevoir', loadChildren: 'app/modules/aurevoir/aurevoir.module#AurevoirModule', },

            { path: '**', component: NotFoundComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
