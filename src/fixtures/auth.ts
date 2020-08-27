import { IAuthUser, IAuth } from '../app/auth/google-auth.service';

export const authUser: IAuthUser = {
  id: '12345',
  email: 'test@gmail.com',
  name: 'sam test',
  given_name: 'sam',
  family_name: 'test',
  picture:
    'https://lh5.googleusercontent.com/-MuN5BmJ3lFM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmzrAOkewOEoGUPasQOSYSk3Gl9nA/photo.jpg',
};

export const authData: IAuth = {
  user: authUser,
  signedIn: true,
};

export const mockGoogleUser: any = {
  wc: {
    token_type: 'Bearer',
    access_token: 'test_access_token',
  },
};
