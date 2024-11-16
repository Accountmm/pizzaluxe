"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "./appwrite.server";

export async function signUp(userData: IUserData) {
  const { email, password } = userData;
  console.log(userData);
  try {
    const { account } = await createAdminClient();
    const response = await account.create(
      ID.unique(),
      email,
      password,
    );
  } catch (error) {
    console.warn("userError", error);
  }
}
