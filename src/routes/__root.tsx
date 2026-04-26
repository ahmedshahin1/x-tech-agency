import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { AppProvider } from "@/contexts/AppContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex h-11 items-center rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "X Tech Agency — Marketing, Tech & AI Automation" },
      {
        name: "description",
        content:
          "X Tech Agency builds brands and scales businesses through premium marketing, web & app development, and AI automation.",
      },
      { name: "author", content: "X Tech Agency" },
      { property: "og:title", content: "X Tech Agency — Marketing, Tech & AI Automation" },
      {
        property: "og:description",
        content: "Marketing · Technology · Automation · Growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "X Tech Agency — Marketing, Tech & AI Automation" },
      { name: "description", content: "X Tech Agency" },
      { property: "og:description", content: "X Tech Agency" },
      { name: "twitter:description", content: "X Tech Agency" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/uU09mOe2abZ9CLj8bbV2hdnnf7H2/social-images/social-1776864140007-X_Tech_Logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/uU09mOe2abZ9CLj8bbV2hdnnf7H2/social-images/social-1776864140007-X_Tech_Logo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Cairo:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <AppProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors closeButton />
      </div>
    </AppProvider>
  );
}
