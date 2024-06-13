import { ErrorMessage, Form, Formik } from 'formik';
import MyInput from 'src/components/UI/Input/MyInput';
import * as Yup from 'yup';
import styles from './createForm.module.css';
import MyButton from 'src/components/UI/button/MyButton';
import MyTextArea from 'src/components/UI/MyTextArea/MyTextArea';
import { useId, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

function CreateForm({
  formHandler,
  isLoading,
  setting,
}: {
  formHandler: (dto: FormData) => Promise<void>;
  isLoading: boolean;
  setting: {
    title: { name: string; value: string };
    description: { name: string; value: string };
    images?: string[];
    buttonOne: string;
    buttonTwo: { name: string; disabled?: boolean; handler?: () => void };
    buttonThree?: { name: string; disabled?: boolean; handler?: () => void };
  };
}) {
  const id = useId();

  // // Состояние для хранения списка изображений
  // const [images, setImages] = useState<string[]>(
  //   setting.images ? setting.images : []
  // );

  //Состояние для хранения списка изображений
  const [images, setImages] = useState(
    setting.images
      ? setting.images.map((image) => import.meta.env.VITE_API_URL + image)
      : []
  );

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    // Удаление изображения из списка
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <Formik
      initialValues={{
        title: setting.title.value,
        description: setting.description.value,
        images: setting.images ? setting.images : [],
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(5, 'Минимум 5 символов')
          .required('Обязательное поле'),
        description: Yup.string()
          .min(100, 'Минимум 100 символов')
          .required('Обязательное поле'),
        images: Yup.array()
          .min(1, 'Минимум 1 изображение')
          .max(10, 'Максимум 10 изображений'),
      })}
      onSubmit={async (values, { resetForm }) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('description', values.description);
        values?.images?.forEach((image: File | string) => {
          formData.append(`images`, image);
        });
        console.log(formData);
        await formHandler(formData);
        resetForm();
      }}
    >
      {({ values, resetForm, setFieldValue }) => (
        <Form className={styles.form}>
          <div className={styles.imagesContainer}>
            {images.map((image, index) => {
              return (
                <div key={index} className={styles.image}>
                  <img src={image} alt={`Изображение ${index}`} />
                  <span
                    onClick={() => {
                      const newImages = [...values.images];
                      newImages.splice(index, 1);
                      setFieldValue('images', newImages);
                      handleRemoveImage(index);
                    }}
                    className={styles.removeButton}
                  >
                    <ClearIcon style={{ color: 'inherit' }} />
                  </span>
                </div>
              );
            })}
            <label htmlFor={id} className={styles.fileInputLabel}>
              <input
                id={id}
                type="file"
                className={styles.fileInput}
                multiple
                onChange={(event) => {
                  const files = event.target.files;

                  if (files == null) return;

                  if (files.length > 10) {
                    alert('Максимальное количество изображений - 10');
                    return;
                  }

                  const myFiles = Array.from(files);
                  setFieldValue('images', [...values.images, ...myFiles]);
                  const image: string[] = [];
                  for (let i = 0; i < files.length; i++) {
                    image.push(URL.createObjectURL(files[i]));
                  }
                  setImages((images) => [...images, ...image]);
                }}
              />
              <AddIcon style={{ color: 'inherit', fontSize: 'inherit' }} />
            </label>
            <ErrorMessage name="images" />
          </div>

          <MyInput
            name="title"
            label={setting.title.name}
            type="text"
            placeholder={setting.title.name}
            disableVerify={true}
          />

          <MyTextArea
            label={setting.description.name}
            name="description"
            type="text"
            placeholder="Описание..."
            disableVerify={true}
          />

          <div className={styles.btnGroup}>
            <MyButton color={'success'} type="submit" disabled={isLoading}>
              {setting.buttonOne}
            </MyButton>
            <MyButton
              onClick={() =>
                setting.buttonTwo.handler
                  ? setting.buttonTwo.handler()
                  : resetForm()
              }
              disabled={setting.buttonTwo.disabled}
              type="button"
              color={'error'}
            >
              {setting.buttonTwo.name}
            </MyButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateForm;
