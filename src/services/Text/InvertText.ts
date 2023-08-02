class InvertText {
    execute(text: string): string {
        return text.split('').reverse().join('');
    }
}

export default InvertText;