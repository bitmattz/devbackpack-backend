export default class HexDecodeEncode {
  public execute(text: string, decode: boolean) {
    if (decode) {
      let arr = text.split(" ");
      let decodedText = '';
      for (let i = 0; i < arr.length; i++) {
        let charCode = parseInt(arr[i], 16);
        decodedText += String.fromCharCode(charCode);
      }
      return decodedText;
    } else {
      let hex = '';
      for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        hex += charCode.toString(16) + ' ';
      }
      return hex;
    }
  }
  }

