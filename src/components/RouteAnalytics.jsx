import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ADS_ID = "AW-18102028684";

export default function RouteAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("config", ADS_ID, {
      page_path: `${location.pathname}${location.search}`,
    });
  }, [location.pathname, location.search]);

  return null;
}
