import { Component } from '@angular/core';

@Component({
    selector: 'students-page',
    templateUrl: './students-page.component.html',
})
export class StudentsPageComponent {
  public isHidden: boolean = true;

  onChanged(isLogInHidden:any){
    this.isHidden = isLogInHidden;
  }   
} 