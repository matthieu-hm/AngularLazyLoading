import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByeComponent } from './components/bye/bye.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'bye' },
            { path: 'bye', component: ByeComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AurevoirRoutingModule { }
