import { Component } from '@angular/core';

@Component({
    selector: 'about-speed-painting',
    templateUrl: './about-speed-painting.component.html',
    styleUrls: ['./about-speed-painting.component.scss']
})
export class AboutSpeedPaintingComponent {
    socialNetworksFirstRow:SocialNetworks[] = [
        {url: '../../../assets/creative-cloud.png', name: 'Creative Cloud'},
        {url: '../../../assets/behance.png', name: 'Behance'},
        {url: '../../../assets/Dribbble.png', name: 'Dribbble'},
        {url: '../../../assets/Pinterest.png', name: 'Pinterest'},
        {url: '../../../assets/Facebook.png', name: 'Facebook'},
        {url: '../../../assets/Instagram.png', name: 'Instagram'}
    ]

    socialNetworksSecondRow:SocialNetworks[] = [
        {url: '../../../assets/Awwwards.png', name: 'Awwwards'},
        {url: '../../../assets/DeviantArt.png', name: 'DeviantArt'},
        {url: '../../../assets/Vimeo.png', name: 'Vimeo'},
        {url: '../../../assets/YouTube.png', name: 'YouTube'},
        {url: '../../../assets/Twitter.png', name: 'Twitter'},
        {url: '../../../assets/Tumblr.png', name: 'Tumblr'}
    ]
}

export interface SocialNetworks{
    url:string;
    name:string;
}
