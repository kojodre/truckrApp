import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './dashboard/user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { SigninComponent } from './accounts/signin/signin.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';


import { AgmCoreModule } from '@agm/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripHistoryComponent } from './dashboard/trip-history/trip-history.component';
import { MapComponent } from './dashboard/map/map.component';
import { MessageComponent } from './dashboard/message/message.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AboutComponent } from './dashboard/about/about.component';
import { HelpComponent } from './dashboard/help/help.component';
import { NewRequestComponent } from './dashboard/new-request/new-request.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ContentComponent } from './dashboard/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    AuthRedirectComponent,
    DashboardComponent,
    TripHistoryComponent,
    MapComponent,
    MessageComponent,
    TransactionsComponent,
    OrdersComponent,
    AboutComponent,
    HelpComponent,
    NewRequestComponent,
    TestComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGJoBJZgUh7iOZsgZykt5HckOGkH9UQ2Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
