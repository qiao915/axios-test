

/* 设置文件上传到对应文件下 */
export const fileTypeToNameFn = (name: string) => {
  switch (name) {
    case 'image':
      return "images"
    case 'video':
      return "video"
    case 'audio':
      return "audio"
    case 'application':
      return "word"
    default: return "otherFile"
  }
}




/* 查找文件对应的文件夹名字 */
export const fileNameToNameFn = (name: string) => {
  let type = name.split(".").pop()
  if (type == 'jpg' || type == 'png' || type == 'jpeg' || type == 'svg' || type == 'svg')
    return "images"
  else if (type == 'mp4' || type == 'avi' || type == 'wmv' || type == 'mpg' || type == 'mov' || type == 'rm' || type == 'ram')
    return "video"
  else if (type == 'mp3' || type == 'mav' || type == 'voc')
    return "audio"
  else if (type == 'doc' || type == 'docx' || type == 'xls' || type == 'xlsx' || type == 'ppt' || type == 'pptx' || type == 'txt' || type == 'wps')
    return "word"
  else
    return "otherFile"

}