import axios from 'axios';



export default {
    getList() {
        return axios.get('/static/data/data.json');
    }
};
