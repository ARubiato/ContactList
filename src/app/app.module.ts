import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


var firebaseConfig = {
  apiKey: "AIzaSyDBPyGY1bw3hHvnK893wnNfICMQoKx_pwc",
  authDomain: "contactlist-fef0f.firebaseapp.com",
  databaseURL: "https://contactlist-fef0f.firebaseio.com",
  projectId: "contactlist-fef0f",
  storageBucket: "contactlist-fef0f.appspot.com",
  messagingSenderId: "921817779915"

}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
