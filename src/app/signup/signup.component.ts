import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Check for already signed in user
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        window.location.href = `${environment.corporateSiteUrl}/auth-redirect`;
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
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  // signin method
  signIn(): void {
    console.log('signin called::');
  }

}
