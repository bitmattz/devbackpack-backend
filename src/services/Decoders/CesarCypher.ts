export default class CesarCypher {
    execute(text: string, shift: number, decode: boolean): string {
        let result = '';
        let shiftValue = decode ? 26 - shift : shift;
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                charCode = ((charCode - 65 + shiftValue) % 26) + 65;
            } else if (charCode >= 97 && charCode <= 122) {
                charCode = ((charCode - 97 + shiftValue) % 26) + 97;
            }
            result += String.fromCharCode(charCode);
        }
        return result;
    }
}