import axios from 'axios';
import TokenHelper from './TokenHelper';
const REACT_APP_API_SERVICE_URL = process.env.REACT_APP_API_SERVICE_URL;

class UserService{

    signup(payload) {
        return axios.post(REACT_APP_API_SERVICE_URL + '/register',payload, TokenHelper.getHeader());
        
    }


    login(payload) {
        return axios.post(REACT_APP_API_SERVICE_URL + '/login',payload, TokenHelper.getHeader());
        
    }

    sendEmailVarificationCode(payload)
    {
        return axios.post(REACT_APP_API_SERVICE_URL + '/send-email-varification-code',payload, TokenHelper.getHeader());
    }

    confirmEmailVarificationCode(payload)
    {
        return axios.post(REACT_APP_API_SERVICE_URL + '/confirm-email-varification-code',payload, TokenHelper.getHeader());
    }

    getOneUse(payload)
    {
        return axios.post(REACT_APP_API_SERVICE_URL + '/get-one-use',payload, TokenHelper.getHeader());
    }

    forgetPasswordEmailSend(payload)
    {
        return axios.post(REACT_APP_API_SERVICE_URL + '/forget-password-email-send',payload, TokenHelper.getHeader());
    }

    accountVerify(payload)
    {
        return axios.post(REACT_APP_API_SERVICE_URL + '/account-verify',payload, TokenHelper.getHeader());
    }

    changePassword(payload)
    {
        return axios.post(REACT_APP_API_SERVICE_URL + '/change-password',payload, TokenHelper.getHeader());
    }


}


export default new UserService();
