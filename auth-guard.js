// WFT site-wide registration gate. Only the homepage and auth/recovery pages are public.
import { supabase } from "./supabase.js";

(async function enforceWftRegistration() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const publicPages = new Set(["index.html","Login.html","register.html","forgot-password.html","reset-password.html"]);
  if (publicPages.has(page)) {
    document.documentElement.classList.remove("wft-auth-checking");
    return;
  }

  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    if (data?.session?.user) {
      document.documentElement.classList.remove("wft-auth-checking");
      return;
    }
  } catch (error) {
    console.warn("WFT access check failed:", error?.message || error);
  }

  const next = window.location.pathname + window.location.search + window.location.hash;
  const params = new URLSearchParams({ next });
  const referral = new URLSearchParams(window.location.search).get("ref");
  if (referral) params.set("ref", referral);
  window.location.replace("register.html?" + params.toString());
})();
