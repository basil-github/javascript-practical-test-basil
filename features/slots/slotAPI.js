import axios from "axios";

export async function fetchSlotsAPI() {
  const response = await axios.get(
    "https://vrproperty.herokuapp.com/time-slots"
  );

  return response.data.slots;
}
export async function putSlotsAPI(data) {
  const response = await axios.put(
    "https://vrproperty.herokuapp.com/time-slots",
    data
  );
  return response.data.slots;
}
