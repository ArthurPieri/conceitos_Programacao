/* import { User } from './User';
import { Company } from './Company';
 */ // No longer required

// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // This is bad code:
  /*   addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  } */
  // We could create a more generic code instead of two almost equal methods
  // The following code is a little better than before, but there a lot of downsides to it
  // Because we create a dependency to every single class we want to create a marker
  /*   addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    }); */
  // So we can create an interface, that makes every class to fulfill the interface for addMarker
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
