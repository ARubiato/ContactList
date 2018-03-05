import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface ContactList {
  Fname: string;
  Lname: string;
  address: string;
  email: string;
  mobile: string;
  phone: string;
}

addContact(){
  this.afs.collection('ContactList').add({'title': this.title, 'content': this.content});
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clistCol: AngularFirestoreCollection<ContactList>;
  clist: Observable<ContactList[]>;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.clistCol = this.afs.collection('ContactList');
    this.clist = this.clistCol.valueChanges();


  }
}
