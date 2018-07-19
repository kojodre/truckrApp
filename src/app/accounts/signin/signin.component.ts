import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Check for already signed in user
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (this.isVerified()) {
          window.location.href = `${environment.corporateSiteUrl}/user`;
        } else {
          window.location.href = `${environment.corporateSiteUrl}/auth-redirect`;
        }
      } else {
        this.checkUser();
      }
    });
  }

  // Check user
  checkUser(): void {
    // FirebaseUI config.
    const uiConfig = {
      signInSuccessUrl: `${environment.corporateSiteUrl}/auth-redirect`,
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-signin-auth-container', uiConfig);
  }

  // Temporary isVerified Method
  isVerified(): Boolean {
    return false;
  }

}
