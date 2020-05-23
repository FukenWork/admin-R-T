import UserApi from '../common/url/user'
import axios from 'axios'
import BaseHttp from '../common/env'
import { stringFormatArr } from '../utils/string-format'

const https = BaseHttp.httpsUrl

class UserService {
  login(username: string, password: string) {
    const url = stringFormatArr(https + UserApi.login, { username, password });
    return axios.get(url);
  }
}
export const userService = new UserService();