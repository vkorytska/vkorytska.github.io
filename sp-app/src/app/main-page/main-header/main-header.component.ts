import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PricingPlanComponent } from 'src/app/Custom-Modal/pricing-plan';

@Component({ 
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
    @Input() isHidden: boolean;
    @Output() onChanged = new EventEmitter<boolean>();

    change(isLogInHidden:any) {
        this.onChanged.emit(isLogInHidden);
        this.isHidden = isLogInHidden;
    }

    openMenu:boolean = false;

    hasClassName() {
        var burgerBtn = document.getElementById("burger-btn");
        return burgerBtn.classList.contains("selected");
    }

    public setStyleAttribute(element: HTMLElement, attrs: { [key: string]: Object }): void {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach((key: string) => {
                element.style[key] = attrs[key];
            });
        }
    }

    showLogInModal() {
        this.change(false);
        let elem: HTMLElement = document.body;
        this.setStyleAttribute(elem, {'overflow': 'hidden'});
    }
    public isActivated:boolean = JSON.parse(localStorage.getItem('isActivated'));

    //Pricing dialog
    @ViewChild(PricingPlanComponent)
    public pricingPlan: PricingPlanComponent;

    openModal(id: string){
        this.pricingPlan.openModal(id);
    }
}