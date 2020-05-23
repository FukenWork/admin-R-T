import * as constants from './constants';



// 存放用户信息
export const saveUserInfoMessage = (data: any) => ({
    type: constants.SAVE_USERINFO,
    data: data
})