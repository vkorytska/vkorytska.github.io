import { Component, ViewChild } from '@angular/core';
import { PricingPlanComponent } from 'src/app/Custom-Modal/pricing-plan';

@Component({
    selector: 'welcome-school',
    templateUrl: './welcome-school.component.html',
    styleUrls: ['./welcome-school.component.scss']
})

export class WelcomeSchoolComponent {
   
    public isActivated:boolean =  JSON.parse(localStorage.getItem('isActivated')); 

    //Pricing dialog
    @ViewChild(PricingPlanComponent)
    public pricingPlan: PricingPlanComponent;

    openModal(id: string){
        this.pricingPlan.openModal(id);
    }
}