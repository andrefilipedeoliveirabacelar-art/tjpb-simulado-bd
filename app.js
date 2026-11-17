// Lógica Principal da Aplicação do Simulado TJPB - Cargo 7: Banco de Dados (FGV)

// Estado da Aplicação
const AppState = {
  mode: 'exam', // 'exam' (modo prova real) ou 'study' (modo treino com dicas e sem entrega de resposta imediata)
  currentQuestionIndex: 0,
  userAnswers: {}, // { [questionId]: selectedOptionIndex }
  flaggedQuestions: new Set(), // Set com ids marcados para revisão
  studyRevealed: new Set(), // Set de ids de questões onde o gabarito completo foi revelado no Modo Treino
  examFinished: false,
  timerSeconds: 5 * 60 * 60, // 5 horas (18.000 segundos conforme item 10.1 do edital)
  timerInterval: null,
  discursivaTexto: "",
  activeFilter: 'all', // 'all', 'portugues', 'rlm', 'especificas', 'flagged'
  simuladoId: 1, // Número da edição atual do simulado
  cadernoTipo: "Tipo 1 - Branca", // Caderno oficial estilo FGV
  simuladosHistorico: [], // Lista de simulados já realizados
  activeQuestions: [] // Array de questões em vigor no simulado atual
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  if (!AppState.activeQuestions || AppState.activeQuestions.length === 0) {
    AppState.activeQuestions = JSON.parse(JSON.stringify(QUESTIONS_DATA));
  }
  renderQuestionNav();
  renderCurrentQuestion();
  renderGabaritoGrid();
  renderPegadinhas();
  renderDiscursiva();
  renderHistoricoSimulados();
  initTimer();
  updateProgressUI();
  setupEventListeners();
  atualizarCalculadoraProjecao();
});

// Event Listeners Globais
function setupEventListeners() {
  // Troca de abas principais
  document.querySelectorAll('[data-tab-target]').forEach(button => {
    button.addEventListener('click', (e) => {
      const targetId = button.getAttribute('data-tab-target');
      switchMainTab(targetId);
    });
  });

  // Troca de modo (Prova Real vs Modo Treino)
  const modeRadios = document.querySelectorAll('input[name="sim-mode"]');
  modeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      AppState.mode = e.target.value;
      saveToLocalStorage();
      renderCurrentQuestion();
      renderGabaritoGrid();
      const alertMsg = AppState.mode === 'study' 
        ? "💡 Modo Treino Ativado: Ao responder, o sistema dirá na hora se acertou ou errou e dará dicas técnicas sem entregar a resposta de primeira!"
        : "⏱️ Modo Prova Real Ativado: Sem gabarito ou dicas imediatas. Suas respostas serão avaliadas ao final das 60 questões!";
      showToast(alertMsg);
    });
  });

  // Filtro de Questões
  const filterSelect = document.getElementById('filter-subject');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      AppState.activeFilter = e.target.value;
      renderQuestionNav();
      const filtered = getFilteredQuestions();
      if (filtered.length > 0) {
        const firstIdx = AppState.activeQuestions.findIndex(q => q.id === filtered[0].id);
        if (firstIdx !== -1) goToQuestion(firstIdx);
      }
    });
  }
}

// Alternar abas do cabeçalho
function switchMainTab(targetId) {
  document.querySelectorAll('.tab-content-section').forEach(el => el.classList.add('hidden'));
  const targetEl = document.getElementById(targetId);
  if (targetEl) targetEl.classList.remove('hidden');

  document.querySelectorAll('[data-tab-target]').forEach(btn => {
    if (btn.getAttribute('data-tab-target') === targetId) {
      btn.classList.add('border-blue-600', 'text-blue-700', 'font-semibold', 'bg-blue-50/60');
      btn.classList.remove('border-transparent', 'text-slate-600');
    } else {
      btn.classList.remove('border-blue-600', 'text-blue-700', 'font-semibold', 'bg-blue-50/60');
      btn.classList.add('border-transparent', 'text-slate-600');
    }
  });

  if (targetId === 'tab-historico') {
    renderHistoricoSimulados();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filtro de Questões
function getFilteredQuestions() {
  const list = AppState.activeQuestions;
  if (AppState.activeFilter === 'all') return list;
  if (AppState.activeFilter === 'portugues') return list.filter(q => q.subject === 'Língua Portuguesa');
  if (AppState.activeFilter === 'rlm') return list.filter(q => q.subject === 'Raciocínio Lógico-Matemático');
  if (AppState.activeFilter === 'especificas') return list.filter(q => q.subject !== 'Língua Portuguesa' && q.subject !== 'Raciocínio Lógico-Matemático');
  if (AppState.activeFilter === 'flagged') return list.filter(q => AppState.flaggedQuestions.has(q.id));
  return list;
}

// Renderiza a navegação superior por bolinhas/números
function renderQuestionNav() {
  const container = document.getElementById('question-nav-container');
  if (!container) return;

  container.innerHTML = '';
  const filtered = getFilteredQuestions();

  AppState.activeQuestions.forEach((q, idx) => {
    const isFilteredIn = filtered.some(fq => fq.id === q.id);
    if (!isFilteredIn) return;

    const btn = document.createElement('button');
    btn.textContent = q.id;
    btn.dataset.index = idx;
    
    const isCurrent = AppState.currentQuestionIndex === idx;
    const isAnswered = AppState.userAnswers[q.id] !== undefined;
    const isFlagged = AppState.flaggedQuestions.has(q.id);

    let baseClass = "w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all duration-150 relative ";

    if (isCurrent) {
      baseClass += "ring-2 ring-blue-600 ring-offset-2 ";
    }

    if (AppState.examFinished) {
      const isCorrect = AppState.userAnswers[q.id] === q.correct;
      if (!isAnswered) {
        baseClass += "bg-slate-200 text-slate-500 border border-slate-300";
      } else if (isCorrect) {
        baseClass += "bg-emerald-600 text-white shadow-xs";
      } else {
        baseClass += "bg-rose-500 text-white shadow-xs";
      }
    } else {
      if (AppState.mode === 'study' && isAnswered) {
        const isRight = AppState.userAnswers[q.id] === q.correct;
        if (isRight) {
          baseClass += "bg-emerald-600 text-white shadow-xs";
        } else {
          baseClass += "bg-rose-500 text-white shadow-xs";
        }
      } else if (isAnswered) {
        baseClass += "bg-blue-600 text-white hover:bg-blue-700";
      } else {
        baseClass += "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100";
      }
    }

    if (isFlagged) {
      const dot = document.createElement('span');
      dot.className = "absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-white";
      btn.appendChild(dot);
    }

    btn.className = baseClass;
    btn.addEventListener('click', () => goToQuestion(idx));
    container.appendChild(btn);
  });
}

// Navegar para questão específica
function goToQuestion(index) {
  if (index < 0 || index >= AppState.activeQuestions.length) return;
  AppState.currentQuestionIndex = index;
  renderQuestionNav();
  renderCurrentQuestion();
  updateProgressUI();
}

function nextQuestion() {
  if (AppState.currentQuestionIndex < AppState.activeQuestions.length - 1) {
    goToQuestion(AppState.currentQuestionIndex + 1);
  }
}

function prevQuestion() {
  if (AppState.currentQuestionIndex > 0) {
    goToQuestion(AppState.currentQuestionIndex - 1);
  }
}

// Marcar/Desmarcar Dúvida
function toggleFlagCurrentQuestion() {
  const currentQ = AppState.activeQuestions[AppState.currentQuestionIndex];
  if (AppState.flaggedQuestions.has(currentQ.id)) {
    AppState.flaggedQuestions.delete(currentQ.id);
  } else {
    AppState.flaggedQuestions.add(currentQ.id);
  }
  saveToLocalStorage();
  renderQuestionNav();
  renderCurrentQuestion();
}

// Responder questão
function selectOption(optionIndex) {
  if (AppState.examFinished && AppState.mode === 'exam') return;

  const currentQ = AppState.activeQuestions[AppState.currentQuestionIndex];
  
  // No modo treino, se já revelou o gabarito oficial completo e acertou, não precisa reprocessar a não ser por retry
  if (AppState.mode === 'study' && AppState.studyRevealed.has(currentQ.id) && AppState.userAnswers[currentQ.id] === currentQ.correct) {
    return;
  }

  AppState.userAnswers[currentQ.id] = optionIndex;
  
  // No modo estudo: se acertou, marca como revelado automaticamente
  if (AppState.mode === 'study' && optionIndex === currentQ.correct) {
    AppState.studyRevealed.add(currentQ.id);
  }

  saveToLocalStorage();
  renderCurrentQuestion();
  renderQuestionNav();
  renderGabaritoGrid();
  updateProgressUI();
}

// Tentar novamente a mesma questão no Modo Treino
function tentarNovamenteQuestao(qId) {
  delete AppState.userAnswers[qId];
  AppState.studyRevealed.delete(qId);
  saveToLocalStorage();
  renderCurrentQuestion();
  renderQuestionNav();
  renderGabaritoGrid();
  updateProgressUI();
  showToast("Tentativa resetada! Leia a dica com atenção e escolha outra opção.");
}

// Forçar revelação do gabarito completo no Modo Treino
function forcarRevelarGabarito(qId) {
  AppState.studyRevealed.add(qId);
  saveToLocalStorage();
  renderCurrentQuestion();
  renderQuestionNav();
  renderGabaritoGrid();
}

// Renderiza o corpo da questão atual
function renderCurrentQuestion() {
  const container = document.getElementById('current-question-card');
  if (!container) return;

  const q = AppState.activeQuestions[AppState.currentQuestionIndex];
  const selectedOpt = AppState.userAnswers[q.id];
  const isFlagged = AppState.flaggedQuestions.has(q.id);
  const isAnswered = selectedOpt !== undefined;
  const isCorrect = isAnswered && selectedOpt === q.correct;
  const isRevealed = AppState.studyRevealed.has(q.id) || AppState.examFinished;

  let badgeColor = "bg-blue-100 text-blue-800";
  if (q.subject === "Língua Portuguesa") badgeColor = "bg-emerald-100 text-emerald-800";
  if (q.subject === "Raciocínio Lógico-Matemático") badgeColor = "bg-purple-100 text-purple-800";
  if (q.subject === "Banco de Dados") badgeColor = "bg-indigo-100 text-indigo-800";

  // Montagem das opções
  let optionsHtml = q.options.map((opt, idx) => {
    let optClasses = "p-3.5 sm:p-4 rounded-xl border text-sm sm:text-base cursor-pointer transition-all flex items-start gap-3 relative ";
    const isChosen = selectedOpt === idx;
    const isRight = q.correct === idx;
    const letter = String.fromCharCode(65 + idx);
    let iconIndicator = "";

    if (AppState.examFinished) {
      // Exame Concluído: Mostra gabarito final
      if (isRight) {
        optClasses += "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium ";
        iconIndicator = `<span class="ml-auto text-emerald-600 font-bold flex items-center text-xs sm:text-sm gap-1">✓ Correta</span>`;
      } else if (isChosen && !isRight) {
        optClasses += "border-rose-500 bg-rose-50 text-rose-950 ";
        iconIndicator = `<span class="ml-auto text-rose-600 font-bold flex items-center text-xs sm:text-sm gap-1">✕ Sua Opção</span>`;
      } else {
        optClasses += "border-slate-200 bg-white/60 text-slate-600 opacity-80 ";
      }
    } else if (AppState.mode === 'study') {
      // MODO TREINO (Comportamento Pedagógico Solicitado)
      if (!isAnswered) {
        // Ainda não respondeu: neutro
        optClasses += "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700 ";
      } else if (isCorrect || isRevealed) {
        // Acertou ou pediu para revelar: mostra a correta em verde
        if (isRight) {
          optClasses += "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium ring-1 ring-emerald-500 ";
          iconIndicator = `<span class="ml-auto text-emerald-600 font-bold flex items-center text-xs sm:text-sm gap-1">✓ Correta</span>`;
        } else if (isChosen && !isRight) {
          optClasses += "border-rose-500 bg-rose-50 text-rose-950 ";
          iconIndicator = `<span class="ml-auto text-rose-600 font-bold flex items-center text-xs sm:text-sm gap-1">✕ Sua Opção</span>`;
        } else {
          optClasses += "border-slate-200 bg-white/60 text-slate-600 opacity-80 ";
        }
      } else {
        // ERROU E AINDA NÃO REVELOU: Destaca APENAS a que ele escolheu em vermelho; NÃO entrega qual é a certa!
        if (isChosen) {
          optClasses += "border-rose-500 bg-rose-50 text-rose-950 font-medium ring-1 ring-rose-500 ";
          iconIndicator = `<span class="ml-auto text-rose-600 font-bold flex items-center text-xs sm:text-sm gap-1">✕ Opção Incorreta</span>`;
        } else {
          optClasses += "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700 ";
        }
      }
    } else {
      // MODO PROVA REAL: Apenas marca a opção escolhida pelo candidato sem pistas
      if (isChosen) {
        optClasses += "border-blue-600 bg-blue-50/70 text-blue-900 font-medium shadow-xs ring-1 ring-blue-600 ";
      } else {
        optClasses += "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700 ";
      }
    }

    return `
      <div class="${optClasses}" onclick="selectOption(${idx})">
        <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isChosen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 border border-slate-300'}">
          ${letter}
        </span>
        <div class="flex-1 whitespace-pre-line leading-relaxed">
          ${opt}
        </div>
        ${iconIndicator}
      </div>
    `;
  }).join('');

  // Seção de Feedback do Modo Treino / Exame
  let feedbackHtml = "";

  if (AppState.mode === 'study' && isAnswered) {
    const chosenLetter = String.fromCharCode(65 + selectedOpt);

    if (isCorrect) {
      // Acertou na hora!
      feedbackHtml = `
        <div class="mt-6 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 fade-in shadow-xs">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">🎉</span>
            <div>
              <div class="font-black text-base text-emerald-900">RESPOSTA CORRETA! Parabéns!</div>
              <div class="text-xs text-emerald-800">Você acertou a questão #${q.id} (Alternativa ${chosenLetter}).</div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-emerald-200 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            <div class="font-bold text-slate-900 mb-1">Fundamentação Técnica Oficial:</div>
            ${q.explanation}
          </div>

          <div class="mt-4 p-3 rounded-xl bg-amber-50/90 border border-amber-200 text-xs sm:text-sm text-amber-900">
            <strong class="text-amber-800 uppercase tracking-wider text-[11px] block">Raio-X da Pegadinha FGV:</strong>
            ${q.pegadinha}
          </div>
        </div>
      `;
    } else if (!isRevealed) {
      // Errou na hora! Dá dicas e permite tentar novamente
      feedbackHtml = `
        <div class="mt-6 p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 fade-in shadow-xs">
          <div class="flex items-start gap-3">
            <span class="text-3xl">💡</span>
            <div class="flex-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="font-black text-xs sm:text-sm uppercase tracking-wide text-rose-700 bg-rose-100 px-3 py-1 rounded-md border border-rose-200">
                  ✕ Resposta Incorreta (Alternativa ${chosenLetter})
                </span>
                <span class="text-xs font-bold text-amber-800">Tente novamente antes de ver a resposta!</span>
              </div>

              <!-- Dica da Questão -->
              <div class="mt-3.5 p-4 bg-white/90 rounded-xl border border-amber-200 shadow-xs">
                <div class="text-xs font-black uppercase text-amber-900 mb-1 flex items-center gap-1.5">
                  <span>🎯</span> Dica Técnica da Questão & Pista da FGV:
                </div>
                <p class="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  ${q.dica || 'Analise atentamente as palavras-chave do enunciado e as pegadinhas conceituais deste tópico.'}
                </p>
              </div>

              <!-- Ações: Tentar novamente ou Desistir -->
              <div class="mt-4 flex flex-wrap items-center gap-3">
                <button onclick="tentarNovamenteQuestao(${q.id})" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all">
                  <span>🔄</span> Tentar Outra Alternativa
                </button>
                <button onclick="forcarRevelarGabarito(${q.id})" class="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all">
                  <span>👁️</span> Desistir e Ver Gabarito Completo
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      // Usuário errou e clicou em desistir/revelar
      feedbackHtml = `
        <div class="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-800 fade-in shadow-xs">
          <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
            <div class="font-bold text-slate-900 text-sm">Gabarito Revelado: Alternativa ${String.fromCharCode(65 + q.correct)}</div>
            <button onclick="tentarNovamenteQuestao(${q.id})" class="text-xs text-blue-600 font-bold hover:underline">
              Resetar para tentar de novo
            </button>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-3">
            ${q.explanation}
          </p>
          <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
            <strong>Pegadinha FGV:</strong> ${q.pegadinha}
          </div>
        </div>
      `;
    }
  } else if (AppState.examFinished && isAnswered) {
    // Exame finalizado: feedback completo
    feedbackHtml = `
      <div class="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 fade-in">
        <div class="font-bold text-slate-900 text-sm mb-2">Comentário Oficial da Questão:</div>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-3">
          ${q.explanation}
        </p>
        <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Pegadinha da FGV:</strong> ${q.pegadinha}
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-2.5 py-1 rounded-md text-xs font-bold ${badgeColor}">
            ${q.subject}
          </span>
          <span class="text-xs text-slate-500 font-medium">
            Tópico: <strong class="text-slate-700">${q.topic}</strong>
          </span>
          <span class="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
            ${AppState.cadernoTipo}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="toggleFlagCurrentQuestion()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${isFlagged ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}">
            <span>${isFlagged ? '★' : '☆'}</span>
            ${isFlagged ? 'Marcada para Revisar' : 'Marcar Dúvida'}
          </button>
          <span class="text-xs font-semibold text-slate-400">
            Questão ${q.id} de 60
          </span>
        </div>
      </div>

      <div class="text-sm sm:text-base text-slate-800 font-medium leading-relaxed whitespace-pre-line mb-6">
        ${q.enunciado}
      </div>

      <div class="space-y-3">
        ${optionsHtml}
      </div>

      ${feedbackHtml}

      <div class="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button onclick="prevQuestion()" ${AppState.currentQuestionIndex === 0 ? 'disabled' : ''} class="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5">
          ← Anterior
        </button>
        <span class="text-xs text-slate-400 hidden sm:inline">
          Use as setas ou clique nas bolinhas acima
        </span>
        <button onclick="nextQuestion()" ${AppState.currentQuestionIndex === AppState.activeQuestions.length - 1 ? 'disabled' : ''} class="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 shadow-xs">
          Próxima →
        </button>
      </div>
    </div>
  `;
}

// Renderiza a Folha de Gabarito Virtual
function renderGabaritoGrid() {
  const container = document.getElementById('folha-respostas-grid');
  if (!container) return;

  let html = '';
  AppState.activeQuestions.forEach(q => {
    const selected = AppState.userAnswers[q.id];
    let bolhas = ['A', 'B', 'C', 'D', 'E'].map((letter, optIdx) => {
      let bolhaClass = "gabarito-bolha ";
      if (selected === optIdx) bolhaClass += "selected ";
      if (AppState.examFinished) {
        if (optIdx === q.correct) bolhaClass += "correct ";
        else if (selected === optIdx && optIdx !== q.correct) bolhaClass += "incorrect ";
      }
      return `<button class="${bolhaClass}" onclick="goToQuestion(${q.id - 1}); selectOption(${optIdx});">${letter}</button>`;
    }).join('');

    html += `
      <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100/70 transition-colors">
        <span class="text-xs font-bold text-slate-700 w-8">#${String(q.id).padStart(2, '0')}</span>
        <div class="flex items-center gap-1.5">
          ${bolhas}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ========================================================
// GERADOR DINÂMICO DE NOVO SIMULADO & HISTÓRICO
// ========================================================

const CADERNOS_FGV = [
  "Tipo 1 - Branca",
  "Tipo 2 - Verde",
  "Tipo 3 - Amarela",
  "Tipo 4 - Azul"
];

function confirmarGerarNovoSimulado() {
  const answeredCount = Object.keys(AppState.userAnswers).length;
  if (answeredCount > 0 && !AppState.examFinished) {
    const saveCurrent = confirm(`Você respondeu ${answeredCount} questões no simulado atual. Deseja finalizar e registrar a pontuação atual no seu Histórico antes de iniciar o novo simulado?`);
    if (saveCurrent) {
      registrarSimuladoNoHistorico();
    }
  }

  gerarNovoSimulado();
}

function gerarNovoSimulado() {
  // Escolher novo tipo de caderno
  const novoTipo = CADERNOS_FGV[Math.floor(Math.random() * CADERNOS_FGV.length)];
  AppState.cadernoTipo = novoTipo;
  AppState.simuladoId = (AppState.simuladosHistorico.length || 0) + 1;

  // Embaralhar opções e posições das questões
  // Copia o banco original
  const rawCopy = JSON.parse(JSON.stringify(QUESTIONS_DATA));

  // Embaralha dentro de blocos para manter a estrutura oficial do Edital:
  // Questões 1 a 10: Português
  // Questões 11 a 20: RLM
  // Questões 21 a 60: Específicas Banco de Dados
  const portugues = shuffleArray(rawCopy.filter(q => q.subject === 'Língua Portuguesa'));
  const rlm = shuffleArray(rawCopy.filter(q => q.subject === 'Raciocínio Lógico-Matemático'));
  const especificas = shuffleArray(rawCopy.filter(q => q.subject !== 'Língua Portuguesa' && q.subject !== 'Raciocínio Lógico-Matemático'));

  const novoConjunto = [...portugues, ...rlm, ...especificas];

  // Embaralha as 5 opções (A, B, C, D, E) de cada questão e recalcula o 'correct'
  novoConjunto.forEach((q, newIndex) => {
    q.id = newIndex + 1;

    // Extrair texto limpo das opções
    const originalCorrectText = q.options[q.correct].replace(/^[A-E]\)\s*/, '');
    const cleanOptions = q.options.map(opt => opt.replace(/^[A-E]\)\s*/, ''));
    
    // Embaralha as opções
    const shuffledClean = shuffleArray(cleanOptions);
    
    // Identifica o novo índice da opção correta
    const newCorrectIdx = shuffledClean.findIndex(t => t === originalCorrectText);
    q.correct = newCorrectIdx !== -1 ? newCorrectIdx : 0;

    // Remonta com os prefixos A), B), C), D), E)
    q.options = shuffledClean.map((text, idx) => `${String.fromCharCode(65 + idx)}) ${text}`);
  });

  AppState.activeQuestions = novoConjunto;
  AppState.userAnswers = {};
  AppState.flaggedQuestions.clear();
  AppState.studyRevealed.clear();
  AppState.examFinished = false;
  AppState.timerSeconds = 5 * 60 * 60; // 5 horas
  AppState.currentQuestionIndex = 0;

  saveToLocalStorage();
  renderQuestionNav();
  renderCurrentQuestion();
  renderGabaritoGrid();
  renderHistoricoSimulados();
  updateProgressUI();
  switchMainTab('tab-simulado');

  showToast(`🎉 Novo Simulado #${AppState.simuladoId} (${novoTipo}) gerado com sucesso! Questões e alternativas redistribuídas.`);
}

// Algoritmo de Fisher-Yates para embaralhamento seguro
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Grava o simulado no histórico
function registrarSimuladoNoHistorico() {
  let acertos = 0;
  AppState.activeQuestions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correct) {
      acertos++;
    }
  });

  const percentual = ((acertos / 60) * 100).toFixed(1);
  const dataFormatada = new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

  // Tempo gasto
  const tempoGastoSegundos = (5 * 60 * 60) - AppState.timerSeconds;
  const hGasto = Math.floor(tempoGastoSegundos / 3600);
  const mGasto = Math.floor((tempoGastoSegundos % 3600) / 60);
  const tempoStr = `${String(hGasto).padStart(2, '0')}h ${String(mGasto).padStart(2, '0')}m`;

  let statusStr = "Não Habilitado";
  if (acertos >= 36) statusStr = "Habilitado (Ampla)";
  else if (acertos >= 29) statusStr = "Habilitado (Cotas)";

  const novoRegistro = {
    id: AppState.simuladosHistorico.length + 1,
    data: dataFormatada,
    caderno: AppState.cadernoTipo,
    acertos: acertos,
    percentual: `${percentual}%`,
    tempoGasto: tempoStr,
    status: statusStr
  };

  AppState.simuladosHistorico.unshift(novoRegistro);
  saveToLocalStorage();
  renderHistoricoSimulados();
}

// Renderiza a tabela e métricas na aba Histórico
function renderHistoricoSimulados() {
  const countHeader = document.getElementById('header-simulados-count');
  const countNav = document.getElementById('nav-simulados-count');
  const countHist = document.getElementById('hist-total-count');
  const mediaPontos = document.getElementById('hist-media-pontos');
  const melhorNota = document.getElementById('hist-melhor-nota');
  const taxaHab = document.getElementById('hist-taxa-hab');
  const tableBody = document.getElementById('historico-table-body');

  const total = AppState.simuladosHistorico.length;
  if (countHeader) countHeader.textContent = total;
  if (countNav) countNav.textContent = total;
  if (countHist) countHist.textContent = total;

  if (total === 0) {
    if (mediaPontos) mediaPontos.innerHTML = `0 <span class="text-sm font-normal">/ 60</span>`;
    if (melhorNota) melhorNota.innerHTML = `0 <span class="text-sm font-normal">/ 60</span>`;
    if (taxaHab) taxaHab.textContent = `0%`;
    if (tableBody) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="p-6 text-center text-slate-400">
            Nenhum simulado finalizado ainda. Conclua sua prova e clique em "Finalizar Prova" para gravar seu primeiro simulado!
          </td>
        </tr>
      `;
    }
    return;
  }

  // Cálculos consolidados
  const somaPontos = AppState.simuladosHistorico.reduce((acc, cur) => acc + cur.acertos, 0);
  const media = (somaPontos / total).toFixed(1);
  const maxNota = Math.max(...AppState.simuladosHistorico.map(h => h.acertos));
  const habilitados = AppState.simuladosHistorico.filter(h => h.acertos >= 36).length;
  const taxa = Math.round((habilitados / total) * 100);

  if (mediaPontos) mediaPontos.innerHTML = `${media} <span class="text-sm font-normal">/ 60</span>`;
  if (melhorNota) melhorNota.innerHTML = `${maxNota} <span class="text-sm font-normal">/ 60</span>`;
  if (taxaHab) taxaHab.textContent = `${taxa}%`;

  if (tableBody) {
    tableBody.innerHTML = AppState.simuladosHistorico.map(sim => {
      let badgeStatus = "bg-rose-100 text-rose-800";
      if (sim.status === "Habilitado (Ampla)") badgeStatus = "bg-emerald-100 text-emerald-800 font-bold";
      else if (sim.status === "Habilitado (Cotas)") badgeStatus = "bg-blue-100 text-blue-800 font-bold";

      return `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="p-3 font-bold text-slate-900">Simulado #${sim.id}</td>
          <td class="p-3 text-slate-600">${sim.data}</td>
          <td class="p-3 font-medium text-slate-700">${sim.caderno}</td>
          <td class="p-3 font-mono font-bold text-blue-700 text-sm">${sim.acertos} / 60</td>
          <td class="p-3 font-bold text-slate-800">${sim.percentual}</td>
          <td class="p-3 font-mono text-slate-600">${sim.tempoGasto}</td>
          <td class="p-3">
            <span class="px-2.5 py-1 rounded-md text-xs ${badgeStatus}">
              ${sim.status}
            </span>
          </td>
        </tr>
      `;
    }).join('');
  }
}

function limparHistoricoSimulados() {
  if (confirm("Deseja realmente limpar todo o histórico de simulados realizados?")) {
    AppState.simuladosHistorico = [];
    saveToLocalStorage();
    renderHistoricoSimulados();
    showToast("Histórico de simulados limpo!");
  }
}

// Finalizar Simulado e Gerar Diagnóstico
function finalizarSimulado() {
  const answeredCount = Object.keys(AppState.userAnswers).length;
  if (!AppState.examFinished && answeredCount < AppState.activeQuestions.length) {
    const confirmFinish = confirm(`Você respondeu ${answeredCount} das 60 questões. Deseja realmente finalizar e gerar seu diagnóstico agora?`);
    if (!confirmFinish) return;
  }

  AppState.examFinished = true;
  registrarSimuladoNoHistorico();
  saveToLocalStorage();
  renderQuestionNav();
  renderCurrentQuestion();
  renderGabaritoGrid();
  updateProgressUI();

  gerarRelatorioDiagnostico();
  switchMainTab('tab-diagnostico');
}

// ========================================================
// PROVA DISCURSIVA E LINHAS
// ========================================================

function renderDiscursiva() {
  const container = document.getElementById('discursiva-content-container');
  if (!container) return;

  const savedText = localStorage.getItem('tjpb_discursiva_text') || '';
  AppState.discursivaTexto = savedText;

  container.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
        <div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
            Estudo de Caso - Item 10.7 do Edital
          </span>
          <h2 class="text-xl font-bold text-slate-900 mt-2">
            ${DISCURSIVA_DATA.titulo}
          </h2>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black text-blue-700">40,0</div>
          <div class="text-xs text-slate-400 font-semibold uppercase">Pontuação Máxima</div>
        </div>
      </div>

      <div class="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm leading-relaxed whitespace-pre-line mb-6 font-medium">
        ${DISCURSIVA_DATA.enunciado}
      </div>

      <!-- Editor de Resposta com Limite de 30 linhas -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <label class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <span>✍️</span> Espaço do Candidato (Padrão Oficial até 30 Linhas)
          </label>
          <span id="linha-counter" class="text-xs font-semibold text-slate-500">
            0 / 30 linhas preenchidas
          </span>
        </div>
        <textarea id="discursiva-input" rows="14" class="w-full p-4 rounded-xl border border-slate-300 font-mono text-sm leading-relaxed focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-slate-400" placeholder="Redija aqui seu texto técnico fundamentado (20 a 30 linhas)...">${savedText}</textarea>
        <div class="flex justify-between items-center mt-2">
          <span class="text-xs text-slate-400">Dica: A FGV penaliza severamente respostas que ultrapassarem as 30 linhas estipuladas.</span>
          <button onclick="saveDiscursiva()" class="px-4 py-1.5 text-xs font-bold bg-slate-800 text-white rounded-lg hover:bg-slate-900">Salvar Rascunho</button>
        </div>
      </div>

      <!-- Espelho de Correção Padrão FGV -->
      <div class="mt-8 pt-6 border-t border-slate-200">
        <h3 class="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
          <span>📋</span> Espelho Oficial de Correção & Padrão de Resposta Esperado
        </h3>
        <div class="space-y-4">
          ${DISCURSIVA_DATA.espelhoCorrecao.map((esp, i) => `
            <div class="p-4 rounded-xl border border-blue-100 bg-blue-50/40">
              <div class="font-bold text-sm text-blue-900 mb-1">${esp.criterio}</div>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${esp.detalhes}</p>
            </div>
          `).join('')}
        </div>

        <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
          <div class="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">Orientações Vitais da Banca FGV:</div>
          <ul class="text-xs sm:text-sm text-amber-900 space-y-1.5 list-disc pl-5">
            ${DISCURSIVA_DATA.dicasRedacao.map(dica => `<li>${dica}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  const textarea = document.getElementById('discursiva-input');
  if (textarea) {
    textarea.addEventListener('input', () => {
      updateLinhaCounter();
    });
    updateLinhaCounter();
  }
}

function updateLinhaCounter() {
  const textarea = document.getElementById('discursiva-input');
  const counter = document.getElementById('linha-counter');
  if (!textarea || !counter) return;

  const lines = textarea.value.split('\n').length;
  counter.textContent = `${lines} / 30 linhas`;
  if (lines > 30) {
    counter.className = "text-xs font-bold text-rose-600";
    counter.textContent = `${lines} / 30 linhas (Limite Excedido!)`;
  } else if (lines >= 20) {
    counter.className = "text-xs font-bold text-emerald-600";
  } else {
    counter.className = "text-xs font-semibold text-slate-500";
  }
}

function saveDiscursiva() {
  const textarea = document.getElementById('discursiva-input');
  if (textarea) {
    localStorage.setItem('tjpb_discursiva_text', textarea.value);
    AppState.discursivaTexto = textarea.value;
    showToast("Rascunho da discursiva salvo com sucesso!");
  }
}

// Timer de 5 Horas
function initTimer() {
  const savedTimer = localStorage.getItem('tjpb_timer_seconds');
  if (savedTimer !== null) {
    AppState.timerSeconds = parseInt(savedTimer, 10);
  }

  updateTimerDisplay();
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);

  AppState.timerInterval = setInterval(() => {
    if (AppState.timerSeconds > 0 && !AppState.examFinished) {
      AppState.timerSeconds--;
      updateTimerDisplay();
      if (AppState.timerSeconds % 30 === 0) {
        localStorage.setItem('tjpb_timer_seconds', AppState.timerSeconds);
      }
      if (AppState.timerSeconds === 30 * 60) {
        showToast("Atenção: Faltam 30 minutos! Já é permitido levar o caderno de questões conforme o edital.");
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('timer-display');
  if (!timerEl) return;

  const h = Math.floor(AppState.timerSeconds / 3600);
  const m = Math.floor((AppState.timerSeconds % 3600) / 60);
  const s = AppState.timerSeconds % 60;

  timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  
  if (AppState.timerSeconds <= 30 * 60) {
    timerEl.className = "font-mono font-bold text-rose-600 animate-pulse text-xs sm:text-sm";
  } else {
    timerEl.className = "font-mono font-bold text-blue-700 text-xs sm:text-sm";
  }
}

// Atualiza barra de progresso e estatísticas rápidas
function updateProgressUI() {
  const answeredCount = Object.keys(AppState.userAnswers).length;
  const total = AppState.activeQuestions.length;
  const pct = Math.round((answeredCount / total) * 100);

  const progressBar = document.getElementById('overall-progress-bar');
  const progressText = document.getElementById('overall-progress-text');

  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${answeredCount} de ${total} respondidas (${pct}%)`;

  const btnFinalizar = document.getElementById('btn-finalizar-simulado');
  if (btnFinalizar) {
    btnFinalizar.textContent = AppState.examFinished ? "Ver Resultado / Diagnóstico" : `Finalizar Prova (${answeredCount}/60)`;
  }
}

// Renderiza a Seção de Pegadinhas FGV
function renderPegadinhas() {
  const container = document.getElementById('pegadinhas-container');
  if (!container) return;

  container.innerHTML = PEGANHAS_FGV_DATA.map((peg, i) => `
    <div class="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
      <div class="flex items-start gap-3">
        <span class="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 text-sm">
          ${i + 1}
        </span>
        <div class="flex-1">
          <h3 class="text-base font-bold text-slate-900 mb-1">
            ${peg.tema}
          </h3>
          <p class="text-sm text-slate-600 mb-3 leading-relaxed">
            ${peg.descricao}
          </p>
          <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs sm:text-sm text-blue-900">
            <strong class="text-blue-800">Antídoto / Como não errar:</strong> ${peg.comoEvitar}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ========================================================
// DIAGNÓSTICO INTELIGENTE E RELATÓRIO
// ========================================================

function gerarRelatorioDiagnostico() {
  let acertosTotal = 0;
  let moduloGeraisAcertos = 0;
  let moduloEspecificosAcertos = 0;

  const topicosStats = {};

  AppState.activeQuestions.forEach(q => {
    const userChoice = AppState.userAnswers[q.id];
    const isCorrect = userChoice === q.correct;
    if (isCorrect) acertosTotal++;

    if (q.id <= 20) {
      if (isCorrect) moduloGeraisAcertos++;
    } else {
      if (isCorrect) moduloEspecificosAcertos++;
    }

    const key = q.subject;
    if (!topicosStats[key]) {
      topicosStats[key] = { total: 0, acertos: 0, subtopicos: {} };
    }
    topicosStats[key].total++;
    if (isCorrect) topicosStats[key].acertos++;

    if (!topicosStats[key].subtopicos[q.topic]) {
      topicosStats[key].subtopicos[q.topic] = { total: 0, acertos: 0 };
    }
    topicosStats[key].subtopicos[q.topic].total++;
    if (isCorrect) topicosStats[key].subtopicos[q.topic].acertos++;
  });

  const percentualTotal = ((acertosTotal / 60) * 100).toFixed(1);
  const percentualGerais = ((moduloGeraisAcertos / 20) * 100).toFixed(1);
  const percentualEspecificos = ((moduloEspecificosAcertos / 40) * 100).toFixed(1);

  const isAprovadoAmpla = acertosTotal >= 36;
  const isAprovadoCotas = acertosTotal >= 29;

  const container = document.getElementById('diagnostico-results-container');
  if (!container) return;

  const prioridadeAlta = [];
  const prioridadeMedia = [];

  Object.keys(topicosStats).forEach(subj => {
    const st = topicosStats[subj];
    Object.keys(st.subtopicos).forEach(subt => {
      const subInfo = st.subtopicos[subt];
      const subTaxa = (subInfo.acertos / subInfo.total) * 100;
      if (subTaxa < 50) {
        prioridadeAlta.push({ disciplina: subj, topico: subt, taxa: subTaxa.toFixed(0) });
      } else if (subTaxa < 75) {
        prioridadeMedia.push({ disciplina: subj, topico: subt, taxa: subTaxa.toFixed(0) });
      }
    });
  });

  let statusBadge = "";
  if (isAprovadoAmpla) {
    statusBadge = `<div class="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-3">
      <span class="text-3xl">🎉</span>
      <div>
        <div class="font-extrabold text-base">Habilitado na Prova Objetiva (Ampla Concorrência)</div>
        <div class="text-xs sm:text-sm">Você alcançou ${acertosTotal} pontos (≥ 60%), superando a nota mínima do Edital nº 01/2026 TJPB!</div>
      </div>
    </div>`;
  } else if (isAprovadoCotas) {
    statusBadge = `<div class="p-4 rounded-xl bg-blue-50 border border-blue-300 text-blue-900 flex items-center gap-3">
      <span class="text-3xl">⚖️</span>
      <div>
        <div class="font-extrabold text-base">Habilitado nas Vagas Reservadas (Cotas PPIQ / PcD)</div>
        <div class="text-xs sm:text-sm">Você alcançou ${acertosTotal} pontos (≥ 48%), atingindo a linha de corte do item 10.12.1 do edital.</div>
      </div>
    </div>`;
  } else {
    statusBadge = `<div class="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 flex items-center gap-3">
      <span class="text-3xl">⚠️</span>
      <div>
        <div class="font-extrabold text-base">Abaixo do Ponto de Corte (Mínimo de 36 acertos - 60%)</div>
        <div class="text-xs sm:text-sm">Você obteve ${acertosTotal} pontos. Use a trilha de reforço abaixo para corrigir as lacunas antes da prova!</div>
      </div>
    </div>`;
  }

  container.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      ${statusBadge}

      <!-- Cards de Pontuação -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 text-white shadow-md">
          <div class="text-xs uppercase font-bold tracking-wider text-blue-200">Nota Total da Prova</div>
          <div class="text-4xl font-black mt-2">${acertosTotal} <span class="text-lg font-normal text-blue-200">/ 60</span></div>
          <div class="text-sm font-semibold text-blue-200 mt-1">${percentualTotal}% de aproveitamento</div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="text-xs uppercase font-bold tracking-wider text-slate-500">Módulo I: Conhecimentos Gerais</div>
          <div class="text-3xl font-extrabold text-slate-800 mt-2">${moduloGeraisAcertos} <span class="text-base font-normal text-slate-400">/ 20</span></div>
          <div class="text-sm font-semibold text-slate-600 mt-1">${percentualGerais}% (Português + RLM)</div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="text-xs uppercase font-bold tracking-wider text-slate-500">Módulo II: Específicos (TI & BD)</div>
          <div class="text-3xl font-extrabold text-slate-800 mt-2">${moduloEspecificosAcertos} <span class="text-base font-normal text-slate-400">/ 40</span></div>
          <div class="text-sm font-semibold text-slate-600 mt-1">${percentualEspecificos}% (Peso Decisório)</div>
        </div>
      </div>

      <!-- Card Rápido de Projeção de Posição com Link Direto -->
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div>
          <div class="text-xs uppercase font-bold text-blue-300">Simulador de Ranking TJPB</div>
          <div class="text-lg font-bold text-white mt-0.5">Veja em qual colocação você ficaria (Top 1 ao Top 50)!</div>
          <p class="text-xs text-blue-200 mt-1">Sua nota objetiva de ${acertosTotal} pontos já pode ser combinada com uma nota discursiva projetada.</p>
        </div>
        <button onclick="puxarNotaSimuladoParaCalculadora(); switchMainTab('tab-projecao');" class="px-5 py-2.5 rounded-xl bg-white text-blue-900 font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shrink-0 shadow-sm">
          Simular Minha Posição no Ranking →
        </button>
      </div>

      <!-- Análise Detalhada por Disciplina -->
      <div>
        <h3 class="text-lg font-bold text-slate-900 mb-3">
          📊 Desempenho por Macroárea
        </h3>
        <div class="space-y-3">
          ${Object.keys(topicosStats).map(subj => {
            const data = topicosStats[subj];
            const p = Math.round((data.acertos / data.total) * 100);
            let barColor = "bg-rose-500";
            if (p >= 75) barColor = "bg-emerald-500";
            else if (p >= 60) barColor = "bg-blue-600";
            else if (p >= 50) barColor = "bg-amber-500";

            return `
              <div class="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <div class="flex justify-between items-center text-sm font-bold text-slate-800 mb-1.5">
                  <span>${subj}</span>
                  <span class="font-mono">${data.acertos}/${data.total} (${p}%)</span>
                </div>
                <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${p}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Trilha de Estudos e Onde Melhorar -->
      <div class="pt-6 border-t border-slate-100">
        <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
          <span>🎯</span> Onde Você Deve Focar: Trilha de Reforço Personalizada
        </h3>
        <p class="text-xs sm:text-sm text-slate-500 mb-4">
          Com base nos seus erros neste simulado, montamos seu plano prioritário de revisão para gabaritar a FGV:
        </p>

        <div class="space-y-3">
          ${prioridadeAlta.length > 0 ? `
            <div class="p-4 rounded-xl bg-rose-50/80 border border-rose-200">
              <div class="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5 mb-2">
                <span>🔴</span> Prioridade Urgente (Aproveitamento < 50%):
              </div>
              <ul class="text-xs sm:text-sm text-rose-950 space-y-1 list-disc pl-5">
                ${prioridadeAlta.map(item => `<li><strong>${item.disciplina}</strong>: ${item.topico} (Apenas ${item.taxa}% de acertos)</li>`).join('')}
              </ul>
            </div>
          ` : '<div class="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl font-bold">Nenhum tópico com rendimento crítico! Excelente base teórica.</div>'}

          ${prioridadeMedia.length > 0 ? `
            <div class="p-4 rounded-xl bg-amber-50/80 border border-amber-200">
              <div class="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-2">
                <span>🟡</span> Prioridade Moderada (Aproveitamento entre 50% e 74%):
              </div>
              <ul class="text-xs sm:text-sm text-amber-950 space-y-1 list-disc pl-5">
                ${prioridadeMedia.map(item => `<li><strong>${item.disciplina}</strong>: ${item.topico} (${item.taxa}% de acertos)</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>

        <div class="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
          <div class="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">Dica Estratégica para o Cargo de Banco de Dados TJPB:</div>
          <p class="text-xs sm:text-sm text-blue-800 leading-relaxed">
            A FGV dedica cerca de <strong>40% a 50%</strong> das questões específicas a <strong>SQL ANSI Avançado (Window Functions, CTEs, Joins)</strong> e <strong>Administração de SGBD (PostgreSQL MVCC, Locks, PITR e Planos EXPLAIN)</strong>. Garanta o domínio absoluto desses dois eixos e das pegadinhas de NULL, pois eles definem a vaga de Analista de Banco de Dados!
          </p>
        </div>
      </div>
    </div>
  `;
}

// ========================================================
// CALCULADORA E SIMULADOR DE PROJEÇÃO DE VAGAS
// ========================================================

function atualizarCalculadoraProjecao() {
  const inputObj = document.getElementById('sim-input-obj');
  const inputDisc = document.getElementById('sim-input-disc');
  const valObj = document.getElementById('sim-val-obj');
  const valDisc = document.getElementById('sim-val-disc');
  const valTotal = document.getElementById('sim-val-total');
  const faixaBadge = document.getElementById('sim-faixa-badge');
  const analiseTexto = document.getElementById('sim-analise-texto');

  if (!inputObj || !inputDisc || !valObj || !valDisc || !valTotal || !faixaBadge || !analiseTexto) return;

  const notaObj = parseInt(inputObj.value, 10);
  const notaDisc = parseInt(inputDisc.value, 10);
  const notaTotal = notaObj + notaDisc;

  valObj.textContent = notaObj;
  valDisc.textContent = notaDisc;
  valTotal.textContent = notaTotal.toFixed(1);

  if (notaObj < 36 || notaDisc < 24) {
    faixaBadge.className = "mt-2.5 inline-block px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-800";
    faixaBadge.textContent = "Eliminado pelo Edital (Abaixo dos 60% Mínimos)";
    let motivo = [];
    if (notaObj < 36) motivo.push(`Objetiva: ${notaObj}/60 (mínimo exigido: 36)`);
    if (notaDisc < 24) motivo.push(`Discursiva: ${notaDisc}/40 (mínimo exigido: 24)`);
    analiseTexto.innerHTML = `⚠️ <strong>Atenção:</strong> O subitem 10.12 e 10.13.1 exigem aproveitamento igual ou superior a 60% em cada prova. Motivo: ${motivo.join(' e ')}.`;
  } else if (notaTotal >= 88 && notaObj >= 49) {
    faixaBadge.className = "mt-2.5 inline-block px-3 py-1 rounded-full text-xs font-black bg-amber-200 text-amber-900";
    faixaBadge.textContent = "Posição Estimada: 🥇 1º LUGAR (Vaga Imediata Direta)";
    analiseTexto.innerHTML = `🏆 <strong>Desempenho Extraordinário!</strong> Com <strong>${notaTotal} pontos</strong>, você projeta disputar a <strong>1ª colocação da Ampla Concorrência</strong> para posse imediata no TJPB em João Pessoa!`;
  } else if (notaTotal >= 83 && notaObj >= 46) {
    faixaBadge.className = "mt-2.5 inline-block px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-900";
    faixaBadge.textContent = "Posição Estimada: 🥈🥉 2º ou 3º LUGAR (Pódio / CR Imediato)";
    analiseTexto.innerHTML = `🥈 <strong>Posição de Pódio!</strong> Com <strong>${notaTotal} pontos</strong>, você fica na cabeceira da lista de espera. Histórico do Judiciário indica convocação quase certa nos primeiros meses de validade! Faltam apenas ${(88 - notaTotal)} pontos para o 1º Lugar.`;
  } else if (notaTotal >= 76 && notaObj >= 43) {
    faixaBadge.className = "mt-2.5 inline-block px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-900";
    faixaBadge.textContent = "Posição Estimada: 🔟 TOP 10 (4º ao 10º Colocado)";
    analiseTexto.innerHTML = `📈 <strong>Excelente Colocação!</strong> Com <strong>${notaTotal} pontos</strong>, você garante o Top 10 com altíssima probabilidade de nomeação durante a vigência do concurso (2+2 anos). Faltam ${(83 - notaTotal)} pontos para alcançar o Pódio.`;
  } else if (notaTotal >= 70 && notaObj >= 40) {
    faixaBadge.className = "mt-2.5 inline-block px-3 py-1 rounded-full text-xs font-black bg-slate-200 text-slate-800";
    faixaBadge.textContent = "Posição Estimada: 🎯 TOP 25 (11º ao 25º Colocado)";
    analiseTexto.innerHTML = `🎯 <strong>Zona de Reserva Ativa!</strong> Com <strong>${notaTotal} pontos</strong>, você fica na metade superior das discursivas corrigidas. Faltam ${(76 - notaTotal)} pontos para ingressar no Top 10.`;
  } else if (notaTotal >= 64 && notaObj >= 38) {
    faixaBadge.className = "mt-2.5 inline-block px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900";
    faixaBadge.textContent = "Posição Estimada: 🛡️ TOP 50 (26º ao 50º Colocado)";
    analiseTexto.innerHTML = `🛡️ <strong>Zona de Sobrevivência (Discursiva Salva)!</strong> Sua nota objetiva de ${notaObj} pontos está dentro do limite do item 10.13 (até a 50ª discursiva corrigida). Faltam ${(70 - notaTotal)} pontos para avançar para o Top 25.`;
  } else {
    faixaBadge.className = "mt-2.5 inline-block px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-800";
    faixaBadge.textContent = "Posição Estimada: > 50º Lugar (Risco de Discursiva não corrigida)";
    analiseTexto.innerHTML = `⚠️ Com ${notaObj} pontos na objetiva, há risco real de ficar além da 50ª posição estipulada pelo item 10.13. Você precisa aumentar sua nota objetiva para pelo menos 38 pontos para garantir a correção do Estudo de Caso!`;
  }
}

function puxarNotaSimuladoParaCalculadora() {
  let acertos = 0;
  AppState.activeQuestions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correct) {
      acertos++;
    }
  });

  const inputObj = document.getElementById('sim-input-obj');
  if (inputObj) {
    inputObj.value = acertos;
    atualizarCalculadoraProjecao();
    showToast(`Nota do seu Simulado (${acertos} acertos na Objetiva) carregada na Calculadora de Projeção!`);
  }
}

// Salvar / Carregar no LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('tjpb_user_answers', JSON.stringify(AppState.userAnswers));
  localStorage.setItem('tjpb_flagged', JSON.stringify(Array.from(AppState.flaggedQuestions)));
  localStorage.setItem('tjpb_study_revealed', JSON.stringify(Array.from(AppState.studyRevealed)));
  localStorage.setItem('tjpb_exam_finished', AppState.examFinished);
  localStorage.setItem('tjpb_sim_mode', AppState.mode);
  localStorage.setItem('tjpb_caderno_tipo', AppState.cadernoTipo);
  localStorage.setItem('tjpb_simulados_historico', JSON.stringify(AppState.simuladosHistorico));
  localStorage.setItem('tjpb_active_questions', JSON.stringify(AppState.activeQuestions));
}

function loadFromLocalStorage() {
  const savedAnswers = localStorage.getItem('tjpb_user_answers');
  if (savedAnswers) {
    AppState.userAnswers = JSON.parse(savedAnswers);
  }

  const savedFlagged = localStorage.getItem('tjpb_flagged');
  if (savedFlagged) {
    AppState.flaggedQuestions = new Set(JSON.parse(savedFlagged));
  }

  const savedRevealed = localStorage.getItem('tjpb_study_revealed');
  if (savedRevealed) {
    AppState.studyRevealed = new Set(JSON.parse(savedRevealed));
  }

  const savedFinished = localStorage.getItem('tjpb_exam_finished');
  if (savedFinished === 'true') {
    AppState.examFinished = true;
  }

  const savedMode = localStorage.getItem('tjpb_sim_mode');
  if (savedMode) {
    AppState.mode = savedMode;
    const radio = document.querySelector(`input[name="sim-mode"][value="${savedMode}"]`);
    if (radio) radio.checked = true;
  }

  const savedCaderno = localStorage.getItem('tjpb_caderno_tipo');
  if (savedCaderno) {
    AppState.cadernoTipo = savedCaderno;
  }

  const savedHistorico = localStorage.getItem('tjpb_simulados_historico');
  if (savedHistorico) {
    AppState.simuladosHistorico = JSON.parse(savedHistorico);
  }

  const savedQuestions = localStorage.getItem('tjpb_active_questions');
  if (savedQuestions) {
    AppState.activeQuestions = JSON.parse(savedQuestions);
  }
}

// Toast Notificações
function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 3500);
}
