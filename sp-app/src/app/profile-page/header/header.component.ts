import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserDialogComponent } from 'src/app/Custom-Modal/user-dialog';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    @Input() isHidden: boolean;
    @Output() onChanged = new EventEmitter<boolean>();
    
    @ViewChild(UserDialogComponent)
    private userDialog: UserDialogComponent;

    openModal(id: string){
        this.userDialog.openModal(id);
    }

    change(isLogInHidden:any) {
        this.onChanged.emit(isLogInHidden);
        this.isHidden = isLogInHidden;
    }
    
    openMenu:boolean = false; 

    hasClassName() {
        var burgerBtn = document.getElementById("burger-btn");
        return burgerBtn.classList.contains("selected");
    }
    public isActivated:boolean =  JSON.parse(localStorage.getItem('isActivated'));
    public routerLinkValue = this.isActivated ? '/myProfile' : '/main';

    LogOut(){
        localStorage.setItem('isActivated', 'false');
        this.isActivated = false;
        window.location.href='/main';
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
}