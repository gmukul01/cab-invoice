import { CHARGES } from '../constants/charges';
import { Ride } from '../types/ride';

export const calculateFare = (ride: Ride): number => {
    const { distance, duration, type } = ride,
        { FARE_PER_KM, FARE_PER_MINUTE, BOOKING_CHARGES } = CHARGES[type];

    return distance * FARE_PER_KM + duration * FARE_PER_MINUTE + BOOKING_CHARGES;
};
