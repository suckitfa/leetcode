// 导出模块
export default(str)=>{
    //让字符串按照空格进行分割，保存数组，数组的元素先后顺序是单词的顺序
    let arr = str.split(' ');
    //对数组中的每个元素进行遍历
    return arr.map(item=>{
        //按字符分开
        return item.split('').reverse().join('');
    }).join(' ');
}