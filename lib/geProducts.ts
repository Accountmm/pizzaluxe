import { createAdminClient } from "@/server/appwrite.server";
import { parseStringify } from "./utils";

export async function getPizzaProducts() {
  const client = await createAdminClient();
  const response = await client.database.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, // databaseId
    process.env.NEXT_PUBLIC_APPWRITE_PIZZA_ID!, // collectionI/d
  );
  return parseStringify(response.documents);
}

export async function getDessertProducts() {
  const client = await createAdminClient();
  const response = await client.database.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, // databaseId
    process.env.NEXT_PUBLIC_APPWRITE_DESSERT_ID!, // collectionId
  );
  return parseStringify(response.documents);
}
export async function getSnackProducts() {
  const client = await createAdminClient();
  const response = await client.database.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, // databaseId
    process.env.NEXT_PUBLIC_APPWRITE_SNACK_ID!, // collectionId
  );
  return parseStringify(response.documents);
}
