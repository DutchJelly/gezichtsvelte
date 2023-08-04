import { writable } from "svelte/store";
import { supabase } from "./services/supabase";
import type { User } from "@supabase/supabase-js";

export const user = writable<User | undefined>();

supabase.auth.onAuthStateChange((e, session) => {
  user.set(session?.user);
});
