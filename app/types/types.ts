export type SubCat = {
  name: string;
  subName: string;
  desc: string;
  photo: string;
}

export type Department = {
  name: string;
  subName: string;
  subCat: SubCat;
  
}

export type Faq = {
  menu: string;
  subMenu: string;
  isCollapsed: boolean;
}