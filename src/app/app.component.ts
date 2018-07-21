import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit () {
    const config = {
      apiKey: environment.apiKey,
      authDomain: environment.authDomain,
      databaseURL: environment.databaseURL,
      storageBucket: environment.storageBucket,
      messagingSenderId: environment.messagingSenderId,
      projectId: environment.projectId
    };
    firebase.initializeApp(config);
  }
  // title = 'app';
}
