/// <reference types="@types/google.maps" />
import { User } from './User'
import { Company } from './Company'
import { CustomMap } from "./CustomMap";

const user = new User()
const customMap = new CustomMap('map');

const company = new Company()

customMap.addMarker(user)
customMap.addMarker(company)

// customMap.addUserMarker(user)
// customMap.addCompanyMarker(company)

// const customMap = new CustomMap();
// console.log("In!")
// customMap.googleMap // Because googleMap is set to private in the superclass, we cant access it on the instance of the class
// const firstUser = new User()
// console.log(firstUser)

// const firstCompany = new Company()
// console.log(firstCompany)

// new google.maps.Map(document.getElementById('map'), {
//     zoom: 1,
//     center: {
//         lat: 0,
//         lng: 0
//     }
// })