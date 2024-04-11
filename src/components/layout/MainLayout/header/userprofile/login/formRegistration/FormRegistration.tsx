import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './FormRegistration.module.css';
import { useTranslation } from 'react-i18next';
import { useRegistrationMutation } from 'src/API/authApi';
import MyInput from 'src/components/UI/Input/MyInput';
import MyButton from 'src/components/UI/button/MyButton';

function FormRegistration() {
  const { t } = useTranslation();
  const [registration, { isLoading }] = useRegistrationMutation();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          contactPhone: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Минимум 3 символов')
            .required('Обязательное поле'),
          contactPhone: Yup.string()
            .min(11, 'Минимум 11 символов')
            .max(18, 'Максимум 18 символов')
            .required('Обязательное поле'),
          email: Yup.string()
            .email('Неправильный email адрес')
            .required('Обязательное поле'),
          password: Yup.string()
            .min(6, 'Минимум 6 символов')
            .required('Обязательное поле'),
          confirmPassword: Yup.string()
            .min(6, 'Минимум 6 символов')
            .oneOf([Yup.ref('password')], 'Пароли не совпадают')
            .required('Обязательное поле'),
        })}
        onSubmit={async (values, { setErrors }) => {
          registration(values)
            .unwrap()
            .catch(({ data }) =>
              setErrors({
                [data?.message?.property]: t(data?.message?.message),
              })
            );
        }}
      >
        {() => (
          <Form className={styles.form}>
            <MyInput name="name" type="text" placeholder="Введите имя" />
            <MyInput
              name="contactPhone"
              type="tel"
              placeholder="Введите номер телефона"
            />
            <MyInput name="email" type="email" placeholder="Введите эл.почту" />
            <MyInput
              name="password"
              type="password"
              placeholder="Введите пароль"
            />
            <MyInput
              name="confirmPassword"
              type="password"
              placeholder="Подтвердите пароль"
            />
            <MyButton type="submit" disabled={isLoading}>
              Зарегистрироваться
            </MyButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormRegistration;
