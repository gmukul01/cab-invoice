export type RideType = 'STANDARD' | 'PREMIUM';

export type Ride = {
    type: RideType;
    distance: number;
    duration: number;
};
