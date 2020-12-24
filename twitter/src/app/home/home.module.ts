import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetService } from './tweet.service';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ModalComponent,
    NavbarComponent,
    TweetDetailsComponent,
    LeftSidebarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TweetService]
})
export class HomeModule {}
