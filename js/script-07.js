
            function cookieSetCookie(value) {
                const days = 180;
                const d = new Date();
                d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
                document.cookie = 'barbosaCookieConsent=' + encodeURIComponent(value) + '; expires=' + d.toUTCString() + '; path=/; SameSite=Lax';
            }
            function cookieGetCookie() {
                const match = document.cookie.match(/(?:^|; )barbosaCookieConsent=([^;]*)/);
                return match ? decodeURIComponent(match[1]) : null;
            }
            function cookieHideBanner() {
                const b = document.getElementById('cookieBanner');
                if (b) b.hidden = true;
            }
            function cookieShowBanner() {
                const b = document.getElementById('cookieBanner');
                if (b) b.hidden = false;
            }
            function cookieAcceptAll() {
                cookieSetCookie('accepted');
                cookieHideBanner();
            }

            (function() {
                if (!cookieGetCookie()) {
                    cookieShowBanner();
                }
            })();
        