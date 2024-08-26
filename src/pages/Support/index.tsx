import { useEffect, useState } from 'react';
import styles from './index.module.css';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import Popup from './PopUp/Popup';
import { useSearchParams } from 'react-router-dom';
import useIsRole from 'src/utils/hooks/useIsRole';

export type TParams = {
  modal: string | null;
  type: string | null;
  id?: string | null;
};

function SupportRequest() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<TParams>({
    modal: '',
    type: '',
    id: '',
  });
  const [show, setShow] = useState(false);
  const roleAlowed = useIsRole(['manager', 'client']);

  useEffect(() => {
    const modal = searchParams.get('modal');
    const type = searchParams.get('type');
    const id = searchParams.get('uuid');

    setParams({ modal, type, id });
    if (modal === 'support') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [searchParams]);

  const handleOnClose = (state: boolean) => {
    if (!state) {
      searchParams.delete('modal');
      searchParams.delete('type');
      searchParams.delete('uuid');
      setSearchParams(searchParams);
    }
    setShow(state);
  };

  if (!roleAlowed) {
    return;
  }

  return (
    <>
      <button
        className={styles.supportButton}
        onClick={() => handleOnClose(!show)}
        type={'button'}
      >
        {show ? (
          <CloseTwoToneIcon style={{ fontSize: '24px' }} />
        ) : (
          <ContactSupportOutlinedIcon style={{ fontSize: '24px' }} />
        )}
      </button>

      {show && <Popup onClose={() => handleOnClose(false)} params={params} />}
    </>
  );
}

export default SupportRequest;
