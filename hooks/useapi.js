import React from "react";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useAPI = (url, CACHE_STORAGE_KEY = "@default-app-data") => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    errorText: "",
    data: [],
  });

  const setPartData = (partialData) => setData({ ...data, ...partialData });

  const load = () => {
    setPartData({
      state: apiStates.LOADING,
    });

    if (localStorage.getItem(CACHE_STORAGE_KEY) !== null) {
      console.log("FETCHED FROM CACHED!");
      setPartData({
        state: apiStates.SUCCESS,
        data: JSON.parse(localStorage.getItem(CACHE_STORAGE_KEY)),
      });
      return;
    }

    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          setPartData({
            state: apiStates.ERROR,
            errorText: `Fetch failed. Error code: ${response.status}.`,
          });
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (typeof data !== "undefined") {
          setPartData({
            state: apiStates.SUCCESS,
            data,
          });

          localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(data));

          return;
        }

        setPartData({
          state: apiStates.ERROR,
          errorText: `Fetch failed. Response data returned undefined.`,
        });
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          errorText: "Fetch failed",
        });
      });
  };

  React.useEffect(() => {
    load();
  }, []);

  return data;
};
