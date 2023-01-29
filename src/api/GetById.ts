export const GetById = async (id: string) => {
  return await fetch(`http://www.omdbapi.com/?apikey=9247ea75&i=${id}`);
};
