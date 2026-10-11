
        (function () {
            var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            function setupHost(host) {
                if (!host || host.dataset.fxNavyInit) return;
                host.dataset.fxNavyInit = '1';

                var canvas = document.createElement('canvas');
                canvas.className = 'fx-navy-canvas';
                host.appendChild(canvas);
                var ctx = canvas.getContext('2d');

                var width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
                var points = [];
                var mouseX = 0.5, mouseY = 0.5;
                var running = true;
                var rafId = null;

                function isMobile() { return window.innerWidth < 768; }

                function buildPoints() {
                    var area = width * height;
                    var density = isMobile() ? 1 / 18000 : 1 / 13000;
                    var count = Math.max(14, Math.min(70, Math.round(area * density)));
                    points = [];
                    for (var i = 0; i < count; i++) {
                        var depth = 0.35 + Math.random() * 0.65; // 0.35 (longe) .. 1 (perto) = camadas 3D
                        points.push({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            depth: depth,
                            r: depth * (isMobile() ? 1.6 : 2.1),
                            vx: (Math.random() - 0.5) * 0.12 * depth,
                            vy: (Math.random() - 0.5) * 0.12 * depth
                        });
                    }
                }

                function resize() {
                    var rect = host.getBoundingClientRect();
                    width = Math.max(1, rect.width);
                    height = Math.max(1, rect.height);
                    canvas.width = width * dpr;
                    canvas.height = height * dpr;
                    canvas.style.width = width + 'px';
                    canvas.style.height = height + 'px';
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    buildPoints();
                }

                function drawStatic() {
                    // Sem movimento (respeita "reduzir movimento"): desenha uma vez, parado.
                    ctx.clearRect(0, 0, width, height);
                    points.forEach(function (p) {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(255,255,255,' + (0.15 + p.depth * 0.25) + ')';
                        ctx.fill();
                    });
                }

                function tick() {
                    if (!running) return;
                    ctx.clearRect(0, 0, width, height);

                    var maxLinkDist = isMobile() ? 90 : 130;

                    // Leve deslocamento de profundidade seguindo o mouse (efeito 3D sutil)
                    var parallaxX = (mouseX - 0.5) * 18;
                    var parallaxY = (mouseY - 0.5) * 14;

                    for (var i = 0; i < points.length; i++) {
                        var p = points[i];
                        p.x += p.vx;
                        p.y += p.vy;
                        if (p.x < -10) p.x = width + 10;
                        if (p.x > width + 10) p.x = -10;
                        if (p.y < -10) p.y = height + 10;
                        if (p.y > height + 10) p.y = -10;
                    }

                    // Linhas de conexão entre pontos próximos (efeito de constelação/profundidade)
                    ctx.lineWidth = 1;
                    for (var a = 0; a < points.length; a++) {
                        for (var b = a + 1; b < points.length; b++) {
                            var pa = points[a], pb = points[b];
                            var dx = pa.x - pb.x, dy = pa.y - pb.y;
                            var dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < maxLinkDist) {
                                var opacity = (1 - dist / maxLinkDist) * 0.12 * Math.min(pa.depth, pb.depth);
                                ctx.strokeStyle = 'rgba(150,200,255,' + opacity + ')';
                                ctx.beginPath();
                                ctx.moveTo(pa.x + parallaxX * pa.depth, pa.y + parallaxY * pa.depth);
                                ctx.lineTo(pb.x + parallaxX * pb.depth, pb.y + parallaxY * pb.depth);
                                ctx.stroke();
                            }
                        }
                    }

                    // Pontos (partículas), maiores e mais claros quanto mais "perto" (profundidade)
                    points.forEach(function (p) {
                        var dx = p.x + parallaxX * p.depth;
                        var dy = p.y + parallaxY * p.depth;
                        ctx.beginPath();
                        ctx.arc(dx, dy, p.r, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(255,255,255,' + (0.15 + p.depth * 0.35) + ')';
                        ctx.fill();
                    });

                    rafId = requestAnimationFrame(tick);
                }

                resize();

                if (prefersReducedMotion) {
                    drawStatic();
                } else {
                    rafId = requestAnimationFrame(tick);
                }

                window.addEventListener('resize', function () {
                    resize();
                    if (prefersReducedMotion) drawStatic();
                });

                // Parallax sutil pelo mouse (só desktop) e pelo giroscópio/toque não é necessário no celular.
                host.closest('body') && document.addEventListener('mousemove', function (e) {
                    mouseX = e.clientX / window.innerWidth;
                    mouseY = e.clientY / window.innerHeight;
                });

                // Pausa a animação quando a seção não está visível, para economizar bateria/CPU no celular.
                if ('IntersectionObserver' in window) {
                    var vis = new IntersectionObserver(function (entries) {
                        entries.forEach(function (entry) {
                            if (entry.isIntersecting) {
                                if (!running && !prefersReducedMotion) {
                                    running = true;
                                    rafId = requestAnimationFrame(tick);
                                }
                            } else {
                                running = false;
                                if (rafId) cancelAnimationFrame(rafId);
                            }
                        });
                    }, { threshold: 0.01 });
                    vis.observe(host);
                }
            }

            function scanNavyHosts() {
                document.querySelectorAll('.fx-navy-host').forEach(setupHost);
            }

            document.addEventListener('DOMContentLoaded', scanNavyHosts);
            var navyObserver = new MutationObserver(function () { scanNavyHosts(); });
            navyObserver.observe(document.body, { childList: true, subtree: true });
        })();
    