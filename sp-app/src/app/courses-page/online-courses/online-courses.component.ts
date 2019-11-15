import { Component } from '@angular/core';

@Component({
    selector: 'courses-template',
    templateUrl: './online-courses.component.html',
    styleUrls: ['./online-courses.component.scss']
})

export class CoursesTemplateComponent  {
    limit:number = 15;

    show() {
        let loadCount:number = 6;

        if(this.courses.length-loadCount >= this.limit){
            this.limit = this.courses.length - this.limit > loadCount ? this.limit + loadCount : this.courses.length; 
        } else {
            this.limit = 15; 
        }
    }

    public searchText: string = '';
    public searchLevel: string = '';
    public searchCategory: string = '';
    public searchStatus: string = '';

    public LevelsDropdown = [Levels[0], Levels[1], Levels[2]];
    public CategoryDropdown = [Category[0], Category[1], Category[2], Category[3], Category[4], Category[5]];
    public StatusDropdown = [Status[0], Status[1], Status[2], Status[3]];

    changeLevel(e) {
        this.searchLevel = e.target.value == "All levels" ? '' : e.target.value;
    }

    changeCategory(e) {
        this.searchCategory = e.target.value == "All category" ? '' : e.target.value;
    }

    changeStatus(e) {
        this.searchStatus = e.target.value == "Course status" ? '' : e.target.value;
    }

     public courses:Objects[] = [
        {id: 1, level: Levels[0], count: 12, totalTime: '16:20', url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [Category[0], Category[1]], status: Status[0]},
        {id: 2, level: Levels[1], count: 6, totalTime: '15:10', url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape',category: [Category[0], Category[2]], status: Status[1]},
        {id: 3, level: Levels[2], count: 13, totalTime: '20:00', url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [Category[0], Category[3]], status: Status[2]},
        {id: 4, level: Levels[0], count: 2, totalTime: '14:25', url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [Category[0], Category[4]], status: Status[3]},
        {id: 5, level: Levels[1], count: 1, totalTime: '5:00', url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [Category[0], Category[5]], status: Status[0]},
        {id: 6, level: Levels[2], count: 12, totalTime: '15:45', url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[3]},
        {id: 7, level: Levels[0], count: 15, totalTime: '20:16', url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2]},
        {id: 8, level: Levels[1], count: 7, totalTime: '17:20', url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Artwork', category: [Category[0], Category[3]], status:Status[1]},
        {id: 9, level: Levels[2], count: 4, totalTime: '12:00', url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [Category[0], Category[4]], status: Status[3]},
        {id: 10, level: Levels[0], count: 2, totalTime: '5:30', url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [Category[0], Category[5]], status:Status[1]},
        {id: 11, level: Levels[1], count: 15, totalTime: '12:30', url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [Category[0], Category[1]], status: Status[1]},
        {id: 12, level: Levels[1], count: 4, totalTime: '6:20', url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2]},
        {id: 13, level: Levels[2], count: 3, totalTime: '3:00', url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [Category[0], Category[3]], status: Status[3]},
        {id: 14, level: Levels[0], count: 3, totalTime: '3:45', url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [Category[0], Category[4]], status: Status[2]},
        {id: 15, level: Levels[1], count: 12, totalTime: '20:00', url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [Category[0], Category[5]], status: Status[1]},
        {id: 16, level: Levels[2], count: 6, totalTime: '15:40', url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Digital drawing of portrait', category: [Category[0], Category[1]], status: Status[1]},
        {id: 17, level: Levels[0], count: 5, totalTime: '4:15', url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape',category: [Category[0], Category[2]], status: Status[2]},
        {id: 18, level: Levels[1], count: 7, totalTime: '27:16', url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Promotional artwork', category: [Category[0], Category[3]], status: Status[3]},
        {id: 19, level: Levels[2], count: 16, totalTime: '16:15', url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [Category[0], Category[4]], status: Status[2]},
        {id: 20, level: Levels[0], count: 12, totalTime: '21:00', url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [Category[0], Category[5]], status: Status[1]},
        {id: 21, level: Levels[0], count: 2, totalTime: '7:45', url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [Category[0], Category[1]], status: Status[1]},
    ];
    
    public isActivated:boolean =  JSON.parse(localStorage.getItem('isActivated'));
} 

export interface Objects {
    id: number;
    level: string;
    count: number;
    totalTime: string;
    url: string;
    author: string;
    nameCourse: string;
    category: string[];
    status: string;
}

enum Levels {
    Beginner,
    Intermediate,
    Advanced
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