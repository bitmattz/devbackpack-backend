import PasswordRules from "../../models/PasswordRules";

export class LoadAllowedCharsService {
    public execute(rules: PasswordRules): string[] {
        let allowedChars: string[] = [];
        if (rules.hasLowercase) {
            allowedChars = allowedChars.concat(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
        }
        if (rules.hasNumbers) {
            allowedChars = allowedChars.concat(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
        }
        if (rules.hasSymbols) {
            allowedChars = allowedChars.concat(['!', '@', '#', '$', '&', '(', ')']);
        }
        if (rules.hasUppercase) {
            allowedChars = allowedChars.concat(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
        }
        return allowedChars.sort(() => Math.random() - 0.5);
    }
}
