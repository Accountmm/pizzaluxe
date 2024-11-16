import { Account, Client, Databases, Users } from "node-appwrite";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) //  API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID!); //  project ID

  return {
    get account() {
      return new Account(client);
    },
  };
}
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) //  API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID!) //  project ID
    .setKey(process.env.NEXT_PUBLIC_APPWRITE_SECRET!); // secret-key

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get users() {
      return new Users(client);
    },
  };
}
