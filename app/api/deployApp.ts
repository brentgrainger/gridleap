import { createClient } from "@supabase/supabase-js";

    const supabase = createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY");

    export const deployApp = async (appConfig) => {
      // Logic to deploy the app on a subdomain
      const response = await supabase
        .from("apps")
        .insert([{ ...appConfig }]);
      return response;
    };
