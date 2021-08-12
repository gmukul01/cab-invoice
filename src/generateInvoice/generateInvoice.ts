import calculateFare from '../calculateFare';
import { Invoice } from '../types/invoice';
import { Ride } from '../types/ride';

export const generateInvoice = (rides: Ride[]): Invoice => {
    if (rides.length === 0) return { totalFare: 0, numberOfRides: 0, averageFarePerRide: 0 };

    const numberOfRides = rides.length,
        totalFare = rides.reduce((sum: number, ride: Ride) => sum + calculateFare(ride), 0);

    return {
        totalFare,
        numberOfRides,
        averageFarePerRide: totalFare / numberOfRides
    };
};
