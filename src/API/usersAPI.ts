/**
 * @interface userInformation
 * @property {string} username  username
 * @property {string} password  password
 */
interface userInformation {
    username: string;
    password: string;
}

enum LoginStatus {
    ERROR = 0,
    SUCCESS = 1,
}

/**
 * @interface
 */
export interface LoginResponse {
    data: userInformation;
    error: string | null;
}

function createDelay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * Async function that logs in the user
 * @param {userInformation} data User Information
 */
export async function LogUserIn(data: userInformation): Promise<LoginResponse> {
    //createDelay(3000);
    sessionStorage.setItem('UserInfoECS', JSON.stringify(data));
    return { data, error: null };
}
