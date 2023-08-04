import { supabase } from "./supabase";

export function signin() {
  return supabase.auth.signInWithOAuth({
    provider: "azure",
    options: {
      scopes: "email offline_access",
    },
  });
}

export function signout() {
  return supabase.auth.signOut();
}
