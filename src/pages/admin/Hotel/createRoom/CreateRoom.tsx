import { useCreateRoomMutation } from 'src/API/roomsApi';
import Box from 'src/components/UI/box/Box';
import CreateForm from 'src/pages/admin/CreateHotel/createForm/CreateForm';

interface CreateRoomProps {
  id: string;
  onSucces: () => void;
  handlerCancel: () => void;
}

function CreateRoom(props: CreateRoomProps) {
  const [createRoom, { isLoading }] = useCreateRoomMutation();

  const createHandler = async (dto: FormData) => {
    dto.append('hotelId', props.id);
    await createRoom(dto).unwrap().then(props.onSucces);
  };

  return (
    <Box>
      <CreateForm
        formHandler={createHandler}
        isLoading={isLoading}
        setting={{
          title: { name: 'Название номера', value: '' },
          description: {
            name: 'Описание номера',
            value: '',
          },
          buttonOne: { name: 'Сохранить' },
          buttonTwo: { name: 'Отмена', handler: props.handlerCancel },
        }}
      />
    </Box>
  );
}

export default CreateRoom;
