import { Component, ViewChild } from '@angular/core';
import { PricingPlanComponent } from 'src/app/Custom-Modal/pricing-plan';
import { PartnerModalComponent } from 'src/app/Custom-Modal/partner-modal';

@Component({
    selector: 'main-footer',
    templateUrl: './main-footer.component.html',
    styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {
    public isActivated:boolean = JSON.parse(localStorage.getItem('isActivated'));
    public routerLinkValue = this.isActivated ? '/myProfile' : '/main';

     @ViewChild(PricingPlanComponent)
     public pricingPlan: PricingPlanComponent;

     @ViewChild(PartnerModalComponent)
     public partnerModal: PartnerModalComponent;
 
     openModal(id: string){
         switch(id){
            case 'pricing-plan':
                this.pricingPlan.openModal(id);
                break;
            case 'partner-modal': 
                this.partnerModal.openModal(id);
                break;
         }
         
     }
}
