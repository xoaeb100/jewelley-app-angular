export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNo: string;
  aadharNo: string;
  panNo: string;
  gstNo: string;
  userType: USER_TYPE;
  shopUniqueNo: string; //
  registrationId: string; //
  dob: Date;
  gender: GENDER;

  line1: string;
  line2: string;
  landMark: string;
  pinCode: string;
  country: string;
  city: string;
  regionCode: string;
}
export enum USER_TYPE {
  'vender' = 'vender',
  'costumer' = 'costumer',
  'superAdmin' = 'superAdmin',
}

export enum GENDER {
  'male' = 'male',
  'female' = 'female',
  'other' = 'other',
}
