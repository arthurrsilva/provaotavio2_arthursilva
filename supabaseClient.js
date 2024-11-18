import Constants from 'expo-constants';

const { SUPABASE_URL, SUPABASE_API_KEY } = Constants.manifest.extra;

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
export { supabase };
