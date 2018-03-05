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
  clistDoc: AngularFirestoreDocument<ContactList>;
  clistO: Observable<ContactList>;
  Fname: string;
  Lname: string;
  address: string;
  email: string;
  mobile: string;
  phone: string;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.clistCol = this.afs.collection('ContactList');
    this.clist = this.clistCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ContactList;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
    }

    addContact() {
      this.clistCol.doc('asdf').set({'Fname': this.Fname, 'Lname': this.Lname, 'address': this.address, 'email': this.email, 'mobile': this.mobile, 'phone':this.phone});

    }

    getContact(clistId) {
      this.clistDoc = this.afs.doc('posts/'+clistId);
      this.clist = this.clistDoc.valueChanges();
    }

    deletePost(clistId) {
      this.afs.doc('Contacts/'+clistId).delete();
    }

  }

