import React from "react";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useAPI = (url) => {
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
