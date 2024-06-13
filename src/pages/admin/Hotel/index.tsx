import { useLocation, useParams } from 'react-router-dom';
import styles from './style.module.css';
import Box from 'src/components/UI/box/Box';
import { useEffect, useState } from 'react';
import { THotel } from 'src/types/hotel';
import ShowHotel from './ShowHotel/ShowHotel';
import { useUpdateHotelMutation } from 'src/API/hotelsApi';
import Room from './Room/Room';
import { useGetRoomsQuery } from 'src/API/roomsApi';
import CreateRoom from './createRoom/CreateRoom';
import CreateForm from '../CreateHotel/createForm/CreateForm';

function Hotel() {
  const { state } = useLocation();
  const { hotel: initHotel }: { hotel: THotel } = state;
  const { id } = useParams();
  const [isEdit, setEdit] = useState(false);
  const [isCreate, setCreateRoom] = useState(false);
  const [hotel, setHotel] = useState(initHotel);
  const [rooms, setRooms] = useState([]);
  const { data } = useGetRoomsQuery({ hotel: id }, {});

  const [updateHotel, { isLoading }] = useUpdateHotelMutation();
  const createHandler = async (dto: FormData) => {
    await updateHotel({ id, body: dto })
      .unwrap()
      .then((hotel) => {
        setHotel(hotel);
      });

    setEdit(false);
  };

  useEffect(() => {
    if (data) {
      setRooms(data);
    }
  }, [data]);

  return (
    <>
      <Box className={styles.hotelCard}>
        {isEdit ? (
          <CreateForm
            formHandler={createHandler}
            isLoading={isLoading}
            setting={{
              title: { name: 'Название гостиницы', value: hotel.title },
              description: {
                name: 'Описание гостиницы',
                value: hotel.description,
              },
              images: hotel.images,
              buttonOne: 'Сохранить',
              buttonTwo: {
                name: 'Отмена',
                handler: () => setEdit(false),
                disabled: isCreate,
              },
            }}
          />
        ) : (
          <ShowHotel
            hotel={hotel}
            editHandler={() => setEdit(true)}
            roomHandler={() => setCreateRoom(true)}
          />
        )}
      </Box>
      {isCreate && id && (
        <CreateRoom
          id={id}
          onSucces={() => setCreateRoom(false)}
          handlerCancel={() => setCreateRoom(false)}
        />
      )}
      {rooms.length > 0 &&
        id &&
        rooms.map((room) => <Room room={room} hotelId={id} isCreate={false} />)}
    </>
  );
}

export default Hotel;
