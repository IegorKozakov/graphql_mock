import { ExpressContext } from "apollo-server-express";

type Account = {
  id?: number;
  type?: string;
};
export type Context = {
  account: Account;
};

export default async function createContext({
  req,
}: ExpressContext): Promise<Context> {
  const context = {
    account: {
      id: null,
      type: null,
    },
  };
  if (req.headers["x-account-id"]) {
    context.account.id = Number(req.headers["x-account-id"]);
  }
  if (req.headers["x-account-id"]) {
    context.account.type = req.headers["x-account-type"];
  }

  return context;
}
