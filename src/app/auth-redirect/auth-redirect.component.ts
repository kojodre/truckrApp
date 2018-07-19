import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styleUrls: ['./auth-redirect.component.css']
})
export class AuthRedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let loggedInUser;
    // Ensure only signed in users access this page
    // Check for already signed in user
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     console.log(user);
    //     // User is authenticated
    //   } else {
    //     window.location.href = `${environment.corporateSiteUrl}`;
    //   }
    // });
  }

  // signout method
  signOut(): void {
    firebase.auth().signOut().then(function () {
      window.location.href = `${environment.corporateSiteUrl}`;
    });
  }


}
