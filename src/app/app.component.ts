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

interface ContactListID extends ContactList { 
  id:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clistCol: AngularFirestoreCollection<ContactList>;
  clist: any;
  Fname: string;
  Lname: string;
  address: string;
  email: string;
  mobile: string;
  phone: string;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.clistCol = this.afs.collection('ContactList');
    this.clist = this.clistCol.valueChanges();
  }
    addContact() {
      this.clistCol.doc('my-custom-id').set({'Fname': this.Fname, 'Lname': this.Lname, 'address': this.address, 'email': this.email, 'mobile': this.mobile, 'phone':this.phone});
    }

  }

