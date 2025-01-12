export interface CarShowDto {
    id: number;
    brand: string;
    model: string;
    seats: number;
    carImage: File;
    registrationNumber: string;
    categoryName: string;
    rentalTypeName: string[];
}