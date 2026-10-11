// Navegação entre arquivos separados (gerado na separação das páginas).
// O navigateTo original continua igual; aqui ele só é envolvido para abrir o arquivo da página.
(function () {
    var PAGINAS = {"inicio": "index.html", "quem-somos": "quem-somos.html", "servicos": "servicos.html", "esp-prestadores": "especialidade-prestadores.html", "esp-comercio": "especialidade-comercio.html", "esp-industria": "especialidade-industria.html", "esp-liberais": "especialidade-liberais.html", "esp-clinicas": "especialidade-clinicas.html", "esp-ecommerce": "especialidade-ecommerce.html", "esp-abertura": "especialidade-abertura.html", "esp-reforma": "especialidade-reforma.html", "blog": "blog.html", "blog-ibscbs-o-que-muda-para-empresas": "blog-ibscbs-o-que-muda-para-empresas.html", "blog-como-escolher-regime-tributario": "blog-como-escolher-regime-tributario.html", "blog-fator-r-para-prestadores-de-servicos": "blog-fator-r-para-prestadores-de-servicos.html", "blog-controle-de-estoque-no-comercio": "blog-controle-de-estoque-no-comercio.html", "blog-bpo-financeiro-controle-empresarial": "blog-bpo-financeiro-controle-empresarial.html", "blog-o-que-analisar-antes-de-abrir-empresa": "blog-o-que-analisar-antes-de-abrir-empresa.html", "blog-contabilidade-para-ecommerce-cuidados-fiscais": "blog-contabilidade-para-ecommerce-cuidados-fiscais.html", "blog-recuperacao-de-creditos-tributarios": "blog-recuperacao-de-creditos-tributarios.html", "blog-contabilidade-gerencial-para-decisoes": "blog-contabilidade-gerencial-para-decisoes.html", "blog-como-preparar-empresa-reforma-tributaria-2027": "blog-como-preparar-empresa-reforma-tributaria-2027.html", "blog-simples-nacional-enquadramento-por-anexo": "blog-simples-nacional-enquadramento-por-anexo.html", "blog-lucro-presumido-ou-lucro-real": "blog-lucro-presumido-ou-lucro-real.html", "blog-creditos-pis-cofins-oportunidades": "blog-creditos-pis-cofins-oportunidades.html", "blog-cnae-incorreto-riscos-para-empresa": "blog-cnae-incorreto-riscos-para-empresa.html", "blog-quando-mudar-de-regime-tributario": "blog-quando-mudar-de-regime-tributario.html", "blog-esocial-o-que-organizar-na-folha-digital": "blog-esocial-o-que-organizar-na-folha-digital.html", "blog-holding-familiar-quando-vale-a-pena": "blog-holding-familiar-quando-vale-a-pena.html", "blog-split-payment-o-que-muda": "blog-split-payment-o-que-muda.html", "blog-planejamento-tributario-para-pequenas-empresas": "blog-planejamento-tributario-para-pequenas-empresas.html", "blog-contabilidade-para-startups": "blog-contabilidade-para-startups.html", "legal-privacidade": "politica-de-privacidade.html", "legal-cookies": "politica-de-cookies.html", "legal-termos": "termos-e-condicoes.html", "contato": "contato.html"};
    var atual = document.body.getAttribute('data-page');
    var original = window.navigateTo;
    window.navigateTo = function (pageId, anchorId) {
        if (pageId !== atual && PAGINAS[pageId]) {
            window.location.href = PAGINAS[pageId] + (anchorId ? '#' + anchorId : '');
            return;
        }
        return original.apply(this, arguments);
    };
    function linksReais() {
        var links = document.querySelectorAll('a[onclick*="navigateTo("]');
        for (var i = 0; i < links.length; i++) {
            var a = links[i];
            var m = (a.getAttribute('onclick') || '').match(/navigateTo\(\s*'([\w-]+)'\s*(?:,\s*'([\w-]+)')?/);
            if (!m || !PAGINAS[m[1]]) continue;
            var h = a.getAttribute('href');
            if (h === null || h === '#') a.setAttribute('href', PAGINAS[m[1]] + (m[2] ? '#' + m[2] : ''));
        }
    }
    document.addEventListener('DOMContentLoaded', linksReais);
    window.addEventListener('load', linksReais);
    new MutationObserver(function () { linksReais(); }).observe(document.documentElement, { childList: true, subtree: true });
})();
