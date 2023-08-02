import PasswordRules from '../../models/PasswordRules';
import { Password } from '../../models/Password';
import { LoadAllowedCharsService } from './LoadAllowedChars';

export class CreatePasswordService {
    private readonly loadAllowedCharsService = new LoadAllowedCharsService();

    public execute(password: Password): Password {
        const rules = password.rules;
        const length = rules.length;
        const pwd = new Array(length);
        const allowedChars = this.loadAllowedCharsService.execute(rules);

        for (let i = 0; i < pwd.length; i++) {
            if (!pwd[i]) {
                let randomChar = allowedChars[Math.floor(Math.random() * allowedChars.length)];

                if (rules.hasSimilarCharacters && (pwd.join('').includes(randomChar))) {
                    while (pwd.join('').includes(randomChar)) {
                        randomChar = allowedChars[Math.floor(Math.random() * allowedChars.length)];
                    }
                    pwd[i] = randomChar;
                } else {
                    pwd[i] = randomChar;
                }
            }
        }
        password.password = pwd.join('');
        return password;
    }
}