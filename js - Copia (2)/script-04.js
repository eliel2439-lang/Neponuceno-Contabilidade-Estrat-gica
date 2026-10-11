
            // ---------- Dados das 8 páginas de Especialidades ----------

            // ---------- Seção "Desafios do segmento" (3 cards específicos por especialidade) ----------
            const espChallengesDesc = "A falta de acompanhamento especializado pode aumentar riscos, custos e dificuldades na tomada de decisões.";

            const espChallengeCards = {
                prestadores: {
                    title: "Já enfrentou estes desafios na gestão da sua empresa de serviços?",
                    cards: [
                        { icon: "fa-percent", title: "Fator R mal aproveitado", desc: "A falta de análise da folha de pagamento e do faturamento pode levar a empresa a um enquadramento tributário menos vantajoso." },
                        { icon: "fa-coins", title: "Impostos acima do necessário", desc: "Um regime tributário inadequado pode aumentar os custos e reduzir a margem obtida com a prestação dos serviços." },
                        { icon: "fa-file-invoice", title: "Obrigações fiscais desorganizadas", desc: "Falhas na emissão de notas, apuração de tributos e entrega de declarações podem gerar multas e pendências." }
                    ]
                },
                comercio: {
                    title: "Já enfrentou estes desafios na gestão do seu comércio?",
                    cards: [
                        { icon: "fa-boxes-stacked", title: "Estoque sem controle", desc: "Produtos parados, compras em excesso ou falta de mercadorias comprometem o caixa e as oportunidades de venda." },
                        { icon: "fa-receipt", title: "Tributação sobre vendas", desc: "A apuração incorreta dos impostos nas operações comerciais pode gerar custos desnecessários e riscos fiscais." },
                        { icon: "fa-chart-line", title: "Margem de lucro pouco clara", desc: "Sem informações confiáveis sobre custos, estoque e despesas, fica difícil identificar o resultado real de cada venda." }
                    ]
                },
                industria: {
                    title: "Já enfrentou estes desafios na gestão da sua indústria?",
                    cards: [
                        { icon: "fa-gears", title: "Custos de produção imprecisos", desc: "A falta de separação entre matérias-primas, mão de obra e despesas pode prejudicar a formação correta dos preços." },
                        { icon: "fa-file-invoice-dollar", title: "Créditos tributários não aproveitados", desc: "Operações industriais podem gerar créditos fiscais que deixam de ser utilizados por falta de análise especializada." },
                        { icon: "fa-industry", title: "Estoque e produção desconectados", desc: "Diferenças entre estoque, produção e registros fiscais podem causar perdas, inconsistências e dificuldades na gestão." }
                    ]
                },
                liberais: {
                    title: "Já enfrentou estes desafios na organização da sua atividade profissional?",
                    cards: [
                        { icon: "fa-scale-unbalanced", title: "Pessoa física ou jurídica?", desc: "Atuar sem analisar a melhor estrutura pode aumentar a tributação e dificultar o crescimento da atividade profissional." },
                        { icon: "fa-wallet", title: "Mistura das finanças pessoais e profissionais", desc: "A ausência de separação financeira prejudica o controle dos resultados e a organização das obrigações." },
                        { icon: "fa-file-lines", title: "Imposto de Renda complexo", desc: "Rendimentos, despesas e movimentações não organizadas podem causar erros, pendências e pagamento incorreto de imposto." }
                    ]
                },
                clinicas: {
                    title: "Já enfrentou estes desafios na gestão da sua clínica ou consultório?",
                    cards: [
                        { icon: "fa-percent", title: "Fator R sem acompanhamento", desc: "A relação entre faturamento e folha pode alterar significativamente a tributação das atividades de saúde." },
                        { icon: "fa-users", title: "Folha de pagamento complexa", desc: "Profissionais, funcionários e diferentes formas de contratação exigem atenção às rotinas trabalhistas." },
                        { icon: "fa-heart-pulse", title: "Faturamento sem visão financeira", desc: "Recebimentos de pacientes, convênios e despesas operacionais precisam ser organizados para mostrar o resultado real." }
                    ]
                },
                ecommerce: {
                    title: "Já enfrentou estes desafios na gestão do seu e-commerce?",
                    cards: [
                        { icon: "fa-route", title: "Vendas interestaduais complexas", desc: "Operações para diferentes estados podem envolver regras tributárias específicas e apurações mais detalhadas." },
                        { icon: "fa-store", title: "Conciliação de marketplaces", desc: "Taxas, comissões, repasses e cancelamentos dificultam a conferência dos valores realmente recebidos." },
                        { icon: "fa-truck-ramp-box", title: "Estoque e notas fiscais desencontrados", desc: "Diferenças entre plataformas, estoque e emissão de notas podem gerar falhas operacionais e fiscais." }
                    ]
                },
                abertura: {
                    title: "Já enfrentou dúvidas para abrir e estruturar sua empresa?",
                    cards: [
                        { icon: "fa-file-contract", title: "Escolha incorreta do CNAE", desc: "Uma atividade cadastrada de forma inadequada pode afetar impostos, licenças e o funcionamento da empresa." },
                        { icon: "fa-calculator", title: "Regime tributário inadequado", desc: "Começar no enquadramento errado pode aumentar os impostos e gerar dificuldades logo nos primeiros meses." },
                        { icon: "fa-folder-open", title: "Burocracia e documentação", desc: "Contratos, registros, inscrições e licenças precisam ser organizados para que a empresa comece de forma regular." }
                    ]
                },
                reforma: {
                    title: "Sua empresa está preparada para os desafios da Reforma Tributária?",
                    cards: [
                        { icon: "fa-arrows-rotate", title: "Impactos do IBS e da CBS", desc: "As novas regras podem alterar a forma de apuração dos tributos e a rotina fiscal da empresa." },
                        { icon: "fa-tag", title: "Formação de preços desatualizada", desc: "Mudanças na tributação podem exigir revisão de preços, margens e condições comerciais." },
                        { icon: "fa-display", title: "Sistemas e processos despreparados", desc: "Softwares, contratos e procedimentos fiscais precisarão acompanhar a transição para o novo modelo tributário." }
                    ]
                }
            };

            const espData = {
                prestadores: {
                    menuTitle: "Prestadores de Serviços", eyebrow: "PRESTADORES DE SERVIÇOS", heroFile: "esp-contabilidade-prestadores-servicos-barbosa.jpeg",
                    h1: "Contabilidade para Prestadores de Serviços",
                    intro: "Acompanhamento contábil e tributário para empresas prestadoras de serviços, considerando faturamento, emissão de notas, folha de pagamento, Fator R e enquadramento no Simples Nacional.",
                    topics: ["Análise do Fator R", "Enquadramento tributário", "Emissão de notas fiscais", "Controle das obrigações", "Planejamento tributário", "Acompanhamento do faturamento"],
                    challenges: ["Dificuldade em identificar o enquadramento tributário mais vantajoso para a atividade.", "Risco de perder benefícios do Simples Nacional por não acompanhar o Fator R.", "Rotina de emissão de notas e obrigações acessórias que consome tempo do dia a dia."],
                    faqs: [
                        { q: "O que é o Fator R?", a: "O Fator R compara a folha de pagamento dos últimos 12 meses com o faturamento do mesmo período. Dependendo do resultado, algumas atividades podem ser tributadas em anexos diferentes do Simples Nacional." },
                        { q: "Todo prestador de serviços pode utilizar o Simples Nacional?", a: "Não necessariamente. A possibilidade depende da atividade, do faturamento, da estrutura societária e de outras condições previstas na legislação." },
                        { q: "Como escolher o melhor regime tributário?", a: "É necessário analisar faturamento, despesas, folha de pagamento, margem e atividade exercida antes de comparar Simples Nacional, Lucro Presumido e Lucro Real." },
                        { q: "O prestador de serviços precisa emitir nota fiscal?", a: "Na maioria das operações empresariais, sim. As regras podem variar conforme o município, o tipo de serviço e o cliente atendido." },
                        { q: "Posso reduzir impostos aumentando a folha?", a: "A folha pode influenciar o Fator R, mas qualquer alteração deve considerar custos trabalhistas, pró-labore e a realidade da empresa." }
                    ],
                    waMsg: "Olá, gostaria de receber informações sobre Contabilidade para Prestadores de Serviços."
                },
                comercio: {
                    menuTitle: "Comércio", eyebrow: "COMÉRCIO", heroFile: "esp-contabilidade-comercio-barbosa.jpeg",
                    h1: "Contabilidade para Comércio",
                    intro: "Soluções para empresas comerciais que precisam organizar vendas, compras, estoque, impostos e movimentações financeiras com mais segurança.",
                    topics: ["Tributação sobre vendas", "Controle e planejamento de estoque", "Emissão de notas fiscais", "Apuração de impostos", "Acompanhamento de margens", "Planejamento financeiro"],
                    challenges: ["Estoque parado ou desorganizado afetando o resultado do negócio.", "Dificuldade em compreender a carga tributária sobre as vendas.", "Falta de visão clara sobre margens e fluxo financeiro."],
                    faqs: [
                        { q: "Qual é o melhor regime tributário para um comércio?", a: "A escolha depende do faturamento, margem, tipo de produto, fornecedores, clientes e possibilidade de aproveitamento de créditos." },
                        { q: "Por que o controle de estoque influencia a contabilidade?", a: "O estoque interfere no custo das mercadorias, no resultado do negócio, no fluxo de caixa e na apuração das informações fiscais." },
                        { q: "Como saber se os produtos estão gerando lucro?", a: "É necessário acompanhar custo de aquisição, despesas, impostos, estoque e preço de venda para calcular a margem real." },
                        { q: "O comércio precisa emitir nota fiscal em todas as vendas?", a: "As regras dependem do tipo de operação, cliente e legislação aplicável, mas a emissão correta é essencial para manter a regularidade fiscal." },
                        { q: "É possível revisar a tributação dos produtos vendidos?", a: "Sim. A classificação fiscal e as regras aplicadas aos produtos podem ser analisadas para identificar possíveis inconsistências." }
                    ],
                    waMsg: "Olá, gostaria de receber informações sobre Contabilidade para Comércio."
                },
                industria: {
                    menuTitle: "Indústria", eyebrow: "INDÚSTRIA", heroFile: "esp-contabilidade-industria-barbosa.jpeg",
                    h1: "Contabilidade para Indústria",
                    intro: "Acompanhamento contábil e fiscal voltado às particularidades das operações industriais, incluindo custos, produção, estoque, tributação e obrigações específicas.",
                    topics: ["Custos de produção", "Controle de estoque", "Processos fiscais avançados", "Créditos tributários", "Formação de preços", "Planejamento tributário"],
                    challenges: ["Dificuldade em apurar corretamente os custos de produção.", "Processos fiscais complexos com risco de inconsistências.", "Falta de clareza na formação de preços diante da carga tributária."],
                    faqs: [
                        { q: "Como calcular corretamente o custo de produção?", a: "É necessário considerar matérias-primas, mão de obra, energia, depreciação, perdas e outros custos envolvidos no processo produtivo." },
                        { q: "A indústria pode aproveitar créditos tributários?", a: "Dependendo do regime e das operações realizadas, podem existir créditos relacionados a insumos, aquisições e outros itens." },
                        { q: "Por que o estoque industrial precisa de controle detalhado?", a: "O estoque envolve matérias-primas, produtos em processo e produtos acabados, impactando custos, resultados e obrigações fiscais." },
                        { q: "Como a contabilidade ajuda na formação do preço?", a: "A contabilidade fornece informações sobre custos, impostos, despesas e margens necessárias para definir preços sustentáveis." },
                        { q: "A indústria pode revisar processos fiscais antigos?", a: "Sim. Documentos, apurações e procedimentos podem ser analisados para identificar falhas e oportunidades de melhoria." }
                    ],
                    waMsg: "Olá, gostaria de receber informações sobre Contabilidade para Indústria."
                },
                liberais: {
                    menuTitle: "Profissionais Liberais", eyebrow: "PROFISSIONAIS LIBERAIS", heroFile: "esp-contabilidade-profissionais-liberais-barbosa.jpeg",
                    h1: "Contabilidade para Profissionais Liberais",
                    intro: "Orientação contábil e tributária para profissionais que desejam organizar sua atividade, escolher o enquadramento adequado e reduzir riscos fiscais.",
                    topics: ["Abertura de CNPJ", "Comparação entre pessoa física e jurídica", "Pró-labore", "Emissão de notas", "Imposto de Renda", "Planejamento tributário"],
                    challenges: ["Dúvida entre continuar como pessoa física ou abrir um CNPJ.", "Falta de clareza sobre a definição do pró-labore.", "Insegurança na hora de declarar o Imposto de Renda."],
                    faqs: [
                        { q: "É melhor atuar como pessoa física ou jurídica?", a: "A resposta depende do faturamento, despesas, atividade, clientes e forma de tributação. É necessário fazer uma comparação individual." },
                        { q: "Profissional liberal precisa ter CNPJ?", a: "Nem sempre, mas a abertura de empresa pode oferecer vantagens de organização, emissão de notas e planejamento tributário." },
                        { q: "Como funciona o pró-labore?", a: "O pró-labore é a remuneração paga ao sócio pelo trabalho realizado na empresa e possui incidências específicas." },
                        { q: "Posso misturar a conta pessoal com a conta da empresa?", a: "Não é recomendado. A separação facilita o controle financeiro, a contabilidade e a comprovação das movimentações." },
                        { q: "Profissional liberal precisa declarar Imposto de Renda?", a: "Sim, quando estiver enquadrado nas condições de obrigatoriedade previstas pela Receita Federal." }
                    ],
                    waMsg: "Olá, gostaria de receber informações sobre Contabilidade para Profissionais Liberais."
                },
                clinicas: {
                    menuTitle: "Clínicas e Consultórios", eyebrow: "CLÍNICAS E CONSULTÓRIOS", heroFile: "esp-contabilidade-clinicas-consultorios-barbosa.jpeg",
                    h1: "Contabilidade para Clínicas e Consultórios",
                    intro: "Suporte contábil para clínicas, consultórios e profissionais da saúde, considerando folha de pagamento, faturamento, despesas e tributação das atividades.",
                    topics: ["Análise do Fator R", "Tributação de serviços de saúde", "Folha de pagamento", "Emissão de notas", "Controle financeiro", "Organização societária"],
                    challenges: ["Dúvidas sobre a tributação específica de serviços de saúde.", "Gestão da folha de pagamento de equipes multidisciplinares.", "Falta de organização societária entre sócios da clínica."],
                    faqs: [
                        { q: "Clínicas podem utilizar o Simples Nacional?", a: "Dependendo da atividade, faturamento e estrutura, a clínica pode se enquadrar no Simples Nacional." },
                        { q: "Como o Fator R afeta clínicas e consultórios?", a: "A relação entre folha e faturamento pode alterar o anexo utilizado para a tributação de determinadas atividades." },
                        { q: "Como organizar os recebimentos de convênios?", a: "É importante conciliar valores faturados, glosas, prazos e repasses para compreender o resultado financeiro." },
                        { q: "Médicos e profissionais podem ser sócios da mesma clínica?", a: "A estrutura societária deve ser definida conforme as atividades, responsabilidades e regras aplicáveis a cada profissão." },
                        { q: "Como controlar despesas e faturamento da clínica?", a: "O acompanhamento deve separar receitas, custos profissionais, folha, materiais, despesas fixas e tributos." }
                    ],
                    waMsg: "Olá, gostaria de receber informações sobre Contabilidade para Clínicas e Consultórios."
                },
                ecommerce: {
                    menuTitle: "E-commerce", eyebrow: "E-COMMERCE", heroFile: "esp-contabilidade-ecommerce-barbosa.jpeg",
                    h1: "Contabilidade para E-commerce",
                    intro: "Suporte contábil para lojas virtuais, com acompanhamento de notas fiscais, vendas interestaduais, tributos, estoque, marketplaces e fluxo financeiro.",
                    topics: ["Emissão de notas em escala", "Vendas interestaduais", "Tributação por estado", "Integração com sistemas", "Controle de estoque", "Conciliação de marketplaces"],
                    challenges: ["Complexidade da tributação em vendas para diferentes estados.", "Conciliação de repasses de múltiplos marketplaces.", "Volume alto de notas fiscais exigindo processos automatizados."],
                    faqs: [
                        { q: "Como funciona a tributação de vendas para outros estados?", a: "As regras variam conforme produto, estado de origem, destino, cliente e regime tributário da empresa." },
                        { q: "Como contabilizar vendas realizadas por marketplaces?", a: "É necessário conciliar vendas, comissões, taxas, cancelamentos e valores efetivamente repassados pela plataforma." },
                        { q: "O e-commerce precisa emitir nota fiscal em todas as vendas?", a: "A emissão deve seguir as regras fiscais aplicáveis à operação, ao produto e ao consumidor atendido." },
                        { q: "Como integrar o sistema da loja com a contabilidade?", a: "A integração pode ocorrer por meio de ERP, plataformas de emissão fiscal, arquivos e sistemas compatíveis." },
                        { q: "Como controlar estoque vendido em diferentes plataformas?", a: "O ideal é centralizar as movimentações para evitar vendas sem estoque, duplicidades e diferenças nos registros." }
                    ],
                    waMsg: "Olá, gostaria de receber informações sobre Contabilidade para E-commerce."
                },
                abertura: {
                    menuTitle: "Abertura de Empresa Facilitada", eyebrow: "ABERTURA DE EMPRESA", heroFile: "esp-abertura-de-empresa-facilitada-barbosa.jpeg",
                    h1: "Abertura de Empresa Facilitada",
                    intro: "Acompanhamento completo para abrir o CNPJ, escolher as atividades, definir o enquadramento tributário e iniciar a empresa com mais organização e segurança.",
                    topics: ["Definição do CNAE", "Escolha do tipo jurídico", "Regime tributário", "Contrato social", "Inscrições e licenças", "Acompanhamento após a abertura"],
                    challenges: ["Dúvida sobre qual CNAE e tipo jurídico escolher.", "Insegurança na definição do regime tributário inicial.", "Falta de orientação sobre inscrições e licenças necessárias."],
                    faqs: [
                        { q: "Quanto tempo demora para abrir uma empresa?", a: "O prazo varia conforme município, atividade, documentação, licenças e órgãos responsáveis pelos registros." },
                        { q: "Como escolher o CNAE correto?", a: "O CNAE deve representar as atividades que a empresa realmente exercerá e pode influenciar impostos e licenças." },
                        { q: "Qual regime tributário escolher na abertura?", a: "A escolha deve considerar faturamento estimado, atividade, folha, despesas e características do negócio." },
                        { q: "Toda empresa precisa de alvará?", a: "A necessidade depende da atividade, endereço e regras do município onde a empresa será instalada." },
                        { q: "O que acontece depois que o CNPJ é aberto?", a: "A empresa precisa organizar emissão de notas, impostos, obrigações fiscais, conta bancária e controles contábeis." }
                    ],
                    waMsg: "Olá, gostaria de receber informações sobre Abertura de Empresa Facilitada."
                },
                reforma: {
                    menuTitle: "Consultoria para Reforma Tributária", eyebrow: "REFORMA TRIBUTÁRIA", heroFile: "esp-consultoria-reforma-tributaria-barbosa.jpeg",
                    h1: "Consultoria para Reforma Tributária",
                    intro: "Orientação estratégica para preparar empresas para as mudanças trazidas pelo IBS, CBS e pelas novas regras de tributação.",
                    topics: ["Análise dos impactos", "IBS e CBS", "Formação de preços", "Revisão de contratos", "Adaptação dos sistemas", "Planejamento da transição"],
                    challenges: ["Falta de clareza sobre os impactos do IBS e da CBS no negócio.", "Necessidade de revisar contratos e formação de preços.", "Sistemas que ainda não estão preparados para as novas regras."],
                    faqs: [
                        { q: "O que são IBS e CBS?", a: "São tributos previstos no novo modelo de tributação do consumo, com substituição gradual de impostos atuais." },
                        { q: "Quando as mudanças começam a valer?", a: "A Reforma Tributária possui um período de transição, com mudanças que serão implementadas gradualmente." },
                        { q: "A Reforma Tributária afetará os preços?", a: "Pode afetar custos, créditos, margens e formação de preços, dependendo do segmento e da operação." },
                        { q: "Os sistemas da empresa precisarão ser alterados?", a: "É possível que sistemas fiscais, emissores de notas e ERPs precisem de atualizações para atender às novas regras." },
                        { q: "A empresa precisa se preparar agora?", a: "A preparação antecipada facilita a análise de impactos, revisão de processos e adaptação ao período de transição." }
                    ],
                    waMsg: "Olá, gostaria de receber informações sobre a Reforma Tributária."
                }
            };

            // ---------- Seção "Soluções especializadas" (4 cards grandes por especialidade) ----------
            const espSolutionsIntro = "Conheça as soluções contábeis e tributárias que podem trazer mais organização, segurança e clareza para a gestão do seu negócio.";

            const espSolutions = {
                prestadores: {
                    title: "Como a Neponuceno Contabilidade Estratégica pode ajudar sua empresa de serviços?", faqLabel: "Prestadores de Serviços",
                    cards: [
                        { icon: "fa-percent", title: "Análise do Fator R", desc: "Avaliamos a relação entre folha de pagamento e faturamento para identificar o enquadramento tributário mais adequado para a atividade." },
                        { icon: "fa-chart-line", title: "Planejamento tributário", desc: "Analisamos o regime tributário, o faturamento e a estrutura da empresa para reduzir riscos e evitar pagamentos desnecessários." },
                        { icon: "fa-file-invoice", title: "Organização fiscal e emissão de notas", desc: "Acompanhamos notas fiscais, impostos e obrigações para manter a empresa organizada e em conformidade." },
                        { icon: "fa-users", title: "Departamento pessoal e folha de pagamento", desc: "Cuidamos de admissões, folha, férias, rescisões e eSocial, contribuindo para uma gestão trabalhista mais segura." }
                    ]
                },
                comercio: {
                    title: "Como a Neponuceno Contabilidade Estratégica pode ajudar seu comércio?", faqLabel: "Comércio",
                    cards: [
                        { icon: "fa-boxes-stacked", title: "Planejamento e controle de estoque", desc: "Ajudamos a organizar compras, entradas, saídas e mercadorias paradas para melhorar o controle financeiro do comércio." },
                        { icon: "fa-receipt", title: "Apuração de impostos sobre vendas", desc: "Acompanhamos a tributação das operações comerciais para reduzir falhas e manter o negócio em conformidade." },
                        { icon: "fa-chart-pie", title: "Contabilidade gerencial", desc: "Transformamos informações de vendas, custos e despesas em relatórios que ajudam na tomada de decisões." },
                        { icon: "fa-scale-balanced", title: "Planejamento tributário para o comércio", desc: "Analisamos o regime tributário e a operação da empresa para identificar o enquadramento mais adequado." }
                    ]
                },
                industria: {
                    title: "Como a Neponuceno Contabilidade Estratégica pode ajudar sua indústria?", faqLabel: "Indústria",
                    cards: [
                        { icon: "fa-industry", title: "Análise dos custos de produção", desc: "Organizamos informações sobre matéria-prima, mão de obra e despesas para apoiar a formação de preços e margens." },
                        { icon: "fa-warehouse", title: "Controle de estoque industrial", desc: "Acompanhamos a movimentação de insumos, produtos em processo e mercadorias acabadas para melhorar a gestão." },
                        { icon: "fa-file-invoice", title: "Processos fiscais avançados", desc: "Analisamos documentos, apurações e obrigações específicas das operações industriais." },
                        { icon: "fa-coins", title: "Créditos e planejamento tributário", desc: "Verificamos oportunidades tributárias e possíveis créditos relacionados às operações da indústria." }
                    ]
                },
                liberais: {
                    title: "Como a Neponuceno Contabilidade Estratégica pode ajudar sua atividade profissional?", faqLabel: "Profissionais Liberais",
                    cards: [
                        { icon: "fa-scale-unbalanced", title: "Análise entre pessoa física e jurídica", desc: "Comparamos as formas de atuação para identificar a estrutura mais adequada para o profissional." },
                        { icon: "fa-file-contract", title: "Abertura e regularização de CNPJ", desc: "Acompanhamos a abertura da empresa, escolha do CNAE, enquadramento e documentação necessária." },
                        { icon: "fa-chart-line", title: "Planejamento tributário", desc: "Analisamos faturamento, despesas e atividade para orientar sobre a forma de tributação mais adequada." },
                        { icon: "fa-file-lines", title: "Imposto de Renda e pró-labore", desc: "Organizamos rendimentos, retiradas, distribuição de lucros e informações necessárias para as declarações." }
                    ]
                },
                clinicas: {
                    title: "Como a Neponuceno Contabilidade Estratégica pode ajudar sua clínica ou consultório?", faqLabel: "Clínicas e Consultórios",
                    cards: [
                        { icon: "fa-percent", title: "Análise do Fator R", desc: "Avaliamos faturamento e folha de pagamento para verificar o possível impacto do Fator R na tributação." },
                        { icon: "fa-users", title: "Folha de pagamento e eSocial", desc: "Cuidamos das rotinas trabalhistas de funcionários, profissionais e colaboradores da clínica." },
                        { icon: "fa-wallet", title: "Controle financeiro e faturamento", desc: "Organizamos recebimentos, despesas e movimentações para proporcionar uma visão mais clara dos resultados." },
                        { icon: "fa-heart-pulse", title: "Planejamento tributário para a saúde", desc: "Analisamos a estrutura da clínica e suas atividades para buscar o enquadramento tributário mais adequado." }
                    ]
                },
                ecommerce: {
                    title: "Como a Neponuceno Contabilidade Estratégica pode ajudar seu e-commerce?", faqLabel: "E-commerce",
                    cards: [
                        { icon: "fa-route", title: "Tributação de vendas interestaduais", desc: "Acompanhamos as regras fiscais aplicáveis às vendas realizadas para diferentes estados." },
                        { icon: "fa-store", title: "Conciliação de marketplaces", desc: "Organizamos repasses, taxas, comissões, cancelamentos e valores recebidos pelas plataformas." },
                        { icon: "fa-plug", title: "Integração de notas fiscais e sistemas", desc: "Ajudamos a organizar a emissão de notas e a integração entre plataformas, sistemas de gestão e contabilidade." },
                        { icon: "fa-boxes-stacked", title: "Controle de estoque e fluxo financeiro", desc: "Acompanhamos a movimentação de produtos e recursos para reduzir diferenças entre vendas, estoque e recebimentos." }
                    ]
                },
                abertura: {
                    title: "Como a Neponuceno Contabilidade Estratégica pode ajudar na abertura da sua empresa?", faqLabel: "Abertura de Empresa",
                    cards: [
                        { icon: "fa-file-contract", title: "Definição do CNAE", desc: "Orientamos sobre as atividades que devem ser cadastradas conforme a operação que será realizada pela empresa." },
                        { icon: "fa-calculator", title: "Escolha do regime tributário", desc: "Analisamos o modelo do negócio para orientar sobre o enquadramento tributário inicial." },
                        { icon: "fa-file-signature", title: "Contrato social e registros", desc: "Acompanhamos a preparação dos documentos e registros necessários para a constituição da empresa." },
                        { icon: "fa-life-ring", title: "Acompanhamento após a abertura", desc: "Oferecemos suporte nas primeiras obrigações fiscais, emissão de notas e organização da rotina empresarial." }
                    ]
                },
                reforma: {
                    title: "Como a Neponuceno Contabilidade Estratégica pode preparar sua empresa para a Reforma Tributária?", faqLabel: "Reforma Tributária",
                    cards: [
                        { icon: "fa-arrows-rotate", title: "Análise dos impactos do IBS e da CBS", desc: "Avaliamos como os novos tributos podem afetar as operações, custos e resultados da empresa." },
                        { icon: "fa-tag", title: "Revisão da formação de preços", desc: "Analisamos os possíveis impactos tributários sobre preços, margens e condições comerciais." },
                        { icon: "fa-gears", title: "Adequação de sistemas e processos", desc: "Orientamos sobre alterações que poderão ser necessárias nos sistemas, documentos e rotinas fiscais." },
                        { icon: "fa-route", title: "Planejamento da transição", desc: "Ajudamos a empresa a se preparar gradualmente para as novas regras e períodos de transição." }
                    ]
                }
            };

            // ---------- Seção "Como funciona na prática" (carrossel de etapas) ----------
            const espHowItWorks = {
                prestadores: {
                    title: "Como funciona a contabilidade para prestadores de serviços?",
                    steps: [
                        { icon: "fa-magnifying-glass", title: "Diagnóstico inicial da atividade", desc: "Analisamos a atividade exercida, o faturamento mensal e a estrutura da empresa prestadora de serviços para entender o cenário tributário atual e identificar oportunidades de organização fiscal." },
                        { icon: "fa-percent", title: "Análise do Fator R", desc: "Avaliamos a relação entre a folha de pagamento e o faturamento dos últimos 12 meses para verificar se a empresa pode ser enquadrada no Anexo III do Simples Nacional, com alíquotas mais vantajosas." },
                        { icon: "fa-chart-line", title: "Planejamento tributário", desc: "Comparamos Simples Nacional, Lucro Presumido e Lucro Real com base em dados reais da empresa, buscando o regime tributário mais adequado para reduzir a carga de impostos dentro da legislação." },
                        { icon: "fa-file-invoice", title: "Organização fiscal e emissão de notas", desc: "Estruturamos a rotina de emissão de notas fiscais de serviço, a apuração de tributos e o cumprimento das obrigações acessórias exigidas pela prefeitura e pela Receita Federal." },
                        { icon: "fa-users", title: "Departamento pessoal e folha de pagamento", desc: "Cuidamos de admissões, cálculo de folha, férias, rescisões e do envio correto das informações ao eSocial, reduzindo riscos trabalhistas para a empresa prestadora de serviços." },
                        { icon: "fa-chart-pie", title: "Relatórios gerenciais", desc: "Entregamos relatórios financeiros periódicos que ajudam o empresário a entender o resultado real do negócio e a tomar decisões com mais segurança." },
                        { icon: "fa-arrows-rotate", title: "Revisão periódica do enquadramento", desc: "Reavaliamos mensalmente o Fator R e, anualmente, o regime tributário escolhido, ajustando o planejamento sempre que o faturamento ou a estrutura da empresa mudam." },
                        { icon: "fa-headset", title: "Acompanhamento contínuo", desc: "Seguimos ao lado da empresa prestadora de serviços, respondendo dúvidas fiscais e tributárias e ajustando o planejamento conforme o negócio evolui." }
                    ]
                },
                comercio: {
                    title: "Como funciona a rotina contábil de um comércio?",
                    steps: [
                        { icon: "fa-magnifying-glass", title: "Diagnóstico do negócio", desc: "Entendemos o modelo de vendas, o mix de produtos, os fornecedores e o regime tributário atual do comércio para identificar oportunidades de organização fiscal e financeira." },
                        { icon: "fa-boxes-stacked", title: "Organização do estoque", desc: "Estruturamos o controle de compras, entradas, saídas e produtos parados, ajudando a reduzir capital imobilizado e melhorar o giro de estoque do comércio." },
                        { icon: "fa-receipt", title: "Apuração tributária sobre vendas", desc: "Acompanhamos a tributação incidente sobre vendas e compras, incluindo ICMS e demais tributos aplicáveis, para reduzir riscos fiscais e evitar pagamentos além do necessário." },
                        { icon: "fa-scale-balanced", title: "Planejamento tributário para o comércio", desc: "Comparamos os regimes tributários disponíveis considerando o faturamento e a margem do comércio, buscando o enquadramento mais vantajoso dentro da legislação." },
                        { icon: "fa-chart-pie", title: "Relatórios gerenciais", desc: "Transformamos informações de vendas, custos e despesas em relatórios que mostram a margem real de cada produto e apoiam decisões de compra e precificação." },
                        { icon: "fa-wallet", title: "Controle de fluxo de caixa", desc: "Organizamos contas a pagar e receber, ajudando o comércio a manter previsibilidade financeira mesmo diante da sazonalidade das vendas." },
                        { icon: "fa-chart-line", title: "Revisão periódica de resultados", desc: "Acompanhamos mensalmente indicadores como margem, giro de estoque e carga tributária, identificando ajustes necessários na gestão do comércio." },
                        { icon: "fa-headset", title: "Acompanhamento contínuo", desc: "Seguimos próximos ao comércio, apoiando decisões sobre expansão, novos fornecedores e crescimento do negócio ao longo do tempo." }
                    ]
                },
                industria: {
                    title: "Como funciona o acompanhamento contábil de uma indústria?",
                    steps: [
                        { icon: "fa-magnifying-glass", title: "Diagnóstico da operação industrial", desc: "Analisamos o processo produtivo, os insumos utilizados e a estrutura fiscal da indústria para identificar oportunidades de organização e economia tributária." },
                        { icon: "fa-industry", title: "Análise de custos de produção", desc: "Organizamos matérias-primas, mão de obra e despesas industriais para apoiar uma formação de preços mais precisa e sustentável." },
                        { icon: "fa-warehouse", title: "Controle de estoque industrial", desc: "Acompanhamos insumos, produtos em processo e produtos acabados, reduzindo divergências entre estoque físico e registros contábeis." },
                        { icon: "fa-file-invoice", title: "Processos fiscais avançados", desc: "Revisamos documentos, apurações e obrigações específicas das operações industriais, incluindo o correto destaque de tributos nas notas fiscais." },
                        { icon: "fa-file-invoice-dollar", title: "Créditos tributários", desc: "Analisamos oportunidades de créditos de PIS, Cofins e outros tributos relacionados a insumos e operações industriais, dentro das regras da legislação." },
                        { icon: "fa-chart-line", title: "Planejamento tributário", desc: "Avaliamos o regime tributário mais adequado ao porte e à margem da indústria, considerando o volume de operações e possíveis créditos." },
                        { icon: "fa-chart-pie", title: "Relatórios gerenciais de custos", desc: "Entregamos relatórios que detalham custos por produto ou linha de produção, apoiando decisões sobre preços e investimentos." },
                        { icon: "fa-headset", title: "Acompanhamento contínuo", desc: "Seguimos acompanhando a operação industrial para apoiar decisões mais seguras sobre produção, investimentos e crescimento." }
                    ]
                },
                liberais: {
                    title: "Como funciona a contabilidade para profissionais liberais?",
                    steps: [
                        { icon: "fa-magnifying-glass", title: "Diagnóstico da atividade profissional", desc: "Entendemos a atividade exercida, o faturamento e os objetivos do profissional liberal para indicar o melhor caminho de organização tributária." },
                        { icon: "fa-scale-unbalanced", title: "Comparação entre pessoa física e jurídica", desc: "Analisamos as vantagens e desvantagens de atuar como pessoa física ou abrir um CNPJ, considerando a carga tributária de cada opção." },
                        { icon: "fa-file-contract", title: "Abertura ou regularização de CNPJ", desc: "Acompanhamos a abertura da empresa, a escolha do CNAE e a documentação necessária para profissionais que optam por atuar como pessoa jurídica." },
                        { icon: "fa-chart-line", title: "Planejamento tributário", desc: "Orientamos sobre a forma de tributação mais adequada para a atividade, considerando Simples Nacional, Fator R e demais regras aplicáveis." },
                        { icon: "fa-hand-holding-dollar", title: "Definição do pró-labore", desc: "Ajudamos a estruturar o valor do pró-labore de forma equilibrada, considerando encargos previdenciários e o planejamento tributário do profissional." },
                        { icon: "fa-file-lines", title: "Organização do Imposto de Renda", desc: "Preparamos a declaração de Imposto de Renda Pessoa Física com análise de rendimentos, despesas e investimentos do profissional." },
                        { icon: "fa-wallet", title: "Separação financeira", desc: "Orientamos sobre a organização entre finanças pessoais e profissionais, facilitando o controle e a comprovação de rendimentos." },
                        { icon: "fa-headset", title: "Acompanhamento contínuo", desc: "Seguimos ao lado do profissional liberal, apoiando o crescimento da atividade e ajustando o planejamento conforme a evolução do faturamento." }
                    ]
                },
                clinicas: {
                    title: "Como funciona a contabilidade para clínicas e consultórios?",
                    steps: [
                        { icon: "fa-magnifying-glass", title: "Diagnóstico da clínica ou consultório", desc: "Entendemos a estrutura, os profissionais envolvidos e o faturamento da clínica para identificar o enquadramento tributário mais adequado." },
                        { icon: "fa-percent", title: "Fator R e enquadramento", desc: "Avaliamos o impacto do Fator R na tributação das atividades de saúde, buscando o anexo mais vantajoso dentro do Simples Nacional." },
                        { icon: "fa-users", title: "Folha de pagamento e eSocial", desc: "Organizamos as rotinas trabalhistas de profissionais e colaboradores, incluindo o envio correto das informações ao eSocial." },
                        { icon: "fa-wallet", title: "Controle financeiro e faturamento", desc: "Estruturamos o acompanhamento de recebimentos de pacientes, convênios e despesas operacionais da clínica." },
                        { icon: "fa-chart-line", title: "Planejamento tributário para a saúde", desc: "Analisamos a estrutura da clínica e suas atividades para buscar o enquadramento tributário mais adequado às particularidades do setor de saúde." },
                        { icon: "fa-sitemap", title: "Organização societária", desc: "Auxiliamos na estruturação societária entre médicos e profissionais, definindo regras claras de participação e responsabilidade." },
                        { icon: "fa-chart-pie", title: "Relatórios gerenciais", desc: "Entregamos relatórios que separam receitas por convênio, despesas fixas e resultado real da clínica ou consultório." },
                        { icon: "fa-headset", title: "Acompanhamento contínuo", desc: "Mantemos o suporte contábil próximo à rotina da clínica, acompanhando mudanças na legislação da área de saúde." }
                    ]
                },
                ecommerce: {
                    title: "Como funciona a contabilidade do seu e-commerce?",
                    steps: [
                        { icon: "fa-magnifying-glass", title: "Diagnóstico da loja virtual", desc: "Entendemos os canais de venda, plataformas utilizadas e o cenário fiscal do e-commerce para identificar pontos de atenção." },
                        { icon: "fa-route", title: "Tributação interestadual e Difal", desc: "Analisamos as regras aplicáveis às vendas para diferentes estados, incluindo o cálculo do Difal em operações com consumidor final." },
                        { icon: "fa-store", title: "Conciliação de marketplaces", desc: "Organizamos taxas, comissões, repasses e cancelamentos das plataformas, conferindo se os valores recebidos batem com o esperado." },
                        { icon: "fa-file-invoice", title: "Emissão de notas em escala", desc: "Ajudamos a estruturar a emissão de notas fiscais em alto volume, reduzindo erros e atrasos em períodos de grande demanda." },
                        { icon: "fa-plug", title: "Integração de sistemas", desc: "Ajudamos a integrar a emissão de notas com o sistema de vendas da loja, melhorando a qualidade das informações fiscais." },
                        { icon: "fa-boxes-stacked", title: "Controle de estoque multicanal", desc: "Acompanhamos o estoque entre diferentes canais de venda, evitando divergências entre plataformas e vendas sem disponibilidade." },
                        { icon: "fa-chart-line", title: "Planejamento tributário para e-commerce", desc: "Comparamos regimes tributários considerando o volume de vendas e os estados para onde a loja vende." },
                        { icon: "fa-headset", title: "Acompanhamento contínuo", desc: "Seguimos acompanhando a operação para reduzir riscos fiscais e apoiar o crescimento do e-commerce." }
                    ]
                },
                abertura: {
                    title: "Como funciona a abertura de empresa com a Neponuceno Contabilidade Estratégica?",
                    steps: [
                        { icon: "fa-file-contract", title: "Definição do CNAE", desc: "Orientamos sobre as atividades que devem ser cadastradas na empresa, já que o CNAE influencia diretamente a tributação e as licenças exigidas." },
                        { icon: "fa-calculator", title: "Escolha do regime tributário", desc: "Analisamos o modelo do negócio e o faturamento estimado para indicar o enquadramento tributário inicial mais adequado." },
                        { icon: "fa-file-signature", title: "Contrato social e registros", desc: "Preparamos os documentos necessários para a constituição da empresa, incluindo o contrato social e o registro nos órgãos competentes." },
                        { icon: "fa-stamp", title: "Inscrições e licenças", desc: "Acompanhamos as inscrições municipais, estaduais e as licenças exigidas conforme a atividade e o endereço da empresa." },
                        { icon: "fa-scale-balanced", title: "Definição do capital social", desc: "Orientamos sobre um valor de capital social compatível com a realidade do negócio, evitando valores irrealistas no contrato social." },
                        { icon: "fa-building-columns", title: "Abertura de conta bancária empresarial", desc: "Ajudamos o empresário a organizar a separação entre finanças pessoais e da empresa desde o primeiro dia de operação." },
                        { icon: "fa-file-invoice", title: "Primeiras obrigações fiscais", desc: "Orientamos sobre as primeiras obrigações fiscais e contábeis que a empresa precisa cumprir logo após a abertura do CNPJ." },
                        { icon: "fa-life-ring", title: "Acompanhamento após a abertura", desc: "Damos suporte contínuo nos primeiros meses de operação, ajudando a empresa a se organizar contabilmente desde o início." }
                    ]
                },
                reforma: {
                    title: "Como funciona a preparação para a Reforma Tributária?",
                    steps: [
                        { icon: "fa-magnifying-glass", title: "Diagnóstico dos impactos", desc: "Avaliamos como a empresa pode ser afetada pelas novas regras tributárias trazidas pela Reforma Tributária, considerando seu segmento e operação." },
                        { icon: "fa-arrows-rotate", title: "Análise do IBS e da CBS", desc: "Detalhamos os efeitos dos novos tributos sobre a operação da empresa, incluindo créditos, débitos e mudanças na apuração." },
                        { icon: "fa-tag", title: "Revisão de preços e margens", desc: "Analisamos o impacto sobre preços, margens e condições comerciais diante das novas regras de tributação sobre o consumo." },
                        { icon: "fa-gears", title: "Adequação de sistemas fiscais", desc: "Orientamos sobre ajustes necessários em sistemas, emissores de notas e rotinas fiscais para atender aos novos campos de IBS e CBS." },
                        { icon: "fa-file-contract", title: "Revisão de contratos", desc: "Avaliamos cláusulas contratuais relacionadas a tributos, preços e reajustes que podem precisar de ajuste durante a transição." },
                        { icon: "fa-wallet", title: "Planejamento do fluxo de caixa", desc: "Analisamos possíveis impactos do split payment e das novas regras de recolhimento sobre o fluxo de caixa da empresa." },
                        { icon: "fa-people-group", title: "Treinamento das equipes", desc: "Orientamos as equipes fiscal, financeira e comercial sobre as novas rotinas exigidas pela Reforma Tributária." },
                        { icon: "fa-route", title: "Acompanhamento contínuo da transição", desc: "Seguimos acompanhando as atualizações da Reforma Tributária, ajustando o planejamento da empresa conforme novas regras forem publicadas." }
                    ]
                }
            };

            window.espSeo = {};
            Object.keys(espData).forEach(function(slug) {
                window.espSeo['esp-' + slug] = {
                    title: espData[slug].h1 + " | Neponuceno Contabilidade Estratégica",
                    desc: espData[slug].intro.substring(0, 155)
                };
            });

            function espRenderCardGrid(items, iconMap) {
                return '<div class="esp-card-grid">' + items.map(function(t, i) {
                    return '<div class="esp-card"><div class="esp-card-icon"><i class="fa-solid ' + (iconMap[i] || "fa-check") + '"></i></div><p class="esp-card-title">' + t + '</p></div>';
                }).join('') + '</div>';
            }

            const espHelpIcons = ["fa-lightbulb", "fa-scale-balanced", "fa-file-invoice", "fa-list-check", "fa-chart-line", "fa-magnifying-glass-chart"];
            const espSolutionIcons = ["fa-list-check", "fa-chart-line", "fa-magnifying-glass-chart", "fa-gears", "fa-shield-halved", "fa-handshake"];

            function hfpInit(carousel) {
                if (!carousel) return;
                const track = carousel.querySelector('.hfp-track');
                const cards = Array.prototype.slice.call(track.children);
                const dotsWrap = carousel.querySelector('.hfp-dots');
                const prevBtn = carousel.querySelector('.hfp-arrow-prev');
                const nextBtn = carousel.querySelector('.hfp-arrow-next');
                let index = 0;

                function visiblePerView() {
                    const w = window.innerWidth;
                    if (w <= 767) return 1;
                    if (w <= 1099) return 2;
                    return 3;
                }

                function maxIndex() {
                    return Math.max(0, cards.length - visiblePerView());
                }

                function stepPx() {
                    if (!cards[1]) return 0;
                    return cards[1].offsetLeft - cards[0].offsetLeft;
                }

                function buildDots() {
                    dotsWrap.innerHTML = '';
                    const count = maxIndex() + 1;
                    for (let i = 0; i < count; i++) {
                        const dot = document.createElement('span');
                        dot.addEventListener('click', function() { index = i; render(); });
                        dotsWrap.appendChild(dot);
                    }
                }

                function render() {
                    index = Math.max(0, Math.min(index, maxIndex()));
                    track.style.transform = 'translateX(-' + (index * stepPx()) + 'px)';
                    const atStart = index <= 0;
                    const atEnd = index >= maxIndex();
                    prevBtn.style.opacity = atStart ? '0.35' : '1';
                    prevBtn.style.pointerEvents = atStart ? 'none' : 'auto';
                    nextBtn.style.opacity = atEnd ? '0.35' : '1';
                    nextBtn.style.pointerEvents = atEnd ? 'none' : 'auto';
                    const dots = dotsWrap.querySelectorAll('span');
                    dots.forEach(function(d, i) { d.classList.toggle('hfp-dot-active', i === index); });
                }

                prevBtn.addEventListener('click', function() { if (index > 0) { index--; render(); } });
                nextBtn.addEventListener('click', function() { if (index < maxIndex()) { index++; render(); } });

                // Arrastar com o dedo (touch) ou o mouse
                const viewport = carousel.querySelector('.hfp-viewport') || track.parentElement;
                if (viewport) {
                    viewport.style.touchAction = 'pan-y';
                    let dragStartX = null, dragging = false;
                    viewport.addEventListener('pointerdown', function(e) { dragging = true; dragStartX = e.clientX; });
                    viewport.addEventListener('pointerup', function(e) {
                        if (!dragging || dragStartX === null) { dragging = false; return; }
                        const delta = e.clientX - dragStartX;
                        if (Math.abs(delta) > 35) {
                            if (delta < 0 && index < maxIndex()) { index++; render(); }
                            else if (delta > 0 && index > 0) { index--; render(); }
                        }
                        dragging = false; dragStartX = null;
                    });
                    viewport.addEventListener('pointercancel', function() { dragging = false; dragStartX = null; });
                    viewport.addEventListener('pointerleave', function() { dragging = false; dragStartX = null; });
                }

                window.addEventListener('resize', function() { buildDots(); render(); });

                buildDots();
                render();
            }

            function espRenderPage(slug) {
                const d = espData[slug];
                const section = document.getElementById('esp-' + slug);
                if (!d || !section) return;

                const waHelp = encodeURIComponent(d.waMsg);
                const topicsHelp = d.topics.slice(0, 3);
                const topicsSolutions = d.topics.slice(3, 6);
                const ch = espChallengeCards[slug];

                section.innerHTML = '' +
                    '<div class="specialty-hero">' +
                        '<div class="specialty-hero__media">' +
                            (d.heroFile
                                ? '<img src="' + (STOCK_IMG_MAP[d.heroFile] || ('imagem 2/' + d.heroFile)) + '" alt="' + d.h1 + ' | Neponuceno Contabilidade Estratégica" loading="lazy" onerror="this.parentElement.innerHTML=\'<i class=\\\'fa-solid fa-image\\\' style=\\\'font-size:40px;\\\'></i><span style=\\\'font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;\\\'>Imagem principal da especialidade</span>\'">'
                                : '<i class="fa-solid fa-image" style="font-size:40px;"></i><span style="font-size:11px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase;">Imagem principal da especialidade</span>') +
                        '</div>' +
                        '<div class="specialty-hero__content">' +
                            '<span class="specialty-hero__eyebrow">' + d.eyebrow + '</span>' +
                            '<h1 class="specialty-hero__title">' + d.h1 + '</h1>' +
                            '<div class="specialty-hero__breadcrumb">' +
                                '<a href="#" onclick="navigateTo(\'inicio\')"><i class="fa-solid fa-house"></i> Início</a>' +
                                '<span class="sep">|</span>' +
                                '<span>Especialidades</span>' +
                                '<span class="sep">|</span>' +
                                '<span>' + d.menuTitle + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    (ch ? (
                    '<div class="specialty-challenges"><div class="specialty-challenges__inner">' +
                        '<span class="specialty-challenges__eyebrow">Desafios do segmento</span>' +
                        '<h2 class="specialty-challenges__title">' + ch.title + '</h2>' +
                        '<p class="specialty-challenges__desc">' + espChallengesDesc + '</p>' +
                        '<div class="specialty-challenges__grid">' +
                            ch.cards.map(function(c) {
                                return '<div class="specialty-challenge-card">' +
                                    '<div class="specialty-challenge-card__icon"><i class="fa-solid ' + c.icon + '"></i></div>' +
                                    '<h3 class="specialty-challenge-card__title">' + c.title + '</h3>' +
                                    '<p class="specialty-challenge-card__desc">' + c.desc + '</p>' +
                                '</div>';
                            }).join('') +
                        '</div>' +
                    '</div></div>'
                    ) : '') +

                    (espSolutions[slug] ? (
                    '<div class="esp-solutions"><div class="esp-solutions-inner">' +
                        '<h2 class="esp-solutions-title">' + espSolutions[slug].title + '</h2>' +
                        '<p class="esp-solutions-intro">' + espSolutionsIntro + '</p>' +
                        '<div class="esp-solutions-grid">' +
                            espSolutions[slug].cards.map(function(c) {
                                const cardWaText = encodeURIComponent('Olá, gostaria de entender mais sobre ' + c.title + '.');
                                return '<div class="esp-solution-card">' +
                                    '<div class="esp-solution-card__icon"><i class="fa-solid ' + c.icon + '"></i></div>' +
                                    '<h3 class="esp-solution-card__title">' + c.title + '</h3>' +
                                    '<p class="esp-solution-card__desc">' + c.desc + '</p>' +
                                    '<a class="esp-solution-card__link" href="https://wa.me/5511947781014?text=' + cardWaText + '" target="_blank">Entenda esta solução <i class="fa-solid fa-arrow-right"></i></a>' +
                                '</div>';
                            }).join('') +
                        '</div>' +
                    '</div></div>'
                    ) : '') +

                    (espHowItWorks[slug] ? (
                    '<div class="hfp-section">' +
                        '<div class="hfp-grid-bg fx-parallax" data-speed="0.15"></div>' +
                        '<div class="hfp-navy-host fx-navy-host"></div>' +
                        '<div class="hfp-header">' +
                            '<span class="hfp-eyebrow">Como funciona na prática</span>' +
                            '<h2 class="hfp-title">' + espHowItWorks[slug].title + '</h2>' +
                            '<p class="hfp-desc">Conheça as principais etapas do acompanhamento e entenda como as informações da sua empresa são organizadas para apoiar uma gestão mais segura.</p>' +
                        '</div>' +
                        '<div class="hfp-carousel">' +
                            '<button type="button" class="hfp-arrow hfp-arrow-prev" aria-label="Etapa anterior"><i class="fa-solid fa-chevron-left"></i></button>' +
                            '<button type="button" class="hfp-arrow hfp-arrow-next" aria-label="Próxima etapa"><i class="fa-solid fa-chevron-right"></i></button>' +
                            '<div class="hfp-viewport">' +
                                '<div class="hfp-track">' +
                                    espHowItWorks[slug].steps.map(function(s) {
                                        return '<div class="hfp-card">' +
                                            '<div class="hfp-card__icon"><i class="fa-solid ' + s.icon + '"></i></div>' +
                                            '<h3 class="hfp-card__title">' + s.title + '</h3>' +
                                            '<p class="hfp-card__desc">' + s.desc + '</p>' +
                                        '</div>';
                                    }).join('') +
                                '</div>' +
                            '</div>' +
                            '<div class="hfp-dots"></div>' +
                        '</div>' +
                    '</div>'
                    ) : '') +

                    '<div class="esp-intro-wrap"><div class="esp-intro-inner">' +
                        '<p class="esp-intro-text">' + d.intro + '</p>' +
                        '<a class="esp-intro-btn" href="https://wa.me/5511947781014?text=' + waHelp + '" target="_blank"><i class="fa-brands fa-whatsapp"></i> Fale com um especialista</a>' +
                        '<div class="esp-links-inline">' +
                            '<a href="#" onclick="navigateTo(\'servicos\')">Ver todos os serviços</a>' +
                            '<a href="#" onclick="navigateTo(\'quem-somos\')">Conheça a Neponuceno Contabilidade Estratégica</a>' +
                        '</div>' +
                    '</div></div>' +

                    '<div class="esp-section"><div class="esp-section-inner">' +
                        '<h2 class="esp-section-title">Perguntas frequentes sobre ' + (espSolutions[slug] ? espSolutions[slug].faqLabel : d.menuTitle) + '</h2>' +
                        d.faqs.map(function(f) {
                            return '<details class="esp-faq-item" name="faq-' + slug + '"><summary>' + f.q + '</summary><p>' + f.a + '</p></details>';
                        }).join('') +
                    '</div></div>';

                const hfpCarousel = section.querySelector('.hfp-carousel');
                if (hfpCarousel) hfpInit(hfpCarousel);
            }

            Object.keys(espData).forEach(espRenderPage);

            // ---------- Grade da página geral de Especialidades ----------
        