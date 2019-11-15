import { Component } from '@angular/core';

@Component({
    selector: 'partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})

export class PartnersComponent {

    public partners:IPartner[] = [
        {url: '../../../assets/behance-partner.png', name: 'Behance', site: 'https://www.behance.net/'},
        {url: '../../../assets/deviant-partner.png', name: 'Deviant', site: 'https://www.deviantart.com/'},
        {url: '../../../assets/dribbble-partner.png', name: 'Dribbble', site: 'https://dribbble.com/'},
        {url: '../../../assets/pinterest-partner.png', name: 'Pinterest', site: 'https://www.pinterest.com/'},
        {url: '../../../assets/vimeo-partner.png', name: 'Vimeo', site: 'https://vimeo.com/'},
        {url: '../../../assets/deviant-partner.png', name: 'Deviant', site: 'https://www.deviantart.com/'},
        {url: '../../../assets/dribbble-partner.png', name: 'Dribbble', site: 'https://dribbble.com/'},
        {url: '../../../assets/pinterest-partner.png', name: 'Pinterest', site: 'https://www.pinterest.com/'},
        {url: '../../../assets/vimeo-partner.png', name: 'Vimeo', site: 'https://vimeo.com/'}
    ];
 
    limit:number = 5;

    show() {
        if(this.limit > 5){
            this.limit = 5; 
        } else {
            this.limit = this.partners.length;
        }
    }
}

export interface IPartner{
    url:string;
    name:string;
    site:string;
}