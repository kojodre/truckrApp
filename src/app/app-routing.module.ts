import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './dashboard/user/user.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { SigninComponent } from './accounts/signin/signin.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';
import { AboutComponent } from './dashboard/about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './dashboard/help/help.component';
import { MapComponent } from './dashboard/map/map.component';
import { MessageComponent } from './dashboard/message/message.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { TripHistoryComponent } from './dashboard/trip-history/trip-history.component';
import { NewRequestComponent } from './dashboard/new-request/new-request.component';
import { ContentComponent } from './dashboard/content/content.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'auth-redirect',
    component: AuthRedirectComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'new-request',
        component: NewRequestComponent
      },
      {
        path: 'trip-history',
        component: TripHistoryComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
