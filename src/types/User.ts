export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  phone: string;
  name: string;
  birthDate: string;
  username: string;
  profile_image: string;
  provider: AuthenticationProvider;
  fcm_id: string;
  invitationCode?: string;
}

export enum AuthenticationProvider {
  google,
  apple,
}

export interface UserInterface {
  id: string;
  email: string;
  phone: string;
  fullName: string;
  username: string;
  birthDate: string;
  profile_image: string;
  provider: AuthenticationProvider;
  notifications: {
    sound: boolean;
    vibration: boolean;
    sms: boolean;
  };
  isEmailVerified: boolean;
  fcm_id: string;
  role: string;
  invitationCode: string;
  point: number | string;
}

export interface Tokens {
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
}
