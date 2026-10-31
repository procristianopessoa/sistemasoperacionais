(() => {
  const tasks = [
    ['Exibir o diretório atual.', ['pwd'], 'pwd mostra o caminho do diretório de trabalho.'],
    ['Listar os arquivos do diretório atual.', ['ls','ls .'], 'ls lista as entradas do diretório.'],
    ['Listar as entradas em formato detalhado.', ['ls -l'], 'ls -l apresenta informações detalhadas das entradas.'],
    ['Subir um nível na árvore de diretórios.', ['cd ..'], 'cd .. muda para o diretório pai.'],
    ['Mostrar o nome do usuário da sessão.', ['whoami'], 'whoami informa o usuário associado à sessão.'],
    ['Criar um diretório chamado laboratorio.', ['mkdir laboratorio'], 'mkdir cria um diretório com o nome informado.'],
    ['Criar um arquivo vazio chamado nota.txt, se ele ainda não existir.', ['touch nota.txt'], 'touch pode criar o arquivo quando ele ainda não existe.'],
    ['Exibir o conteúdo do arquivo nota.txt.', ['cat nota.txt'], 'cat exibe o conteúdo do arquivo informado.'],
    ['Consultar o espaço dos sistemas de arquivos em formato legível.', ['df -h'], 'df -h apresenta informações de espaço em unidades legíveis.'],
    ['Listar os discos e volumes com a ferramenta própria do macOS.', ['diskutil list'], 'diskutil list lista discos e volumes reconhecidos pelo macOS.']
  ];
  const root=document.getElementById('mac-simulador');if(!root)return;
  let results=Array(tasks.length).fill(null);
  const updateScore=()=>{const done=results.filter(x=>x!==null).length;const hits=results.filter(Boolean).length;score.textContent=done?`${hits} acertos em ${done} questões verificadas · ${tasks.length-done} restantes.`:'Nenhuma questão verificada.';};
  const el=(name,text)=>{const x=document.createElement(name);if(text!==undefined)x.textContent=text;return x;};
  const score=el('p','Nenhuma questão verificada.');score.setAttribute('aria-live','polite');
  const form=el('form');form.addEventListener('submit',e=>e.preventDefault());
  tasks.forEach(([prompt,accepted,explanation],i)=>{
    const card=el('div');card.className='mac-question';const label=el('label',`${i+1}. ${prompt}`);label.htmlFor=`mac-resposta-${i}`;
    const input=el('input');input.id=`mac-resposta-${i}`;input.type='text';input.autocomplete='off';input.spellcheck=false;input.placeholder='Digite o comando';
    const button=el('button','Verificar');button.type='button';const output=el('p');output.id=`mac-feedback-${i}`;output.setAttribute('aria-live','polite');input.setAttribute('aria-describedby',output.id);
    button.addEventListener('click',()=>{const command=input.value.trim().replace(/\s+/g,' ');if(!command){output.textContent='Digite um comando antes de verificar.';return;}const correct=accepted.includes(command);results[i]=correct;output.textContent=correct?`Correto. ${explanation}`:`Ainda não. Uma resposta possível é: ${accepted[0]}. ${explanation}`;updateScore();});
    input.addEventListener('input',()=>{if(results[i]!==null){results[i]=null;output.textContent='';updateScore();}});
    input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();button.click();}});card.append(label,input,button,output);form.append(card);
  });root.append(score,form);
})();
