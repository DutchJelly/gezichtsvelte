import { writable } from "svelte/store";
import type { User } from "@supabase/supabase-js";
import { onUserChange } from "$lib/services/authentication";

export const user = writable<User | undefined>();
onUserChange(user.set);
