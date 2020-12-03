import React from "react";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useAPI = (url, localStorageKey = "@local-data") => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    errorText: "",
    data: [],
  });

  const todayDate = new Date().toISOString().slice(0, 10);

  const setPartData = (partialData) => setData({ ...data, ...partialData });

  const load = () => {
    setPartData({
      state: apiStates.LOADING,
    });

    if (localStorage.getItem(localStorageKey) !== null) {
      let localData = JSON.parse(localStorage.getItem(localStorageKey));

      // If not expired -> fetch from localStorage

      if (localData.date === todayDate) {
        console.log("FETCHING FROM CACHE");

        setPartData({
          state: apiStates.SUCCESS,
          data: localData,
        });

        return;
      }

      // Else -> fetch
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

          localStorage.setItem(localStorageKey, JSON.stringify(data));

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
