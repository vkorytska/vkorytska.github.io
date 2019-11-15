import { Component } from '@angular/core';

@Component({
    selector: 'main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent {
    public isInformation: boolean = true;
    public isCourses: boolean = false;
    public isProjects: boolean = false;

    getContent(numberOfPage){
        this.isInformation = numberOfPage == pages.information;
        this.isCourses = numberOfPage == pages.courses;
        this.isProjects = numberOfPage == pages.projects;
    }
}

enum pages {
    information = 1,
    courses = 2,
    projects = 3
}