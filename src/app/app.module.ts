import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// BEGIN: ngFireStarter
import { HomePageComponent } from './home/home-page.component';

// Core
import { CoreModule } from './core/core.module';

// Shared (Angular Material etc.)
import { SharedModule } from './shared/shared.module';

// Feature Modules
import { LocationsModule } from './locations/locations.module';
import { EventsModule } from './events/events.module';
import { UploadModule } from './uploads/shared/upload.module';
import { LayoutModule } from './layout/shared/layout.module';
import { UserModule } from './user/user.module';


// END: ngFireStarter

// Environment Variables (Firebase API keys etc.)
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule,
    LocationsModule,
    EventsModule,
    UserModule,
    LayoutModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


