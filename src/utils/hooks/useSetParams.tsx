import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

const useSetParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParams = (addParams?: URLSearchParamsInit | undefined) => {
    const currentParams = new URLSearchParams(searchParams);

    if (addParams) {
      const newParams = new URLSearchParams();
      Object.entries(addParams).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => newParams.append(key, v));
        } else {
          newParams.set(key, value);
        }
      });

      for (const [key, value] of newParams) {
        currentParams.set(key, value);
      }
    }

    // Переходим по пути с объединёнными параметрами
    const paramsString = currentParams.toString();
    setSearchParams(paramsString);
  };

  return setParams;
};

export default useSetParams;
