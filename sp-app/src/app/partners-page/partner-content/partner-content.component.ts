import { Component, ViewChild } from '@angular/core';
import { PartnerModalComponent } from 'src/app/Custom-Modal/partner-modal';

@Component({
    selector: 'partners-content',
    templateUrl: './partner-content.component.html',
    styleUrls: ['./partner-content.component.scss']
})
export class PartnersContentComponent {
    //Pricing dialog
    @ViewChild(PartnerModalComponent)
    public partnerModal: PartnerModalComponent;

    openModal(id: string){
        this.partnerModal.openModal(id);
    }

    public imageUrl = '../../../assets/partner-dashboard.png';

    public partners:Array<Partner> = [
        { url: '../../../assets/partner-google-color.png' },
        { url: '../../../assets/partner-adobe-color.png' },
        { url: '../../../assets/partner-mailChimp-color.png' },
        { url: '../../../assets/partner-youtube-color.png' },
        { url: '../../../assets/partner-deviant-color.png' },
        { url: '../../../assets/partner-behance-color.png' },
        { url: '../../../assets/partner-dribbble-color.png' },
        { url: '../../../assets/partner-pinterest-color.png' },
        { url: '../../../assets/partner-vimeo-color.png' },
        { url: '../../../assets/partner-instagram-color.png' },
        { url: '../../../assets/partner-awwwards-color.png' },
        { url: '../../../assets/partner-twitter-color.png' },
        { url: '../../../assets/partner-tumblr-color.png' },
        { url: '../../../assets/partner-dropbox-color.png' },
        { url: '../../../assets/partner-skyDrive-color.png' },
        { url: '../../../assets/partner-box-color.png' }
    ]
} 

export interface Partner {
    url: string;
}