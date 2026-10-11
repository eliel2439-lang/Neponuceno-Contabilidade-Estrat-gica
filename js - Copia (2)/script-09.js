
        (function () {
            // Elementos que vão "aparecer" conforme a pessoa rola a página para baixo.
            var REVEAL_SELECTOR = [
                '.svc-card', '.seg-card', '.blog-card', '.contact-card', '.esp-card',
                '.esp-solution-card', '.hfp-card', '.lead-card', '.glass-card-light',
                '.glass-card', '.specialty-challenge-card', '.stss-card'
            ].join(',');

            var revealObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fx-in');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }) : null;

            function initRevealOn(el) {
                if (!el || el.dataset.fxRevealInit) return;
                el.dataset.fxRevealInit = '1';
                el.classList.add('fx-reveal');
                if (revealObserver) {
                    revealObserver.observe(el);
                } else {
                    el.classList.add('fx-in');
                }
            }

            function scanAndInit() {
                document.querySelectorAll(REVEAL_SELECTOR).forEach(initRevealOn);
            }

            // Roda no carregamento e observa o DOM, já que vários cards (serviços,
            // segmentos, blog, avaliações, acompanhamento) são gerados via JavaScript.
            document.addEventListener('DOMContentLoaded', scanAndInit);
            var fxObserver = new MutationObserver(function () { scanAndInit(); });
            fxObserver.observe(document.body, { childList: true, subtree: true });
        })();
    