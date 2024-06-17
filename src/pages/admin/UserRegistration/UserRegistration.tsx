import Box from 'src/components/UI/box/Box';
import FormRegistration from './formRegistration/FormRegistration';
import H1 from 'src/components/UI/heading/H1/H1';

function UserRegistration() {
  return (
    <Box>
      <H1>Регистрация пользователя</H1>
      <FormRegistration />
    </Box>
  );
}

export default UserRegistration;
