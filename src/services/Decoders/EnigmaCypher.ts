export default class EnigmaCypher {
    private ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";
  

  
    public execute(text: string, decode: boolean, key: string): string {
  
      let result = "";
      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (this.ALPHABET.indexOf(char) === -1) {
          result += char;
          continue;
        }
        let keyChar = key.charAt(j % key.length);
        let charCode = this.ALPHABET.indexOf(char);
        let keyCode = this.ALPHABET.indexOf(keyChar);
        if (decode) {
          result += this.ALPHABET.charAt((charCode + keyCode) % this.ALPHABET.length);
        } else {
          result += this.ALPHABET.charAt((charCode - keyCode + this.ALPHABET.length) % this.ALPHABET.length);
        }
        j++;
      }
      return result;
    }
  }