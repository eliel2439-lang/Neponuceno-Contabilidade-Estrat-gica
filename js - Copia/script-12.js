
        (function () {
            var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

            function animateCounter(el) {
                var to = parseFloat(el.dataset.countTo || '0');
                var prefix = el.dataset.countPrefix || '';
                var suffix = el.dataset.countSuffix || '';
                var duration = 1300;
                var start = null;

                if (prefersReducedMotion) {
                    el.textContent = prefix + to + suffix;
                    return;
                }

                el.style.transformStyle = 'preserve-3d';

                function step(ts) {
                    if (!start) start = ts;
                    var progress = Math.min((ts - start) / duration, 1);
                    var eased = easeOutCubic(progress);
                    var current = Math.round(to * eased);
                    el.textContent = prefix + current + suffix;

                    var rotate = (1 - eased) * -40; // graus: começa "deitado" e endireita
                    var scale = 0.8 + eased * 0.2;
                    el.style.transform = 'perspective(600px) rotateX(' + rotate.toFixed(1) + 'deg) scale(' + scale.toFixed(2) + ')';
                    el.style.opacity = (0.3 + eased * 0.7).toFixed(2);

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        el.style.transform = '';
                        el.style.opacity = '';
                    }
                }
                requestAnimationFrame(step);
            }

            var counterObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.4 }) : null;

            function initCounters() {
                document.querySelectorAll('.fx-counter[data-count-to]').forEach(function (el) {
                    if (el.dataset.fxCounterInit) return;
                    el.dataset.fxCounterInit = '1';
                    if (counterObserver) {
                        counterObserver.observe(el);
                    } else {
                        animateCounter(el);
                    }
                });
            }

            document.addEventListener('DOMContentLoaded', initCounters);
            var counterMutationObserver = new MutationObserver(initCounters);
            counterMutationObserver.observe(document.body, { childList: true, subtree: true });
        })();
    