export default (str) => {
  // 字符串按空格分割
  return str.split(/\s/g).map(item => {
    // reverse() 反转数组中的元素
    return item.split('').reverse().join('')
  }).join(' ')
}
