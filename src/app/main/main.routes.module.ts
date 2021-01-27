import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'test-cypress',
                loadChildren: () => import('./test-cypress/test-cypress.module').then(m => m.TestCypressModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class MainRoutesModule { }
