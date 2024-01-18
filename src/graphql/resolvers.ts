import { Resolvers } from "./codegen-types";
import { Context } from "./context";
import faker from "faker";
import { randomUUID } from "crypto";

export const resolvers: Resolvers<any> = {
  Query: {
    userHealthcheck: (): boolean => true,
    listUsers(_, args, _context: Context) {
      return new Array(args.size).fill(null).map(() => ({
        id: randomUUID(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
      }));
    },
  },
};
