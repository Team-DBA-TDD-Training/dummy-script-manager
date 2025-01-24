export const API_BASE_URL = "http://localhost:5100/api/scripts" //import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
    throw new Error("API_BASE_URL is not defined");
}

export const FETCH_ALL_SCRIPTS_API_URL = API_BASE_URL + "/";
export const URL_AI_HELPER = API_BASE_URL + "/ai";

export const DELETE_SCRIPTS_API_URL = API_BASE_URL + "/";
export const CREATE_SCRIPTS_API_URL = API_BASE_URL + "/";
export const UPDATE_SCRIPTS_API_URL = API_BASE_URL + "/";

export const MARK_FAVORITE_API_URL = API_BASE_URL + "/markFavorite/";

export const UNMARK_FAVORITE_API_URL = API_BASE_URL + "/unMarkFavorite/";
