export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  profilePicture: string;
  bio: string;
  phone: string;
  address: Address;
  website: string;
  social: SocialLinks;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
}
