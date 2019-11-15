import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientModule } from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';
import { FilterDataPipe } from './Filter/filter.pipe';
import { ModalComponent } from './_directives/modal.component';
import { ClickOutsideDirective } from './_directives/click-outside.directive';
import { ModalService } from './_services/modal.service';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { MainHeaderComponent } from './main-page/main-header/main-header.component';
import { OnlineCoursesComponent } from './main-page/online-courses/online-courses.component';
import { AboutSpeedPaintingComponent } from './main-page/about-speed-painting/about-speed-painting.component';
import { WhySpeedPaintingComponent } from './main-page/why-speed-painting/why-speed-painting.component';
import { WelcomeSchoolComponent } from './main-page/welcome-school/welcome-school.component';
import { CommentsComponent } from './main-page/what-people-say/comments.component';
import { PartnersComponent } from './main-page/partners/partners.component';
import { MainFooterComponent } from './main-page/main-footer/main-footer.component';
import { LogInComponent } from './main-page/log-in/log-in.component';
import { MyProfileComponent } from './profile-page/profile-page.component';
import { NotFoundComponent } from './not-found.component';
import { MainPageTemplateComponent } from './main-page/main-page-template/main-page-template.component';
import { HeaderComponent } from './profile-page/header/header.component';
import { DashboardComponent } from './profile-page/dashboard/dashboard.component';
import { UserInformationComponent } from './profile-page/user-information/user-information.component';
import { MainContentComponent } from './profile-page/main-content/main-content.component';
import { InformationSectionComponent } from './profile-page/information-section/information-section.component';
import { CoursesComponent } from './profile-page/courses-section/courses-section.component';
import { ProjectSectionComponent } from './profile-page/project-section/project-section.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { PartnersPageComponent } from './partners-page/partners-page.component';
import { PartnersContentComponent } from './partners-page/partner-content/partner-content.component';
import { TeachersComponent } from './courses-page/teachers/teachers.component';
import { CoursesTemplateComponent } from './courses-page/online-courses/online-courses.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { AboutCourseComponent } from './course-page/about-course/about-course.component';
import { CourseSliderComponent } from './course-page/course-slider/course-slider.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProjectPageComponent } from './projects-page/project-page.component';
import { ProjectContentComponent } from './projects-page/project-content/project-content.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { StudentContentComponent } from './students-page/student-component/student-content.component';
import { UserDialogComponent } from './Custom-Modal/user-dialog/user-dialog.component';
import { PricingPlanComponent } from './Custom-Modal/pricing-plan/pricing-plan.component';
import { PartnerModalComponent } from './Custom-Modal/partner-modal/partner-modal.component';

@NgModule({
  declarations: [ 
    FilterDataPipe,
    AppComponent, 
    MainHeaderComponent,
    OnlineCoursesComponent,
    AboutSpeedPaintingComponent ,
    WhySpeedPaintingComponent,
    WelcomeSchoolComponent,
    CommentsComponent,
    PartnersComponent,
    MainFooterComponent,
    LogInComponent,
    NotFoundComponent,
    MyProfileComponent,
    MainPageTemplateComponent,
    HeaderComponent,
    DashboardComponent,
    UserInformationComponent,
    MainContentComponent,
    InformationSectionComponent,
    CoursesComponent,
    ProjectSectionComponent,
    CoursesPageComponent,
    PartnersPageComponent,
    PartnersContentComponent,
    TeachersComponent,
    CoursesTemplateComponent,
    CoursePageComponent,
    AboutCourseComponent,
    CourseSliderComponent,
    ProjectPageComponent,
    ProjectContentComponent,
    StudentsPageComponent,
    StudentContentComponent,
    UserDialogComponent,
    ModalComponent,
    ClickOutsideDirective,
    PricingPlanComponent,
    PartnerModalComponent
  ],
  imports: [
    BrowserModule, 
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,       
    ShareButtonsModule,
    OwlModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ModalService
  ],
  bootstrap: [ 
    AppComponent
  ]
})

export class AppModule { }
