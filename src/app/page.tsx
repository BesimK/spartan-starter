"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { TechStack } from "@/components/TechStack";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crown, Shield, Sword } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";

export default function Home() {
  const t = useTranslations("Index");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <AuroraBackground>
      <div ref={containerRef} className="min-h-screen">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{ opacity, scale, y }}
          className="relative flex flex-col gap-8 items-center justify-center px-4 py-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-8xl font-bold dark:text-white text-center"
          >
            {t("heroTitle")}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 animate-gradient-x">
              Spartan Up!
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="font-light text-xl md:text-5xl dark:text-neutral-200 py-4 text-center"
          >
            {t("title")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4"
          >
            <Button
              variant="default"
              size="lg"
              className="rounded-full font-semibold bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sword className="mr-2 h-5 w-5" />
              </motion.div>
              {t("heroSubtitle")}
            </Button>
            <LocaleSwitcher />
          </motion.div>
          <TechStack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 py-12"
        >
          <Card className="bg-gradient-to-br from-red-100 to-yellow-100 dark:from-red-900 dark:to-yellow-900 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center justify-center">
                <Crown className="mr-2 h-8 w-8 text-yellow-500" /> Spartan Tech
                Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl mb-6">{t("stackDescription")}</p>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                {[
                  "Next.js",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Next-Intl",
                  "Convex",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-lg py-2 px-4 bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
