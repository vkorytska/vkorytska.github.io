import { Component } from '@angular/core';

@Component({
    selector: 'teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {

    public teachers: Array<Teacher> = [
        { photo: '../../../assets/teacher-1.png', name: 'Daria Kruglova', profession: 'Illustrator' },
        { photo: '../../../assets/teacher_2.jpg', name: 'Michael Barney', profession: 'Character designer' },
        { photo: '../../../assets/teacher_3.jpg', name: 'Marta Bevacqua', profession: 'Artist architect' },
        { photo: '../../../assets/teacher_4.jpg', name: 'Scott Natyan', profession: 'Painter' },
        { photo: '../../../assets/teacher_5.jpg', name: 'Elizaveta Porodina', profession: 'Digital artist' },
        { photo: '../../../assets/teacher_6.jpg', name: 'Naeem Raza', profession: 'Painter' },
        { photo: '../../../assets/teacher-1.png', name: 'Daria Kruglova', profession: 'Illustrator' },
        { photo: '../../../assets/teacher_2.jpg', name: 'Michael Barney', profession: 'Character designer' },
        { photo: '../../../assets/teacher_3.jpg', name: 'Marta Bevacqua', profession: 'Artist architect' },
        { photo: '../../../assets/teacher_4.jpg', name: 'Scott Natyan', profession: 'Painter' },
        { photo: '../../../assets/teacher_5.jpg', name: 'Elizaveta Porodina', profession: 'Digital artist' },
        { photo: '../../../assets/teacher_6.jpg', name: 'Naeem Raza', profession: 'Painter' },
    ]

    carouselOptions = {
        items:4,
        loop:true,
        center: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        slideTransition: 'linear',
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
                nav: false,
            },
            600:{
                items:2,
                nav: false,
                dots: true,
            },
            768:{
                items:3,
            },
            1000:{
                items:4,
            },
            1201:{
                items:5
            }
        }
    } 
}

export interface Teacher {
    photo: string;
    name: string;
    profession: string;
}