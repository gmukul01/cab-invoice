import { generateInvoice } from './generateInvoice';

describe('Invoice Generator Test', () => {
    it('should generate the expected invoice', () => {
        const rides = [
            { distance: 10.0, duration: 7.0 },
            { distance: 3.0, duration: 10.0 }
        ];
        const invoiceDetails = generateInvoice(rides);

        expect(invoiceDetails.totalFare).toEqual(157.0);
        expect(invoiceDetails.numberOfRides).toEqual(2);
        expect(invoiceDetails.averageFarePerRide).toEqual(78.5);
    });

    it('should generate the expected invoice with 0 rides', () => {
        const invoiceDetails = generateInvoice([]);

        expect(invoiceDetails.totalFare).toEqual(0);
        expect(invoiceDetails.numberOfRides).toEqual(0);
        expect(invoiceDetails.averageFarePerRide).toEqual(0);
    });
});
