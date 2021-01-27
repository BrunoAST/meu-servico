import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestCypressComponent } from './test-cypress.component';
import { TestCypressRoutesModule } from './test-cypress.routes.module';

@NgModule({
    declarations: [TestCypressComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TestCypressRoutesModule
    ]
})
export class TestCypressModule { }
