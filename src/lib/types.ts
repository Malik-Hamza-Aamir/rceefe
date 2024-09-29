export type NavBar = {
  id: number;
  link: string;
  text: string;
};

export type FromRegistration = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type FilterData = {
  value: string;
  header: string;
};

export type TableColumns = {
  field: string;
  header: string;
};

export type Problems = {
  id: number;
  title: string;
  status: boolean;
  difficulty: string;
  acceptance: string;
  solution: string;
  tags: string;
};