// Banco de Questões Completo - Simulado TJPB 2026/2027 - FGV Conhecimento
// Cargo: Analista Judiciário - Área TI - Especialidade: Banco de Dados (Cargo 7)
// Total: 60 Questões (10 Português, 10 RLM, 40 Específicas) + Estudo de Caso Discursivo

const QUESTIONS_DATA = [
  // ==========================================
  // MÓDULO I - LÍNGUA PORTUGUESA (10 QUESTÕES)
  // ==========================================
  {
    id: 1,
    subject: "Língua Portuguesa",
    topic: "Interpretação e Ambiguidade",
    enunciado: "Considere a seguinte frase retirada de um relatório institucional de tecnologia: 'O comitê de segurança comunicou aos diretores que o sistema havia sido invadido por precaução.'\n\nAssinale a opção que indica a correta análise sintático-semântica da oração sublinhada ('por precaução') segundo o rigor cobrado pela FGV:",
    options: [
      "A) A locução adverbial 'por precaução' modifica obrigatoriamente a oração principal ('comunicou'), inexistindo duplicidade de sentido na frase.",
      "B) Há ambiguidade estrutural, pois a locução pode ser interpretada tanto como o motivo da comunicação quanto como o motivo pelo qual a invasão foi realizada.",
      "C) O termo 'por precaução' exerce a função sintática de complemento nominal de 'sistema', qualificando o tipo de proteção adotada.",
      "D) Trata-se de uma oração subordinada adverbial causal reduzida de gerúndio que introduz a consequência imediata do ataque cibernético.",
      "E) A ambiguidade seria desfeita caso a locução fosse substituída por 'em virtude da precaução', mantendo-se a mesma posição na frase."
    ],
    correct: 1, // B
    explanation: "Na FGV, as questões de ambiguidade sintática decorrente da posição de adjuntos adverbiais ao final de frases compostas são recorrentes. O adjunto adverbial 'por precaução' gera duplo vínculo: pode ligar-se ao verbo 'comunicou' (o comitê agiu por precaução ao comunicar) ou ao verbo da oração subordinada 'havia sido invadido' (o sistema foi invadido por precaução, como num teste ou simulação autorizada).",
    pegadinha: "Pegadinha clássica da FGV: a banca adora cobrar adjuntos adverbiais deslocados ou em posições limítrofes que causam duplo sentido estrutural (anfibologia).",
    dica: "Dica da FGV: Observe o posicionamento da locução adverbial ao final da frase. A qual verbo ela pode estar sintaticamente conectada?"
  },
  {
    id: 2,
    subject: "Língua Portuguesa",
    topic: "Conectores e Relações Discursivas",
    enunciado: "'Embora a migração para o ambiente de nuvem reduza os custos de infraestrutura física, a gestão de dados sensíveis exige governança ainda mais rigorosa.'\n\nSem alterar substancialmente o sentido original e mantendo a correção gramatical, o conector 'Embora' pode ser substituído por:",
    options: [
      "A) Contanto que.",
      "B) Porquanto.",
      "C) Não obstante.",
      "D) Desde que.",
      "E) Visto que."
    ],
    correct: 2, // C
    explanation: "'Embora' é conjunção subordinativa concessiva (ideia de oposição/contraste que não impede o fato principal). 'Não obstante' possui valor concessivo idêntico e rege modo subjuntivo ('Não obstante a migração reduza...'). 'Contanto que' e 'desde que' são condicionais; 'porquanto' e 'visto que' são causais/explicativas.",
    pegadinha: "Cuidado com o 'Porquanto': a FGV sabe que muitos candidatos confundem 'Porquanto' (causal) com 'Conquanto' (concessiva). Como 'Conquanto' é concessiva, a banca coloca 'Porquanto' como distrator para pegar quem apenas memorizou por aproximação sonora!",
    dica: "Dica da FGV: O conector original expressa concessão (fato oposto que não invalida o principal). Cuidado com o falso cognato sonoro porquanto (que é causal)!"
  },
  {
    id: 3,
    subject: "Língua Portuguesa",
    topic: "Reescrita e Paralelismo Sintático",
    enunciado: "Assinale a frase em que o paralelismo sintático foi RIGOROSAMENTE preservado:",
    options: [
      "A) O analista de banco de dados é responsável pela criação dos esquemas, monitorar as transações ativas e pelo particionamento das tabelas.",
      "B) Para otimizar o banco de dados, o tribunal recomendou a revisão dos índices, a redução das redundâncias e que se eliminassem os gargalos de E/S.",
      "C) O projeto contemplava tanto a modernização da infraestrutura de armazenamento quanto a capacitação dos servidores em novas tecnologias.",
      "D) O plano de continuidade visa não apenas assegurar a integridade dos dados, mas também a recuperação das réplicas em caso de desastre.",
      "E) As metas do setor incluem aumentar a disponibilidade dos serviços, a diminuição do tempo de resposta e garantindo a confidencialidade."
    ],
    correct: 2, // C
    explanation: "Na opção C, a estrutura correlativa 'tanto... quanto' coordena dois sintagmas de idêntica estrutura nominal: substantivo + complemento nominal com preposição 'de' ('a modernização da infraestrutura' e 'a capacitação dos servidores'). Nas outras opções ocorrem quebras com alternância de substantivo com verbo no infinitivo ou oração com 'que'.",
    pegadinha: "A FGV adora estruturas correlativas ('não só... mas também', 'tanto... quanto') e quebra propositalmente o paralelismo misturando substantivos abstratos com orações subordinadas substantivas desenvolvidas.",
    dica: "Dica da FGV: Estruturas correlativas como tanto... quanto exigem que os dois termos coordenados tenham exatamente a mesma classe e formato gramatical."
  },
  {
    id: 4,
    subject: "Língua Portuguesa",
    topic: "Crase e Regência",
    enunciado: "Avalie o uso do sinal indicativo de crase nas assertivas abaixo:\n\nI. Os dados dos jurisdicionados foram submetidos à análise do comitê de integridade.\nII. O administrador de banco de dados atendeu às solicitações do juiz titular prontamente.\nIII. O novo sistema de tramitação processual começou à operar às 14h de segunda-feira.\nIV. As diretrizes do CNJ visam à proteção e à garantia da soberania digital.\n\nEstá correto o que se afirma em:",
    options: [
      "A) I e II, apenas.",
      "B) I, II e IV, apenas.",
      "C) II, III e IV, apenas.",
      "D) I e III, apenas.",
      "E) I, II, III e IV."
    ],
    correct: 1, // B
    explanation: "I: submeter exige preposição 'a' + artigo definido 'a' (à análise) - Correto.\nII: atender no sentido de prestar atenção/responder admite regência transitiva indireta ('atendeu às solicitações') - Correto.\nIII: Não se usa crase antes de verbo ('à operar' é erro grosseiro) - Incorreto.\nIV: visar no sentido de ter por objetivo é transitivo indireto com preposição 'a' + 'a proteção' e 'a garantia' (à proteção e à garantia) - Correto.",
    pegadinha: "Cuidado: 'à operar' é clássica infração que invalida o item III. Na IV, o verbo 'visar' como almejar rege 'a', gerando crase antes de palavras femininas determinadas por artigo.",
    dica: "Dica da FGV: Verifique se existe crase antes de verbo e avalie a regência do verbo visar quando assume o sentido de almejar/ter por meta."
  },
  {
    id: 5,
    subject: "Língua Portuguesa",
    topic: "Concordância Verbal e Nominal",
    enunciado: "Assinale a frase redigida em total conformidade com a norma-padrão de concordância:",
    options: [
      "A) Devem haver muitos registros corrompidos na partição primária que precisam de intervenção do DBA.",
      "B) Fez-se necessárias diversas alterações no esquema conceitual para viabilizar a normalização até a FNBC.",
      "C) Mais de um índice composto e mais de uma view materializada foram criados para contornar a lentidão do relatório.",
      "D) Tratam-se de transações concorrentes que geraram impasses de bloqueio e cancelamento mútuo.",
      "E) Não se constatou, durante as auditorias nos logs de auditoria do tribunal, nenhuns desvios nos privilégios de acesso."
    ],
    correct: 2, // C
    explanation: "Em expressões com 'mais de um... e mais de um...', o verbo vai para o plural ('foram criados').\nErros das demais: A) 'Deve haver' (haver existencial é impessoal e transmite impessoalidade ao auxiliar); B) 'Fizeram-se necessárias' (voz passiva sintética, concorda com o sujeito paciente plural 'diversas alterações'); D) 'Trata-se de' (índice de indeterminação do sujeito, verbo fica invariável no singular); E) 'nenhum desvio' (nenhum com substantivo contável não assume plural dessa forma).",
    pegadinha: "O verbo 'tratar-se de' com partícula 'se' NUNCA vai para o plural na norma culta ('trata-se de problemas'). A FGV repete isso à exaustão!",
    dica: "Dica da FGV: O verbo haver no sentido de existir é impessoal (não tem plural). Além disso, avalie o comportamento da partícula se com verbos transitivos indiretos."
  },
  {
    id: 6,
    subject: "Língua Portuguesa",
    topic: "Pontuação e Efeitos de Sentido",
    enunciado: "'Os servidores do tribunal que concluíram o curso de capacitação em SGBDs modernos receberão novas atribuições no núcleo de inovação.'\n\nCaso o termo 'que concluíram o curso de capacitação em SGBDs modernos' fosse delimitado por vírgulas, a alteração semântica produzida seria:",
    options: [
      "A) Nenhuma, pois a pontuação de orações relativas tem efeito meramente estilístico.",
      "B) A indicação de que apenas uma parcela restrita dos servidores do tribunal receberá novas atribuições.",
      "C) A generalização de que todos os servidores do tribunal concluíram a referida capacitação e receberão as novas atribuições.",
      "D) A transformação do sentido de causalidade em sentido de conformidade estrita.",
      "E) A caracterização do termo como um aposto especificativo, mantendo o valor restritivo original."
    ],
    correct: 2, // C
    explanation: "Sem vírgula, temos uma oração subordinada adjetiva restritiva (somente aqueles servidores que concluíram o curso receberão novas atribuições). Com vírgulas, ela se torna adjetiva explicativa, passando a atribuir a característica à totalidade dos servidores do tribunal (generalização).",
    pegadinha: "A FGV adora trocar restrição por explicação e perguntar a implicação lógica (se todos ou apenas uma subclasse estão abrangidos).",
    dica: "Dica da FGV: Na língua portuguesa, a presença ou ausência de vírgulas em orações relativas com que define se você está restringindo a um subgrupo ou generalizando para todos."
  },
  {
    id: 7,
    subject: "Língua Portuguesa",
    topic: "Significação das Palavras / Semântica",
    enunciado: "Em 'A atuação diligente do administrador de dados logrou êxito na restauração do cluster sem que houvesse perda transitória de consistência', a palavra 'diligente' é sinônima contextual de:",
    options: [
      "A) Negligente.",
      "B) Prestativa e zelosa.",
      "C) Vagarosa e meticulosa.",
      "D) Omissa.",
      "E) Empírica."
    ],
    correct: 1, // B
    explanation: "'Diligente' significa aquele que atua com zelo, prontidão, dedicação, cuidado e rapidez. O oposto seria negligente ou indolente.",
    pegadinha: "Não confundir diligente (zeloso, rápido) com indolente (preguiçoso) nem com deliberado.",
    dica: "Dica da FGV: O adjetivo diligente refere-se a uma postura cuidadosa, ativa, zelosa e atenta no cumprimento de tarefas."
  },
  {
    id: 8,
    subject: "Língua Portuguesa",
    topic: "Tipologia e Gêneros Textuais",
    enunciado: "Analise o fragmento a seguir:\n'O PostgreSQL é um sistema gerenciador de banco de dados relacional de código aberto que se destaca pela sua conformidade com os padrões SQL e pela sua arquitetura extensível. Ele suporta transações com nível de isolamento Serializable e recursos avançados de particionamento declarativo.'\n\nO fragmento classifica-se predominantemente como texto:",
    options: [
      "A) Injuntivo, pois instrui o leitor sobre como executar comandos de particionamento.",
      "B) Narrativo, pois relata uma sucessão cronológica de eventos com clímax e desfecho.",
      "C) Expositivo-informativo, pois tem por finalidade apresentar conceitos técnicos e características de um objeto sem caráter persuasivo explícito.",
      "D) Argumentativo, pois se funda na defesa de uma tese controversa por meio de contra-argumentos dialéticos.",
      "E) Preditivo, pois antecipa o comportamento futuro dos administradores de TI do tribunal."
    ],
    correct: 2, // C
    explanation: "O texto é eminentemente técnico e informativo: expõe características, propriedades e fatos sobre o software sem tentar convencer o leitor mediante tese ou persuasão (não é argumentativo) e sem dar ordens/procedimentos (não é injuntivo).",
    pegadinha: "Candidatos tendem a confundir texto dissertativo expositivo com argumentativo. Na FGV, se não há tomada de posição ou tese a ser defendida, o texto é prioritariamente expositivo.",
    dica: "Dica da FGV: Avalie a intenção comunicativa do autor: há defesa de opinião polêmica (argumentação), instrução com ordens (injunção) ou apresentação técnica de fatos/recursos (exposição)?"
  },
  {
    id: 9,
    subject: "Língua Portuguesa",
    topic: "Colocação Pronominal",
    enunciado: "Assinale a opção em que a colocação pronominal respeita as regras da norma culta formal:",
    options: [
      "A) Me informaram que a réplica síncrona do banco de dados principal falhou durante a madrugada.",
      "B) Jamais recuperar-se-ia a integridade referencial sem o auxílio do arquivo de log de transações.",
      "C) Em se tratando de bancos de dados distribuídos, a latência de rede é fator primordial.",
      "D) O diretor havia comunicado-nos a decisão sobre a adoção do Postgres antes da reunião.",
      "E) Se iniciou o processo de backup físico às vinte horas pontualmente."
    ],
    correct: 2, // C
    explanation: "A locução 'Em se tratando de...' é a clássica construção com próclise obrigatória em virtude da preposição 'em' acompanhada de verbo no gerúndio. Erros das outras:\nA e E: Iniciar frase com pronome oblíquo átono ('Me informaram...', 'Se iniciou...');\nB: Palavra atrativa ('Jamais') exige próclise ('Jamais se recuperaria...'), e mesóclise é impossível com palavra negativa;\nD: Com particípio não se usa ênclise ('havia-nos comunicado' ou 'havia nos comunicado').",
    pegadinha: "Palavra de sentido negativo ('Jamais', 'Não', 'Nunca') atrai obrigatoriamente o pronome oblíquo, anulando qualquer possibilidade de mesóclise ou ênclise!",
    dica: "Dica da FGV: Palavras de sentido negativo (não, nunca, jamais) exercem atração absoluta sobre pronomes oblíquos átonos, impedindo ênclise e mesóclise."
  },
  {
    id: 10,
    subject: "Língua Portuguesa",
    topic: "Redação Oficial e Concisão",
    enunciado: "Com base nas recomendações do Manual de Redação da Presidência da República, assinale a alternativa que apresenta a redação mais adequada para uma comunicação oficial formal entre setores de um Tribunal de Justiça:",
    options: [
      "A) 'Venho por meio deste mui respeitosamente solicitar a vossa excelência para que veja a questão do banco de dados que caiu ontem.'",
      "B) 'Cumpre-nos informar a esse ilustre departamento que não mediremos esforços com o fito de viabilizar a alocação de recursos.'",
      "C) 'Solicito a disponibilização dos relatórios de auditoria do banco de dados referentes ao mês de janeiro de 2026, para instrução do processo nº 0012/2026.'",
      "D) 'Com os meus mais sinceros votos de estima e consideração, comunico que o servidor Apache foi reiniciado conforme determinação superior.'",
      "E) 'Dirijo-me a vós outros no afã de esclarecer as prementes dúvidas atinentes ao particionamento de tabelas no âmbito jurisdicional.'"
    ],
    correct: 2, // C
    explanation: "A redação oficial preza pela clareza, concisão, impessoalidade, precisão e formalidade, evitando arcaísmos, floreios, pedantismo e clichês burocráticos como 'venho por meio deste' ou 'no afã de'. A opção C é direta, clara e impessoal.",
    pegadinha: "A FGV elimina expressões arcaicas, prolixas e adulações que muitos candidatos ainda julgam pertencer ao padrão formal culto da administração.",
    dica: "Dica da FGV: O Manual de Redação da Presidência preza pela clareza, concisão e objetividade direta, eliminando floreios arcaicos e adulações burocráticas."
  },

  // ====================================================
  // MÓDULO I - RACIOCÍNIO LÓGICO E MATEMÁTICO (10 QUESTÕES)
  // ====================================================
  {
    id: 11,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Equivalência e Negação Lógica",
    enunciado: "Considere a proposição composta: 'Se o log de transações estiver corrompido, então o banco de dados não iniciará e o failover será acionado.'\n\nA negação lógica dessa proposição é expressa por:",
    options: [
      "A) Se o log de transações não estiver corrompido, então o banco de dados iniciará ou o failover não será acionado.",
      "B) O log de transações está corrompido e, o banco de dados iniciará ou o failover não será acionado.",
      "C) O log de transações não está corrompido e o banco de dados não iniciará e o failover será acionado.",
      "D) Se o banco de dados iniciar e o failover não for acionado, então o log de transações não está corrompido.",
      "E) O log de transações está corrompido ou o banco de dados iniciará e o failover não será acionado."
    ],
    correct: 1, // B
    explanation: "A proposição é da forma P -> (Q e R), onde P = 'o log está corrompido', Q = 'o banco não iniciará', R = 'o failover será acionado'.\nA negação de uma condicional P -> S é: P e ~S (regra do 'MANÉ': Mantém a primeira E Nega a segunda).\nAqui, ~S = ~(Q e R) = ~Q ou ~R (Lei de De Morgan).\nLogo: 'O log de transações está corrompido E (o banco de dados iniciará OU o failover não será acionado)'.",
    pegadinha: "A pegadinha clássica em que a maioria cai é tentar negar condicional transformando em outra condicional com 'Se não...'. A negação da condicional 'Se P então Q' NUNCA tem 'Se'!",
    dica: "Dica da FGV: Regra do MANÉ para negação de Se P, então Q: Mantém a primeira parte E nega a segunda parte. Negação de condicional nunca começa com Se!"
  },
  {
    id: 12,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Quantificadores Lógicos e Negação",
    enunciado: "Um auditor afirmou: 'Todo servidor do TJPB que atua na área de Banco de Dados possui certificação técnica oficial ou pós-graduação.'\n\nPara contradizer logicamente a afirmação do auditor, basta comprovar que:",
    options: [
      "A) Nenhum servidor do TJPB que atua na área de Banco de Dados possui certificação técnica oficial nem pós-graduação.",
      "B) Existe pelo menos um servidor do TJPB que não atua na área de Banco de Dados e não possui certificação nem pós-graduação.",
      "C) Existe pelo menos um servidor do TJPB que atua na área de Banco de Dados e não possui certificação técnica oficial nem pós-graduação.",
      "D) Todos os servidores do TJPB que atuam em Banco de Dados possuem apenas experiência prática comprovada.",
      "E) Pelo menos um servidor do TJPB possui pós-graduação, mas não atua na área de Banco de Dados."
    ],
    correct: 2, // C
    explanation: "A negação de uma proposição universal afirmativa ('Todo A é B') é a proposição existencial com a negação do predicado: 'Existe algum A que não é B'.\nComo B é 'possui certificação OU pós-graduação', a negação de B (De Morgan) é 'NÃO possui certificação E NÃO possui pós-graduação'.\nLogo: 'Existe pelo menos um servidor que atua em BD e não possui certificação técnica oficial nem pós-graduação'.",
    pegadinha: "Pegadinha clássica da FGV: sugerir que a negação de 'Todo' é 'Nenhum'. A negação de 'Todo' é 'Algum... não', nunca 'Nenhum'!",
    dica: "Dica da FGV: Para refutar a afirmação de que TODO elemento possui uma propriedade, basta encontrar pelo menos UM elemento que não a possua."
  },
  {
    id: 13,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Teoria dos Conjuntos e Diagramas de Venn",
    enunciado: "Em uma equipe de 60 especialistas de TI do Tribunal de Justiça da Paraíba:\n- 35 dominam consultas e tuning em PostgreSQL;\n- 28 dominam modelagem dimensional e arquiteturas OLAP;\n- 20 dominam manipulação NoSQL com MongoDB;\n- 12 dominam PostgreSQL e modelagem dimensional;\n- 10 dominam PostgreSQL e MongoDB;\n- 8 dominam modelagem dimensional e MongoDB;\n- 4 dominam as três tecnologias simultaneamente.\n\nQuantos especialistas dessa equipe NÃO dominam nenhuma dessas três tecnologias?",
    options: [
      "A) 3",
      "B) 5",
      "C) 7",
      "D) 9",
      "E) 11"
    ],
    correct: 0, // A
    explanation: "Aplicando o Princípio da Inclusão-Exclusão para 3 conjuntos:\n|A U B U C| = |A| + |B| + |C| - (|A n B| + |A n C| + |B n C|) + |A n B n C|\n|A U B U C| = 35 + 28 + 20 - (12 + 10 + 8) + 4\n|A U B U C| = 83 - 30 + 4 = 57 especialistas dominam pelo menos uma.\nComo o total de especialistas é 60:\nTotal que não domina nenhuma = 60 - 57 = 3 especialistas.",
    pegadinha: "Esquecer de somar a interseção tripla ao final da fórmula de 3 conjuntos ou fazer contas duplas sem subtrair as interseções de dois a dois.",
    dica: "Dica da FGV: Use o Princípio da Inclusão-Exclusão para 3 conjuntos: Total = A + B + C - (duplas) + (tripla). Depois subtraia do total geral de 60 especialistas."
  },
  {
    id: 14,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Probabilidade Condicional",
    enunciado: "Em um data center judiciário, dois servidores de réplica (Servidor X e Servidor Y) realizam espelhamento contínuo. Sabe-se que a probabilidade do Servidor X falhar em um dia de alta carga é de 10% (0,10), e a probabilidade do Servidor Y falhar é de 15% (0,15). A probabilidade de ambos falharem no mesmo dia é de 3% (0,03).\n\nSe em um determinado dia de plantão constatou-se que o Servidor Y falhou, a probabilidade de que o Servidor X também tenha falhado nesse mesmo dia é de:",
    options: [
      "A) 10%",
      "B) 15%",
      "C) 20%",
      "D) 25%",
      "E) 30%"
    ],
    correct: 2, // C
    explanation: "Trata-se de probabilidade condicional: P(X | Y) = P(X n Y) / P(Y).\nP(X n Y) = 0,03\nP(Y) = 0,15\nP(X | Y) = 0,03 / 0,15 = 3 / 15 = 1 / 5 = 0,20 = 20%.",
    pegadinha: "Candidatos desatentos dividem P(X n Y) por P(X) em vez de P(Y), obtendo 0,03/0,10 = 30%, que é a probabilidade de Y falhar dado que X falhou!",
    dica: "Dica da FGV: Na probabilidade condicional P(X | Y), o espaço amostral agora é apenas o evento Y (que já ocorreu). Divida a probabilidade da interseção por P(Y)."
  },
  {
    id: 15,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Análise Combinatória",
    enunciado: "Para auditar a segurança do cluster de banco de dados do PJe, deve ser formada uma comissão de 4 membros escolhidos entre 5 Administradores de Banco de Dados (DBAs) e 4 Auditores de Segurança da Informação. Exige-se que na comissão haja pelo menos 2 DBAs.\n\nO número total de comissões distintas que podem ser formadas atendendo a essa exigência é:",
    options: [
      "A) 105",
      "B) 120",
      "C) 126",
      "D) 130",
      "E) 140"
    ],
    correct: 0, // A
    explanation: "Total de profissionais: 5 DBAs e 4 Auditores. Comissão de 4 membros com pelo menos 2 DBAs:\nCasos possíveis:\n1) Exatamente 2 DBAs e 2 Auditores: C(5,2) * C(4,2) = 10 * 6 = 60\n2) Exatamente 3 DBAs e 1 Auditor: C(5,3) * C(4,1) = 10 * 4 = 40\n3) Exatamente 4 DBAs e 0 Auditores: C(5,4) * C(4,0) = 5 * 1 = 5\nTotal = 60 + 40 + 5 = 105 comissões.",
    pegadinha: "Alternativa C (126) é a combinação total C(9,4) sem restrição. Quem não subtrai as comissões inválidas (com 0 ou 1 DBA: C(5,0)*C(4,4)=1; C(5,1)*C(4,3)=5*4=20 -> total inválido 21; 126 - 21 = 105) erra.",
    dica: "Dica da FGV: Pelo menos 2 DBAs significa que a comissão pode ter 2, 3 ou 4 DBAs. Calcule as três combinações possíveis e some-as."
  },
  {
    id: 16,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Lógica de Argumentação e Dedução",
    enunciado: "Considere verdadeiras as três seguintes premissas:\n1. 'Se o índice B-Tree não foi utilizado pelo planejador de consultas, então ocorreu uma varredura sequencial (Seq Scan).'\n2. 'Se ocorreu uma varredura sequencial, o tempo de execução da query excedeu o limite de tempo (timeout) estipulado.'\n3. 'O tempo de execução da query não excedeu o limite de tempo estipulado.'\n\nConclui-se logicamente que:",
    options: [
      "A) O índice B-Tree não foi utilizado e ocorreu uma varredura sequencial.",
      "B) O índice B-Tree foi utilizado pelo planejador de consultas.",
      "C) Ocorreu uma varredura sequencial, mas o índice foi criado corretamente.",
      "D) O banco de dados precisou de reindexação forçada e rollback.",
      "E) A consulta retornou registros nulos devido à concorrência."
    ],
    correct: 1, // B
    explanation: "Seja ~I = índice não utilizado, S = ocorreu varredura sequencial, T = excedeu timeout.\nPremissa 1: ~I -> S\nPremissa 2: S -> T\nPremissa 3: ~T (não excedeu timeout)\nPor Modus Tollens na Premissa 2: de S -> T e ~T, decorre ~S (não ocorreu varredura sequencial).\nPor Modus Tollens na Premissa 1: de ~I -> S e ~S, decorre ~(~I) = I (o índice B-Tree FOI utilizado pelo planejador de consultas).",
    pegadinha: "A FGV adora encadear duas condicionais com contrapositivas / modus tollens para checar se o candidato domina inferência dedutiva válida.",
    dica: "Dica da FGV: Aplique a regra do Modus Tollens sucessivo nas duas condicionais partindo do fato de que o tempo de execução NÃO excedeu o timeout."
  },
  {
    id: 17,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Problemas Aritméticos e Sequências",
    enunciado: "Uma rotina automatizada de compactação de logs do tribunal inicia no dia 1 consumindo 4 MB de espaço. A cada dia subsequente, o volume de log armazenado acumulado cresce em progressão aritmética. Sabe-se que no 15º dia o volume compactado foi de 46 MB.\n\nQual o volume total acumulado compactado por essa rotina ao longo desses primeiros 15 dias?",
    options: [
      "A) 345 MB",
      "B) 375 MB",
      "C) 390 MB",
      "D) 415 MB",
      "E) 450 MB"
    ],
    correct: 1, // B
    explanation: "Em uma PA:\na1 = 4\na15 = 46\nn = 15\nA soma dos n primeiros termos de uma PA é dada por: S_n = (a1 + an) * n / 2\nS_15 = (4 + 46) * 15 / 2 = 50 * 15 / 2 = 25 * 15 = 375 MB.",
    pegadinha: "Tentar calcular a razão r = (46-4)/14 = 42/14 = 3 e somar um a um perdendo tempo precioso de prova.",
    dica: "Dica da FGV: Em uma Progressão Aritmética, a soma dos termos é obtida multiplicando a média do primeiro e do último termo pela quantidade total de termos."
  },
  {
    id: 18,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Verdades e Mentiras",
    enunciado: "Quatro analistas de dados (Alana, Bruno, Carlos e Daniel) foram interrogados sobre uma alteração indevida na tabela de precatórios. Sabe-se que APENAS UM deles realizou a alteração e que APENAS UM deles disse a verdade em seus depoimentos:\n\n- Alana disse: 'Bruno realizou a alteração.'\n- Bruno disse: 'Daniel realizou a alteração.'\n- Carlos disse: 'Eu não realizei a alteração.'\n- Daniel disse: 'Bruno mentiu quando disse que fui eu.'\n\nQuem realizou a alteração indevida e quem disse a verdade, respectivamente?",
    options: [
      "A) Daniel realizou a alteração; Bruno disse a verdade.",
      "B) Carlos realizou a alteração; Daniel disse a verdade.",
      "C) Bruno realizou a alteração; Alana disse a verdade.",
      "D) Carlos realizou a alteração; Carlos disse a verdade.",
      "E) Alana realizou a alteração; Daniel disse a verdade."
    ],
    correct: 1, // B
    explanation: "Observe os depoimentos de Bruno e Daniel: Bruno diz 'Daniel fez', Daniel diz 'Bruno mentiu'. São afirmações contraditórias! Portanto, exatamente uma entre Bruno e Daniel é verdadeira, e a outra é falsa.\nComo o enunciado diz que APENAS UM analista disse a verdade, a verdade ESTÁ entre Bruno e Daniel. Consequentemente, as declarações de Alana e Carlos são OBRIGATORIAMENTE FALSAS!\nSe o que Carlos disse ('Eu não realizei a alteração') é FALSO, então Carlos REALIZOU a alteração!\nCom Carlos culpado:\n- Alana ('Bruno fez'): Falsa (Ok)\n- Bruno ('Daniel fez'): Falsa (Ok)\n- Daniel ('Bruno mentiu'): Verdadeira (pois Bruno de fato mentiu) (Ok)\nLogo: Carlos realizou a alteração e Daniel disse a verdade.",
    pegadinha: "Em problemas de 'verdades e mentiras', o segredo FGV é procurar o par de afirmações contraditórias, pois uma delas é a única verdade, forçando todas as outras a serem mentiras imediatas!",
    dica: "Dica da FGV: Observe o posicionamento da locução adverbial ao final da frase. A qual verbo ela pode estar sintaticamente conectada?"
  },
  {
    id: 19,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Princípio da Casa dos Pombos",
    enunciado: "Em uma sala do setor judiciário há vários servidores com datas de aniversário distribuídas ao longo do ano civil de 365 dias. Qual o número mínimo de servidores que devem estar presentes na sala para garantir com absoluta certeza que pelo menos 3 deles fazem aniversário no mesmo dia do mês (independente do mês)?",
    options: [
      "A) 32",
      "B) 61",
      "C) 63",
      "D) 731",
      "E) 1096"
    ],
    correct: 2, // C
    explanation: "Atenção ao enunciado: 'no mesmo dia do mês (independente do mês)'. Os dias do mês possíveis vão do dia 1 ao dia 31 (portanto, são 31 'casas dos pombos').\nPelo Princípio da Casa dos Pombos, para garantir que pelo menos 3 pessoas façam aniversário no mesmo dia do mês, consideramos o pior caso possível onde cada dia do mês tem 2 aniversariantes:\n2 * 31 = 62 pessoas.\nAdicionando mais 1 pessoa (62 + 1 = 63), obrigatoriamente algum dos dias de 1 a 31 terá 3 aniversariantes.",
    pegadinha: "Pegadinha sutil da FGV: a maioria lê rápido e acha que são 'mesmo dia do ano' (365 dias) e marca alternativas na faixa de 700! O enunciado disse expressamente 'no mesmo dia do mês' (1 a 31).",
    dica: "Dica da FGV: Atenção ao texto: dia do mês (de 1 a 31). No pior cenário, você tem 2 pessoas em cada um dos 31 dias possíveis antes de garantir a terceira."
  },
  {
    id: 20,
    subject: "Raciocínio Lógico-Matemático",
    topic: "Equações e Proporções",
    enunciado: "Três servidores de banco de dados (A, B e C) processam juntos um lote de 1.800 consultas de auditoria. A capacidade de processamento deles é inversamente proporcional aos seus tempos médios de resposta: 2 ms, 3 ms e 6 ms, respectivamente.\n\nQuantas consultas o servidor mais rápido (menor tempo de resposta) processou?",
    options: [
      "A) 600",
      "B) 800",
      "C) 900",
      "D) 1.000",
      "E) 1.200"
    ],
    correct: 2, // C
    explanation: "A capacidade é inversamente proporcional a 2, 3 e 6, o que significa diretamente proporcional a 1/2, 1/3 e 1/6.\nMultiplicando pelo MMC (6) para obter números inteiros:\n(1/2)*6 = 3 partes para A (tempo 2 ms - mais rápido)\n(1/3)*6 = 2 partes para B (tempo 3 ms)\n(1/6)*6 = 1 parte para C (tempo 6 ms - mais lento)\nTotal de partes = 3 + 2 + 1 = 6 partes.\nCada parte vale: 1.800 / 6 = 300 consultas.\nO servidor mais rápido é A, que recebe 3 partes: 3 * 300 = 900 consultas.",
    pegadinha: "Confundir proporcionalidade direta com inversa e dividir proporcionalmente a 2, 3 e 6 em vez dos inversos!",
    dica: "Dica da FGV: Proporcionalidade inversa a 2, 3 e 6 significa diretamente proporcional a 1/2, 1/3 e 1/6. Reduza ao mesmo denominador para achar as partes."
  },

  // ========================================================
  // MÓDULO II - CONHECIMENTOS ESPECÍFICOS (40 QUESTÕES)
  // FUNDAMENTOS DE TI NO JUDICIÁRIO + BANCO DE DADOS
  // ========================================================
  {
    id: 21,
    subject: "Fundamentos de TI no Judiciário",
    topic: "Plataforma Digital do Poder Judiciário (PDPJ-Br)",
    enunciado: "De acordo com a Resolução CNJ nº 335/2020 e as diretrizes da Plataforma Digital do Poder Judiciário (PDPJ-Br), o modelo arquitetural adotado para viabilizar a integração e a consolidação dos sistemas de tramitação processual dos tribunais brasileiros baseia-se em:",
    options: [
      "A) Uma arquitetura monolítica centralizada hospedada unicamente no data center do Conselho Nacional de Justiça em Brasília.",
      "B) Uma arquitetura distribuída e modular baseada em microsserviços desacoplados, com comunicação via APIs RESTful e governança orientada ao Marketplace de Soluções do CNJ.",
      "C) Replicação física síncrona dos bancos relacionais de todos os tribunais estaduais em um único cluster multinode Oracle RAC.",
      "D) Utilização obrigatória de arquitetura cliente-servidor em duas camadas (Two-Tier) com acesso direto via drivers ODBC proprietários.",
      "E) Integração assíncrona restrita a arquivos planos delimitados transmitidos via protocolo FTP seguro uma vez a cada trimestre."
    ],
    correct: 1, // B
    explanation: "A PDPJ-Br (Resolução CNJ 335/2020) é fundamentada em arquitetura de microsserviços distribuídos, desacoplados, escaláveis e interoperáveis, utilizando APIs e um marketplace onde os tribunais compartilham e reutilizam módulos tecnológicos desenvolvidos colaborativamente.",
    pegadinha: "A FGV adora colocar que a PDPJ-Br 'substitui completamente todos os sistemas por um monólito central em Brasília'. O objetivo é integrar mediante microsserviços e governança federada.",
    dica: "Dica da FGV: Pense no modelo moderno do CNJ: microsserviços distribuídos, interoperabilidade via APIs REST e Marketplace cooperativo entre os tribunais."
  },
  {
    id: 22,
    subject: "Fundamentos de TI no Judiciário",
    topic: "Governança e Segurança - LGPD no Judiciário",
    enunciado: "Em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD) aplicada ao Poder Judiciário, no tratamento de dados pessoais em processos judiciais, assinale a afirmativa correta:",
    options: [
      "A) O tratamento de dados pessoais no âmbito judicial exige obrigatoriamente a obtenção de consentimento prévio e expresso do réu em qualquer fase da lide.",
      "B) O exercício regular de direitos em processo judicial constitui uma das bases legais autônomas autorizadoras do tratamento de dados, dispensando a exigência de consentimento.",
      "C) Os tribunais de justiça estão isentos do cumprimento dos princípios da LGPD, tais como finalidade e adequação, por deterem autonomia constitucional absoluta.",
      "D) Dados biométricos e de saúde anexados aos autos são considerados dados pessoais comuns, sujeitos às mesmas regras dos nomes e números de CPF.",
      "E) O encarregado de dados (DPO) nos tribunais possui autoridade jurisdicional para anular decisões judiciais que transgridam a privacidade."
    ],
    correct: 1, // B
    explanation: "O art. 7º, inciso VI, e o art. 11, inciso II, alínea 'b' da LGPD preveem expressamente o tratamento de dados pessoais para o 'exercício regular de direitos em processo judicial, administrativo ou arbitral', hipótese que independe do consentimento do titular.",
    pegadinha: "Achar que consentimento é obrigatório em tudo. O Judiciário trata dados predominantemente para cumprimento de obrigação legal/regulatória e exercício regular de direitos em processo judicial.",
    dica: "Dica da FGV: No Poder Judiciário, a tramitação de autos judiciais independe do consentimento do réu com base no exercício regular de direitos em processo judicial."
  },
  {
    id: 23,
    subject: "Fundamentos de TI",
    topic: "Computação em Nuvem e Responsabilidade",
    enunciado: "Em um modelo de computação em nuvem do tipo Plataforma como Serviço (PaaS), a responsabilidade pela configuração de alta disponibilidade, backup e segurança do Sistema Gerenciador de Banco de Dados (SGBD) em comparação com o modelo IaaS:",
    options: [
      "A) Transfere-se para o provedor de nuvem no PaaS a manutenção do sistema operacional subjacente e dos patches do SGBD, cabendo ao cliente os dados e as regras de negócio.",
      "B) É idêntica à do modelo IaaS, pois o cliente sempre administra as atualizações do kernel do sistema operacional e o particionamento de disco.",
      "C) Torna-se 100% de responsabilidade do cliente no PaaS, visto que o provedor apenas fornece as conexões de rede física.",
      "D) Exige que o cliente instale manualmente os binários do banco de dados e os binários dos serviços de replicação.",
      "E) Impede a execução de comandos SQL DDL devido ao isolamento do hipervisor de segurança."
    ],
    correct: 0, // A
    explanation: "Na matriz de responsabilidade compartilhada da nuvem: no IaaS o cliente gerencia SO, runtime e SGBD. No PaaS (ex: AWS RDS, Azure SQL Database), o provedor de nuvem assume a responsabilidade pela infraestrutura física, virtualização, SO e patches/manutenção do SGBD, enquanto o cliente foca em modelagem, dados, usuários e otimização das consultas.",
    pegadinha: "Confundir os limites do modelo de responsabilidade compartilhada entre IaaS (cliente cuida do SO e SGBD) e PaaS (provedor cuida do SGBD gerenciado).",
    dica: "Dica da FGV: No modelo PaaS (Platform as a Service), o provedor de nuvem assume a manutenção do sistema operacional e dos patches do SGBD gerenciado."
  },
  {
    id: 24,
    subject: "Fundamentos de TI",
    topic: "Engenharia de Software e Metodologias Ágeis",
    enunciado: "No framework Scrum aplicado ao desenvolvimento de sistemas judiciais, sobre papéis e eventos, assinale a opção correta:",
    options: [
      "A) O Scrum Master é o único responsável por priorizar os itens do Product Backlog com base no valor de negócio para os magistrados.",
      "B) A Sprint Retrospective ocorre antes do planejamento da Sprint com o objetivo exclusivo de auditar os pontos de função entregues.",
      "C) O Product Owner é a liderança que gerencia o Product Backlog, sendo a voz dos interessados e definindo as prioridades das entregas.",
      "D) O Daily Scrum é uma reunião técnica de 1 hora conduzida pelo Product Owner para aprovar os códigos commitados no repositório Git.",
      "E) A Sprint Review destina-se a avaliar a dinâmica interpessoal da equipe e definir melhorias no processo de trabalho."
    ],
    correct: 2, // C
    explanation: "O Product Owner (PO) é o responsável por maximizar o valor do produto e gerenciar o Product Backlog. O Scrum Master remove impedimentos e atua como líder servidor. A Review inspeciona o incremento com stakeholders; a Retrospectiva avalia processos e relações interpessoais.",
    pegadinha: "Inverter os objetivos da Sprint Review (inspeção do produto/incremento com clientes) e Sprint Retrospective (inspeção do processo interno e melhoria da equipe).",
    dica: "Dica da FGV: No Scrum, quem é o dono das prioridades do negócio e do Product Backlog, atuando como a voz dos magistrados e usuários?"
  },
  {
    id: 25,
    subject: "Fundamentos de TI no Judiciário",
    topic: "Gestão Documental - MoReq-Jus e Resolução CNJ nº 522/2023",
    enunciado: "O Modelo de Requisitos para Sistemas Informatizados de Gestão de Processos e Documentos do Poder Judiciário (MoReq-Jus) estabelece que a preservação e a integridade arquivística de documentos digitais exigem:",
    options: [
      "A) A conversão de todos os arquivos anexados em formato bitmap proprietário (.bmp) sem metadados de autoria.",
      "B) O armazenamento exclusivo em fitas magnéticas offline sem necessidade de plano de destinação arquivística.",
      "C) O registro detalhado de metadados de contexto, autenticidade, ciclo de vida e a adoção de repositórios digitais confiáveis (RDC-Arq).",
      "D) A delegação integral do controle do ciclo documental aos usuários finais sem fiscalização do comitê de gestão documental.",
      "E) A eliminação automática e sumária de autos processuais após 6 meses de trânsito em julgado para economia de storage."
    ],
    correct: 2, // C
    explanation: "O MoReq-Jus e a Resolução CNJ nº 522/2023 fundamentam-se no controle rigoroso dos metadados descritivos, estruturais e de preservação, garantindo a autenticidade e a cadeia de custódia documental ao longo de todo o ciclo de vida por meio de Repositórios Digitais Confiáveis (RDC-Arq).",
    pegadinha: "A FGV frequentemente questiona o papel dos metadados arquivísticos e do RDC-Arq na gestão de documentos eletrônicos judiciais.",
    dica: "Dica da FGV: O MoReq-Jus e a Resolução 522/2023 fundamentam-se no controle de metadados e na custódia arquivística via Repositórios Digitais Confiáveis (RDC-Arq)."
  },
  {
    id: 26,
    subject: "Banco de Dados",
    topic: "Modelagem de Dados e Álgebra Relacional",
    enunciado: "Considere a relação PROCESSOS(id_proc, numero_cnj, id_comarca, data_ajuizamento, valor_causa). Na álgebra relacional clássica, qual operação deve ser aplicada para obter APENAS as colunas 'numero_cnj' e 'valor_causa' das tuplas cujo 'valor_causa' seja superior a R$ 100.000?",
    options: [
      "A) Junção natural seguida de agrupamento.",
      "B) Seleção com condição 'valor_causa > 100000' seguida de Projeção sobre 'numero_cnj, valor_causa'.",
      "C) Projeção sobre 'valor_causa > 100000' seguida de Seleção das colunas desejadas.",
      "D) União entre a relação original e a relação de comarcas.",
      "E) Diferença de conjuntos entre as tuplas ativas e as arquivadas."
    ],
    correct: 1, // B
    explanation: "Na Álgebra Relacional: a operação de Seleção (sigma) filtra LINHAS (tuplas) com base em um predicado lógico (valor_causa > 100000). A operação de Projeção (pi) filtra COLUNAS (atributos), escolhendo 'numero_cnj, valor_causa'. Logo: pi_{numero_cnj, valor_causa} (sigma_{valor_causa > 100000}(PROCESSOS)).",
    pegadinha: "Confundir Seleção com Projeção! Na linguagem SQL usamos o comando 'SELECT' para projetar colunas, mas na Álgebra Relacional 'Seleção' é a filtragem de linhas (equivalente ao WHERE do SQL) e 'Projeção' é a escolha de colunas.",
    dica: "Dica da FGV: Na Álgebra Relacional, a operação sigma (seleção) filtra linhas por condição lógica e a operação pi (projeção) seleciona as colunas desejadas."
  },
  {
    id: 27,
    subject: "Banco de Dados",
    topic: "Normalização e Dependências Funcionais",
    enunciado: "Uma tabela está na Segunda Forma Normal (2FN) se e somente se:",
    options: [
      "A) Não contiver dependências transitivas entre atributos não-chave.",
      "B) Estiver na 1FN e nenhum atributo não-chave depender funcionalmente de parte de uma chave candidata composta (ausência de dependência parcial).",
      "C) Todos os seus determinantes forem necessariamente chaves candidatas (regra estrita da FNBC).",
      "D) Não contiver grupos repetidores nem atributos atômicos.",
      "E) Todos os atributos possuírem cardinalidade 1:1 e restrição de não-nulidade obrigatória."
    ],
    correct: 1, // B
    explanation: "Definição de 2FN: A tabela deve estar na 1FN (atributos atômicos) e todo atributo não-chave deve depender TOTALMENTE da chave primária inteira, ou seja, nenhum atributo não-chave pode depender de parte de uma chave candidata composta (eliminação de dependências parciais). Se a chave for simples (1 coluna), a tabela na 1FN já está automaticamente na 2FN.",
    pegadinha: "Pegadinha clássica: se a chave primária for simples (não composta) e a tabela estiver na 1FN, ela já está garantidamente na 2FN! A 3FN elimina dependências transitivas, e a FNBC exige que todo determinante seja chave candidata.",
    dica: "Dica da FGV: A 2FN trata especificamente da eliminação de dependências parciais: atributos não-chave dependendo de apenas parte de uma chave primária composta."
  },
  {
    id: 28,
    subject: "Banco de Dados",
    topic: "Forma Normal de Boyce-Codd (FNBC)",
    enunciado: "Considere uma relação R(A, B, C) com as seguintes dependências funcionais:\n- {A, B} -> C\n- C -> B\nOnde {A, B} e {A, C} são chaves candidatas. Sobre o nível de normalização de R, assinale a opção correta:",
    options: [
      "A) R não está na 1FN devido à redundância cíclica de C.",
      "B) R está na 2FN, mas não alcançou a 3FN porque C não é chave primária.",
      "C) R está na 3FN, mas NÃO está na Forma Normal de Boyce-Codd (FNBC), pois na dependência C -> B o determinante C não é chave candidata.",
      "D) R está na FNBC e na 4FN, pois todas as dependências funcionais envolvem atributos primos.",
      "E) A relação viola a 2FN porque existe dependência parcial sobre a chave primária."
    ],
    correct: 2, // C
    explanation: "Na 3FN, para toda DF X -> Y: ou X é superchave ou Y é atributo primo (pertence a alguma chave candidata). Aqui, em C -> B, C não é superchave, mas B é atributo primo (faz parte da chave candidata {A,B}), logo a relação ESTÁ na 3FN!\nPorém, para estar na FNBC, para TODA DF X -> Y, X DEVE ser superchave. Como C não é superchave, a dependência C -> B viola a FNBC. Portanto, está na 3FN mas não na FNBC.",
    pegadinha: "Esta questão é a assinatura registrada da FGV! A diferença entre 3FN e FNBC reside no fato de a 3FN permitir que o lado direito (Y) seja atributo primo quando o determinante não for chave candidata. A FNBC não aceita essa exceção!",
    dica: "Dica da FGV: A 3FN permite que o lado direito da dependência seja atributo primo. A FNBC não perdoa: o determinante tem de ser superchave sempre!"
  },
  {
    id: 29,
    subject: "Banco de Dados",
    topic: "Modelagem Dimensional (Star vs Snowflake)",
    enunciado: "No projeto de um Data Warehouse para monitorar a produtividade das varas do TJPB, a modelagem dimensional do tipo 'Snowflake' diferencia-se da modelagem 'Star Schema' essencialmente porque:",
    options: [
      "A) No Snowflake, a tabela fato é dividida em várias subfatos normalizadas para economizar espaço de índices.",
      "B) No Snowflake, as tabelas de dimensão são parcialmente ou totalmente normalizadas, gerando hierarquias em múltiplas tabelas interligadas.",
      "C) O Star Schema exige obrigatoriamente a presença de mais de uma tabela fato no centro do esquema.",
      "D) O Snowflake elimina completamente a necessidade de chaves substitutas (Surrogate Keys).",
      "E) O Star Schema apresenta consultas analíticas mais lentas devido à proliferação de junções (joins) nas dimensões normalizadas."
    ],
    correct: 1, // B
    explanation: "No Star Schema (Esquema Estrela), as tabelas dimensão são desnormalizadas (1 nível de relacionamento direto com a fato), facilitando consultas e reduzindo joins. No Snowflake Schema (Floco de Neve), as dimensões são normalizadas gerando subdimensões hierárquicas (ex: Dim_Vara -> Dim_Comarca -> Dim_Regiao), o que reduz redundância de armazenamento ao custo de exigir mais joins nas queries.",
    pegadinha: "A FGV costuma afirmar que o Snowflake normaliza a tabela FATO. Falso! Quem é normalizada no Snowflake são as tabelas DIMENSÃO.",
    dica: "Dica da FGV: No modelo Snowflake (Floco de Neve), o que acontece com as tabelas de dimensão em comparação com a simplicidade desnormalizada do Star Schema?"
  },
  {
    id: 30,
    subject: "Banco de Dados",
    topic: "Esquema Constelação (Galaxy Schema)",
    enunciado: "Um arquiteto de dados do TJPB projeta uma arquitetura dimensional contendo duas tabelas fato: FATO_TRAMITACAO e FATO_EXECUCAO_ORCAMENTARIA. Ambas compartilham as tabelas de dimensão DIM_TEMPO e DIM_UNIDADE_JUDICIARIA (dimensões conformadas). Esse modelo dimensional é classificado como:",
    options: [
      "A) Star Cluster Schema.",
      "B) Esquema Constelação (Galaxy ou Fact Constellation Schema).",
      "C) Normalized Star Schema.",
      "D) Cubo OLAP Monolítico.",
      "E) Esquema Hierárquico Puro."
    ],
    correct: 1, // B
    explanation: "Quando um Data Warehouse possui múltiplas tabelas fato compartilhando dimensões conformadas (conformed dimensions), o esquema é denominado Fact Constellation ou Galaxy Schema (Esquema Constelação).",
    pegadinha: "Lembre-se: 1 fato + dimensões desnormalizadas = Star; 1 fato + dimensões normalizadas = Snowflake; múltiplas fatos compartilhando dimensões = Constelação (Galaxy).",
    dica: "Dica da FGV: Quando múltiplas tabelas fato compartilham as mesmas tabelas de dimensão conformadas, o esquema recebe o nome astronômico de Constelação (Galaxy)."
  },
  {
    id: 31,
    subject: "Banco de Dados",
    topic: "Arquiteturas OLTP vs OLAP",
    enunciado: "Sobre as diferenças operacionais e arquiteturais entre sistemas OLTP (Online Transaction Processing) e OLAP (Online Analytical Processing), assinale a afirmativa correta:",
    options: [
      "A) Sistemas OLTP utilizam primariamente esquemas dimensionais altamente desnormalizados para acelerar transações pontuais de inserção.",
      "B) Sistemas OLAP priorizam alto throughput de transações atômicas de UPDATE e DELETE de registros individuais por meio de isolamento Serializable.",
      "C) Sistemas OLTP são orientados à execução de grandes varreduras agregadas sobre dados históricos consolidados e imutáveis.",
      "D) Sistemas OLAP trabalham tipicamente com grandes volumes de dados históricos, agregados e modelados para leitura analítica complexa, enquanto sistemas OLTP priorizam transações rápidas e integridade relacional.",
      "E) Em sistemas OLTP a desnormalização é a prática padrão obrigatória para prevenir deadlocks em concorrência pesada."
    ],
    correct: 3, // D
    explanation: "OLTP é voltado à operação diária: transações curtas, alta concorrência de INSERT/UPDATE/DELETE, dados atuais, normalizados (evitar anomalias). OLAP é voltado à inteligência analítica: leituras em lote, agregações (SUM, AVG), dados históricos consolidados e modelagem dimensional.",
    pegadinha: "A FGV troca as finalidades: afirma que OLAP precisa de transações ACID atômicas de alta frequência e que OLTP é otimizado para relatórios históricos agregados.",
    dica: "Dica da FGV: OLTP é o banco operacional do dia a dia (transações curtas e normalizadas); OLAP é analítico (leitura massiva de históricos e modelagem dimensional)."
  },
  {
    id: 32,
    subject: "Banco de Dados",
    topic: "Bancos em Memória e Cache Distribuído - Redis",
    enunciado: "No ecossistema do tribunal, o Redis é empregado como cache distribuído em memória para sessões de usuários do PJe. Em relação às políticas de expiração de dados e persistência do Redis, assinale a opção correta:",
    options: [
      "A) O Redis não oferece qualquer mecanismo de persistência em disco, perdendo sempre todos os dados caso o processo seja reiniciado.",
      "B) A política de despejo (eviction) 'volatile-lru' remove a chave menos recentemente utilizada (LRU) dentre aquelas que possuem um tempo de vida (TTL) configurado.",
      "C) O comando EXPIRE no Redis só pode ser atribuído a tipos de dados estruturados em listas, sendo inválido para strings e hashes.",
      "D) O mecanismo AOF (Append Only File) do Redis grava snapshots completos periódicos da memória a cada 24 horas sem log de comandos.",
      "E) No Redis, chaves expiradas consomem CPU de forma síncrona imediata obrigatória, travando todas as novas requisições até o término da limpeza."
    ],
    correct: 1, // B
    explanation: "O Redis possui diversas políticas maxmemory: 'volatile-lru' remove chaves usando o algoritmo LRU (Least Recently Used) apenas entre as chaves que possuem prazo de validade (TTL/expire) definido. Além disso, o Redis possui dois modos de persistência em disco: RDB (snapshots) e AOF (log de comandos de escrita).",
    pegadinha: "Dizer que o Redis é 100% volátil e não tem persistência. Ele tem RDB e AOF com alta confiabilidade!",
    dica: "Dica da FGV: O Redis possui políticas de LRU que atuam especificamente sobre chaves que possuem prazo de validade (TTL) configurado."
  },
  {
    id: 33,
    subject: "Banco de Dados",
    topic: "SGBDs de Mercado - PostgreSQL MVCC",
    enunciado: "No PostgreSQL, o mecanismo que permite que transações de leitura concorrentes não bloqueiem transações de escrita, e que escritas não bloqueiem leituras, baseia-se em:",
    options: [
      "A) Bloqueio exclusivo em nível de tabela (Exclusive Table Locks) em todas as operações SELECT.",
      "B) Controle de Concorrência Multiversão (MVCC - Multi-Version Concurrency Control), gerando versões de tuplas com identificadores xmin e xmax.",
      "C) Algoritmo de Two-Phase Locking rigoroso obrigatório para qualquer nível de isolamento.",
      "D) Desativação temporária do Write-Ahead Logging (WAL) durante consultas volumosas.",
      "E) Alocação estática de memória compartilhada dedicada para cada sessão de leitura."
    ],
    correct: 1, // B
    explanation: "O PostgreSQL utiliza MVCC (Multi-Version Concurrency Control). Cada modificação gera uma nova versão da tupla (registro) no arquivo de dados. As colunas internas de sistema `xmin` (ID da transação que inseriu) e `xmax` (ID da transação que atualizou/deletou) controlam a visibilidade do snapshot para cada transação sem necessidade de bloqueios de leitura compartilhados.",
    pegadinha: "A FGV adora cobrar os atributos ocultos do MVCC do PostgreSQL (`xmin`, `xmax`, e a necessidade do processo de `VACUUM` para limpar tuplas mortas/dead tuples).",
    dica: "Dica da FGV: O PostgreSQL utiliza controle de concorrência multiversão (MVCC) com identificadores xmin e xmax para que leituras não travem escritas."
  },
  {
    id: 34,
    subject: "Banco de Dados",
    topic: "Linguagem SQL - Window Functions",
    enunciado: "Considere a tabela AUDIENCIAS(id_aud, id_vara, data_hora, duracao_minutos). Deseja-se ranquear as audiências de cada vara por ordem decrescente de duração, de modo que, em caso de empate na duração, a contagem da posição seguinte NÃO apresente lacunas numéricas (ex: 1, 2, 2, 3, e não 1, 2, 2, 4).\n\nA função de janela adequada a ser utilizada na cláusula OVER(PARTITION BY id_vara ORDER BY duracao_minutos DESC) é:",
    options: [
      "A) ROW_NUMBER()",
      "B) RANK()",
      "C) DENSE_RANK()",
      "D) NTILE(4)",
      "E) PERCENT_RANK()"
    ],
    correct: 2, // C
    explanation: "- ROW_NUMBER(): numera sequencialmente tuplas distintas sem empates (1, 2, 3, 4);\n- RANK(): atribui o mesmo ranking para valores empatados e PULA as posições subsequentes correspondentes (1, 2, 2, 4);\n- DENSE_RANK(): atribui o mesmo ranking para empates mas NÃO PULA posições subsequentes (1, 2, 2, 3).\nComo o enunciado solicitou expressamente 'NÃO apresente lacunas numéricas', a resposta é DENSE_RANK().",
    pegadinha: "A clássica distinção entre RANK() (com gap/salto) e DENSE_RANK() (denso/sem gap) é uma das questões mais cobradas pela FGV em provas de analista de banco de dados!",
    dica: "Dica da FGV: Qual função de janela atribui posições empatadas sem deixar buracos ou pular números na contagem das posições seguintes?"
  },
  {
    id: 35,
    subject: "Banco de Dados",
    topic: "Linguagem SQL - Funções de Janela LAG e LEAD",
    enunciado: "Em uma consulta de análise de fluxo processual, o desenvolvedor precisa comparar o tempo da movimentação processual atual com o tempo da movimentação imediatamente ANTERIOR do mesmo processo.\n\nPara acessar o valor da coluna 'data_movimento' da linha anterior dentro da mesma partição de processo, a função de janela padronizada ANSI SQL é:",
    options: [
      "A) LEAD(data_movimento, 1)",
      "B) LAG(data_movimento, 1)",
      "C) FIRST_VALUE(data_movimento)",
      "D) PRIOR(data_movimento)",
      "E) PREVIOUS(data_movimento)"
    ],
    correct: 1, // B
    explanation: "- LAG(expressão, offset) acessa dados de uma linha que ANTECEDE a linha atual por um offset especificado (linha anterior);\n- LEAD(expressão, offset) acessa dados de uma linha que SUCEDE a linha atual (linha posterior).\nAmbas são executadas dentro de uma cláusula OVER(PARTITION BY ... ORDER BY ...).",
    pegadinha: "Cuidado para não inverter LAG (atrás/anterior) com LEAD (à frente/posterior). Memorize: Lag = atraso (olha para o passado); Lead = líder/guia (olha para a frente/futuro).",
    dica: "Dica da FGV: A função que olha para o registro anterior na partição é LAG (atraso/passado); a que olha para o seguinte é LEAD (futuro)."
  },
  {
    id: 36,
    subject: "Banco de Dados",
    topic: "Linguagem SQL - Comportamento com NULL e NOT IN",
    enunciado: "Considere as tabelas VARAS(id_vara, nome) e JUIZES(id_juiz, nome, id_vara). Sabe-se que a tabela VARAS possui 10 registros. A tabela JUIZES possui 8 registros associados a varas e 1 registro com 'id_vara' preenchido com NULL.\n\nUm analista executa o seguinte comando SQL:\n\nSELECT COUNT(*)\nFROM VARAS\nWHERE id_vara NOT IN (SELECT id_vara FROM JUIZES);\n\nQual é o resultado numérico retornado por essa consulta?",
    options: [
      "A) 2",
      "B) 1",
      "C) 0",
      "D) 9",
      "E) O SGBD dispara um erro de sintaxe impeditivo."
    ],
    correct: 2, // C
    explanation: "Esta é uma das pegadinhas mais fatais da banca FGV! Na lógica trivalente do SQL (TRUE, FALSE, UNKNOWN), o predicado `x NOT IN (v1, v2, ..., NULL)` é avaliado como `x <> v1 AND x <> v2 AND ... AND x <> NULL`.\nQualquer comparação direta de igualdade ou desigualdade com NULL resulta em UNKNOWN (`x <> NULL` -> UNKNOWN). Em uma sequência de ANDs, se um dos termos for UNKNOWN e os outros forem TRUE, a conjunção inteira resulta em UNKNOWN. Como a cláusula WHERE exige resultado estritamente TRUE para retornar a linha, NENHUMA linha é retornada! O COUNT(*) será 0.",
    pegadinha: "SUPER PEGADINHA FGV: Se houver um único NULL na subconsulta do NOT IN, o resultado da query inteira é 0 (conjunto vazio)! Para contornar, usa-se NOT EXISTS ou filtra-se WHERE id_vara IS NOT NULL.",
    dica: "Dica da FGV: Na lógica trivalente do SQL, o que acontece se o NOT IN tentar comparar uma coluna com um conjunto que contém NULL? A comparação com NULL dá Unknown!"
  },
  {
    id: 37,
    subject: "Banco de Dados",
    topic: "Linguagem SQL - Common Table Expressions (CTEs)",
    enunciado: "Em relação ao uso de Common Table Expressions (CTEs) declaradas por meio da cláusula WITH na linguagem SQL, assinale a afirmativa correta:",
    options: [
      "A) CTEs criam tabelas físicas permanentes no tablespace default que precisam ser descartadas manualmente via comando DROP.",
      "B) CTEs recursivas (WITH RECURSIVE) são estruturas que permitem percorrer eficientemente estruturas hierárquicas e grafos, como árvores de subunidades judiciárias.",
      "C) Uma CTE declarada em uma consulta pode ser acessada livremente por outras sessões de banco de dados concorrentes.",
      "D) A cláusula WITH não aceita operadores de junção (JOIN) em seu corpo de definição.",
      "E) CTEs impedem a utilização de funções agregadas e subconsultas em seu interior."
    ],
    correct: 1, // B
    explanation: "As CTEs (Common Table Expressions) introduzidas com a sintaxe `WITH` geram conjuntos de resultados temporários que existem apenas durante o escopo da execução daquela query. Quando combinadas com a diretiva `RECURSIVE`, permitem processar dados em estruturas de árvore/grafo (hierarquias de chefias, organogramas, dependências de processos) de forma elegante e padronizada pelo padrão ANSI SQL:1999.",
    pegadinha: "Achar que CTE persiste em disco como tabela temporária global. Ela tem escopo restrito à declaração da própria consulta.",
    dica: "Dica da FGV: Expressões de tabela comuns (CTEs) com a cláusula RECURSIVE são o padrão oficial do SQL para percorrer árvores e organogramas hierárquicos."
  },
  {
    id: 38,
    subject: "Banco de Dados",
    topic: "Linguagem SQL - Junções (Joins)",
    enunciado: "Dadas duas tabelas, T1 com 5 linhas e T2 com 4 linhas. A execução de um comando SELECT * FROM T1 CROSS JOIN T2, sem cláusula WHERE, produzirá um conjunto resultante com exatamente quantas linhas?",
    options: [
      "A) 1 linha.",
      "B) 9 linhas.",
      "C) 20 linhas.",
      "D) Nenhuma linha.",
      "E) 4 linhas."
    ],
    correct: 2, // C
    explanation: "O CROSS JOIN realiza o produto cartesiano estrito entre as duas relações. Se T1 tem m tuplas e T2 tem n tuplas, o número de tuplas no produto cartesiano é m * n = 5 * 4 = 20 linhas.",
    pegadinha: "Candidatos desatentos somam em vez de multiplicar (5 + 4 = 9).",
    dica: "Dica da FGV: O CROSS JOIN gera o produto cartesiano irrestrito: multiplique o número de linhas da primeira tabela pelo da segunda."
  },
  {
    id: 39,
    subject: "Banco de Dados",
    topic: "Linguagem SQL - GROUP BY e HAVING",
    enunciado: "Considere a consulta SQL:\n\nSELECT comarca_id, COUNT(*)\nFROM processos\nWHERE data_distribuicao >= '2026-01-01'\nGROUP BY comarca_id\nHAVING COUNT(*) > 50;\n\nSobre a ordem lógica de processamento dos componentes dessa consulta pelo SGBD, assinale a sequência correta:",
    options: [
      "A) FROM -> WHERE -> GROUP BY -> HAVING -> SELECT",
      "B) SELECT -> FROM -> WHERE -> GROUP BY -> HAVING",
      "C) FROM -> GROUP BY -> HAVING -> WHERE -> SELECT",
      "D) WHERE -> FROM -> SELECT -> GROUP BY -> HAVING",
      "E) FROM -> SELECT -> WHERE -> HAVING -> GROUP BY"
    ],
    correct: 0, // A
    explanation: "A ordem de execução lógica do SQL é:\n1. FROM (identifica tabelas e joins)\n2. WHERE (filtra as linhas individuais)\n3. GROUP BY (agrupa as linhas restantes)\n4. HAVING (filtra os grupos formados)\n5. SELECT (projeta colunas e calcula expressões)\n6. DISTINCT (se houver)\n7. ORDER BY (ordena o resultado final)\n8. LIMIT / OFFSET (restringe a paginação)",
    pegadinha: "A FGV frequentemente explora a diferença entre a ordem de ESCRITA sintática (começa com SELECT) e a ordem de PROCESSAMENTO LÓGICO (começa com FROM).",
    dica: "Dica da FGV: A ordem de processamento lógico do SQL começa identificando a fonte de dados (FROM/JOIN) antes de filtrar linhas (WHERE) ou agrupar (GROUP BY)."
  },
  {
    id: 40,
    subject: "Banco de Dados",
    topic: "Linguagem SQL - DCL e TCL",
    enunciado: "Em administração de banco de dados, os comandos GRANT e REVOKE pertencem à sublinguagem ______, enquanto os comandos COMMIT, ROLLBACK e SAVEPOINT pertencem à sublinguagem ______.\n\nAssinale a opção que preenche correta e respectivamente as lacunas:",
    options: [
      "A) DDL (Data Definition Language) / DML (Data Manipulation Language)",
      "B) DCL (Data Control Language) / TCL (Transaction Control Language)",
      "C) DML (Data Manipulation Language) / DCL (Data Control Language)",
      "D) DDL (Data Definition Language) / TCL (Transaction Control Language)",
      "E) DQL (Data Query Language) / DDL (Data Definition Language)"
    ],
    correct: 1, // B
    explanation: "- DDL: CREATE, ALTER, DROP, TRUNCATE (estrutura);\n- DML: INSERT, UPDATE, DELETE (dados);\n- DQL: SELECT (consultas);\n- DCL: GRANT, REVOKE (controle de acesso/permissões);\n- TCL: COMMIT, ROLLBACK, SAVEPOINT (controle transacional).",
    pegadinha: "Classificação fundamental: muitos confundem GRANT com DDL porque ele altera privilégios de objetos, mas trata-se formalmente de DCL.",
    dica: "Dica da FGV: GRANT e REVOKE controlam permissões (DCL); COMMIT e ROLLBACK controlam transações (TCL)."
  },
  {
    id: 41,
    subject: "Banco de Dados",
    topic: "Propriedades ACID e Transações",
    enunciado: "Em um SGBD relacional, a garantia de que, no caso de uma falha de hardware ou queda de energia após a confirmação (commit) de uma transação, todas as alterações efetuadas por ela permanecerão gravadas permanentemente no banco de dados decorre da propriedade:",
    options: [
      "A) Atomicidade",
      "B) Consistência",
      "C) Isolamento",
      "D) Durabilidade",
      "E) Disponibilidade"
    ],
    correct: 3, // D
    explanation: "Propriedades ACID:\n- Atomicidade: tudo ou nada;\n- Consistência: preservação das regras e restrições de integridade do estado válido para outro válido;\n- Isolamento: transações concorrentes não interferem indevidamente umas nas outras;\n- Durabilidade (Persistência): os efeitos de uma transação confirmada (committed) persistem mesmo diante de falhas de energia ou sistema (assegurado por logs WAL/Redo).",
    pegadinha: "Confundir Durabilidade com Consistência. A persistência dos dados após a falha é estritamente a Durabilidade.",
    dica: "Dica da FGV: Qual das propriedades ACID assegura que as alterações confirmadas (commit) nunca serão perdidas mesmo diante de desligamento abrupto de energia?"
  },
  {
    id: 42,
    subject: "Banco de Dados",
    topic: "Níveis de Isolamento e Fenômenos de Concorrência",
    enunciado: "O padrão ANSI/ISO SQL define quatro níveis de isolamento de transações. O fenômeno no qual uma transação relê um conjunto de linhas que satisfazem uma condição de busca e descobre que linhas adicionais foram inseridas e confirmadas por outra transação concorrente é denominado:",
    options: [
      "A) Leitura Suja (Dirty Read)",
      "B) Leitura Não Repetível (Non-Repeatable Read)",
      "C) Leitura Fantasma (Phantom Read)",
      "D) Atualização Perdida (Lost Update)",
      "E) Bloqueio Vivo (Livelock)"
    ],
    correct: 2, // C
    explanation: "- Dirty Read: lê dados não confirmados (uncommitted) de outra transação;\n- Non-Repeatable Read: relê a MESMA linha e encontra dados MODIFICADOS ou DELETADOS por outra transação já confirmada;\n- Phantom Read: executa uma query com cláusula de faixa/filtro e, ao repetir, encontra NOVAS LINHAS inseridas e confirmadas por outra transação;\nO nível Serializable previne os três fenômenos.",
    pegadinha: "Diferença crucial FGV: Leitura Não Repetível ocorre na modificação/exclusão de uma linha preexistente. Leitura Fantasma ocorre quando NOVAS tuplas que casam com o predicado surgem no conjunto.",
    dica: "Dica da FGV: Quando uma query relê um conjunto e encontra novas linhas inseridas por outra transação, temos uma Leitura Fantasma (Phantom Read)."
  },
  {
    id: 43,
    subject: "Banco de Dados",
    topic: "Níveis de Isolamento - Comportamento Padrão",
    enunciado: "No PostgreSQL e no Oracle Database, o nível de isolamento de transação configurado por padrão (default) é:",
    options: [
      "A) Read Uncommitted",
      "B) Read Committed",
      "C) Repeatable Read",
      "D) Serializable",
      "E) Snapshot Isolation Puro sem Autocommit"
    ],
    correct: 1, // B
    explanation: "Tanto o PostgreSQL quanto o Oracle Database possuem o nível 'Read Committed' como isolamento padrão. Nesse nível, uma consulta vê apenas dados que foram confirmados antes do início da consulta (ou da declaração). Além disso, o PostgreSQL sequer implementa o modo 'Read Uncommitted' (se você configurá-lo, o Postgres trata internamente como Read Committed).",
    pegadinha: "O MySQL (com engine InnoDB) utiliza 'Repeatable Read' como padrão. Já o PostgreSQL, Oracle e SQL Server usam 'Read Committed' como padrão! Como o foco de tribunais é fortemente PostgreSQL e Oracle, a resposta é Read Committed.",
    dica: "Dica da FGV: Tanto o PostgreSQL quanto o Oracle Database possuem por padrão o nível de isolamento Read Committed (leitura de dados confirmados)."
  },
  {
    id: 44,
    subject: "Banco de Dados",
    topic: "Controle de Concorrência e Deadlocks",
    enunciado: "Em um ambiente transacional concorrente, dois processos bloqueiam mutuamente os recursos de que necessitam para concluir suas tarefas, resultando em um impasse permanente (deadlock). O mecanismo padrão comumente adotado pelos SGBDs relacionais modernos para resolver essa situação consiste em:",
    options: [
      "A) Desligar o nó primário do cluster para forçar o reinício da controladora de disco.",
      "B) Manter as transações em espera infinita até que o administrador humano execute um comando KILL.",
      "C) Detectar o ciclo de espera por meio de um grafo de espera (Wait-For Graph), selecionar uma das transações como vítima (victim) e abortá-la automaticamente com ROLLBACK.",
      "D) Converter automaticamente todos os bloqueios exclusivos em bloqueios compartilhados sem integridade.",
      "E) Aumentar a memória RAM alocada para os buffers de junção hash."
    ],
    correct: 2, // C
    explanation: "Os SGBDs modernos possuem um mecanismo em segundo plano de detecção de impasses (deadlock detector) que monitora o grafo de espera (Wait-For Graph). Quando um ciclo é detectado, o motor escolhe uma transação 'vítima' (geralmente a que realizou menos operações ou tem menor custo de reversão), emitindo um erro de deadlock e executando rollback automático.",
    pegadinha: "Deadlock não se resolve com mais memória nem espera infinita; a resolução ativa envolve detecção de ciclo e aborto/rollback de uma transação vítima.",
    dica: "Dica da FGV: Deadlocks são detectados por grafos de espera (Wait-For Graph) e solucionados abortando uma transação vítima com rollback automático."
  },
  {
    id: 45,
    subject: "Banco de Dados",
    topic: "Backup e Recuperação Pontual (PITR)",
    enunciado: "Um tribunal necessita restabelecer a base de dados do processo eletrônico para o exato estado em que se encontrava às 14h23min do dia anterior, momento imediatamente anterior a uma deleção acidental massiva de registros. A técnica e os componentes necessários para essa operação denominam-se:",
    options: [
      "A) Backup frio (Cold Backup) exclusivo com exportação lógica diária via pg_dump.",
      "B) Point-In-Time Recovery (PITR), utilizando uma cópia de segurança física de base (base backup) e o replay contínuo dos arquivos de log de transações (WAL/Archive Logs) até o timestamp desejado.",
      "C) Restauração diferencial sem logs de arquivamento.",
      "D) Espelhamento RAID 0 com replicação de hardware assíncrona.",
      "E) Desfragmentação de índices com recálculo de estatísticas de otimizador."
    ],
    correct: 1, // B
    explanation: "O Point-In-Time Recovery (PITR) é a técnica que permite restaurar o banco de dados em qualquer ponto específico no tempo. Ela requer um backup físico de base (base backup) acrescido dos logs contínuos de transações (WAL - Write-Ahead Logging no PostgreSQL ou Redo Logs no Oracle), aplicando o 'replay' das transações até a data/hora especificada.",
    pegadinha: "Backup puramente lógico (ex: dump) NÃO permite Point-In-Time Recovery (PITR). PITR exige backup físico + archiving contínuo de logs de transação (WAL).",
    dica: "Dica da FGV: Restaurar o banco para um segundo específico do passado exige backup físico de base somado ao arquivamento contínuo de logs de transação (WAL/Archive)."
  },
  {
    id: 46,
    subject: "Banco de Dados",
    topic: "Query Tuning e Planos de Execução",
    enunciado: "Ao analisar uma consulta lenta por meio do comando EXPLAIN ANALYZE no PostgreSQL, o DBA constata que o planejador escolheu uma varredura sequencial ('Seq Scan') em uma tabela de 50 milhões de linhas, apesar da existência de um índice B-Tree na coluna filtrada na cláusula WHERE. Qual das seguintes causas justifica tecnicamente a decisão do planejador?",
    options: [
      "A) O predicado na cláusula WHERE possui baixa seletividade, retornando mais de 70% das linhas da tabela, o que torna o custo de I/O aleatório do índice superior ao I/O sequencial.",
      "B) Índices B-Tree são incompatíveis com consultas que utilizam clausula WHERE com operador de igualdade.",
      "C) A tabela está com o parâmetro autovacuum ativado, o que invalida temporariamente o uso de índices em comandos SELECT.",
      "D) O comando EXPLAIN ANALYZE desativa compulsoriamente os nós de Index Scan para mensurar a velocidade de disco.",
      "E) O SGBD não consegue ler índices caso a tabela possua chave estrangeira definida."
    ],
    correct: 0, // A
    explanation: "O otimizador baseado em custos (CBO) decide usar índice ou varredura sequencial calculando o custo de I/O. Quando uma consulta tem BAIXA seletividade (ou seja, recupera um percentual expressivo das linhas da tabela, como 50% ou 70%), ler o índice e depois fazer I/O aleatório nas páginas de dados é muito mais lento do que ler a tabela sequencialmente em blocos contínuos (Seq Scan). Outro motivo comum é o uso de funções na coluna (ex: WHERE UPPER(coluna) = 'X') sem índice funcional.",
    pegadinha: "Muitos acham que 'ter índice = o banco é obrigado a usar'. O otimizador só usa o índice se a seletividade justificar o custo frente a um Seq Scan.",
    dica: "Dica da FGV: Observe o posicionamento da locução adverbial ao final da frase. A qual verbo ela pode estar sintaticamente conectada?"
  },
  {
    id: 47,
    subject: "Banco de Dados",
    topic: "Índices B-Tree vs Bitmap",
    enunciado: "Em bancos de dados relacionais para Data Warehouses (como no Oracle), os índices do tipo 'Bitmap' são especialmente recomendados para:",
    options: [
      "A) Colunas de alta cardinalidade com frequentes operações de UPDATE concorrentes em alta taxa de transação OLTP.",
      "B) Colunas de chave primária com números de protocolo sequenciais de autoincremento.",
      "C) Colunas de baixa cardinalidade (poucos valores distintos, como sexo, status de processo e esfera judiciária) em tabelas volumosas e predominantemente de consulta (leitura).",
      "D) Armazenamento de campos binários longos (BLOBs) e documentos XML não estruturados.",
      "E) Substituição obrigatória de todas as chaves estrangeiras para evitar locks de metadados."
    ],
    correct: 2, // C
    explanation: "Índices Bitmap utilizam cadeias de bits (0s e 1s) para representar a presença de valores. São ideais para colunas com BAIXA cardinalidade (poucos valores distintos, ex: status, gênero, UF) em ambientes analíticos/OLAP (DW), permitindo operações booleanas em nível de bit (AND, OR) ultra rápidas. Em contrapartida, são péssimos para OLTP devido ao travamento de blocos inteiros em operações de escrita/update.",
    pegadinha: "A FGV adora propor índice Bitmap para colunas de 'alta cardinalidade' em sistemas transacionais (OLTP). É o oposto: Bitmap é para BAIXA cardinalidade em ambientes de leitura/DW!",
    dica: "Dica da FGV: Índices Bitmap usam mapas de bits e são ideais para colunas de BAIXA cardinalidade (poucos valores repetidos em muitas linhas) em ambientes analíticos/DW."
  },
  {
    id: 48,
    subject: "Banco de Dados",
    topic: "Segurança de Dados e Mascaramento",
    enunciado: "Para atender aos preceitos da LGPD e garantir que dados sensíveis de partes em processos de segredo de justiça não sejam exibidos para estagiários ou desenvolvedores em ambientes de teste, a técnica que altera a exibição dos dados na camada de consulta sem modificar os dados originais gravados fisicamente em disco é denominada:",
    options: [
      "A) Mascaramento Dinâmico de Dados (Dynamic Data Masking)",
      "B) Criptografia Assimétrica PGP com eliminação de chave pública",
      "C) Truncamento de tabela com rollback diferido",
      "D) Hashing SHA-256 irreversível com perda definitiva do payload",
      "E) Anonimização física destrutiva permanente"
    ],
    correct: 0, // A
    explanation: "Dynamic Data Masking (DDM) limita a exposição de dados confidenciais mascarando-os na saída da consulta para usuários não privilegiados (ex: exibindo 'XXX.XXX.123-XX' ou '***@***.com'), enquanto os dados originais permanecem inalterados e íntegros na camada de armazenamento físico.",
    pegadinha: "Diferenciar mascaramento estático (altera a base de testes gravando dados fictícios em disco) de mascaramento dinâmico (ocorre on-the-fly na consulta conforme os privilégios do usuário).",
    dica: "Dica da FGV: Ocultar dígitos do CPF na tela de consulta para perfis não autorizados sem alterar os dados gravados no disco é o Mascaramento Dinâmico (DDM)."
  },
  {
    id: 49,
    subject: "Banco de Dados",
    topic: "Governança de Dados - DAMA-DMBOK",
    enunciado: "No framework DAMA-DMBOK (Data Management Body of Knowledge), a função de gerenciamento que atua como elemento central e integrador de todas as demais áreas de gestão de dados (incluindo arquitetura, qualidade, metadados e segurança) é a:",
    options: [
      "A) Engenharia de Software Ágil",
      "B) Governança de Dados (Data Governance)",
      "C) Modelagem Dimensional Foco-Fato",
      "D) Mineração Contínua de Logs de Rede",
      "E) Infraestrutura de Redes Definidas por Software (SDN)"
    ],
    correct: 1, // B
    explanation: "Na roda de disciplinas do DAMA-DMBOK (DAMA Wheel), a Governança de Dados ocupa o CENTRO exato da mandala, sendo responsável por definir autoridade, políticas, diretrizes, conformidade e direcionamento estratégico para todas as outras dez áreas de gerenciamento de dados.",
    pegadinha: "A 'mandala' ou roda do DAMA-DMBOK coloca sempre Governança de Dados no centro geométrico e estratégico.",
    dica: "Dica da FGV: Na mandala clássica de disciplinas do framework DAMA-DMBOK, qual disciplina ocupa o centro estratégico integrador?"
  },
  {
    id: 50,
    subject: "Banco de Dados",
    topic: "Integração Nacional de Dados - DataJud (CNJ)",
    enunciado: "Conforme a Resolução CNJ nº 331/2020, que institui a Base Nacional de Dados do Poder Judiciário (DataJud), assinale a opção correta quanto às responsabilidades dos tribunais:",
    options: [
      "A) O DataJud recebe dados anuais consolidados em relatórios PDF digitalizados enviados por ofício ao CNJ.",
      "B) Os tribunais devem realizar a remessa contínua e automatizada de dados e metadados processuais estruturados em formato padronizado (JSON via API REST) para o repositório central.",
      "C) A remessa ao DataJud é facultativa aos tribunais estaduais de pequeno e médio porte.",
      "D) O envio de informações sobre processos em segredo de justiça é terminantemente proibido e acarreta a exclusão do tribunal do painel.",
      "E) O DataJud substitui os bancos de dados locais de todos os tribunais, eliminando a custódia originária dos processos."
    ],
    correct: 1, // B
    explanation: "A Resolução CNJ 331/2020 estabelece o DataJud como a base unificada de dados processuais de todo o Judiciário brasileiro. A remessa é obrigatória, contínua e automatizada via APIs padronizadas com payloads estruturados em formato JSON, alimentando as estatísticas nacionais e painéis de jurimetria.",
    pegadinha: "A remessa NÃO é por PDF nem facultativa: é contínua, automatizada via API com estrutura de metadados padronizados pelo CNJ.",
    dica: "Dica da FGV: Pela Resolução CNJ 331/2020, o DataJud recebe remessa contínua e automatizada de dados e metadados estruturados via API pelos tribunais."
  },
  {
    id: 51,
    subject: "Banco de Dados",
    topic: "Pipelines ETL vs ELT",
    enunciado: "Nas arquiteturas modernas de Big Data e Data Warehouses em nuvem, a abordagem ELT (Extract, Load, Transform) tem substituído o pipeline tradicional ETL (Extract, Transform, Load) principalmente porque:",
    options: [
      "A) No ELT, a fase de transformação de dados é eliminada em definitivo do ciclo de vida dos dados.",
      "B) Motores analíticos modernos e Data Warehouses em nuvem dispõem de capacidade computacional altamente distribuída e escalável, permitindo carregar os dados brutos e executar as transformações massivas diretamente no destino.",
      "C) O formato de dados JSON não é suportado pelo padrão ETL tradicional.",
      "D) O ELT reduz a segurança ao expor dados não criptografados na fase de visualização dos dashboards.",
      "E) No modelo ELT, os dados são extraídos exclusivamente de APIs GraphQL."
    ],
    correct: 1, // B
    explanation: "No ETL tradicional, os dados eram extraídos, transformados em um servidor dedicado de processamento (para não onerar o DW de capacidade limitada) e só então carregados. No ELT moderno, com SGBDs analíticos em nuvem (Snowflake, BigQuery, Redshift, Spark), carrega-se o dado bruto rapidamente no destino (Data Lake/Lakehouse) e aproveita-se a imensa capacidade computacional distribuída do próprio destino para transformar os dados sob demanda.",
    pegadinha: "Cuidado: no ELT a transformação NÃO desaparece; ela apenas muda de lugar e momento, ocorrendo DEPOIS da carga diretamente no motor de processamento do repositório de destino.",
    dica: "Dica da FGV: No ELT, aproveita-se a alta capacidade computacional do Data Lake/Lakehouse de destino para executar as transformações diretamente após a carga."
  },
  {
    id: 52,
    subject: "Banco de Dados",
    topic: "Operações OLAP",
    enunciado: "Em uma sessão de análise jurimétrica interativa sobre um cubo de dados, um gestor do TJPB parte da visualização da taxa de congestionamento agrupada por 'Tribunal Inteiro', passa a enxergar por 'Comarcas' e, em seguida, detalha até o nível de 'Varas Judiciais'. A operação OLAP realizada nessa sequência denomina-se:",
    options: [
      "A) Roll-up",
      "B) Drill-down",
      "C) Slice",
      "D) Dice",
      "E) Pivot (Rotate)"
    ],
    correct: 1, // B
    explanation: "- Drill-down: desce na hierarquia conceitual, aumentando o nível de detalhe (de Tribunal -> Comarca -> Vara);\n- Roll-up: sobe na hierarquia, agregando/consolidando dados (de Vara -> Comarca -> Tribunal);\n- Slice: corta uma fatia do cubo fixando uma dimensão (ex: dados apenas do ano de 2026);\n- Dice: seleciona um subcubo filtrando múltiplas dimensões;\n- Pivot/Rotate: rotaciona os eixos do cubo para mudar a perspectiva visual.",
    pegadinha: "Drill-down (descer/detalhar) vs Roll-up (subir/resumir). Essa dupla é figurinha carimbada em qualquer concurso da FGV com conteúdo de BI e OLAP.",
    dica: "Dica da FGV: Descer de Tribunal para Comarcas e de Comarcas para Varas aumentando o nível de detalhe analítico é a operação de Drill-down."
  },
  {
    id: 53,
    subject: "Banco de Dados",
    topic: "Arquiteturas de Armazenamento - Lakehouse vs Lake vs DW",
    enunciado: "A arquitetura de gerenciamento de dados que combina a flexibilidade, o baixo custo e o suporte a dados semiestruturados/não estruturados de um Data Lake com os recursos de conformidade transacional ACID, governança e otimização de consultas de um Data Warehouse é denominada:",
    options: [
      "A) Data Mart Isolado",
      "B) Data Lakehouse",
      "C) Enterprise Service Bus (ESB)",
      "D) Repositório FTP Centralizado",
      "E) Storage Area Network (SAN) Lógica"
    ],
    correct: 1, // B
    explanation: "O Data Lakehouse é a fusão arquitetural moderna do melhor dos dois mundos: une a capacidade de armazenar grandes volumes de dados brutos e multimídia a baixo custo (típico do Data Lake, ex: S3/HDFS com formatos Parquet/Delta Lake) com o suporte a transações ACID, versionamento (time travel) e esquemas de governança (típicos do Data Warehouse).",
    pegadinha: "Saber a evolução cronológica e conceitual: Data Warehouse (dados estruturados limpos) -> Data Lake (dados brutos de qualquer formato) -> Data Lakehouse (fusão com ACID e governança sobre o lake).",
    dica: "Dica da FGV: A junção da flexibilidade de baixo custo do Data Lake com as garantias transacionais ACID do Data Warehouse denomina-se Data Lakehouse."
  },
  {
    id: 54,
    subject: "Banco de Dados",
    topic: "Ecossistema Big Data - Apache Spark e Hadoop",
    enunciado: "No processamento de grandes volumes de dados (Big Data), o Apache Spark consolidou-se em relação ao modelo original MapReduce do Hadoop principalmente por:",
    options: [
      "A) Utilizar exclusivamente discos mecânicos para gravação de resultados intermediários entre etapas.",
      "B) Realizar processamento distribuído em memória (in-memory computing) baseado na abstração de RDDs (Resilient Distributed Datasets) e DataFrames, acelerando drasticamente pipelines iterativos.",
      "C) Eliminar a necessidade de nós de processamento 'worker' em arquiteturas de cluster.",
      "D) Exigir que todos os scripts sejam compilados obrigatoriamente na linguagem Fortran 77.",
      "E) Operar apenas como banco de dados NoSQL de chave-valor em modo single-thread."
    ],
    correct: 1, // B
    explanation: "O Hadoop MapReduce clássico persistia os resultados intermediários de cada etapa em disco (I/O intensivo). O Apache Spark introduziu a computação distribuída em memória com coleções tolerantes a falhas conhecidas como RDDs (Resilient Distributed Datasets), chegando a ser até 100 vezes mais rápido em tarefas analíticas e algoritmos de machine learning iterativos.",
    pegadinha: "MapReduce = I/O em disco a cada fase (lento para iterações). Spark = computação distribuída em memória RAM (in-memory).",
    dica: "Dica da FGV: A grande vantagem do Apache Spark sobre o MapReduce clássico é o processamento distribuído em memória RAM (in-memory) com RDDs."
  },
  {
    id: 55,
    subject: "Banco de Dados",
    topic: "Bancos NoSQL e Modelos de Dados",
    enunciado: "Associe as tecnologias de bancos de dados NoSQL aos seus respectivos modelos de dados primários:\n\n1. MongoDB\n2. Redis\n3. Neo4j\n4. Apache Cassandra\n\n( ) Modelo de Chave-Valor (Key-Value)\n( ) Modelo Orientado a Documentos (JSON/BSON)\n( ) Modelo de Família de Colunas (Wide-Column)\n( ) Modelo Orientado a Grafos (Nós e Arestas)\n\nA sequência correta de preenchimento, de cima para baixo, é:",
    options: [
      "A) 2 - 1 - 4 - 3",
      "B) 1 - 2 - 3 - 4",
      "C) 2 - 4 - 1 - 3",
      "D) 3 - 1 - 4 - 2",
      "E) 4 - 2 - 1 - 3"
    ],
    correct: 0, // A
    explanation: "- 2. Redis: Chave-Valor (Key-Value) em memória;\n- 1. MongoDB: Documentos (JSON/BSON);\n- 4. Apache Cassandra: Família de colunas (Wide-Column / Colunar);\n- 3. Neo4j: Grafos (nós, relacionamentos/arestas e propriedades).\nSequência: 2 - 1 - 4 - 3.",
    pegadinha: "A FGV sempre cobra o emparelhamento clássico entre famílias NoSQL e seus softwares representativos.",
    dica: "Dica da FGV: Redis é chave-valor, MongoDB é documento, Cassandra é colunar (wide-column) e Neo4j é orientado a grafos."
  },
  {
    id: 56,
    subject: "Banco de Dados",
    topic: "Sistemas Distribuídos - Teorema CAP e PACELC",
    enunciado: "Em sistemas distribuídos de banco de dados, o Teorema CAP estabelece que, na ocorrência de uma partição de rede (P), o sistema deve optar entre:",
    options: [
      "A) Baixo custo de armazenamento ou alta taxa de compressão.",
      "B) Consistência estrita (C) ou Disponibilidade contínua (A).",
      "C) Criptografia ponta a ponta ou replicação síncrona.",
      "D) Escalabilidade vertical ou escalabilidade horizontal.",
      "E) Modelo relacional ou modelo hierárquico."
    ],
    correct: 1, // B
    explanation: "O Teorema CAP de Eric Brewer estabelece que um sistema distribuído pode garantir no máximo 2 de 3 propriedades: Consistência (C), Disponibilidade (A) e Tolerância a Partição (P). Como em redes reais as partições de rede (falhas de comunicação) são inevitáveis (P é mandatório), diante de uma partição o sistema DEVE escolher entre manter a Consistência (CP - rejeita requisições se não puder garantir dado atualizado) ou Disponibilidade (AP - responde requisições com dados potencialmente desatualizados).",
    pegadinha: "A extensão PACELC diz: se há Partição (P), escolha entre A ou C; ELSE (E), escolha entre Latência (L) ou Consistência (C).",
    dica: "Dica da FGV: No Teorema CAP, na presença de partição de rede (P), o sistema é obrigado a escolher entre Consistência estrita (C) ou Disponibilidade (A)."
  },
  {
    id: 57,
    subject: "Banco de Dados",
    topic: "Ciência de Dados e Estatística Descritiva",
    enunciado: "Em uma amostra de tempos de resposta de consultas SQL no cluster (em milissegundos), obtiveram-se os seguintes valores: [10, 12, 12, 14, 15, 18, 90].\n\nSobre as medidas de tendência central dessa amostra, assinale a opção correta:",
    options: [
      "A) A média aritmética é a medida mais robusta para representar a tendência central dessa amostra, pois não sofre influência do valor 90.",
      "B) A mediana da amostra é igual a 14 e a moda é igual a 12.",
      "C) A mediana da amostra é 15 e inexiste moda no conjunto.",
      "D) A variância amostral independe da dispersão em torno da média.",
      "E) A moda da amostra é 90 e a mediana é 12."
    ],
    correct: 1, // B
    explanation: "Amostra ordenada: 10, 12, 12, 14, 15, 18, 90 (n = 7 elementos).\n- Elemento central (mediana): 4º elemento = 14.\n- Elemento que mais se repete (moda): 12 (aparece 2 vezes).\n- Média: (10+12+12+14+15+18+90)/7 = 171/7 = 24,4 ms. O valor extremo (outlier) 90 distorce a média para cima, tornando a mediana a medida mais robusta.",
    pegadinha: "Saber que a média é altamente sensível a outliers (valores discrepantes), enquanto a mediana é resistente/robusta!",
    dica: "Dica da FGV: Em distribuições com valores extremos (outliers), a média é distorcida, mas a mediana permanece estável no centro dos dados ordenados."
  },
  {
    id: 58,
    subject: "Banco de Dados",
    topic: "Estatística Inferencial e Testes de Hipóteses",
    enunciado: "Em um teste de hipóteses estatístico para avaliar se a adoção de um novo algoritmo de indexação reduziu significativamente o tempo médio de resposta das consultas, o erro do Tipo I (falso positivo) consiste em:",
    options: [
      "A) Aceitar a hipótese nula quando ela é verdadeira.",
      "B) Rejeitar a hipótese nula (H0) quando ela é, de fato, verdadeira.",
      "C) Não rejeitar a hipótese nula quando ela é falsa.",
      "D) Obter um valor-p (p-value) superior ao nível de significância alfa adotado.",
      "E) Concluir que a média da população é infinita."
    ],
    correct: 1, // B
    explanation: "- Erro Tipo I (alfa): Rejeitar H0 quando H0 é verdadeira (falso positivo - achar que houve efeito quando não houve);\n- Erro Tipo II (beta): Não rejeitar H0 quando H0 é falsa (falso negativo - não detectar o efeito real existente);\n- Nível de significância (alfa) é a probabilidade máxima tolerada de cometer o Erro Tipo I.",
    pegadinha: "Decore para a FGV:\n- Tipo I = Condenar um inocente (rejeitar H0 verdadeira).\n- Tipo II = Absolver um culpado (não rejeitar H0 falsa).",
    dica: "Dica da FGV: Erro Tipo I equivale a condenar um inocente: rejeitar a hipótese nula H0 quando ela é verdadeira."
  },
  {
    id: 59,
    subject: "Banco de Dados",
    topic: "Machine Learning e Análise com Python",
    enunciado: "No desenvolvimento de modelos analíticos em Python com a biblioteca Scikit-Learn e Pandas, quando um modelo supervisionado apresenta um erro extremamente baixo na base de treinamento, mas apresenta desempenho insatisfatório e taxa de erro elevada nos dados inéditos de teste, constata-se a ocorrência de:",
    options: [
      "A) Underfitting (subajuste) e alto viés.",
      "B) Overfitting (sobreajuste) e alta variância.",
      "C) Convergência assintótica ideal.",
      "D) Ausência de regularização L1 e L2 que gerou subdimensionamento de nós.",
      "E) Data drift espontâneo no pipeline de pré-processamento."
    ],
    correct: 1, // B
    explanation: "Overfitting (sobreajuste): o modelo 'decorou' os ruídos e peculiaridades dos dados de treino (alta variância, baixo viés nos treinos), perdendo a capacidade de generalização para dados novos (erro alto nos testes). Corrige-se com técnicas de regularização (L1/L2), poda de árvores (pruning), dropout, redução de complexidade e cross-validation.",
    pegadinha: "Overfitting = decora o treino, falha no teste (alta variância). Underfitting = não aprende nem o treino (alto viés).",
    dica: "Dica da FGV: Modelo que tem erro quase zero no treino mas erra grosseiramente nos dados inéditos de teste sofreu sobreajuste (overfitting)."
  },
  {
    id: 60,
    subject: "Banco de Dados",
    topic: "Algoritmos de Agrupamento - K-Means",
    enunciado: "Em relação ao algoritmo de aprendizado de máquina não supervisionado K-Means, amplamente utilizado para agrupar perfis de litigantes em ações judiciais, assinale a opção correta:",
    options: [
      "A) O algoritmo determina automaticamente e com precisão absoluta o número ideal de clusters k sem necessidade de especificação prévia pelo usuário.",
      "B) O K-Means é um método de classificação supervisionado que exige rótulos (labels) prévios em todas as instâncias da base.",
      "C) Trata-se de um algoritmo de particionamento no qual o número de grupos 'k' é definido previamente, buscando minimizar a soma dos quadrados das distâncias intra-cluster (inércia) em relação aos centróides.",
      "D) O K-Means não é sensível à escala dos atributos nem a valores discrepantes (outliers).",
      "E) A convergência do K-Means garante que o agrupamento final atingirá sempre o ótimo global da função de custo."
    ],
    correct: 2, // C
    explanation: "O K-Means é um algoritmo NÃO SUPERVISIONADO (sem rótulos). O usuário DEVE especificar previamente o parâmetro 'k' (número de clusters). O algoritmo busca minimizar a soma das distâncias euclidianas quadradas entre os pontos e seus respectivos centróides. É altamente sensível a outliers e à escala das variáveis (exige normalização prévia), e pode convergir para mínimos locais.",
    pegadinha: "Afirmar que o K-Means 'descobre sozinho' o número k. Não descobre! Técnicas auxiliares como o Método do Cotovelo (Elbow Method) ou Coeficiente de Silhueta são necessárias para estimar o melhor k.",
    dica: "Dica da FGV: O K-Means é não supervisionado e exige que o analista forneça previamente o hiperparâmetro k (número de clusters desejados)."
  }
];

// Dados da Prova Discursiva Oficial (Estudo de Caso conforme item 10.7 do edital)
const DISCURSIVA_DATA = {
  titulo: "Estudo de Caso: Modernização, Alta Disponibilidade e Segurança do Banco de Dados do PJe",
  valor: 40,
  maxLinhas: 30,
  enunciado: `O Tribunal de Justiça do Estado da Paraíba (TJPB) está conduzindo um projeto estratégico de modernização de sua infraestrutura de dados para suportar a crescente demanda de processos eletrônicos e a integração com a Plataforma Digital do Poder Judiciário (PDPJ-Br). Durante os horários de pico judiciário (das 13h às 17h), os usuários vêm enfrentando lentidão acentuada em consultas de distribuição processual e relatórios estatísticos, além de eventuais bloqueios mútuos (deadlocks). Paralelamente, o Comitê de Segurança da Informação identificou a necessidade de reforçar a resiliência contra ataques de ransomware, garantindo Point-In-Time Recovery (PITR) e conformidade rigorosa com a LGPD para dados sensíveis em segredo de justiça.

Na condição de Analista Judiciário - Especialidade Banco de Dados, redija um texto técnico-dissertativo (Estudo de Caso), de 20 a 30 linhas, contemplando fundamentadamente os seguintes aspectos:

1. Diagnóstico e Otimização de Consultas (Query Tuning): Descreva as ações técnicas para identificar e sanar gargalos de performance e deadlocks no SGBD relacional PostgreSQL, citando parâmetros e ferramentas de diagnóstico.
2. Arquitetura de Alta Disponibilidade e Recuperação de Desastres (DRP/PITR): Apresente uma estratégia de replicação e contingência para assegurar RPO próximo a zero e RTO reduzido, explicando o papel do backup físico e dos logs WAL no Point-In-Time Recovery.
3. Segurança e Governança de Dados (LGPD/DAMA-DMBOK): Indique mecanismos de controle de acesso lógico e proteção de dados em repouso e em trânsito aplicáveis a dados processuais sensíveis.`,
  espelhoCorrecao: [
    {
      criterio: "1. Diagnóstico e Query Tuning (14 pontos)",
      detalhes: "Citação do comando EXPLAIN (ANALYZE, BUFFERS) para avaliar planos de execução; análise de varreduras sequenciais (Seq Scan) vs index scan; criação/revisão de índices B-Tree/compostos e estatísticas (ANALYZE); identificação de deadlocks via view pg_stat_activity e ajuste de parâmetros como deadlock_timeout e log_lock_waits; separação de cargas analíticas pesadas (OLAP) da carga transacional (OLTP)."
    },
    {
      criterio: "2. Alta Disponibilidade e PITR (14 pontos)",
      detalhes: "Proposta de replicação síncrona ou assíncrona com failover automatizado (ex: Patroni/PgBouncer); estratégia de backup físico de base (pg_basebackup) combinado com arquivamento contínuo de logs de transação (Write-Ahead Logging - WAL/archive_command); explicação de que o PITR permite restaurar o estado consistente do banco até o milissegundo imediatamente anterior à falha ou corrupção lógica; backup imutável com air-gap contra ransomware para atingir RPO e RTO estipulados."
    },
    {
      criterio: "3. Segurança, Mascaramento e LGPD (12 pontos)",
      detalhes: "Controle de acesso baseado em papéis (RBAC) e princípio do menor privilégio; criptografia em trânsito (TLS/SSL) e em repouso (TDE ou particionamento criptografado LUKS); mascaramento dinâmico de dados (Dynamic Data Masking) para dados sensíveis em segredo de justiça; trilhas de auditoria (pgAudit) para rastreabilidade de acessos; conformidade com a LGPD e boas práticas do framework DAMA-DMBOK."
    }
  ],
  dicasRedacao: [
    "A FGV pontua pelo padrão de resposta estritamente técnico: use termos precisos (WAL, EXPLAIN ANALYZE, RBAC, PITR, RPO, RTO).",
    "Estruture em 3 parágrafos bem definidos, respondendo na ordem exata dos 3 itens solicitados.",
    "Mantenha a letra legível e preencha entre 25 e 30 linhas (o edital estipula 30 linhas máximas).",
    "Nunca assine ou faça marcas no corpo da folha de resposta que possam identificar sua prova (motivo de nota zero pelo edital)."
  ]
};

// Dicas estratégicas das pegadinhas da banca FGV
const PEGANHAS_FGV_DATA = [
  {
    tema: "Lógica Trivalente e Valores NULL no SQL",
    descricao: "A FGV adora colocar condições do tipo `coluna NOT IN (SELECT coluna FROM tabela)` em que a subquery contém pelo menos um registro com valor NULL. Na lógica do SQL (True, False, Unknown), qualquer comparação `X <> NULL` resulta em Unknown, o que anula todo o predicado e faz a query retornar ZERO linhas!",
    comoEvitar: "Sempre verifique se a coluna da subquery pode ter NULL. Se tiver, use `NOT EXISTS` ou adicione `WHERE coluna IS NOT NULL`."
  },
  {
    tema: "RANK() vs DENSE_RANK() vs ROW_NUMBER()",
    descricao: "A banca costuma descrever um caso de empate e perguntar qual função NÃO pula números na classificação. Ela induz o candidato a marcar `RANK()`, quando na verdade `RANK()` pula posições (1, 2, 2, 4) e `DENSE_RANK()` mantém a sequência sem buracos (1, 2, 2, 3).",
    comoEvitar: "Lembre-se: 'Dense' = denso, compacto, sem furos. RANK = deixa buracos proporcionais ao número de empates."
  },
  {
    tema: "Normalização: 3FN vs Forma Normal de Boyce-Codd (FNBC)",
    descricao: "Uma tabela na 3FN permite que uma dependência `X -> Y` exista caso `Y` seja atributo primo, mesmo que `X` não seja superchave. Na FNBC, ESSA EXCEÇÃO NÃO É TOLERADA: para TODA e qualquer dependência funcional não-trivial `X -> Y`, `X` OBRIGATORIAMENTE tem de ser superchave.",
    comoEvitar: "Se houver chaves candidatas sobrepostas e um atributo determinante não for chave candidata, a relação está na 3FN, mas NÃO na FNBC."
  },
  {
    tema: "Negação de Proposições Condicionais (Se P, então Q)",
    descricao: "A pegadinha mais reincidente do RLM da FGV. A banca coloca alternativas como 'Se não P, então não Q' ou 'Se Q, então P'. O candidato ansioso marca achando que condicional se nega com outra condicional.",
    comoEvitar: "Regra do MANÉ: Mantém a primeira E Nega a segunda. A negação de `P -> Q` é `P ^ ~Q`. NUNCA começa com 'Se'."
  },
  {
    tema: "Teorema CAP e a Falácia do 'Sistema Completo'",
    descricao: "A FGV adora criar cenários onde uma empresa precisa de Consistência Absoluta, Disponibilidade Total e Tolerância a Falhas de Rede em tempo real, perguntando qual banco entrega as três plenamente.",
    comoEvitar: "Nenhum banco distribuído real entrega os 3 simultaneamente durante uma partição de rede! Ou ele é CP (Consistente e Tolerante a Partições, como HBase/MongoDB com réplica primária) ou AP (Disponível e Tolerante a Partições, como Cassandra/CouchDB)."
  },
  {
    tema: "PostgreSQL: MVCC e o Papel do VACUUM",
    descricao: "Muitos candidatos acham que o UPDATE no PostgreSQL substitui os bytes diretamente no disco. Na verdade, ele faz um INSERT de uma nova tupla e marca a tupla antiga como 'morta' no campo xmax. Sem a execução do VACUUM (ou autovacuum), o banco sofre 'bloat' (inchaço de disco e lentidão de queries).",
    comoEvitar: "Nas discursivas e objetivas da FGV, sempre cite o MVCC (xmin/xmax) e o VACUUM como elementos centrais da administração do PostgreSQL."
  }
];
