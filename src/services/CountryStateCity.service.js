import axios from 'axios';
import TokenHelper from './TokenHelper';
const REACT_APP_API_SERVICE_URL = process.env.REACT_APP_API_SERVICE_URL;

class countryStateCityService{

    getAllCountry() {
        return axios.get(REACT_APP_API_SERVICE_URL + '/country', TokenHelper.getHeader());
        
    }

    getStateById(id) {
        return axios.get(REACT_APP_API_SERVICE_URL + '/state/'+id, TokenHelper.getHeader());
        
    }

    getCityById(id) {
        return axios.get(REACT_APP_API_SERVICE_URL + '/city/'+id, TokenHelper.getHeader());
        
    }
}


export default new countryStateCityService();
