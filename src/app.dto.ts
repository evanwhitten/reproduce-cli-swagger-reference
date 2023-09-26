import { HelloClassSeperate } from './seperate.dto';

class HelloClass {
  name: string;
}

export class GetHelloDto {
  hello: HelloClass[];
}

export class GetHelloSeperateDto {
  hello: HelloClassSeperate[];
}
