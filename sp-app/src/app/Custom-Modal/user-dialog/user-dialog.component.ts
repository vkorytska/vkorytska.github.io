import { Component } from '@angular/core';
import { ModalService } from '../../_services';

@Component({
    selector: 'user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

    constructor(private modalService: ModalService) {
    }

    openModal(id: string) {
        this.modalService.open(id);
        document.getElementsByClassName('modal-body')[0].setAttribute('clickOutside', 'closeModal("user-dialog")');
        document.getElementsByTagName("body")[0].style.overflow = 'auto';
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    openProfilePage(){
        window.location.href = "/myProfile";
    }

    logOut(){
        localStorage.setItem('isActivated', 'false');
        window.location.href = "/main";
    }
    
} 