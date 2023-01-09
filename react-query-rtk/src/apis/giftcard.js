import axios from 'axios';

const fetchGiftcards = () => {
  const options = {
    url: `http://10.100.107.10:8081/admin/api/giftcard/category`,
    method: 'GET'
  }

  return axios(options).then((response) => response.data)

}

export {
  fetchGiftcards
}