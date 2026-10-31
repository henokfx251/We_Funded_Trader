import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://vxcwfirfgxrxafbirnwu.supabase.co';

// እዚህ አዲሱን Publishable Key አስገባ።
// sb_publishable_... የሚጀምረውን ብቻ።
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Nw1NaKkhz0A7H5TxybSzHA_9zjTeDLv';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
