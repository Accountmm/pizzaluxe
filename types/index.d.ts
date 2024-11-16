declare interface IParams {
  className?: string;
}

declare interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

declare interface IUserData {
  email: string;
  password: string;
}

interface IProduct {
  name: string;
  description: string;
  price: number;
  image: string;
}
// type IProducts = IProduct[] | [];
