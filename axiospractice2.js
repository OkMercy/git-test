import axios from "axios";

axios
  .get(
    "https://api.shecodes.io/weather/v1/current?query=Lagos&key=60o969fa37bedcb0t842da02274e8c33"
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
