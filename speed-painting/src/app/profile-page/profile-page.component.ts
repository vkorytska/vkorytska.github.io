import { Component } from '@angular/core';

@Component({
    selector: 'profile-page',
    templateUrl: './profile-page.component.html',
})
export class MyProfileComponent {
  public isHidden: boolean = true;

  onChanged(isLogInHidden:any){
    this.isHidden = isLogInHidden;
  }  
} 