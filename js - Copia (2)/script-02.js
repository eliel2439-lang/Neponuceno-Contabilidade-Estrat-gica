
                function stssSelect(key) {
                    document.querySelectorAll('.stss-tab-btn').forEach(function(btn) {
                        const active = btn.dataset.stss === key;
                        btn.classList.toggle('stss-tab-active', active);
                        btn.setAttribute('aria-selected', active ? 'true' : 'false');
                    });
                    document.querySelectorAll('.stss-panel').forEach(function(panel) {
                        panel.classList.toggle('stss-panel-visible', panel.id === 'stss-panel-' + key);
                    });
                    document.querySelectorAll('.stss-card').forEach(function(card) {
                        card.classList.toggle('stss-card-active', card.dataset.stssCard === key);
                    });
                }

                (function() {
                    var stssOrbit = document.getElementById('stssOrbitContainer');
                    if (stssOrbit) {
                        stssOrbit.addEventListener('mouseenter', function() { stssOrbit.classList.add('stss-paused'); });
                        stssOrbit.addEventListener('mouseleave', function() { stssOrbit.classList.remove('stss-paused'); });
                    }
                })();
            