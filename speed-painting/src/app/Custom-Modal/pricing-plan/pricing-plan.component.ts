import { Component } from '@angular/core';
import { ModalService } from '../../_services';

@Component({ 
    selector: 'pricing-plan',
    templateUrl: './pricing-plan.component.html',
    styleUrls: ['./pricing-plan.component.scss']
})
export class PricingPlanComponent {
    constructor(private modalService: ModalService) {
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    public isActivated:boolean =  JSON.parse(localStorage.getItem('isActivated'));
}