import { Component } from '@angular/core';

@Component({
    selector: 'courses-page',
    templateUrl: './courses-page.component.html',
})
export class CoursesPageComponent {
  public isHidden: boolean = true;

  onChanged(isLogInHidden:any){
    this.isHidden = isLogInHidden;
  }   
} 