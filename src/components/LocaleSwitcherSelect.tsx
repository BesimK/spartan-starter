"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale, languageToCountry } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { Globe } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full min-w-52 ${isPending ? "pointer-events-none opacity-60" : ""}`}
          aria-label={label}
        >
          <Globe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onSelect={() => onChange(item.value)}
          >
            <div className="flex items-center">
              <ReactCountryFlag
                className="rounded-full mr-2"
                countryCode={languageToCountry[item.value] || ""}
                style={{
                  width: "1.5em",
                  height: "1.5em",
                }}
                svg
                title={item.label}
              />
              <span>{item.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
