export default class BinDecodeEncode {
  public execute(text: string, decode: boolean) {
    if (decode) {
      let arr = text.split(" ");
      let decodedText = '';
      for (let i = 0; i < arr.length; i++) {
        let charCode = parseInt(arr[i], 2);
        decodedText += String.fromCharCode(charCode);
      }
      return decodedText;

    } else {

      let binary = '';
      for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        binary += charCode.toString(2) + ' ';
      }
      return binary;
    }
  }
}