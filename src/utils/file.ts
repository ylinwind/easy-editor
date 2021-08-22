// 检测图片类型
export function isImage(type: string): boolean {
  let reg = /(image\/jpeg|image\/jpg|image\/gif|image\/png)/gi;
  return reg.test(type);
}

export default {
  isImage,
};
