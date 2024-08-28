export const getPopularPeople = async () => {
  const response = await fetch(
    `${process.env.BASEURL}/person/popular?language=en-US&page=1&api_key=${process.env.APIKEY}`
  );
  return response.json();
};
