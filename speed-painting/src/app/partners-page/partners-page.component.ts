import { Component } from '@angular/core';

@Component({
    selector: 'partners-page',
    templateUrl: './partners-page.component.html',
})
export class PartnersPageComponent {
  public isHidden: boolean = true;

  onChanged(isLogInHidden:any){
    this.isHidden = isLogInHidden;
  }  
} 