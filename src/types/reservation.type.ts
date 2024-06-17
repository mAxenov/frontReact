export type TReservation = {
  id: string;
  startDate: string;
  endDate: string;
  hotelRoom: {
    description: string;
    images: string[];
    title: string;
  };
  hotel: {
    title: string;
    description: string;
  };
};
