import { Component } from '@angular/core';

@Component({
    selector: 'single-course-page',
    templateUrl: './course-page.component.html',
})
export class CoursePageComponent {
  public isHidden: boolean = true;

  onChanged(isLogInHidden:any){
    this.isHidden = isLogInHidden;
  }   
} 