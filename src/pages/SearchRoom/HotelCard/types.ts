import { THotel } from 'src/types/hotel';
import { TRoom } from 'src/types/room';

export type THotelAndRooms = {
  hotelDetails: THotel;
  rooms: TRoom[];
};
