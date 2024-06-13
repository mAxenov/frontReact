import { useCreateHotelMutation } from 'src/API/hotelsApi';
import Box from 'src/components/UI/box/Box';
import CreateForm from './createForm/CreateForm';
function CreateHotel() {
  const [createHotel, { isLoading }] = useCreateHotelMutation();

  const createHandler = async (dto: FormData) => {
    const hotel = await createHotel(dto).unwrap();
    console.log(hotel);
  };

  return (
    <Box>
      <CreateForm
        formHandler={createHandler}
        isLoading={isLoading}
        setting={{
          title: { name: 'Название гостиницы', value: '' },
          description: { name: 'Описание гостиницы', value: '' },
          buttonOne: 'Создать',
          buttonTwo: { name: 'Отмена' },
        }}
      />
    </Box>
  );
}

export default CreateHotel;
