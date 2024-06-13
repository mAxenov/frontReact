import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './formLogin.module.css';
import MyInput from 'src/components/UI/Input/MyInput';
import MyButton from 'src/components/UI/button/MyButton';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from 'src/API/authApi';

function FormLogin() {
  const { t } = useTranslation();
  const [login, { isLoading }] = useLoginMutation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Неправильный email адрес')
          .required('Обязательное поле'),
        password: Yup.string()
          .min(6, 'Минимум 6 символов')
          .required('Обязательное поле'),
      })}
      onSubmit={async (values, { setErrors }) => {
        login(values)
          .unwrap()
          .then(() => window.location.reload())
          .catch(({ data }) => setErrors({ password: t(data?.message) }));
      }}
    >
      {() => (
        <Form className={styles.form}>
          <MyInput name="email" type="email" placeholder="Введите эл.почту" />
          <MyInput
            name="password"
            type="password"
            placeholder="Введите пароль"
          />

          <MyButton type="submit" disabled={isLoading}>
            Отправить
          </MyButton>
        </Form>
      )}
    </Formik>
  );
}

export default FormLogin;
