import { Component } from '@angular/core';

@Component({
    selector: 'about-course',
    templateUrl: './about-course.component.html',
    styleUrls: ['./about-course.component.scss']
})
export class AboutCourseComponent {

    public courses:Objects[] = [
        {id: 1, totalTime: '19:23', url: '../../../assets/course_1.jpg', author: 'Julia Molchanova', nameCourse: 'Character of the fantasy style', category: [Category[0], Category[5]], status: Status[3]},
        {id: 2, totalTime: '22:56', url: '../../../assets/course_2.jpg', author: 'Julia Molchanova', nameCourse: 'How to draw a character',category: [Category[0], Category[5]], status: Status[1]},
        {id: 3, totalTime: '30:43', url: '../../../assets/course_3.jpg', author: 'Sanketh Yayathi', nameCourse: 'Character for the game', category: [Category[0], Category[5]], status: Status[0]},
        {id: 4, totalTime: '14:25', url: '../../../assets/course_4.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2]},
    ];
}

export interface Objects {
    id: number;
    totalTime: string;
    url: string;
    author: string;
    nameCourse: string;
    category: string[];
    status: string;
}

enum Category {
    DigitalArts, 
    Portrait,
    Landscape,
    Animals,
    Anatomy,
    Characters
}

enum Status {
    PRO, 
    Plus,
    Free,
    Optimal
}