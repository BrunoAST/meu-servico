import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './view/test-cypress.component.html',
    styleUrls: ['./view/test-cypress.component.scss']
})
export class TestCypressComponent implements OnInit {
    form = new FormGroup({});

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this._buildForm();
    }

    private _buildForm(): void {
        this.form = this.formBuilder.group({
            username: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            password: [null, [Validators.required, Validators.maxLength(32)]]
        });
    }
}
