import { Component, Input } from '@angular/core';

@Component({
    selector: 'studentContent',
    templateUrl: './student-content.component.html',
    styleUrls: ['./student-content.component.scss']
})

export class StudentContentComponent { 
    states = [
        State.Free,
        State.Optimal,
        State.PRO,
        State.Plus
    ];

    directions = [
        Direction.ConceptArtist, 
        Direction.DigitalArtist, 
        Direction.DrawThings, 
        Direction.FineArtist, 
        Direction.Freelance, 
        Direction.Hobbyist, 
        Direction.Illustrator, 
        Direction.MotionGraphics, 
        Direction.TwodArtist, 
        Direction.UIUX
    ];

    searchStatus: string = '';
    searchDirection: string = '';
    searchText: string = '';

    changeStatus(e) {
        this.searchStatus = e.target.value == "Artist status" ? '' : e.target.value;
    }

    changeDirection(e) {
        this.searchDirection = e.target.value == "Artistic direction" ? '' : e.target.value;
    }
    

    likeStudents(id){
        if(this.projects.find(x => x.id === id).isLiked){
            this.projects.find(x => x.id === id).isLiked = false;
            this.projects.find(x => x.id === id).countOfLike = --this.projects.find(x => x.id === id).countOfLike;
        } else {
            this.projects.find(x => x.id === id).isLiked = true;
            this.projects.find(x => x.id === id).countOfLike = ++this.projects.find(x => x.id === id).countOfLike;
        }
    }

    public projects:Objects[] = [
        {
            id: 1, 
            isFollowing: true, 
            isLiked: true,
            photo: '../../../assets/student_1.png', 
            state: State.PRO, 
            author: 'Sylvain Sarrailh', 
            direction: Direction.ConceptArtist, 
            country: Country.France, 
            countOfWatching:247, 
            countOfLike: 53, 
            images: [
                "../../../assets/student-content_sarrailh_1.png", 
                "../../../assets/student-content_sarrailh_2.png",
                "../../../assets/student-content_sarrailh_3.png",
                "../../../assets/student-content_sarrailh_4.png"             
            ]
        },
        {
            id: 2, 
            isFollowing: false, 
            isLiked: false,
            photo: '../../../assets/student_2.png', 
            state: State.Plus, 
            author: 'Ramón Nuñez', 
            direction: Direction.DrawThings, 
            country: Country.Spain, 
            countOfWatching:1139, 
            countOfLike: 128, 
            images: [
                "../../../assets/student-content_nunez_1.png",
                "../../../assets/student-content_nunez_2.png",
                "../../../assets/student-content_nunez_3.png",
                "../../../assets/student-content_nunez_4.png"
            ]
        },
        {
            id: 3, 
            isFollowing: false, 
            isLiked: true,
            photo: '../../../assets/student_3.png', 
            state: State.Free, 
            author: 'Veronika Olchovych', 
            direction: Direction.UIUX, 
            country: Country.Ukraine, 
            countOfWatching:1178, 
            countOfLike: 138, 
            images: [
                "../../../assets/student-content_olchovych_1.png",
                "../../../assets/student-content_olchovych_2.png",
                "../../../assets/student-content_olchovych_3.png"
            ]
        },
        {
            id: 4, 
            isFollowing: true, 
            isLiked: false,
            photo: '../../../assets/student_4.png', 
            state: State.PRO, 
            author: 'Jolene Lai', 
            direction: Direction.FineArtist, 
            country: Country.USA, 
            countOfWatching:1077, 
            countOfLike: 357, 
            images: [
                "../../../assets/student-content_Lai_1.png",
                "../../../assets/student-content_Lai_2.png",
                "../../../assets/student-content_Lai_3.png",
                "../../../assets/student-content_Lai_4.png"
            ]
        },
        {
            id: 5, 
            isFollowing: true, 
            isLiked: false,
            photo: '../../../assets/student_5.png', 
            state: State.Optimal, 
            author: 'Nedko Ivanov', 
            direction: Direction.Hobbyist, 
            country: Country.Bulgaria, 
            countOfWatching:16139, 
            countOfLike: 3028, 
            images: [
                "../../../assets/student-content_Ivanov_1.png",
                "../../../assets/student-content_Ivanov_2.png",
                "../../../assets/student-content_Ivanov_3.png",
                "../../../assets/student-content_Ivanov_4.png"
            ]
        },
        {
            id: 6, 
            isFollowing: false, 
            isLiked: false,
            photo: '../../../assets/student_6.png', 
            state: State.Free, 
            author: 'Benze', 
            direction: Direction.Illustrator, 
            country: Country.Hungary, 
            countOfWatching:1276, 
            countOfLike: 168, 
            images: [
                "../../../assets/student-content_Benze_1.png",
                "../../../assets/student-content_Benze_2.png",
                "../../../assets/student-content_Benze_3.png",
                "../../../assets/student-content_Benze_4.png"
            ]
        },
        {
            id: 7, 
            isFollowing: false, 
            isLiked: false,
            photo: '../../../assets/student_7.png', 
            state: State.Optimal, 
            author: 'Simon Prades', 
            direction: Direction.Illustrator, 
            country: Country.Germany, 
            countOfWatching:1009, 
            countOfLike: 88, 
            images: [
                "../../../assets/student-content_Prades_1.png",
                "../../../assets/student-content_Prades_2.png"
            ]
        },
        {
            id: 8, 
            isFollowing: false,
            isLiked: false, 
            photo: '../../../assets/student_8.png', 
            state: State.Optimal, 
            author: 'Novans V. Adikresna', 
            direction: Direction.DigitalArtist, 
            country: Country.Indonesia, 
            countOfWatching:4139, 
            countOfLike: 828, 
            images: [
                "../../../assets/student-content_Adikresna_1.png",
                "../../../assets/student-content_Prades_2.png",
                "../../../assets/student-content_Benze_3.png"
            ]
        },
        {
            id: 9, 
            isFollowing: false, 
            isLiked: false,
            photo: '../../../assets/student_9.png', 
            state: State.Plus, 
            author: 'Sanketh Yayathi', 
            direction: Direction.MotionGraphics, 
            country: Country.USA, 
            countOfWatching:16139, 
            countOfLike: 3028, 
            images: [
                "../../../assets/student-content_Yayathi_1.png",
                "../../../assets/student-content_Yayathi_2.png",
                "../../../assets/student-content_Yayathi_3.png",
                "../../../assets/student-content_Yayathi_4.png"
            ]
        },
        {
            id: 10, 
            isFollowing: false, 
            isLiked: false,
            photo: '../../../assets/student_1.png', 
            state: State.PRO, 
            author: 'Ismail Inceoglu', 
            direction: Direction.TwodArtist, 
            country: Country.Belarus, 
            countOfWatching:480, 
            countOfLike: 90, 
            images: [
                "../../../assets/student-content_Inceoglu_1.png",
                "../../../assets/student-content_Inceoglu_2.png"
            ]
        }
    ];
}   

export interface Objects {
    id: number;
    isFollowing: boolean;
    isLiked: boolean,
    photo: string;
    state: string;
    author: string;
    direction: string;
    country: string;
    countOfWatching: number;
    countOfLike: number;
    images: Array<string>;
}

export enum State {
    PRO = "PRO", 
    Plus = "Plus",
    Free = "Free",
    Optimal = "Optimal"
}

export enum Direction {
    ConceptArtist = "Concept artist",
    Freelance = "Freelance",
    DrawThings = "Draw things",
    UIUX = "UI/UX Designer",
    FineArtist ="Fine Artist",
    Hobbyist ="Hobbyist",
    Illustrator ="Illustrator",
    DigitalArtist = "Digital artist",
    MotionGraphics = "Motion Graphics",
    TwodArtist = "2d artist"
}

export enum Country {
    France = "Toulouse, France",
    Spain = "Alacant/Alicante, Spain",
    Ukraine ="Kyiv, Ukraine",
    USA ="Los Angeles, CA, USA",
    Bulgaria ="Varna, Bulgaria",
    Hungary = "Budapest, Hungary",
    Germany = "Saarbrücken, Germany",
    Indonesia = "Surabaya, Indonesia",
    Belarus = "Minsk, Belarus"
}