document.querySelectorAll('.revisao-questao').forEach((form) => {
  const feedback = form.querySelector('.revisao-feedback');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selecionada = form.querySelector('input[type="radio"]:checked');
    if (!selecionada) {
      feedback.dataset.resultado = 'incorreto';
      feedback.textContent = 'Escolha uma alternativa antes de verificar.';
      return;
    }
    const correta = selecionada.value === form.dataset.correta;
    feedback.dataset.resultado = correta ? 'correto' : 'incorreto';
    feedback.textContent = (correta ? 'Correto! ' : 'Ainda não. ') + form.dataset.explicacao;
  });
  form.addEventListener('change', () => { feedback.textContent = ''; delete feedback.dataset.resultado; });
});
