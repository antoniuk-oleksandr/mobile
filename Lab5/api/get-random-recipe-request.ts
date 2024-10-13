import axios from "axios";

export const getRandomRecipeRequest = async () => {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (e) {
        console.error(e);
        return  null;
    }
}