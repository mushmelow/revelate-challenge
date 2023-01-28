export const GetByTitle = async (title: string) => {
  return await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=9247ea75&s=${title}`
  );
};
