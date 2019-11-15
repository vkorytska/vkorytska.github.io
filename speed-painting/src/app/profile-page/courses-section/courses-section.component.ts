import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: './courses-section.component.html',
    styleUrls: ['./courses-section.component.scss']
})

export class CoursesComponent {
    category:Object = {
        1:'Digital Arts', 
        2: 'Portrait',
        3: 'Landscape',
        4: 'Animals',
        5: 'Anatomy',
        6: 'Characters'
    }

    status:Object = {
        1:'PRO', 
        2: 'Plus',
        3: 'Free',
        4: 'Optimal'
    }

    public courses:Objects[] = [
        {id: 1, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1]},
        {id: 2, url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape',category: [this.category[1], this.category[3]], status: this.status[2]},
        {id: 3, url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3]},
        {id: 4, url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4]},
        {id: 5, url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [this.category[1], this.category[6], this.category[5]], status: this.status[1]},
        {id: 6, url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[4]},
        {id: 7, url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2]},
        {id: 8, url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Artwork', category: [this.category[1], this.category[4]], status: this.status[3]},
        {id: 9, url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4]},
        {id: 10, url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1]},
        {id: 11, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1]},
        {id: 12, url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2]},
        {id: 13, url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3]},
        {id: 14, url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4]},
        {id: 15, url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1]},
        {id: 16, url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1]},
        {id: 17, url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape',category: [this.category[1], this.category[3]], status: this.status[2]},
        {id: 18, url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3]},
        {id: 19, url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4]},
        {id: 20, url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1]},
         {id: 21, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1]},
    ];
}

export interface Objects {
    id: number;
    url: string;
    author: string;
    nameCourse: string;
    category: object;
    status: object;
}