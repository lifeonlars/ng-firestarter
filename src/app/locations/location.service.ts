import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Location } from './location-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewLocation {
  title: string;
  content: string;
  rating: 0;
  address: string;
  type: string;
}

@Injectable()
export class LocationService {

  LocationsCollection: AngularFirestoreCollection<Location>;
  LocationDocument:   AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.LocationsCollection = this.afs.collection('Locations', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getData(): Observable<Location[]> {
    return this.LocationsCollection.valueChanges();
  }

  getSnapshot(): Observable<Location[]> {
    // ['added', 'modified', 'removed']
    return this.LocationsCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Location;
        return {
          id: a.payload.doc.id,
          title: data.title,
          content: data.content,
          rating: data.rating,
          address: data.address,
          type: data.type };
      });
    });
  }

  getLocation(id: string) {
    return this.afs.doc<Location>(`Locations/${id}`);
  }

  create(content: string) {
    const location = {
      title: 'A Location',
      content: '',
      rating: 0,
      address: '90210 Beverly Hills',
      type: 'House'
    };
    return this.LocationsCollection.add(location);
  }

  updateLocation(id: string, data: Partial<Location>) {
    return this.getLocation(id).update(data);
  }

  deleteLocation(id: string) {
    return this.getLocation(id).delete();
  }
}
