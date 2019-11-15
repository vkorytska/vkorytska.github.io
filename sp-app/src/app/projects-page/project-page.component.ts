import { Component } from '@angular/core';

@Component({
    selector: 'project-page',
    templateUrl: './project-page.component.html',
})
export class ProjectPageComponent {
  public isHidden: boolean = true;

  onChanged(isLogInHidden:any){
    this.isHidden = isLogInHidden;
  }   
} 