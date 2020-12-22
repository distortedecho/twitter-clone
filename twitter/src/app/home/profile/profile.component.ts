import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() {
    console.log("profile");
   }

  ngOnInit(): void {
    const x = Array.from(document.getElementsByClassName('center')as HTMLCollectionOf<HTMLElement>);
    x[0].style.display = "none";
  }

}
