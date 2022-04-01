// No longer need this with the use of an interface since the interface is a gatekeeper for these classes
// I could actually reuse this code in any other application where I need to render a map and map points based on lat lng using this CODE!
// import { User } from "./User"
// import { Company } from "./Company"

// Instructions to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }

    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })    
    }

    
    addMarker(mappable: Mappable): void {
        // The | operator will restrict the properties available that are both in User and Company
        // This soluiton does not allow for scale because if you wanted to map other things, your | operator would get unwieldy, so USE INTERFACES!
        const marker = new google.maps.Marker(
            {
                map: this.googleMap,
                position: {
                    lat: mappable.location.lat,
                    lng: mappable.location.lng
                }
            }
        )
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }

    // addMarker(mappable: User | Company): void {
    //     // The | operator will restrict the properties available that are both in User and Company
    //     // This soluiton does not allow for scale because if you wanted to map other things, your | operator would get unwieldy, so USE INTERFACES!
    //     new google.maps.Marker(
    //         {
    //             map: this.googleMap,
    //             position: {
    //                 lat: mappable.location.lat,
    //                 lng: mappable.location.lng
    //             }
    //         }
    //     )
    // }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}