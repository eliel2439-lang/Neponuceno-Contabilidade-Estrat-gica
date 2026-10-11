
                function mvvSelect(key) {
                    document.querySelectorAll('.mvv-tab-btn').forEach(function(btn) {
                        const active = btn.dataset.mvv === key;
                        btn.classList.toggle('mvv-tab-active', active);
                        btn.setAttribute('aria-selected', active ? 'true' : 'false');
                    });
                    document.querySelectorAll('.mvv-panel').forEach(function(panel) {
                        const active = panel.id === 'mvv-panel-' + key;
                        if (active) {
                            panel.hidden = false;
                            requestAnimationFrame(function() { panel.classList.add('mvv-panel-visible'); });
                        } else {
                            panel.classList.remove('mvv-panel-visible');
                            setTimeout(function() {
                                if (!panel.classList.contains('mvv-panel-visible')) panel.hidden = true;
                            }, 300);
                        }
                    });
                }
            