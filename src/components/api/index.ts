import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export interface Animal {
  id: string;
  url: string;
  title: string;
  description: string;
  image: string;
  type: string;
}

interface CustomAnimalModule {
  [key: string]: () => string;
}

class AnimalObject implements Animal {
  id: string;
  url: string;
  title: string;
  description: string;
  image: string;
  type: string;

  constructor() {
    this.type = faker.animal.type();
    this.id = uuidv4();
    this.url = faker.internet.url();
    // the line below uses unkwnown and a custom type because fakerjs does not have native support for typescript and does not allow us
    // to use strings to match their object keys
    // since there are no enums provided by them, I had to customize a workaround solution
    const animalModule = faker.animal as unknown as CustomAnimalModule;
    this.title = animalModule[this.type]();
    this.description = faker.lorem.sentences();
    this.image = faker.image.animals(644, 362, true);
  }
}

export const getAnimal = async () => {
  const animals = Array.from({ length: 100 }, () => new AnimalObject());
  return animals;
};
