import { Form, Formik } from 'formik';
import MyInput from 'src/components/UI/Input/MyInput';
import styles from './searchHotelForm.module.css';
import MyButton from 'src/components/UI/button/MyButton';

function SearchHotelForm() {
  return (
    <Formik
      initialValues={{
        startDate: '',
        endDate: '',
      }}
      // validationSchema={Yup.object({
      //   email: Yup.string()
      //     .email('Неправильный email адрес')
      //     .required('Обязательное поле'),
      //   password: Yup.string()
      //     .min(6, 'Минимум 6 символов')
      //     .required('Обязательное поле'),
      // })}
      onSubmit={async (values, { setErrors }) => {
        console.log(values);
        // login(values)
        //   .unwrap()
        //   // .then(() => onClose())
        //   .catch(({ data }) => setErrors({ password: t(data?.message) }));
      }}
    >
      {() => (
        <Form className={styles.form}>
          <MyInput
            name="text"
            type="text"
            placeholder="Введите название гостиницы (необязательно)"
            disableVerify={true}
          />
          <div className={styles.dateGroup}>
            <MyInput
              name="startDate"
              type="date"
              placeholder="Дата заезда"
              disableVerify={true}
            />
            <div> - </div>
            <MyInput
              name="endDate"
              type="date"
              placeholder="Дата выезда"
              disableVerify={true}
            />
          </div>
          <MyButton type="submit">Искать</MyButton>
        </Form>
      )}
    </Formik>
  );
}

export default SearchHotelForm;
