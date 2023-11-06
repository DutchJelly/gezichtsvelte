import { writable } from "svelte/store";
import type { User } from "@supabase/supabase-js";
import { onUserChange } from "$lib/services/authentication";

// TODO export a writable that is updated when the user changes
