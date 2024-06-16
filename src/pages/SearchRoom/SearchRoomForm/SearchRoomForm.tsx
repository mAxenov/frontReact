import { Form, Formik } from 'formik';
import MyInput from 'src/components/UI/Input/MyInput';
import styles from './searchRoomForm.module.css';
import MyButton from 'src/components/UI/button/MyButton';
import TRoomSearch from './types';
import * as Yup from 'yup';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDate } from 'src/store/slices/searchSlice';
import useSearchHotelParams from 'src/utils/hooks/useSearchHotelParams';
import useSetParams from 'src/utils/hooks/useSetParams';
function SearchRoomForm({
  // formHandler,
  initDates,
}: {
  formHandler?: (dto: TRoomSearch) => void;
  initDates?: TRoomSearch;
}) {
  const { dateStart, dateEnd } = useSearchHotelParams();
  const todayString = new Date().toISOString().split('T')[0];
  const setParams = useSetParams();
  const [startDate, setStartDate] = useState(
    dateStart ? String(initDates?.dateStart) : ''
  );
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        dateStart: dateStart || new Date(),
        dateEnd: dateEnd || new Date(),
      }}
      validationSchema={Yup.object({
        dateStart: Yup.date()
          .min(todayString, 'Дата не может быть раньше сегодняшнего дня')
          .required('Обязательное поле'),
        dateEnd: Yup.date()
          .required('Обязательное поле')
          .min(Yup.ref('dateStart'), 'Дата не может быть раньше начальной')
          .notOneOf(
            [Yup.ref('dateStart')],
            'Конечная дата не может совпадать с начальной'
          ),
      })}
      onSubmit={async (values) => {
        const roomSearch: TRoomSearch = {
          dateStart: values.dateStart,
          dateEnd: values.dateEnd,
        };
        // let params = serializeFormQuery(roomSearch);
        setParams({
          dateStart: String(values.dateStart),
          dateEnd: String(values.dateEnd),
        });
        dispatch(setDate(roomSearch));
        // formHandler(roomSearch);
      }}
    >
      {({ setFieldValue }) => (
        <Form className={styles.form}>
          <div className={styles.dateGroup}>
            <div className={styles.dateWrapper}>
              <div>
                <div>Заезд</div>
                <MyInput
                  name="dateStart"
                  type="date"
                  placeholder="Дата заезда"
                  disableVerify={true}
                  min={todayString}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setStartDate(e.target.value);
                    setFieldValue('dateStart', e.target.value);
                    setFieldValue('dateEnd', ''); // Сбрасываем конечную дату при изменении начальной
                  }}
                />
              </div>
              <div>
                <div>Выезд</div>
                <MyInput
                  name="dateEnd"
                  type="date"
                  placeholder="Дата выезда"
                  disableVerify={true}
                  min={startDate}
                  disabled={!startDate}
                />
              </div>
            </div>

            <MyButton className={styles.button} type="submit">
              Искать
            </MyButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SearchRoomForm;
