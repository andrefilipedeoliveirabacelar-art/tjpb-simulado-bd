# 🏛️ Sistema Web Simulado TJPB 2026/2027
## Cargo: Analista Judiciário – Especialidade: Banco de Dados (Cargo 7)
### Banca Organizadora: FGV Conhecimento | Edital Nº 01/2026

Este sistema web foi desenvolvido especificamente com base nas **55 páginas do Edital nº 01/2026 do Tribunal de Justiça do Estado da Paraíba (TJPB)** para o cargo de **Analista Judiciário - Área TI - Banco de Dados**.

---

### 🚀 Como Abrir e Utilizar o Sistema

O sistema é uma aplicação web completa (Single Page Application responsiva), sem necessidade de instalação de pacotes pesados ou backend complexo:

1. **Abra o arquivo no seu navegador preferido**:
   - Dê um duplo clique ou abra no Chrome, Edge ou Firefox o arquivo:
     `C:\Users\oliveira.andre\.gemini\antigravity\scratch\tjpb-simulado-bd\index.html`
2. **Ou inicie um servidor HTTP local simples**:
   - Abra o terminal na pasta do projeto e execute:
     ```bash
     npx serve .
     # ou
     python -m http.server 8080
     ```
   - E acesse `http://localhost:8080` no navegador.

---

### 🌟 Funcionalidades Integradas do Sistema

1. **Simulado da Prova Objetiva Oficial (60 Questões)**:
   - **Módulo I - Conhecimentos Gerais (20 questões)**:
     - 10 Questões de Língua Portuguesa (estilo puro FGV: ambiguidade, reescrita, paralelismo, coesão).
     - 10 Questões de Raciocínio Lógico-Matemático (negação condicional, teoria de conjuntos, probabilidade condicional, combinatória, verdades e mentiras).
   - **Módulo II - Conhecimentos Específicos (40 questões)**:
     - Fundamentos de TI no Judiciário (PDPJ-Br Res. CNJ 335/2020, MoReq-Jus Res. CNJ 522/2023, LGPD no Judiciário, Nuvem e Ágil).
     - Modelagem Conceitual, Lógica, Física, DER/MER e Álgebra Relacional.
     - Normalização Rigorosa: 1FN, 2FN, 3FN e Forma Normal de Boyce-Codd (FNBC).
     - Modelagem Dimensional: Star Schema, Snowflake, Galaxy/Constelação e Cubos OLAP.
     - SQL ANSI Avançado: Window Functions (`ROW_NUMBER`, `RANK`, `DENSE_RANK`, `LAG`, `LEAD`, `OVER`, `PARTITION BY`), CTEs recursivas, Junções complexas e armadilhas com valores `NULL`.
     - Administração e Desempenho: Propriedades ACID, Níveis de Isolamento ANSI (`Read Committed`, `Repeatable Read`, `Serializable`), Controle de Concorrência, MVCC no PostgreSQL, Detecção de Deadlocks, Point-In-Time Recovery (PITR), Backup físico vs lógico, Logs WAL/Redo.
     - Query Tuning & Otimização: Planos de Execução com `EXPLAIN ANALYZE`, seletividade, Índices B-Tree vs Bitmap.
     - NoSQL e Sistemas Distribuídos: Modelos de dados (MongoDB, Redis, Cassandra, Neo4j), Teorema CAP e modelo PACELC.
     - Big Data e Data Warehousing: Pipelines ETL vs ELT, Data Lakehouse, Apache Spark in-memory vs Hadoop MapReduce.
     - Ciência de Dados e Machine Learning: Estatística descritiva, testes de hipóteses, erro Tipo I e II, K-Means, Overfitting/Underfitting e análise com Python (Pandas/NumPy).

2. **Dois Modos de Estudo Interativos**:
   - ⏱️ **Modo Prova Real (Sem Gabarito Imediato)**: Cronômetro regressivo oficial de 5 horas (13h às 18h, item 10.1 do edital), com cartão de respostas integrado. O gabarito só é revelado ao finalizar a prova, simulando a tensão e ritmo do dia do concurso.
   - 💡 **Modo Treino / Aprendizado (Com Gabarito Imediato)**: Feedback instantâneo a cada clique, com justificativa detalhada de cada assertiva, fundamentação técnica oficial e a identificação da **Pegadinha da FGV** embutida na questão.

3. **Cartão Óptico de Respostas Virtual**:
   - Grade interativa de bolinhas simulando a folha de respostas física oficial da FGV (item 10.10 do edital), com suporte para impressão.

4. **Prova Discursiva (Estudo de Caso - Item 10.7 do Edital)**:
   - Estudo de caso com limite rigoroso de até 30 linhas (valendo 40 pontos).
   - Contador de linhas em tempo real com alertas de estouro de limite.
   - Espelho oficial de correção nos 3 eixos técnicos exigidos para o cargo de Banco de Dados.
   - Orientações e penalidades do edital (risco de nota zero).

5. **Raio-X das Armadilhas e Pegadinhas da FGV**:
   - Seção dedicada explicando as técnicas que a banca utiliza para derrubar candidatos em Banco de Dados, RLM e Português (lógica trivalente de NULL, confusão de RANK vs DENSE_RANK, FNBC vs 3FN, negação de condicionais, etc.).

6. **Diagnóstico Inteligente e Trilha de Estudos**:
   - Avaliação automática da linha de corte:
     - Ampla Concorrência: mínimo de 60% (36 pontos)
     - Cotas PPIQ e PcD: 20% inferior à ampla (29 pontos)
   - Gráficos de proficiência por macroárea.
   - Classificação automática de tópicos em **Prioridade Urgente (< 50% de acertos)** e **Prioridade Moderada (50% a 74%)**, indicando exatamente o que você precisa revisar antes da prova!

---

### 📑 Dados do Concurso TJPB 2026/2027 (Cargo: Banco de Dados)
- **Vencimento Básico:** R$ 7.526,14 (30 horas semanais)
- **Auxílio Alimentação:** R$ 2.200,00
- **Auxílio Saúde:** R$ 1.800,00
- **Remuneração Inicial Total:** **R$ 11.526,14**
- **Data da Prova:** 24 de janeiro de 2027 (das 13h às 18h)
