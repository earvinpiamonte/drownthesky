const getAPOD = async (queryString : string) => {
  return await fetch(
      `https://api.nasa.gov/planetary/apod?${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
}

export {getAPOD}