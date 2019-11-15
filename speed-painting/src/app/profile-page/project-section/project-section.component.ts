import { Component } from '@angular/core';
import '../../icons';

@Component({
    selector: 'project',
    templateUrl: './project-section.component.html',
    styleUrls: ['./project-section.component.scss']
})

export class ProjectSectionComponent {    

    public projects:Objects[] = [
        {id: 1, isShownShareBtn: false, url: '../../../assets/project-1.png', author: 'Nedko Ivanov', photo: '../../../assets/user-logo.png', nameProject: 'Digital drawing of portrait', revision:247, like: 53, comment: 12},
        {id: 2, isShownShareBtn: false, url: '../../../assets/project-2.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision:1139, like: 128, comment: 120},
        {id: 3, isShownShareBtn: false, url: '../../../assets/project-3.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Promotional artwork', revision:1178, like: 138, comment: 27},
        {id: 4, isShownShareBtn: false, url: '../../../assets/project-4.png', author: 'Sanketh Yayathi', photo: '../../../assets/user-logo.png', nameProject: 'Drawing characters', revision:1077, like: 357, comment: 12},
        {id: 5, isShownShareBtn: false, url: '../../../assets/project-5.png', author: 'Ramón Nuñez', photo: '../../../assets/user-logo.png', nameProject: 'Oil painting', revision:16139, like: 3028, comment: 200},
        {id: 6, isShownShareBtn: false, url: '../../../assets/project-6.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision:1276, like: 168, comment: 64},
        {id: 7, isShownShareBtn: false, url: '../../../assets/project-7.png', author: 'Sung Choi', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision:1009, like: 88, comment: 36},
        {id: 8, isShownShareBtn: false, url: '../../../assets/project-8.png', author: 'Nemanja Abazovic', photo: '../../../assets/user-logo.png', nameProject: 'Artwork', revision:4139, like: 828, comment: 129},
        {id: 9, isShownShareBtn: false, url: '../../../assets/project-9.png', author: 'Bram Vanhaeren', photo: '../../../assets/user-logo.png', nameProject: 'Drawing characters', revision:16139, like: 3028, comment: 200},
        {id: 10, isShownShareBtn: false, url: '../../../assets/project-10.png', author: 'Ismail Inceoglu', photo: '../../../assets/user-logo.png', nameProject: 'Oil painting', revision:480, like: 90, comment: 12},
        {id: 11, isShownShareBtn: false, url: '../../../assets/project-11.png', author: 'Nedko Ivanov', photo: '../../../assets/user-logo.png', nameProject: 'Digital drawing of portrait', revision:1276, like: 168, comment: 64},
        {id: 12, isShownShareBtn: false, url: '../../../assets/project-12.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision:1009, like: 138, comment: 36}
    ];

    IsShownShareBtn(key:Number){
        for (let entry of this.projects) {
            entry.isShownShareBtn = key == entry.id - 1 && !entry.isShownShareBtn;
        }
    }
}

export interface Objects {
    id: number;
    isShownShareBtn: boolean;
    url: string;
    author: string;
    photo: string;
    nameProject: string;
    revision: number;
    like: number;
    comment: number;
}