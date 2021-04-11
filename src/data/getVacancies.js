import axios from "axios";

const getVacancies = async () => {
  const res = await axios.get('/vacancies');
  return res.data;
}
export default getVacancies;