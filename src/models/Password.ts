import PasswordRules from "./PasswordRules";


class Password {
    private _name!: string;
    private _password!: string;
    private _rules!: PasswordRules;

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get password(): string {
        return this._password;
    }
    set password(value: string) {
        this._password = value;
    }

    get rules(): PasswordRules {
        return this._rules;
    }
    set rules(value: PasswordRules) {
        this._rules = value;
    }
}

export { Password };