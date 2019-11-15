import { Component } from '@angular/core';

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
    private status:Object = {
        1:'PRO', 
        2: 'Plus',
        3: 'Free',
        4: 'Optimal'
    }

    key:number = 2;

    comment:Array<string>=[
        'An excellent school in which professional teachers will always tell and help you, here I am already engaged for a year, very tightened up my technique of drawing! I am glad that the courses are designed for any level of the student, you can be a beginner or an accomplished artist, but still develop further.',
        'Good work!',
        'thanks for courses!',
        'Yeah!',
        'Good!',
        'Good Job'
    ]

    next() {
        if(this.key < this.comments.length - 1){
            this.key = this.key + 1;
        } else {
            this.key = 0;
        }
    }

    previous() {
        if(this.key == 0){
            this.key = this.comments.length-1;
        } else {
            this.key = this.key - 1;
        }
    }

     comments:Coments[] = [
        { url: '../../../assets/bonnie-chang.png', author: 'Bonnie Chang', date: 'June 09, 2016',  status: this.status[1], comment: this.comment[0]},
        { url: '../../../assets/mike-brown.png',   author: 'Mike Brown',   date: 'April 11, 2017', status: this.status[2], comment: this.comment[1]},
        { url: '../../../assets/bonnie-chang.png', author: 'Bonnie Chang', date: 'June 25, 2018',  status: this.status[3], comment: this.comment[2]},
        { url: '../../../assets/mike-brown.png',   author: 'Mike Brown',   date: 'March 15, 2019', status: this.status[4], comment: this.comment[3]},
        { url: '../../../assets/bonnie-chang.png', author: 'Bonnie Chang', date: 'June 13, 2015',  status: this.status[1], comment: this.comment[4]},
        { url: '../../../assets/mike-brown.png',   author: 'Mike Brown',   date: 'March 15, 2019', status: this.status[4], comment: this.comment[5]}
    ];
}

export interface Coments {
    url: string;
    author: string;
    date: string;
    status: string;
    comment: string
}
