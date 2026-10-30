# Animação da Aula 06 — Do disco aos blocos

Esta pasta guarda uma cópia do código da composição editada no projeto Remotion `C:\animacoes`. O vídeo ainda não foi exportado nem incorporado à página pública da disciplina.

Para usar a cópia em um projeto Remotion existente, copie `src/so06/` para a pasta `src/` do projeto e `public/so06/` para `public/`. Registre a composição no arquivo de entrada das composições:

```tsx
import {Filme as FilmeSO06} from './so06/Filme';
// Dentro do componente raiz:
<Composition id="SO06-Do-Disco-aos-Blocos" component={FilmeSO06} durationInFrames={6030} fps={30} width={1920} height={1080} />
```

O projeto usado na criação tinha Remotion 4.0.539 e React 19.2.3. No Studio local, a composição tem 3 minutos e 21 segundos e está sem narração. Consulte `src/so06/FONTES.md` para as fontes técnicas. O roteiro em `../roteiros/` é uma versão inicial; a sequência efetiva está em `src/so06/Filme.tsx`.
