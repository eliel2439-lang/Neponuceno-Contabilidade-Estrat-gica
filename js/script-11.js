
        (function () {
            var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) return;

            var ticking = false;

            function updateParallax() {
                var vh = window.innerHeight;
                document.querySelectorAll('.fx-parallax').forEach(function (el) {
                    var rect = el.getBoundingClientRect();
                    // Só calcula para elementos perto da tela, por performance
                    if (rect.bottom < -200 || rect.top > vh + 200) return;
                    var center = rect.top + rect.height / 2;
                    var offset = (center - vh / 2) / vh; // aprox. -0.5 .. 0.5 enquanto cruza a tela
                    var speed = parseFloat(el.dataset.speed || '0.2');
                    el.style.transform = 'translateY(' + (offset * speed * 120).toFixed(1) + 'px)';
                });
                ticking = false;
            }

            function onScroll() {
                if (!ticking) {
                    requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }

            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll);
            document.addEventListener('DOMContentLoaded', updateParallax);
            // Também recalcula quando novos elementos com parallax são inseridos (páginas geradas via JS)
            var parallaxObserver = new MutationObserver(onScroll);
            parallaxObserver.observe(document.body, { childList: true, subtree: true });
            updateParallax();
        })();
    