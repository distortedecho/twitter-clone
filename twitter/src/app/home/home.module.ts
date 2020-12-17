import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetService } from './tweet.service';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ModalComponent
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
