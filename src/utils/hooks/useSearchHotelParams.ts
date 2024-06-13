import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from 'src/store';

const useSearchHotelParams = () => {
  const searchDate = useSelector((state: RootState) => state.search);
  const [searchParams] = useSearchParams();

  const dateStart = searchParams.get('dateStart') || searchDate.dateStart;
  const dateEnd = searchParams.get('dateEnd') || searchDate.dateEnd;
  const hotel = searchParams.get('hotel');

  return { dateStart, dateEnd, hotel };
};

export default useSearchHotelParams;
