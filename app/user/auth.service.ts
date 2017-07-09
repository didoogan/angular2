import {Injectable} from "@angular/core";
import {IUser} from "./uesr.model";

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string) {
      this.currentUser = {
          id: 1,
          firstName: 'John',
          lastName: 'Papa',
          userName: 'Test'
      };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}