import Box from 'src/components/UI/box/Box';
import styles from './room.module.css';
import CreateForm from 'src/pages/admin/CreateHotel/createForm/CreateForm';
import { useState } from 'react';
import ShowHotel from '../ShowHotel/ShowHotel';
import { useUpdateRoomMutation } from 'src/API/roomsApi';
import { TRoom } from 'src/types/room';

interface RoomProps {
  room: TRoom;
  hotelId: string;
  isCreate: boolean;
}

function Room(props: RoomProps) {
  const { room: initroom, hotelId, isCreate } = props;
  const [isEdit, setEdit] = useState(isCreate);
  const [room, setRoom] = useState(initroom);
  const [updateRoom, { isLoading: isLoadingUpdate }] = useUpdateRoomMutation();

  const createHandler = async (dto: FormData) => {
    dto.append('hotelId', hotelId);
    const updatedRoom = await updateRoom({ id: room._id, body: dto }).unwrap();
    setRoom(updatedRoom);
    setEdit(false);
  };

  return (
    <Box className={styles.roomCard}>
      {isEdit ? (
        <CreateForm
          formHandler={createHandler}
          isLoading={isLoadingUpdate}
          setting={{
            title: { name: 'Название номера', value: room.title },
            description: {
              name: 'Описание номера',
              value: room.description,
            },
            images: room.images,
            buttonOne: 'Сохранить',
            buttonTwo: { name: 'Отмена', handler: () => setEdit(false) },
          }}
        />
      ) : (
        <ShowHotel
          hotel={{
            title: room.title,
            description: room.description,
            images: room.images || [],
            id: room._id,
          }}
          editHandler={() => setEdit(true)}
        />
      )}
    </Box>
  );
}

export default Room;
