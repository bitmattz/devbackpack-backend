export default class GenerateCPF {
    public execute(): string {
        let cpf = '';
        for (let i = 0; i < 9; i++) {
            cpf += Math.floor(Math.random() * 10);
        }
        cpf += this.calculateFirstDigit(cpf);
        cpf += this.calculateSecondDigit(cpf);
        if(!this.isValidCPF(cpf)){
            return this.execute()
        }
        return cpf;
    }
    private calculateFirstDigit(cpf: string): string {
        let weight = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf[i]) * weight[i];
        }
        let remainder = sum % 11;
        return (remainder < 2 ? 0 : 11 - remainder).toString();
    }
    private calculateSecondDigit(cpf: string): string {
        let weight = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf[i]) * weight[i];
        }
        let remainder = sum % 11;
        return (remainder < 2 ? 0 : 11 - remainder).toString();
    }
    private isValidCPF(cpf: any): boolean {
        let invalidNumbers = [            "00000000000",            "11111111111",            "22222222222",            "33333333333",            "44444444444",            "55555555555",            "66666666666",            "77777777777",            "88888888888",            "99999999999"        ];
        if (invalidNumbers.includes(cpf)) {
            return false;
        }
        let tamanho: number = cpf.length - 2;
        let numeros = cpf.substring(0, tamanho);
        let digitos = cpf.substring(tamanho);
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
        numeros = cpf.substring(0, tamanho);
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