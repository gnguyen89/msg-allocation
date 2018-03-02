import axios from 'axios';

const apiUrl = 'https://msg-allocation-api.herokuapp.com/api/';

const sendEmail = () => {
  axios.post(`${apiUrl}email`).then(res => console.log(res));
};

export {
  sendEmail,
};