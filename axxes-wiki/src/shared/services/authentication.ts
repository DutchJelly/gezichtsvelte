import { supabase } from "./supabase";
import type { User } from "@supabase/supabase-js";

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

export function onUserChange(callback: (user?: User) => any) {
  supabase.auth.onAuthStateChange((_, session) => {
    callback(session?.user);
  });
}
