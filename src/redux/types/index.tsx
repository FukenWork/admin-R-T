// 存放所有redux类型数据

export interface StoreState {
  enthusiasmLevel: number;
  languageName: string
}

/**
 * 用户信息
 */
export interface UserInfo {
  username: string;

  id: string;

  roleId: number
}