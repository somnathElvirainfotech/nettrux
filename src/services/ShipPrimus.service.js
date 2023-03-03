import axios from 'axios';
import TokenHelper from './TokenHelper';
const ShipPrimus_API_SERVICE_URL = process.env.REACT_APP_ShipPrimus_API_SERVICE_URL;
const ShipPrimus_API_USERNAME = process.env.REACT_APP_ShipPrimus_USERNAME;
const ShipPrimus_API_PASSWORD = process.env.REACT_APP_ShipPrimus_PASSWORD;

class ShipPrimusService{

    Login()
    {
        var payload={
            username: ShipPrimus_API_USERNAME,
            password: ShipPrimus_API_PASSWORD
          }

        var jsonPayload=JSON.stringify(payload);

        return axios.post(ShipPrimus_API_SERVICE_URL + '/login',jsonPayload, TokenHelper.getShipPrimusHeader());
    }

    RefressToken()
    {
        var payload={
            token: TokenHelper.getShipPrimusToken(),
          }
          var jsonPayload=JSON.stringify(payload);
        return axios.post(ShipPrimus_API_SERVICE_URL + '/refreshtoken',jsonPayload, TokenHelper.getShipPrimusHeader());
    }

    

    RateMultiple(payload) {

      const{headers}=TokenHelper.getShipPrimusHeader()
        var obj={
          headers,
          params:payload
        };

        return axios.get(ShipPrimus_API_SERVICE_URL + '/rate/multiple', obj);
        
    }
}


export default new ShipPrimusService();