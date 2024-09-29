import { useEffect, useState } from "react";

const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState(
    new URLSearchParams(window.location.search)
  );

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value !== undefined) {
      newSearchParams.set(key, value);
    } else {
      newSearchParams.delete(key);
    }
    setSearchParams(newSearchParams);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${newSearchParams.toString()}`
    );
  };

  const getSearchParam = (key) => {
    return searchParams.get(key);
  };

  useEffect(() => {
    setSearchParams(new URLSearchParams(window.location.search));
  }, []);

  return {
    getSearchParam,
    updateSearchParams,
    searchParams,
  };
};

export default useSearchParams;
