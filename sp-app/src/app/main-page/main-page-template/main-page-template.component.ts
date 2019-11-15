import { Component } from '@angular/core';

@Component({
    selector: 'main-page-template', 
    templateUrl: './main-page-template.component.html'
})
export class MainPageTemplateComponent {
  public isHidden: boolean = true;

  onChanged(isLogInHidden:any){
    this.isHidden = isLogInHidden;
  }  
}

