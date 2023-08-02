export default class PasswordRules{
  private _length!: number;
  private _hasNumbers!: boolean;
  private _hasUppercase!: boolean;
  private _hasLowercase!: boolean;
  private _hasSymbols!: boolean;
  private _hasSimilarCharacters!: boolean;

  get length(): number {
      return this._length;
  }
  set length(value: number) {
      this._length = value;
  }

  get hasNumbers(): boolean {
      return this._hasNumbers;
  }
  set hasNumbers(value: boolean) {
      this._hasNumbers = value;
  }

  get hasUppercase(): boolean {
      return this._hasUppercase;
  }
  set hasUppercase(value: boolean) {
      this._hasUppercase = value;
  }

  get hasLowercase(): boolean {
      return this._hasLowercase;
  }
  set hasLowercase(value: boolean) {
      this._hasLowercase = value;
  }

  get hasSymbols(): boolean {
      return this._hasSymbols;
  }
  set hasSymbols(value: boolean) {
      this._hasSymbols = value;
  }

  get hasSimilarCharacters(): boolean {
      return this._hasSimilarCharacters;
  }
  set hasSimilarCharacters(value: boolean) {
      this._hasSimilarCharacters = value;
  }
}