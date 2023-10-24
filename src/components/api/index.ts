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
  // To be really honest with you, I didn't understand much of the search functionality using fakerJS.
  // Mainly because we cannot use users actual queries as params on their methods, therefore what the user typed has absolutely no meaning.
  // Thats the main reason why I created a method to erase what the user types in on the search box.
  // if you comment out the handleClear(); line on the search method inside the search field component, you will see how I originally intended that component to work.
  const animals = Array.from({ length: 100 }, () => new AnimalObject());
  return animals;
};
