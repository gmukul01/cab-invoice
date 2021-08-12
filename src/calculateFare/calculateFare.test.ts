import { Ride } from '../types/ride';
import { calculateFare } from './calculateFare';

describe('calculateRide', () => {
    it('should return expected result for standard ride', () => {
        const rideDetails: Ride = { distance: 10, duration: 7, type: 'STANDARD' };
        expect(calculateFare(rideDetails)).toEqual(112);
    });

    it('should return expected result for premium ride', () => {
        const rideDetails: Ride = { distance: 10, duration: 7, type: 'PREMIUM' };
        expect(calculateFare(rideDetails)).toEqual(169);
    });
});
