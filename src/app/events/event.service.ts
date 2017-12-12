import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Event } from './event-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewEvent {
  title: string;
  content: string;
  location: string;
  date: number;
}

@Injectable()
export class EventService {

  EventsCollection: AngularFirestoreCollection<Event>;
  EventDocument:   AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.EventsCollection = this.afs.collection('Events', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getData(): Observable<Event[]> {
    return this.EventsCollection.valueChanges();
  }

  getSnapshot(): Observable<Event[]> {
    // ['added', 'modified', 'removed']
    return this.EventsCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Event;
        return {
          id: a.payload.doc.id,
          title: data.title,
          content: data.content,
          location: data.location,
          date: new Date().getTime(),
        };
      });
    });
  }

  getEvent(id: string) {
    return this.afs.doc<Event>(`Events/${id}`);
  }

  create(content: string) {
    const event = {
      title: 'An Event',
      content: '',
      location: '90210 Beverly Hills',
      date: new Date().getTime(),
    };
    return this.EventsCollection.add(event);
  }

  updateEvent(id: string, data: Partial<Event>) {
    return this.getEvent(id).update(data);
  }

  deleteEvent(id: string) {
    return this.getEvent(id).delete();
  }
}
