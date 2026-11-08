import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the window to the top every time the route (pathname) changes.
// React Router does not do this automatically for client-side navigation,
// so without it the page keeps whatever scroll position the previous
// page was left at.
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}