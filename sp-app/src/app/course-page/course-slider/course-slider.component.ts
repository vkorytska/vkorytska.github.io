import { Component } from '@angular/core';

@Component({
    selector: 'courseSlider',
    templateUrl: './course-slider.component.html',
    styleUrls: ['./course-slider.component.scss']
})
export class CourseSliderComponent {
    public courses:Objects[] = [
        {id: 1, totalTime: '19:23', url: '../../../assets/course_1.jpg', lesson: 'Lesson - 01', nameCourse: 'Character of the fantasy style', category: [Category[0], Category[5]], status: Status[3]},
        {id: 2, totalTime: '22:56', url: '../../../assets/course_2.jpg', lesson: 'Lesson - 02', nameCourse: 'How to draw a character',category: [Category[0], Category[5]], status: Status[1]},
        {id: 3, totalTime: '30:43', url: '../../../assets/course_3.jpg', lesson: 'Lesson - 03', nameCourse: 'Character for the game', category: [Category[0], Category[5]], status: Status[0]},
        {id: 4, totalTime: '14:25', url: '../../../assets/course_4.jpg', lesson: 'Lesson - 04', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2]},
        {id: 5, totalTime: '15:22', url: '../../../assets/course_1.jpg', lesson: 'Lesson - 05', nameCourse: 'Character of the fantasy style', category: [Category[0], Category[5]], status: Status[3]},
        {id: 6, totalTime: '20:55', url: '../../../assets/course_2.jpg', lesson: 'Lesson - 06', nameCourse: 'How to draw a character',category: [Category[0], Category[5]], status: Status[1]},
        {id: 7, totalTime: '16:45', url: '../../../assets/course_3.jpg', lesson: 'Lesson - 07', nameCourse: 'Character for the game', category: [Category[0], Category[5]], status: Status[0]},
        {id: 8, totalTime: '14:25', url: '../../../assets/course_4.jpg', lesson: 'Lesson - 08', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2]},
    ];

    public previousNumberOfSlide = this.courses.length - 1;
    public numberOfSlide = 0;
    public nextNumberOfSlide = 1;

    clickRight(){
        if(this.numberOfSlide == this.courses.length-1){
            this.numberOfSlide = 0;
        } else {
            this.numberOfSlide = this.numberOfSlide + 1;
        }

        if(this.numberOfSlide == this.courses.length-1){
            this.nextNumberOfSlide = 0;
        } else {
            this.nextNumberOfSlide = this.numberOfSlide + 1;
        }

        if(this.numberOfSlide == 0){
            this.previousNumberOfSlide = this.courses.length-1;
        } else {
            this.previousNumberOfSlide = this.numberOfSlide - 1;
        }
    }

    clickLeft(){
        if(this.numberOfSlide == 0){
            this.numberOfSlide = this.courses.length - 1;
        } else {
            this.numberOfSlide = this.numberOfSlide - 1;
        }

        if(this.numberOfSlide == 0){
            this.previousNumberOfSlide = this.courses.length - 1;
        } else {
            this.previousNumberOfSlide = this.numberOfSlide - 1;
        }

        if(this.numberOfSlide == this.courses.length - 1){
            this.nextNumberOfSlide = 0;
        } else {
            this.nextNumberOfSlide = this.numberOfSlide + 1;
        }
    }
}

export interface Objects {
    id: number;
    totalTime: string;
    url: string;
    lesson: string;
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