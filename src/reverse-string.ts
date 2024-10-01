// 定义一个函数来反转字符串
export function reverseString(input: string): string {
  // 将字符串拆分成字符数组，反转数组，然后重新组合成字符串
  return input.split("").reverse().join("");
}
