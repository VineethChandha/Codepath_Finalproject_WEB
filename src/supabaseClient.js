import { createClient } from "@supabase/supabase-js";

const URL = "https://ydeqojaqfgqsxrmmnqtj.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkZXFvamFxZmdxc3hybW1ucXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5ODQ2MzIsImV4cCI6MTk5NjU2MDYzMn0.XMLoRbiRlK5o48x7DwcuViyEbS1nmlqqnAF9ngnYdZg";

export const supabase = createClient(URL, API_KEY);