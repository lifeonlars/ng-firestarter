import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent {

  constructor(public auth: AuthService) { }

  logout() {
    this.auth.signOut();
  }

  title = 'ngFireStarter';
  views: Object[] = [
    {
      name: "Locations",
      icon: "map",
      link: "/locations"
    },
    {
      name: "Events",
      icon: "event",
      link: "/events"
    },
    {
      name: "Uploads",
      icon: "file_upload",
      link: "/uploads"
    }
  ];


}
