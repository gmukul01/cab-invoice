import { RideType } from './ride';

export type Charges = {
    [k in RideType]: {
        FARE_PER_KM: number;
        FARE_PER_MINUTE: number;
        BOOKING_CHARGES: number;
    };
};
