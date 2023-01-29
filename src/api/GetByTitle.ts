export const GetByTitle = async (title: string) => {
  return await fetch(`http://www.omdbapi.com/?apikey=9247ea75&s=${title}`);
};
