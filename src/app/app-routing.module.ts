import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './user/user-login/user-login.component';

import { HomePageComponent } from './home/home-page.component';
import { LocationsListComponent } from './locations/locations-list/locations-list.component';
import { EventsListComponent } from './events/events-list/events-list.component';

import { AuthGuard } from './core/auth/auth.guard';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'locations', component: LocationsListComponent },
  { path: 'events', component: EventsListComponent },
  // uploads are lazy loaded
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }

