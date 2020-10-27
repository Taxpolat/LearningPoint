// 判定字符是否唯一

// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
// 示例 1：
// 输入: s = "Taxpolat"
// 输出: false 
// 示例 2：
// 输入: s = "Gulxan"
// 输出: true
function a(s) {
  let arr = s.split("") 
  // JavaScript的split方法
  // split() 方法用于把一个字符串分割成字符串数组。
  arr.sort()
  for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] == arr[i + 1]) {
          return false
      } 
  }
  return true
}
let str1 ="Taxpolat"
console.log(a(str1))
let str2 = "Gulxan"
console.log(a(str2))


