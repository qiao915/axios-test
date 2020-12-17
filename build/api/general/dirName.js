"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileNameToNameFn = exports.fileTypeToNameFn = void 0;
/* 设置文件上传到对应文件下 */
exports.fileTypeToNameFn = (name) => {
    switch (name) {
        case 'image':
            return "images";
        case 'video':
            return "video";
        case 'audio':
            return "audio";
        case 'application':
            return "word";
        default: return "otherFile";
    }
};
/* 查找文件对应的文件夹名字 */
exports.fileNameToNameFn = (name) => {
    let type = name.split(".").pop();
    if (type == 'jpg' || type == 'png' || type == 'jpeg' || type == 'svg' || type == 'svg')
        return "images";
    else if (type == 'mp4' || type == 'avi' || type == 'wmv' || type == 'mpg' || type == 'mov' || type == 'rm' || type == 'ram')
        return "video";
    else if (type == 'mp3' || type == 'mav' || type == 'voc')
        return "audio";
    else if (type == 'doc' || type == 'docx' || type == 'xls' || type == 'xlsx' || type == 'ppt' || type == 'pptx' || type == 'txt' || type == 'wps')
        return "word";
    else
        return "otherFile";
};
