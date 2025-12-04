import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import type React from "react";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#667eea" },
    { media: "(prefers-color-scheme: dark)", color: "#5a67d8" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://themecraft.top"),
  title: {
    default:
      "ThemeCraft - Professional Code Editor Theme Designer & Visual Editor",
    template: "%s | ThemeCraft - Code Theme Designer",
  },
  description:
    "Create stunning code editor themes for VSCode, Cursor, Zed, Neovim & Helix with our professional visual editor and live preview system.",
  keywords: [
    "code editor theme",
    "vscode theme",
    "cursor theme",
    "zed theme",
    "neovim colorscheme",
    "helix theme",
    "theme editor",
    "color scheme generator",
    "syntax highlighting themes",
    "theme creator",
    "code editor customization",
    "visual theme designer",
    "code syntax colors",
    "developer tools",
    "productivity tools",
    "code styling",
    "theme library",
    "color palette generator",
    "syntax highlighting editor",
    "code color schemes",
  ],
  authors: [
    {
      name: "SymphoneIceAttack",
      url: "https://github.com/symphoneiceattack",
    },
  ],
  creator: "SymphoneIceAttack",
  publisher: "ThemeCraft",
  generator: "ThemeCraft v2.0",
  applicationName: "ThemeCraft - Code Theme Editor",

  // SEO & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://themecraft.top",
    title: "ThemeCraft - Professional Code Theme Editor",
    description:
      "Universal code editor theme creator with live preview. Create, customize, and export beautiful color themes for VSCode, Cursor, Zed, Neovim, and Helix.",
    siteName: "ThemeCraft",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ThemeCraft - Code Theme Editor Interface",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "ThemeCraft - Code Theme Editor",
    description:
      "Create stunning themes for VSCode, Cursor, Zed, Neovim & Helix with live preview and multi-export support.",
    creator: "@symphoneiceattack",
    images: ["/og-image.jpg"],
  },

  // PWA & App Links
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ThemeCraft",
  },

  // Canonical URL
  alternates: {
    canonical: "https://themecraft.top",
  },

  // Verification & Structured Data
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#667eea",
    "msapplication-config": "/browserconfig.xml",
  },

  // JSON-LD Schema
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Website Schema
      {
        "@type": "WebSite",
        "@id": "https://themecraft.top/#website",
        url: "https://themecraft.top",
        name: "ThemeCraft - Code Theme Editor",
        description:
          "Professional code editor theme creation tool with live preview and multi-export support for VSCode, Cursor, Zed, Neovim & Helix",
        publisher: {
          "@id": "https://themecraft.top/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target:
              "https://themecraft.top/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
        about: {
          "@id": "https://themecraft.top/#software",
        },
        audience: {
          "@type": "Audience",
          audienceType: [
            "Web Developers",
            "Code Editors Users",
            "Software Engineers",
            "Theme Designers",
          ],
        },
      },

      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://themecraft.top/#organization",
        name: "ThemeCraft",
        url: "https://themecraft.top",
        logo: {
          "@type": "ImageObject",
          url: "https://themecraft.top/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "Professional code editor theme creation platform supporting VSCode, Cursor, Zed, Neovim and Helix",
        creator: {
          "@type": "Person",
          name: "SymphoneIceAttack",
          url: "https://github.com/symphoneiceattack",
          sameAs: [
            "https://github.com/symphoneiceattack",
            "https://twitter.com/symphoneiceattack",
            "https://linkedin.com/in/symphoneiceattack",
          ],
        },
        sameAs: [
          "https://github.com/symphoneiceattack",
          "https://themecraft.top",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          availableLanguage: "English",
        },
      },

      // Software Application Schema
      {
        "@type": "SoftwareApplication",
        "@id": "https://themecraft.top/#software",
        name: "ThemeCraft",
        description:
          "Advanced code editor theme creation and editing application with visual designer, live preview, and multi-format export capabilities",
        url: "https://themecraft.top",
        applicationCategory: "DevelopmentApplication",
        applicationSubCategory: "Theme Editor",
        operatingSystem: "Web Browser",
        softwareVersion: "2.0",
        datePublished: "2024-12-01",
        dateModified: "2024-12-29",
        releaseNotes:
          "Enhanced visual editor with improved color picker, real-time preview, and expanded export format support",
        author: {
          "@type": "Person",
          name: "SymphoneIceAttack",
          url: "https://github.com/symphoneiceattack",
        },
        publisher: {
          "@id": "https://themecraft.top/#organization",
        },
        featureList: [
          "Visual theme editor with intuitive color controls",
          "Live code syntax preview system",
          "Multi-format export (VSCode, Cursor, Zed, Neovim, Helix)",
          "Advanced color palette generator",
          "Syntax highlighting customization tools",
          "Theme library management system",
          "Real-time collaboration support",
          "Version control for theme designs",
          "Import/export theme collections",
          "Color accessibility checker",
        ],
        screenshot: [
          {
            "@type": "ImageObject",
            url: "https://themecraft.top/screenshot-wide.jpg",
            width: 1280,
            height: 720,
            caption:
              "ThemeCraft main interface showing theme editor and live preview",
          },
          {
            "@type": "ImageObject",
            url: "https://themecraft.top/screenshot-narrow.jpg",
            width: 750,
            height: 1334,
            caption: "ThemeCraft mobile interface for theme editing on-the-go",
          },
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2025-12-31",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
        keywords:
          "code editor theme, vscode theme, cursor theme, zed theme, neovim colorscheme, helix theme, theme editor, color scheme generator, syntax highlighting themes",
        programmingLanguage: [
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "JSON",
          "Lua",
          "TOML",
        ],
        supportsAccessibility: true,
        isAccessibleForFree: true,
      },

      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://themecraft.top/#webpage",
        url: "https://themecraft.top",
        name: "Code Theme Editor - Create & Export Themes for VSCode, Cursor, Zed, Neovim & Helix",
        description:
          "Professional online tool for creating, customizing and exporting beautiful code editor themes. Features live preview, visual editor, and multi-format export for all major code editors.",
        isPartOf: {
          "@id": "https://themecraft.top/#website",
        },
        about: {
          "@id": "https://themecraft.top/#software",
        },
        mainEntity: {
          "@id": "https://themecraft.top/#software",
        },
        inLanguage: "en-US",
        breadcrumbs: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://themecraft.top",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Theme Editor",
              item: "https://themecraft.top/editor",
            },
          ],
        },
      },

      // FAQ Schema
      {
        "@type": "FAQPage",
        "@id": "https://themecraft.top/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What code editors does ThemeCraft support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ThemeCraft supports theme creation for VSCode, Cursor, Zed, Neovim, and Helix. You can export your themes in the appropriate format for each editor.",
            },
          },
          {
            "@type": "Question",
            name: "Is ThemeCraft free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, ThemeCraft is completely free to use. You can create unlimited themes and export them without any cost or registration required.",
            },
          },
          {
            "@type": "Question",
            name: "Can I preview my theme in real-time?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, ThemeCraft features a live preview system that shows your theme applied to actual code samples in real-time as you make changes.",
            },
          },
          {
            "@type": "Question",
            name: "How do I export themes for different editors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ThemeCraft automatically generates the correct file format for each supported editor. Simply select your target editor and click export to download the appropriate file.",
            },
          },
          {
            "@type": "Question",
            name: "Can I import existing themes to edit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, you can import existing theme files (JSON, TOML, Lua) and edit them using ThemeCraft's visual editor interface.",
            },
          },
        ],
      },

      // Service Schema
      {
        "@type": "Service",
        "@id": "https://themecraft.top/#service",
        name: "Theme Design & Development Service",
        description:
          "Professional theme design and development services for code editors with custom color schemes, syntax highlighting, and UI customization",
        provider: {
          "@id": "https://themecraft.top/#organization",
        },
        serviceType: "Theme Design",
        audience: {
          "@type": "Audience",
          audienceType: ["Developers", "Theme Designers", "Code Editor Users"],
        },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Theme Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Theme Creation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Theme Consultation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Theme Migration",
              },
            },
          ],
        },
      },

      // CreativeWork Schema for Documentation
      {
        "@type": "CreativeWork",
        "@id": "https://themecraft.top/#documentation",
        name: "ThemeCraft Documentation",
        description:
          "Complete documentation for ThemeCraft theme editor including tutorials, guides, and API references",
        author: {
          "@id": "https://themecraft.top/#organization",
        },
        about: {
          "@id": "https://themecraft.top/#software",
        },
        inLanguage: "en-US",
        educationalUse: ["Reference", "Instruction"],
        learningResourceType: ["Documentation", "Tutorial", "Guide"],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, null, 0),
          }}
        />
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="39.8283;-98.5795" />
        <meta name="ICBM" content="39.8283, -98.5795" />

        {/* Additional structured data for better SEO */}
        <meta property="og:site_name" content="ThemeCraft" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="SymphoneIceAttack" />
        <meta property="article:publisher" content="ThemeCraft" />

        {/* Twitter Card specific meta tags */}
        <meta name="twitter:domain" content="themecraft.top" />
        <meta name="twitter:creator" content="@symphoneiceattack" />
        <meta name="twitter:site" content="@symphoneiceattack" />

        {/* Additional App links */}
        <meta name="al:ios:app_name" content="ThemeCraft" />
        <meta name="al:android:app_name" content="ThemeCraft" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
