import Box from 'src/components/UI/box/Box';
import styles from './hotelCard.module.css';
import { THotelAndRooms } from './types';
import MyButton from 'src/components/UI/button/MyButton';
import Carousel from 'src/components/UI/Carousel/Carousel';
import useNavigateWithParams from 'src/utils/hooks/useNavigateWithParams';
// import { useSearchParams } from 'react-router-dom';

function HotelCard({ hotel }: { hotel: THotelAndRooms }) {
  const { hotelDetails, rooms } = hotel;
  // const [, setSearchParams] = useSearchParams();
  const navigate = useNavigateWithParams();

  const handleClickHotel = () => {
    console.log('handleClickHotel');
    navigate(`hotel/details`, {
      hotel: hotelDetails.id,
    });
  };

  return (
    <>
      <Box className={styles.hotelCard}>
        <div className={styles.imagesContainer}>
          <Carousel images={hotelDetails.images} />
        </div>
        <div className={styles.info}>
          <div className={styles.hotelTitle}>{hotelDetails.title}</div>
          <div className={styles.hotelRoom}>
            <div className={styles.roomTitle}>
              <div>{rooms[0].title}</div>
            </div>
          </div>
          <div className={styles.actions}>
            {/* <Link
              style={{ textDecoration: 'none' }}
              to={`hotel/${hotelDetails.id}`}
              state={{ hotel: hotelDetails }}
            > */}
            <MyButton onClick={handleClickHotel}>Показать все номера</MyButton>
            {/* </Link> */}
          </div>
        </div>
      </Box>
    </>
  );
}

export default HotelCard;

[
  {
    rooms: [
      {
        _id: '665b19c95d3ba687088c7353',
        title: 'Бизнес',
        description:
          '40 м2 Собственная ванная комната Сейф Высокоскоростной доступ в Интернет Доступ в тренажерный зал Кондиционер ТелевизорВаннаФенПостельное бельёХалатШкафЧайник или кофеваркаЧайникТелефонТапочкиПатиоПисьменный стол\r\n',
        images: [
          '/files/images/1717246409739-898890795-be885b1842e22c1b658e48a712a4303601b155d4.jpeg',
        ],
        hotelId: '6654b3a7815c5943d1a2a653',
      },
    ],
    hotelDetails: {
      title: 'Гостиница Амкар',
      description:
        'Описание отеля описание отеля опис ание отеля описание отеля описание отеля опис ание отеля опис ание отеля опис ание отеля описание отеля оте описа ние отеля опис ание отеля описание \r\n\r\nОтеля описание отеля описание отеля описание отеля опис ание отеля описание отеля опис ание отеля опис ание отеля опис ание отеля описание отеля опис ание отеля описа ние отеля опис ание отеля описание отеля описание отеля \r\n\r\nОтеля отеля описание описание отеля описание отеля опис ание отеля описание отеля опис ание отеля опис ание отеля опис ание отеля описа ние отеля опис ание отеля описа ние отеля.',
      images: [
        '/files/images/1716827046563-801036583-ÐÐ°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ Ð¿ÑÐ¾ÑÑÐ¾ÐµÐ².png',
        '/files/images/1716827046653-897082701-ÐÐ¸Ð½Ð¸Ñ.png',
        '/files/images/1716827046738-139529233-Ð»Ð¸Ð½Ð¸Ñ-ÑÐ°Ð¹Ð¼Ð»Ð°Ð¹Ð½.png',
        '/files/images/1716827046817-303780740-ÐÑÐ¾Ð´ÑÐºÑÐ¸Ñ.png',
        '/files/images/1716827046945-3583125-Ð¡Ð¾Ð·Ð´Ð°Ð½Ð¸Ðµ Ð·Ð°Ð´Ð°Ð½Ð¸Ð¹.png',
        '/files/images/1716827047029-155595472-Ð¢Ð°Ð±Ð»Ð¸ÑÐ° Ð¿ÑÐ¾ÑÑÐ¾ÐµÐ².png',
        '/files/images/1716827047119-131651166-Ð¦ÐµÑ 2.png',
        '/files/images/1716827047202-769649239-Ð¦ÐµÑ Ð¿Ð»Ð°Ð½ÑÐµÑ.png',
        '/files/images/1716827047283-274675087-Ð¦ÐµÑ.png',
      ],
      id: '6654b3a7815c5943d1a2a653',
    },
  },
  {
    rooms: [
      {
        _id: '6654a919815c5943d1a2a5bc',
        title: 'Стандартный номер',
        description:
          'Описание номера описание номера описание номера опис ание ном ера описание ном ера описание ном ера описание номера опис ание номе ра описание номера описание номера описание номера описание номера описание номера описание номера описание номера описание номера.\r\n\r\nОписание номера описание номера описание номера опис ание ном ера описание ном ера описание ном ера описание номера опис ание номе ра описание.',
        images: [
          '/files/images/1717175453444-572137051-95d06537cfa8ae419d048d649e57aadcbf22fe31.jpeg',
        ],
        hotelId: '6654a908815c5943d1a2a5b6',
      },
      {
        _id: '6654a974815c5943d1a2a5d5',
        title: 'Номер стандарт бизнес',
        description:
          'Описание номера описание номера описание номера опис ание ном ера описание ном ера описание ном ера описание номера опис ание номе ра описание номера описание номера описание номера описание номера описание номера описание номера описание номера описание номера.\r\n\r\nОписание номера описание номера описание номера опис ание ном ера описание ном ера описание ном ера описание номера опис ание номе ра описание.',
        images: [
          '/files/images/1716824436461-479883963-realtime Ð´Ð°Ð½Ð½ÑÐµ.png',
        ],
        hotelId: '6654a908815c5943d1a2a5b6',
      },
      {
        _id: '6654b36f815c5943d1a2a63c',
        title: 'Бизнес',
        description:
          'Описание номера описание номера описание номера опис ание ном ера описание ном ера описание ном ера описание номера опис ание номе ра описание номера описание номера описание номера описание номера описание номера описание номера описание номера описание номера. Описание номера описание номера описание номера опис ание ном ера описание ном ера описание ном ера описание номера опис ание номе ра описание.',
        images: ['/files/images/1716826991328-436511695-Ð¦ÐµÑ.png'],
        hotelId: '6654a908815c5943d1a2a5b6',
      },
    ],
    hotelDetails: {
      title: 'Гостиница Золотое Кольцо',
      description:
        'Описание отеля описание отеля опис ание отеля описание отеля описание отеля опис ание отеля опис ание отеля опис ание отеля описание отеля оте описа ние отеля опис ание отеля описание \r\n\r\nОтеля описание отеля описание отеля описание отеля опис ание отеля описание отеля опис ание отеля опис ание отеля опис ание отеля описание отеля опис ание отеля описа ние отеля опис ание отеля описание отеля описание отеля \r\n\r\nОтеля отеля описание описание отеля описание отеля опис ание отеля описание отеля опис ание отеля опис ание отеля опис ание отеля описа ние отеля опис ание отеля описа ние отеля.',
      images: [
        '/files/images/1716824328575-626784706-Ð¦ÐµÑ 2.png',
        '/files/images/1716826966206-916256457-Ð»Ð¸Ð½Ð¸Ñ-ÑÐ°Ð¹Ð¼Ð»Ð°Ð¹Ð½.png',
        '/files/images/1716826966285-377314084-ÐÑÐ¾Ð´ÑÐºÑÐ¸Ñ.png',
        '/files/images/1716826966365-108930417-Ð¡Ð¾Ð·Ð´Ð°Ð½Ð¸Ðµ Ð·Ð°Ð´Ð°Ð½Ð¸Ð¹.png',
        '/files/images/1716826966453-706985451-Ð¦ÐµÑ.png',
      ],
      id: '6654a908815c5943d1a2a5b6',
    },
  },
];
