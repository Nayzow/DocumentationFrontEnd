import {Category} from "./Category";

export interface Technology {
  id: bigint;
  name: string;
  image: string;

  technologies: Technology[];

  category: Category;
}
