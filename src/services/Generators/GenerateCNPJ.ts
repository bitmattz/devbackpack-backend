export default class GenerateCNPJ {
    public execute(): string {
        let cnpj = '';
        for (let i = 0; i < 12; i++) {
            cnpj += Math.floor(Math.random() * 10);
        }
        cnpj += this.calculateFirstDigit(cnpj);
        cnpj += this.calculateSecondDigit(cnpj);
        if(!this.isValidCNPJ(cnpj)){
            return this.execute()
        }
        return cnpj;
    }
    private calculateFirstDigit(cnpj: string): string {
        let weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            sum += parseInt(cnpj[i]) * weight[i];
        }
        let remainder = sum % 11;
        return (remainder < 2 ? 0 : 11 - remainder).toString();
    }
    private calculateSecondDigit(cnpj: string): string {
        let weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 13; i++) {
            sum += parseInt(cnpj[i]) * weight[i];
        }
        let remainder = sum % 11;
        return (remainder < 2 ? 0 : 11 - remainder).toString();
    }
    private isValidCNPJ(cnpj: any): boolean {
        let invalidNumbers = [
            "00000000000000",
            "11111111111111",
            "22222222222222",
            "33333333333333",
            "44444444444444",
            "55555555555555",
            "66666666666666",
            "77777777777777",
            "88888888888888",
            "99999999999999"
        ];
        if (invalidNumbers.includes(cnpj)) {
            return false;
        }
        let tamanho: number = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = (tamanho - 7);
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != parseInt(digitos.charAt(0))) {
            return false;
        }
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = (tamanho - 7);
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != parseInt(digitos.charAt(1))) {
            return false;
        }
        return true;
    }
}