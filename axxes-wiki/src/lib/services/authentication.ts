import { supabase } from "./supabase";
import type { User } from "@supabase/supabase-js";

//In case we cannot connect to supabase, we don't do any authentication

export function signin() {
  if (!supabase) return;

  return supabase.auth.signInWithOAuth({
    provider: "azure",
    options: {
      scopes: "email offline_access",
    },
  });
}

export function signout() {
  if (!supabase) return;
  return supabase.auth.signOut();
}

//Emits the latest state of the user to the callback.
export function onUserChange(callback: (user?: User) => any) {
  if (!supabase) return;
  supabase.auth.onAuthStateChange((_, session) => {
    callback(session?.user);
  });
}
