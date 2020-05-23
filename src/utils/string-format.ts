
/**
 * 转换url中的parmas参数以及query参数
 * @param {string} str
 * @param {object} data
 * @return url;
 */

export const stringFormatArr = (str: string, data: any) => {
  if (!str || data === undefined) {
    return str
  }
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      str = str.replace(new RegExp('{' + key + '}', 'g'), data[key])
    }
  }
  return str
}