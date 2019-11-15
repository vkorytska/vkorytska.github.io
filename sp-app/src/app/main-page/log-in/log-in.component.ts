import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
@Component({
    selector: 'log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})

export class LogInComponent {
    @Input() isHidden: boolean; 

    @Output() onChanged = new EventEmitter<boolean>();

    change(isHidden: any) {
        this.onChanged.emit(isHidden);
        this.isHidden = isHidden;
    } 

    public setStyleAttribute(element: HTMLElement, attrs: { [key: string]: Object }): void {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach((key: string) => {
                element.style[key] = attrs[key];
            });
        }
    }

    close(){
        this.change(true);
        let elem: HTMLElement = document.body;
        this.setStyleAttribute(elem, {'overflow': 'auto'});
    }

    changeLocation(){
        localStorage.setItem('isActivated', 'true');
        window.location.href='/myProfile';
    }

    constructor(private formBuilder: FormBuilder) { }

    form: FormGroup = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required]
    }); 
}


