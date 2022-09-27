import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jwzuxqistzbwovuuknvg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3enV4cWlzdHpid292dXVrbnZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQxNjI3OTIsImV4cCI6MTk3OTczODc5Mn0.7_cCixTPbDCxRkYWOCbmMn8DTUKoU9Vh_3Lw6yVmtRI"
);
