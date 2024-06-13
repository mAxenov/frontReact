// import styles from './hotels.module.css';
import { THotelAndRooms } from '../HotelCard/types';
import HotelCard from '../HotelCard/HotelCard';

function Hotels({ data }: { data: THotelAndRooms[] }) {
  return (
    <>
      {data.map((hotel: THotelAndRooms) => (
        <HotelCard key={hotel.hotelDetails.id} hotel={hotel} />
      ))}
    </>
  );
}

export default Hotels;
