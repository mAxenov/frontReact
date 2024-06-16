import React from 'react';
import styles from './pagination.module.css';
import MyButton from '../button/MyButton';

type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  };
};

const PrePagination = (props: PaginationProps) => {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

  const handleNextPageClick = () => {
    onNextPageClick();
  };
  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <div className={styles.paginator}>
      <MyButton
        className={styles.arrow}
        type="button"
        color="secondary"
        onClick={handlePrevPageClick}
        disabled={disable.left}
      >
        {'Назад'}
      </MyButton>
      {nav && (
        <span className={styles.navigation}>
          {nav.current} / {nav.total}
        </span>
      )}
      <MyButton
        className={styles.arrow}
        type="button"
        color="secondary"
        onClick={handleNextPageClick}
        disabled={disable.right}
      >
        {'Вперед'}
      </MyButton>
    </div>
  );
};

const Pagination = React.memo(PrePagination);

export default Pagination;
