
            const LEGAL_UPDATED_AT = "[INSERIR DATA]";
            const LEGAL_PRIVACY_EMAIL = "contato@nepocontabil.com.br";
            const LEGAL_PHONE = "+55 11 94778-1014";
            const LEGAL_ADDRESS = "Rua Presidente Getúlio Vargas, 192 – Jardim Santa Helena, Suzano - SP, 08674-260";
            const LEGAL_CNPJ = "[Inserir CNPJ]";
            const LEGAL_RAZAO_SOCIAL = "[INSERIR RAZÃO SOCIAL]";

            function ph(text) { return '<span class="legal-placeholder">' + text + '</span>'; }

            function legalScrollTo(id) {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            function legalBuildPage(config) {
                const tocHtml = '<nav class="legal-toc" aria-label="Índice do documento">' +
                    '<p class="legal-toc__title">Índice</p>' +
                    '<ol>' + config.sections.map(function(s, i) {
                        return '<li><a href="#" onclick="legalScrollTo(\'' + config.pageId + '-s' + i + '\'); return false;">' + (i + 1) + '. ' + s.title + '</a></li>';
                    }).join('') + '</ol>' +
                '</nav>';

                const sectionsHtml = config.sections.map(function(s, i) {
                    return '<div class="legal-section" id="' + config.pageId + '-s' + i + '">' +
                        '<h2>' + (i + 1) + '. ' + s.title + '</h2>' +
                        s.body +
                    '</div>';
                }).join('');

                return '' +
                    '<div class="legal-hero">' +
                        '<div class="legal-hero__content">' +
                            '<span class="legal-hero__eyebrow">' + config.eyebrow + '</span>' +
                            '<h1 class="legal-hero__title">' + config.h1 + '</h1>' +
                            '<div class="legal-hero__breadcrumb">' +
                                '<a href="#" onclick="navigateTo(\'inicio\')">Início</a>' +
                                '<span class="sep">|</span>' +
                                '<span>' + config.h1 + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="legal-container">' +
                        '<div class="legal-intro"><p>' + config.intro + '</p></div>' +
                        tocHtml +
                        sectionsHtml +
                        '<div class="legal-footer-note">' +
                            '<p><strong>Última atualização:</strong> ' + ph(LEGAL_UPDATED_AT) + '</p>' +
                            '<p><strong>Contato para dúvidas:</strong> ' + ph(LEGAL_PRIVACY_EMAIL) + '</p>' +
                        '</div>' +
                    '</div>';
            }

            // ---------- POLÍTICA DE PRIVACIDADE ----------
            const legalPrivacidade = {
                pageId: "privacidade",
                eyebrow: "Privacidade e Proteção de Dados",
                h1: "Política de Privacidade",
                intro: "A Neponuceno Contabilidade Estratégica respeita a privacidade dos usuários, clientes, parceiros e visitantes de seu site. Esta Política de Privacidade explica como os dados pessoais podem ser coletados, utilizados, armazenados, compartilhados e protegidos durante a utilização de nossos canais digitais. O tratamento de dados deve ocorrer de forma responsável, transparente e de acordo com a legislação aplicável. Recomendamos a leitura completa deste documento para compreender como as informações são utilizadas e quais direitos podem ser exercidos.",
                sections: [
                    { title: "Identificação do controlador", body:
                        '<p><strong>Razão social:</strong> ' + ph(LEGAL_RAZAO_SOCIAL) + '</p>' +
                        '<p><strong>Nome comercial:</strong> Neponuceno Contabilidade Estratégica</p>' +
                        '<p><strong>CNPJ:</strong> ' + ph(LEGAL_CNPJ) + '</p>' +
                        '<p><strong>Endereço:</strong> ' + ph(LEGAL_ADDRESS) + '</p>' +
                        '<p><strong>Canal para assuntos relacionados à privacidade:</strong> ' + ph(LEGAL_PRIVACY_EMAIL) + '</p>' +
                        '<p><strong>Telefone:</strong> ' + ph(LEGAL_PHONE) + '</p>' +
                        '<p><strong>Responsável ou encarregado pelo tratamento de dados:</strong> ' + ph("INSERIR NOME OU INFORMAR CANAL DE CONTATO") + '</p>' +
                        '<p>Para os tratamentos de dados descritos nesta política, a Neponuceno Contabilidade Estratégica atua como controladora, sendo responsável pelas decisões relacionadas à utilização das informações pessoais coletadas por meio do site e de seus canais de atendimento.</p>'
                    },
                    { title: "Quais dados podemos coletar", body:
                        '<p>Dependendo da interação do visitante, podem ser coletados:</p>' +
                        '<ul><li>Nome</li><li>Telefone</li><li>Endereço de e-mail</li><li>Nome da empresa</li><li>CNPJ</li><li>Cargo ou função</li><li>Cidade e estado</li><li>Informações fornecidas em formulários</li><li>Conteúdo enviado voluntariamente pelo WhatsApp</li><li>Interesse em serviços</li><li>Dados de navegação</li><li>Endereço IP</li><li>Tipo de navegador</li><li>Dispositivo utilizado</li><li>Páginas acessadas</li><li>Data e horário de acesso</li><li>Origem do acesso</li><li>Preferências de cookies</li></ul>' +
                        '<p>Essa lista pode variar conforme os formulários, ferramentas e canais efetivamente utilizados pela Neponuceno Contabilidade Estratégica.</p>' +
                        '<p>A Neponuceno Contabilidade Estratégica não solicita, por meio dos formulários públicos do site, o envio de senhas, informações bancárias completas ou documentos confidenciais. Caso seja necessário compartilhar documentos para a prestação de serviços, isso deverá ocorrer pelos canais seguros previamente orientados pela empresa.</p>'
                    },
                    { title: "Como os dados são coletados", body:
                        '<p>Os dados podem ser obtidos:</p>' +
                        '<ul><li>Quando o usuário preenche um formulário</li><li>Quando entra em contato pelo WhatsApp</li><li>Quando envia um e-mail</li><li>Quando solicita um orçamento</li><li>Quando navega pelo site</li><li>Quando aceita categorias de cookies</li><li>Quando interage com ferramentas integradas</li><li>Durante o relacionamento comercial ou pré-contratual</li></ul>'
                    },
                    { title: "Para quais finalidades utilizamos os dados", body:
                        '<ul><li>Responder dúvidas e solicitações</li><li>Preparar e enviar propostas</li><li>Realizar atendimento comercial</li><li>Identificar o serviço procurado</li><li>Entrar em contato com o interessado</li><li>Organizar reuniões e atendimentos</li><li>Melhorar a experiência de navegação</li><li>Analisar o desempenho do site</li><li>Proteger o site contra fraudes e acessos indevidos</li><li>Cumprir obrigações legais e regulatórias</li><li>Exercer direitos em processos administrativos ou judiciais</li><li>Enviar comunicações autorizadas</li><li>Manter registros de atendimento</li><li>Prestar os serviços contratados</li></ul>' +
                        '<p>Os dados não devem ser usados para finalidades incompatíveis com aquelas informadas nesta política.</p>'
                    },
                    { title: "Bases legais", body:
                        '<p>Conforme cada situação, os tratamentos podem estar fundamentados em:</p>' +
                        '<ul><li>Consentimento</li><li>Procedimentos preliminares relacionados a contrato</li><li>Execução de contrato</li><li>Cumprimento de obrigação legal ou regulatória</li><li>Exercício regular de direitos</li><li>Legítimo interesse, após análise adequada</li><li>Proteção contra fraudes e segurança do titular, quando aplicável</li></ul>' +
                        '<p>Nem todos os tratamentos realizados pela Neponuceno Contabilidade Estratégica utilizam o consentimento como base legal.</p>'
                    },
                    { title: "Compartilhamento de dados", body:
                        '<p>Os dados poderão ser compartilhados somente quando necessário com:</p>' +
                        '<ul><li>Provedores de hospedagem</li><li>Ferramentas de formulários</li><li>Provedores de e-mail</li><li>Sistemas de atendimento</li><li>Serviços de armazenamento em nuvem</li><li>Plataformas de comunicação</li><li>Fornecedores de segurança</li><li>Ferramentas de análise de acesso</li><li>Assessores jurídicos, contábeis ou técnicos</li><li>Autoridades públicas, quando houver obrigação legal</li></ul>' +
                        '<p>A relação final de fornecedores deve ser revisada de acordo com as ferramentas realmente utilizadas no site.</p>'
                    },
                    { title: "Transferência internacional", body:
                        '<p>Alguns fornecedores de tecnologia podem armazenar ou processar dados fora do Brasil. Quando isso ocorrer, a Neponuceno Contabilidade Estratégica deverá adotar medidas compatíveis com a legislação aplicável para proteger as informações e garantir um nível adequado de segurança.</p>'
                    },
                    { title: "Prazo de armazenamento", body:
                        '<p>Os dados devem ser mantidos:</p>' +
                        '<ul><li>Enquanto forem necessários para a finalidade informada</li><li>Durante o relacionamento com o usuário ou cliente</li><li>Pelo período exigido por obrigações legais</li><li>Pelo tempo necessário para exercício de direitos</li><li>Conforme os prazos internos de retenção</li></ul>' +
                        '<p>Após o encerramento da finalidade, os dados deverão ser eliminados, anonimizados ou mantidos somente quando houver fundamento legal.</p>'
                    },
                    { title: "Segurança das informações", body:
                        '<p>Podem ser adotadas medidas como:</p>' +
                        '<ul><li>Conexão HTTPS</li><li>Controle de acesso</li><li>Senhas</li><li>Backups</li><li>Atualização de sistemas</li><li>Limitação de acesso</li><li>Monitoramento</li><li>Orientação de colaboradores e fornecedores</li></ul>' +
                        '<p>Embora sejam adotadas medidas razoáveis de proteção, nenhum ambiente digital é totalmente livre de riscos. Por isso, os usuários também devem proteger seus dispositivos, contas e informações de acesso.</p>'
                    },
                    { title: "Direitos do titular", body:
                        '<p>Conforme aplicável, o titular pode solicitar:</p>' +
                        '<ul><li>Confirmação da existência de tratamento</li><li>Acesso aos dados</li><li>Correção de informações</li><li>Anonimização, bloqueio ou eliminação</li><li>Portabilidade, quando aplicável</li><li>Informação sobre compartilhamentos</li><li>Revogação do consentimento</li><li>Oposição ao tratamento</li><li>Revisão de decisões automatizadas, quando existente</li><li>Solicitação de informações</li><li>Apresentação de reclamação à autoridade competente</li></ul>' +
                        '<p>Para exercer seus direitos, o titular poderá enviar uma solicitação para ' + ph(LEGAL_PRIVACY_EMAIL) + '. A Neponuceno Contabilidade Estratégica poderá solicitar informações adicionais para confirmar a identidade do requerente e proteger os dados contra acessos indevidos.</p>'
                    },
                    { title: "Dados de crianças e adolescentes", body:
                        '<p>O site e os serviços da Neponuceno Contabilidade Estratégica são direcionados principalmente a empresas, empreendedores e profissionais. Não buscamos coletar intencionalmente dados de crianças ou adolescentes por meio dos formulários públicos do site.</p>' +
                        '<p>Caso seja identificada uma coleta inadequada, o responsável poderá solicitar a exclusão das informações pelo canal de privacidade.</p>'
                    },
                    { title: "Links para terceiros", body:
                        '<p>O site pode conter links para WhatsApp, redes sociais, sites oficiais, parceiros e plataformas externas. Cada serviço externo possui suas próprias regras e políticas.</p>'
                    },
                    { title: "Cookies", body:
                        '<p>O site pode utilizar cookies necessários para seu funcionamento e, conforme as ferramentas instaladas e as escolhas do usuário, cookies de funcionalidade, análise ou publicidade.</p>' +
                        '<p>Para mais informações, consulte a <a class="legal-inline-link" onclick="navigateTo(\'legal-cookies\')">Política de Cookies</a>.</p>'
                    },
                    { title: "Alterações desta política", body:
                        '<p>Esta política poderá ser atualizada por razões legais, técnicas ou operacionais. A versão vigente sempre apresentará a data da última atualização.</p>'
                    },
                    { title: "Contato", body:
                        '<p>Dúvidas, solicitações ou assuntos relacionados à privacidade e proteção de dados podem ser enviados para:</p>' +
                        '<p>Neponuceno Contabilidade Estratégica<br>Canal de contato: ' + ph(LEGAL_PRIVACY_EMAIL) + '<br>Telefone: ' + ph(LEGAL_PHONE) + '<br>Endereço: ' + ph(LEGAL_ADDRESS) + '</p>'
                    }
                ]
            };

            // ---------- POLÍTICA DE COOKIES ----------
            const legalCookies = {
                pageId: "cookies",
                eyebrow: "Preferências de Navegação",
                h1: "Política de Cookies",
                intro: "Esta Política de Cookies explica o que são cookies, quais categorias podem ser utilizadas no site da Neponuceno Contabilidade Estratégica e como o visitante pode controlar suas preferências.",
                sections: [
                    { title: "O que são cookies", body:
                        '<p>Cookies são pequenos arquivos armazenados no dispositivo do visitante durante o acesso a um site. Eles podem ser usados para permitir funcionalidades essenciais, memorizar preferências, compreender a utilização das páginas e, quando autorizado, apoiar análises ou campanhas.</p>'
                    },
                    { title: "Tipos de cookies", body:
                        '<h3>Cookies necessários</h3><p>Essenciais para funcionamento do site, segurança, carregamento das páginas, formulários, preferências de privacidade e gerenciamento da sessão. Esses cookies não podem ser desativados quando forem indispensáveis ao funcionamento do site.</p>' +
                        '<h3>Cookies de funcionalidade</h3><p>Podem memorizar escolhas como idioma, preferências, configurações e recursos adicionais.</p>' +
                        '<h3>Cookies de análise e desempenho</h3><p>Podem ajudar a compreender páginas mais visitadas, tempo de navegação, origem dos acessos, funcionamento técnico e erros de carregamento. Essa categoria só é utilizada quando uma ferramenta de análise estiver realmente instalada no site.</p>' +
                        '<h3>Cookies de publicidade</h3><p>Podem ser usados para medir campanhas, limitar repetições, compreender interações com anúncios e criar públicos, quando autorizado. Essa categoria só é considerada ativa se o site utilizar, de fato, ferramentas de publicidade.</p>'
                    },
                    { title: "Tabela de cookies", body:
                        '<div class="legal-table-wrap"><table class="legal-table"><thead><tr><th>Nome do cookie</th><th>Fornecedor</th><th>Categoria</th><th>Finalidade</th><th>Duração</th></tr></thead><tbody>' +
                        '<tr><td>' + ph("MAPEAR COOKIE REAL") + '</td><td>' + ph("INSERIR FORNECEDOR") + '</td><td>Necessário</td><td>' + ph("INSERIR FINALIDADE") + '</td><td>' + ph("INSERIR DURAÇÃO") + '</td></tr>' +
                        '</tbody></table></div>' +
                        '<p>No momento, o site utiliza apenas cookies estritamente necessários ao seu funcionamento. Esta tabela deverá ser atualizada assim que novas ferramentas de funcionalidade, análise ou publicidade forem efetivamente instaladas.</p>'
                    },
                    { title: "Cookies de terceiros", body:
                        '<p>Funcionalidades externas, como WhatsApp, vídeos, mapas, redes sociais ou ferramentas analíticas, podem inserir cookies próprios quando efetivamente utilizadas no site. Esses fornecedores possuem políticas independentes.</p>'
                    },
                    { title: "Como gerenciar as preferências", body:
                        '<p>O visitante pode:</p>' +
                        '<ul><li>Aceitar todos os cookies</li><li>Recusar cookies não necessários</li><li>Escolher categorias específicas</li><li>Alterar a decisão posteriormente</li><li>Configurar o navegador</li><li>Excluir cookies já armazenados</li></ul>' +
                        '<p>A desativação de cookies necessários pode comprometer funções básicas do site.</p>'
                    },
                    { title: "Consentimento", body:
                        '<p>Ao acessar o site, é exibido um aviso informando sobre o uso de cookies necessários, com a opção de aceitar. Como o site utiliza atualmente apenas cookies estritamente necessários, não é solicitada autorização para categorias opcionais que não estejam instaladas.</p>'
                    },
                    { title: "Alterações", body:
                        '<p>Esta política poderá ser atualizada conforme mudanças nas ferramentas, funcionalidades ou exigências legais aplicáveis.</p>'
                    },
                    { title: "Contato", body:
                        '<p>Dúvidas sobre cookies:</p><p>Canal de contato: ' + ph(LEGAL_PRIVACY_EMAIL) + '<br>Telefone: ' + ph(LEGAL_PHONE) + '</p>'
                    }
                ]
            };

            // ---------- TERMOS E CONDIÇÕES ----------
            const legalTermos = {
                pageId: "termos",
                eyebrow: "Regras de Utilização",
                h1: "Termos e Condições",
                intro: "Estes Termos e Condições regulam o acesso e a utilização do site da Neponuceno Contabilidade Estratégica. Ao navegar pelas páginas ou utilizar os canais disponibilizados, o usuário declara estar ciente das regras apresentadas neste documento.",
                sections: [
                    { title: "Identificação da empresa", body:
                        '<p><strong>Razão social:</strong> ' + ph(LEGAL_RAZAO_SOCIAL) + '</p>' +
                        '<p><strong>Nome comercial:</strong> Neponuceno Contabilidade Estratégica</p>' +
                        '<p><strong>CNPJ:</strong> ' + ph(LEGAL_CNPJ) + '</p>' +
                        '<p><strong>Endereço:</strong> ' + ph(LEGAL_ADDRESS) + '</p>' +
                        '<p><strong>Canal de contato:</strong> ' + ph(LEGAL_PRIVACY_EMAIL) + '</p>' +
                        '<p><strong>Telefone:</strong> ' + ph(LEGAL_PHONE) + '</p>'
                    },
                    { title: "Objetivo do site", body:
                        '<p>O site tem como objetivo apresentar a Neponuceno Contabilidade Estratégica, seus serviços, especialidades, conteúdos informativos e canais de contato. As informações disponibilizadas possuem caráter institucional e informativo.</p>'
                    },
                    { title: "Aceitação dos termos", body:
                        '<p>Ao acessar o site, o usuário concorda em utilizá-lo de maneira responsável, ética e compatível com a legislação aplicável. Caso não concorde com estes Termos, recomenda-se interromper a utilização do site.</p>'
                    },
                    { title: "Conteúdo informativo", body:
                        '<p>Os conteúdos publicados no site e no blog possuem finalidade informativa e não substituem uma análise contábil, tributária, jurídica ou financeira individualizada.</p>' +
                        '<p>Leis, regras tributárias e interpretações podem variar conforme a atividade, localidade, regime, operação e momento da consulta.</p>' +
                        '<p>Nenhuma decisão empresarial deve ser tomada exclusivamente com base em um artigo genérico, sem análise da situação concreta.</p>'
                    },
                    { title: "Contratação de serviços", body:
                        '<p>O preenchimento de formulário, envio de mensagem, solicitação de orçamento ou contato pelo WhatsApp não representa contratação automática dos serviços.</p>' +
                        '<p>A prestação dos serviços dependerá de:</p>' +
                        '<ul><li>Análise da necessidade</li><li>Confirmação de escopo</li><li>Envio de proposta</li><li>Aceite das condições</li><li>Assinatura de contrato, quando aplicável</li><li>Entrega das informações necessárias</li></ul>' +
                        '<p>Os valores, prazos, responsabilidades e limites dos serviços serão definidos em proposta ou contrato específico.</p>'
                    },
                    { title: "Responsabilidades do usuário", body:
                        '<p>O usuário se compromete a:</p>' +
                        '<ul><li>Fornecer informações verdadeiras</li><li>Não utilizar dados de terceiros sem autorização</li><li>Não tentar acessar áreas restritas</li><li>Não inserir códigos maliciosos</li><li>Não comprometer o funcionamento do site</li><li>Não copiar conteúdos de forma indevida</li><li>Não utilizar o site para práticas ilícitas</li><li>Proteger seus dispositivos e contas</li></ul>'
                    },
                    { title: "Propriedade intelectual", body:
                        '<p>Textos, marcas, logotipos, elementos visuais, estruturas, materiais, vídeos, imagens e demais conteúdos produzidos pela Neponuceno Contabilidade Estratégica são protegidos pela legislação aplicável.</p>' +
                        '<p>Não é permitida a reprodução, alteração, distribuição ou exploração comercial sem autorização prévia, exceto nos casos permitidos por lei.</p>' +
                        '<p>Marcas, imagens e conteúdos pertencentes a terceiros continuam sendo de responsabilidade de seus respectivos titulares.</p>'
                    },
                    { title: "Links e serviços de terceiros", body:
                        '<p>O site pode conter links para plataformas externas, redes sociais, WhatsApp, órgãos públicos e fontes informativas. A Neponuceno Contabilidade Estratégica não controla o funcionamento, a disponibilidade, as políticas ou o conteúdo desses ambientes externos.</p>'
                    },
                    { title: "Disponibilidade do site", body:
                        '<p>A Neponuceno Contabilidade Estratégica busca manter o site disponível e atualizado, mas não garante funcionamento contínuo e sem interrupções. O acesso poderá ser temporariamente suspenso por:</p>' +
                        '<ul><li>Manutenção</li><li>Atualizações</li><li>Falhas técnicas</li><li>Indisponibilidade de fornecedores</li><li>Incidentes de segurança</li><li>Situações fora do controle da empresa</li></ul>'
                    },
                    { title: "Limitação de responsabilidade", body:
                        '<p>A Neponuceno Contabilidade Estratégica não se responsabiliza por decisões tomadas exclusivamente com base em conteúdos gerais do site, por informações incorretas fornecidas pelo usuário, por falhas causadas por terceiros ou por utilizações contrárias a estes Termos.</p>' +
                        '<p>Nenhuma disposição destes Termos pretende excluir ou limitar responsabilidades que não possam ser afastadas pela legislação aplicável.</p>'
                    },
                    { title: "Proteção de dados", body:
                        '<p>O tratamento de dados pessoais relacionado ao site está descrito na <a class="legal-inline-link" onclick="navigateTo(\'legal-privacidade\')">Política de Privacidade</a> e na <a class="legal-inline-link" onclick="navigateTo(\'legal-cookies\')">Política de Cookies</a>.</p>'
                    },
                    { title: "Alterações dos termos", body:
                        '<p>Os Termos poderão ser atualizados para refletir mudanças legais, operacionais, técnicas, comerciais ou relacionadas ao site. A data da versão atual é apresentada ao final desta página.</p>'
                    },
                    { title: "Legislação e solução de conflitos", body:
                        '<p>Estes Termos serão interpretados conforme a legislação brasileira.</p>' +
                        '<p>Eventuais dúvidas ou controvérsias deverão, inicialmente, ser encaminhadas aos canais oficiais da Neponuceno Contabilidade Estratégica para tentativa de solução amigável.</p>' +
                        '<p>Caso seja necessária medida judicial, será observado o foro competente determinado pela legislação aplicável, sem prejuízo dos direitos garantidos ao usuário.</p>'
                    },
                    { title: "Contato", body:
                        '<p>Neponuceno Contabilidade Estratégica<br>Canal de contato: ' + ph(LEGAL_PRIVACY_EMAIL) + '<br>Telefone: ' + ph(LEGAL_PHONE) + '<br>Endereço: ' + ph(LEGAL_ADDRESS) + '</p>'
                    }
                ]
            };

            if (document.getElementById('legal-privacidade')) document.getElementById('legal-privacidade').innerHTML = legalBuildPage(legalPrivacidade);
            if (document.getElementById('legal-cookies')) document.getElementById('legal-cookies').innerHTML = legalBuildPage(legalCookies);
            if (document.getElementById('legal-termos')) document.getElementById('legal-termos').innerHTML = legalBuildPage(legalTermos);
        