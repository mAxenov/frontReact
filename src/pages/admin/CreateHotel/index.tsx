import { useCreateHotelMutation } from 'src/API/hotelsApi';
import Box from 'src/components/UI/box/Box';
import CreateForm from './createForm/CreateForm';
import { useNavigate } from 'react-router-dom';
function CreateHotel() {
  const [createHotel, { isLoading }] = useCreateHotelMutation();
  const navigate = useNavigate();

  const createHandler = async (dto: FormData) => {
    await createHotel(dto).unwrap();
  };

  const handlerNavigate = () => {
    navigate('/admin/hotels/all');
  };

  return (
    <Box>
      <CreateForm
        formHandler={createHandler}
        isLoading={isLoading}
        setting={{
          title: { name: 'Название гостиницы', value: '' },
          description: { name: 'Описание гостиницы', value: '' },
          buttonOne: { name: 'Сохранить', handler: handlerNavigate },
          buttonTwo: {
            name: 'Отменить',
            handler: handlerNavigate,
          },
        }}
      />
    </Box>
  );
}

export default CreateHotel;
