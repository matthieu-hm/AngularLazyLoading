import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './components/hello/hello.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'hello' },
            { path: 'hello', component: HelloComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class BonjourRoutingModule { }
