'use strict';
(() => {
  const blocks = window.BLOCOS_REVISAO;
  const key = 'so-aula10-revisao-v1';
  const defaults = () => ({ answers: {}, notes: {}, selections: {}, name: '', theme: 'dark' });
  let state = defaults();
  try { const saved = JSON.parse(localStorage.getItem(key) || 'null'); if (saved && typeof saved === 'object') state = { ...state, ...saved, answers: saved.answers || {}, notes: saved.notes || {}, selections: saved.selections || {} }; } catch (_) { /* private browsing or disabled storage */ }
  const $ = (id) => document.getElementById(id);
  const element = (tag, text, cls) => { const node = document.createElement(tag); if (text !== undefined) node.textContent = text; if (cls) node.className = cls; return node; };
  const save = () => { try { localStorage.setItem(key, JSON.stringify(state)); } catch (_) { $('storage-warning').hidden = false; } };
  const practice = [
    'Observe seu diretório de trabalho. No Linux ou macOS, use pwd e ls; no Windows, use cd e dir no CMD ou Get-Location e Get-ChildItem no PowerShell. Registre uma semelhança e uma diferença.',
    'Abra um aplicativo de teste. Observe processos com ps no Linux/macOS, tasklist no CMD ou Get-Process no PowerShell. Identifique nome e PID; descreva os limites desse retrato.',
    'Imagine três tarefas de durações diferentes. Desenhe uma fila FIFO e compare com a alternância em Round Robin. Explique o efeito de uma tarefa longa e de um quantum curto.',
    'Observe uma aplicação que você abriu. Anote seu identificador e uma métrica disponível no Gerenciador de Tarefas, top, ps ou Get-Process. Explique por que o valor pode mudar.',
    'Em uma pasta de teste, crie um arquivo pequeno. Observe seu caminho; no Linux, consulte ls -li e stat. Compare com as propriedades disponíveis em outro sistema, se puder.',
    'Planeje a troca de um dispositivo entre Windows, Linux e macOS. Escolha um formato possível e registre como verificaria leitura, gravação e compatibilidade antes de usá-lo.',
    'Desenhe um cliente e um servidor de arquivos. Indique protocolo, identidade e duas verificações de autorização. Em Linux, quando disponível, examine id e getfacl em um arquivo de teste.',
    'Escolha um cenário para bloco, arquivo e objeto. Explique como os dados seriam acessados em cada caso e descreva uma estratégia de backup e um teste de restauração.'
  ];
  const maxTotal = blocks.reduce((n,b) => n+b.questions.length,0);
  const countFor = (b) => Number.isInteger(state.selections[b.id]) ? Math.max(0,Math.min(b.questions.length,state.selections[b.id])) : b.questions.length;
  const selectedQuestions = () => blocks.flatMap(b => b.questions.slice(0,countFor(b)));
  const selectedTotal = () => selectedQuestions().length;
  const warning = element('p','Não foi possível salvar o progresso neste navegador. Mantenha esta página aberta e exporte o relatório antes de sair.','notice'); warning.id='storage-warning'; warning.hidden=true; $('conteudo').prepend(warning);
  const stats = () => { const total=selectedTotal(); let correct=0, answered=0; for(const q of selectedQuestions()){if(Object.hasOwn(state.answers,q.id)){answered++;if(state.answers[q.id]===q.answer)correct++;}} return {correct,answered,wrong:answered-correct,missing:total-answered}; };
  function update() {
    const s=stats(), total=selectedTotal(); $('score').replaceChildren(document.createTextNode(String(s.correct)+' '),element('small','/ '+total));
    $('score-detail').textContent=`${s.correct} acertos · ${s.wrong} erros · ${s.missing} não respondidas`;
    $('side-score').textContent=`${s.correct} / ${total}`; $('side-progress').textContent=`${s.answered} de ${total} respondidas`; $('progress-fill').style.width=`${total ? 100*s.answered/total : 0}%`;
    for(const b of blocks){ const count=countFor(b), done=b.questions.slice(0,count).filter(q=>Object.hasOwn(state.answers,q.id)).length; const text=`${done}/${count}`; $(b.id+'-nav-count').textContent=text; $(b.id+'-count').textContent=`${done} de ${count} respondidas`; b.questions.forEach((q,i)=>{const card=$(q.id+'-card');if(card)card.hidden=i>=count;}); }
  }
  function setTheme(){ document.body.classList.toggle('light',state.theme==='light'); $('theme').textContent=state.theme==='light'?'☾ Tema escuro':'☀ Tema claro'; $('theme').setAttribute('aria-pressed',String(state.theme==='light')); }
  function feedback(q, target){ if(!Object.hasOwn(state.answers,q.id)){target.textContent='';target.className='feedback';return;} const ok=state.answers[q.id]===q.answer; target.className='feedback '+(ok?'correct':'incorrect'); target.textContent=ok?'Correto. '+q.explanation:'Reveja: '+q.explanation; }
  function build() {
    const nav=$('nav-blocos'), root=$('blocos'); nav.replaceChildren(); root.replaceChildren();
    blocks.forEach((b,bi)=>{
      const link=element('a');link.href='#'+b.id;link.append(element('span',String(bi+1).padStart(2,'0')+' · '+b.title),element('small','',''));link.lastChild.id=b.id+'-nav-count';nav.append(link);
      const section=element('section',undefined,'topic');section.id=b.id;
      const top=element('div',undefined,'topic-head'), left=element('div');left.append(element('p',`BLOCO ${String(bi+1).padStart(2,'0')} · REVISÃO`,'kicker'),element('h2',b.title));top.append(left);const count=element('span','','topic-count');count.id=b.id+'-count';top.append(count);section.append(top,element('p',b.summary,'topic-summary'));
      const selector=element('div',undefined,'selector');const selectorLabel=element('label','Quantas questões deseja treinar neste tema?');selectorLabel.htmlFor=b.id+'-select';const select=element('select');select.id=b.id+'-select';for(let n=0;n<=b.questions.length;n++){const opt=element('option',n===0?'Nenhuma':`${n} ${n===1?'questão':'questões'}`);opt.value=String(n);select.append(opt);}select.value=String(countFor(b));select.addEventListener('change',()=>{state.selections[b.id]=Number(select.value);save();update();});selector.append(selectorLabel,select);section.append(selector);
      if(b.image){const details=element('details',undefined,'visual'),summary=element('summary','▶ Assistir à animação de apoio'),fig=element('figure'),img=element('img');img.src='assets/'+b.image;img.loading='lazy';img.alt='Animação de apoio: '+b.title;fig.append(img,element('figcaption','Representação didática; os detalhes dependem do sistema e da configuração.'));details.append(summary,fig);section.append(details);}
      b.questions.forEach((q,qi)=>{
        const card=element('article',undefined,'question'), field=element('fieldset'), legend=element('legend'), number=element('span',`${String(bi+1).padStart(2,'0')}.${String(qi+1).padStart(2,'0')}`,'question-num');legend.append(number,document.createTextNode(q.question));field.append(legend);
        const options=element('div',undefined,'options'), hint=element('p',undefined,'feedback');card.id=q.id+'-card';hint.id=q.id+'-feedback';hint.setAttribute('aria-live','polite');
        const order=[0,1,2].map((_,i)=>(i+qi+bi)%3);
        order.forEach(index=>{const label=element('label',undefined,'option'),radio=element('input');radio.type='radio';radio.name=q.id;radio.value=String(index);radio.checked=state.answers[q.id]===index;radio.setAttribute('aria-describedby',hint.id);radio.addEventListener('change',()=>{state.answers[q.id]=index;feedback(q,hint);save();update();});label.append(radio,element('span',q.choices[index]));options.append(label);});
        field.append(options);card.append(field,hint);feedback(q,hint);section.append(card);
      });
      const lab=element('div',undefined,'practice');lab.append(element('h3','Prática · observar e comparar'),element('p',practice[bi]));const lablabel=element('label','Seu registro (opcional)');lablabel.htmlFor=b.id+'-notes';const notes=element('textarea');notes.id=b.id+'-notes';notes.placeholder='Descreva seus passos, observações e conclusão.';notes.value=state.notes[b.id]||'';notes.addEventListener('input',()=>{state.notes[b.id]=notes.value;save();});lab.append(lablabel,notes,element('small','Esta resposta é incluída no relatório, mas não recebe pontuação automática.'));section.append(lab);root.append(section);
    });update();
  }
  function report(){
    const root=$('print-report');root.replaceChildren();const s=stats(), total=selectedTotal();root.append(element('h1','Aula 10 · Relatório de revisão'),element('p','Sistemas Operacionais · respostas e feedback'));
    const meta=element('div',undefined,'report-meta');meta.append(element('p','Aluno(a): '+(state.name.trim()||'Não informado')),element('p',`Resultado: ${s.correct} de ${total} pontos (${total ? Math.round(100*s.correct/total) : 0}%)`),element('p',`${s.answered} respondidas · ${s.correct} acertos · ${s.wrong} erros · ${s.missing} não respondidas`),element('p','O feedback detalhado contempla apenas questões respondidas. As atividades práticas não têm correção automática. Este relatório não envia notas ao Moodle.'));root.append(meta);
    blocks.forEach((b,bi)=>{const answered=b.questions.slice(0,countFor(b)).map((q,qi)=>({q,qi})).filter(({q})=>Object.hasOwn(state.answers,q.id)); const hasNotes=Boolean(countFor(b) && state.notes[b.id] && state.notes[b.id].trim()); if(!answered.length&&!hasNotes)return;root.append(element('h2',`${String(bi+1).padStart(2,'0')} · ${b.title}`));for(const {q,qi} of answered){
      const item=element('div',undefined,'report-question');item.append(element('h3',`${bi+1}.${String(qi+1).padStart(2,'0')} · ${q.question}`));
      if(Object.hasOwn(state.answers,q.id)){const choice=state.answers[q.id],ok=choice===q.answer;item.append(element('p',ok?'ACERTOU':'ERROU','report-status'),element('p','Sua resposta: '+q.choices[choice]));}
      else item.append(element('p','NÃO RESPONDIDA','report-status'));
      item.append(element('p','Resposta esperada: '+q.choices[q.answer]),element('p','Feedback: '+q.explanation,'report-muted'));root.append(item);
    }const lab=element('div',undefined,'report-practice');lab.append(element('strong','Registro da prática'),element('p',state.notes[b.id]&&state.notes[b.id].trim()?state.notes[b.id]:'Não informado.'));root.append(lab);});
    window.print();
  }
  $('student-name').value=state.name; $('student-name').addEventListener('input',e=>{state.name=e.target.value;save();});
  $('theme').addEventListener('click',()=>{state.theme=state.theme==='light'?'dark':'light';setTheme();save();});
  $('export-top').addEventListener('click',report);$('export-bottom').addEventListener('click',report);
  $('reset').addEventListener('click',()=>{if(!window.confirm('Apagar as respostas e registros desta revisão neste navegador?'))return;const theme=state.theme;state=defaults();state.theme=theme;$('student-name').value='';save();build();setTheme();});
  setTheme();build();
})();
