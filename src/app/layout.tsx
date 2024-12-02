import clsx from "clsx";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ReactNode } from "react";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { isRTL } from "@/i18n/config";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <ConvexAuthNextjsServerProvider>
      <html lang={locale}>
        <head>
          <title>Spartan</title>
        </head>
        <body
          className={clsx("flex min-h-[100vh] flex-col", inter.className, {
            "rtl-layout": isRTL(locale),
          })}
          dir={isRTL(locale) ? "rtl" : "ltr"}
        >
          <ConvexClientProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
              <CookieConsent />
            </NextIntlClientProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
