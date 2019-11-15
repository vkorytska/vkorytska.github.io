import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../../_services';

@Component({ 
    selector: 'partner-modal',
    templateUrl: './partner-modal.component.html',
    styleUrls: ['./partner-modal.component.scss']
})
export class PartnerModalComponent {
    constructor(private modalService: ModalService, private formBuilder: FormBuilder) {
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        console.warn(this.form.value);
        this.form.reset();
        this.modalService.close(id);
    }

    form: FormGroup = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        jobTitle: [null, Validators.required],
        companyName: [null, Validators.required],
        country: [null, Validators.required],
        url: [null],
        notes: [null]
    }); 
}