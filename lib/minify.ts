/**
 *
 * @param string 需要压缩的字符串
 */
export default function(string: string): string {
    const $string = string.split("       ");
    let result = "";
    result = $string.join("");
    return result;
}
