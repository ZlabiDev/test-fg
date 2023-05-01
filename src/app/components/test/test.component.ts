import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../model/user";
import {ToFormGroup} from "../../utility/to-form-group";

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    private fg: FormGroup<ToFormGroup<User>>;

    ngOnInit(): void {
        this.fg = new FormGroup({
            email: new FormControl(''),
            age: new FormControl(1)
        });
    }
}
