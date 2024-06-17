import styles from './myTable.module.css'; // Подключаем стили

type TProps = {
  rows: { field: string; headerName: string }[];
  colums: [];
  // handleUserReservations: (userId: string) => void;
};

const MyTable = ({ rows, colums }: TProps) => {
  console.log(colums);
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.head}>
            {rows.map((row) => (
              <th key={row.field} className={styles.headItem}>
                {row.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {colums.map((column, index) => (
            <tr key={index} className={styles.row}>
              {rows.map((row) => (
                <td key={row.field} className={styles.rowItem}>
                  {column[row.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
