import {Routes, RouterModule} from '@angular/router';
import { MainPageTemplateComponent } from './main-page/main-page-template/main-page-template.component';
import { MyProfileComponent } from './profile-page/profile-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { PartnersPageComponent } from './partners-page/partners-page.component';
import { ProjectPageComponent } from './projects-page/project-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: '', component: MainPageTemplateComponent},
    { path: 'main', component: MainPageTemplateComponent},
    { path: 'myProfile', component: MyProfileComponent },
    { path: 'courses', component: CoursesPageComponent },
    { path: 'course', component: CoursePageComponent },
    { path: 'partners', component: PartnersPageComponent },
    { path: 'projects', component: ProjectPageComponent },
    { path: 'students', component: StudentsPageComponent },
    { path: '**', component: NotFoundComponent }
  ];

  export const routing = RouterModule.forRoot(appRoutes);