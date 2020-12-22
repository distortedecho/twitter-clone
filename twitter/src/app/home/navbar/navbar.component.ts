import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  update:number;
  total:number;
  difference:number;
  alldata:[];
  display= "none";
  

  constructor(private tweets:TweetService) {}

  ngOnInit(): void {
    this.refreshData();
    setInterval(() => { 
         this.refreshData(); 
     }, 10000);
  }
    refreshData(){
    this.tweets.ShowNotif()
    .subscribe(
      data => {
        this.total = data.user.Noti_count;
        this.update = data.user.details.length;
        this.difference = this.update-this.total;
        this.alldata = data.user.details;
      }
    );
  }

  updateNotif()
  {
    this.display = "block";
    const x = Array.from(document.getElementsByClassName('center')as HTMLCollectionOf<HTMLElement>);
    x[0].style.display = "none";
    let data = {
      current_no : this.update
    }
    this.difference = 0;
    this.tweets.UpdateNotif(data)
    .subscribe()
  }

  closeNotif()
  {
    this.display ="none";
    const x = Array.from(document.getElementsByClassName('center')as HTMLCollectionOf<HTMLElement>);
    x[0].style.display = "block";

  }

}
