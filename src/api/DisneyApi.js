export const getCharacters = async (page = 1) => {
  try {
    const response = await fetch(
      "https://api.disneyapi.dev/characters?page=" + page
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await fetch("https://api.disneyapi.dev/characters/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
