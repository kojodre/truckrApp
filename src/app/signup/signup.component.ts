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
    console.log('window:::', window);
    const config = {
      apiKey: environment.apiKey,
      authDomain: environment.authDomain,
      databaseURL: environment.databaseURL,
      storageBucket: environment.storageBucket,
      messagingSenderId: environment.messagingSenderId,
      projectId: environment.projectId
    };
    firebase.initializeApp(config);
    this.checkUser();
  }

  // Check user
  checkUser(): void {
    console.log('firebase::', firebase);
    // FirebaseUI config.
    const uiConfig = {
      signInSuccessUrl: 'http://localhost:8080',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
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
