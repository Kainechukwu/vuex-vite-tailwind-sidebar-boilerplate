export default class Util {
    static hasLowerCase(str) {
        return /[a-z]/.test(str)
    }

    static hasUpperCase(str) {
        return /[A-Z]/.test(str)
    }

    static hasMinEightCharacters(str) {
        return str.length >= 8
    }

    static containsNumbers(str) {
        return /\d/.test(str)
    }

    static hasSpecialChar(str) {
        return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
    }
}
