'use client';

import {AnimatePresence, motion} from 'framer-motion';
import Cookies from 'js-cookie';
import {Cookie, Shield} from 'lucide-react';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';

export function CookieConsent() {
  const {handleAccept, showConsent} = useCookieConsent();

  if (!showConsent) return null;

  return (
    <AnimatePresence>
      <motion.div
        animate={{y: 0, opacity: 1}}
        className="fixed inset-x-4 bottom-4 z-50 md:left-8 md:right-auto md:max-w-md"
        exit={{y: 100, opacity: 0}}
        initial={{y: 100, opacity: 0}}
        transition={{type: 'spring', damping: 20, stiffness: 300}}
      >
        <div className="overflow-hidden rounded-xl border-2 border-border bg-card shadow-lg">
          <div className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <Cookie className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">We value your privacy</h3>
              </div>
            </div>

            <p className="mb-6 text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking OK, you
              consent to our use of cookies.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-muted-foreground">
                <Shield className="mr-1 size-3" />
                <span>Your privacy is protected</span>
              </div>
              <div className="flex space-x-2">
                <Button className="px-4" onClick={handleAccept} size="sm">
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const useCookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentGiven = Cookies.get('cookieConsent');
    if (!consentGiven) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000); // Delay showing the consent banner
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', {expires: 365});
    setShowConsent(false);
  };

  return {
    showConsent,
    handleAccept
  };
};
