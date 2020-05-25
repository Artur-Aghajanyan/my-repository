export class LoginService {
    private isAuthenticated = false;

    login() {
        this.isAuthenticated = true;
    }

    logout() {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }
    isLeggedIn(): boolean {
        return this.isAuthenticated;
    }
}
