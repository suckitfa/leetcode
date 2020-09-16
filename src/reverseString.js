/*
    编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

    不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

    你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/reverse-string
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

    输入：["h","e","l","l","o"]
    输出：["o","l","l","e","h"]
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //思路就是：反转数组
    for(let i = 0; i < (s.length/2);i++){
        let tmp = s[s.length - i - 1];
        s[s.length - i -1] = s[i];
        s[i] = tmp;   
    }
};

// https://leetcode-cn.com/problems/reverse-string/solution/dan-ke-xi-lie-yong-shi-9718nei-cun-10000-by-lvshan/
var reverseStringDanKeWang = function(s){
    let first = 0;
    let last = s.length-1;
    while(first<last){
        [s[first],s[last]] = [s[last],s[first]];
        first++;
        last--;
    }
}

// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

//  

// 示例：

// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"
//  

// 提示：

// 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var reverseWord = function(s){
    //返回单词组成的列表
    let wordsList = s.split(" ");
    //接下来就是：反转每个单词即可
    for(let word_index in wordsList){
        wordsList[word_index] = wordsList[word_index].split("");
    }
    // console.log(wordsList);

    // 反转单个单词
    for(let word_index in wordsList){

        //取出单个单词
        let word = wordsList[word_index];
        // console.log(word);

        //反转单个单词中的字符
        for(let i  = 0; i < (word.length/2);i++){
            let tmp = word[i];
            word[i] = word[word.length-i-1];
            word[word.length-i-1] = tmp;
        }
        //将原来的单词放回原位置
        // console.log(word);
        wordsList[word_index] = word.join("");
    }

    return wordsList.join(" ");
}
function main(){
    let msg = "Let's take LeetCode contest";
    console.log(reverseWord(msg));
}
main();