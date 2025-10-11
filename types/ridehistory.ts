import { Location } from './location';
export interface Ride {
  rideId: string ;
    rideDate:string ;
    driverId: string,
    passengerId:string ,
    rideStatus: string | 'completed' | 'cancelled' | 'ongoing',
    pickUpLocation: Location  | null,
    dropOffLocation: Location | null,
    rideFare: number | 0,
    rideType: string | 'standard' | 'premium' | 'shared',
    rating: number | 0,
    paymentMethod: string | 'cash',
}

export type RideHistory = Array<Ride>;

