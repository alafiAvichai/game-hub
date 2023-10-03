import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "698c6c6aed1549e68fb93089cdbf5086",
  },
});
