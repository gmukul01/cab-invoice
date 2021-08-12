import { CHARGES } from '../constants/charges';
import { Ride } from '../types/ride';

export const calculateFare = (ride: Ride): number => {
    const { distance, duration } = ride;
    return distance * CHARGES.FARE_PER_KM + duration * CHARGES.FARE_PER_MINUTE + CHARGES.BOOKING_CHARGES;
};
