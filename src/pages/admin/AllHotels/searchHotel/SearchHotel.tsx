import { Form, Formik } from 'formik';
import MyInput from 'src/components/UI/Input/MyInput';
import MyButton from 'src/components/UI/button/MyButton';
import styles from './searchHotel.module.css';
function SearchHotel({
  formHandler,
}: {
  formHandler: (hotelName: string) => void;
}) {
  return (
    <Formik
      initialValues={{
        hotelName: '',
      }}
      onSubmit={async (values) => {
        formHandler(values.hotelName);
      }}
    >
      {() => (
        <Form className={styles.form}>
          <MyInput
            name="hotelName"
            type="text"
            placeholder="Поиск по гостиницам"
            disableVerify={true}
          />
          <MyButton type="submit">Поиск</MyButton>
        </Form>
      )}
    </Formik>
  );
}

export default SearchHotel;
