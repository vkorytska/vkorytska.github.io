import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public imageUrl = '../../../assets/dashboard.png';

    uploadImage(fileInput: any){
        if (fileInput.target.files && fileInput.target.files[0]) {
            const reader = new FileReader();
          
            reader.onload = ((e) => {
                this.imageUrl = e.target["result"];
            });
          
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }

    isShownShareBtn:boolean = false;
}