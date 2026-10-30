# Roteiro — Do disco aos blocos e à fragmentação

**Objetivo:** distinguir formatação, alocação, fragmentação e desfragmentação, comparando HDD e SSD.  
**Duração inicial:** 90–120 segundos, ajustável.  
**Linguagem visual:** fundo grafite com grade discreta, títulos grandes com serifa, caixa de terminal monoespaçada, diagramas legíveis e destaques pontuais em lilás e verde-água, conforme as referências do professor.

## 1 · A mídia chega — 0–12 s

**Visual:** uma embalagem genérica com nomes de fabricantes apresentados como exemplos opcionais; a mídia transforma-se em um retângulo contínuo. Uma legenda indica “espaço lógico representado de forma simplificada”.

**Narração:** “Antes de salvar arquivos, precisamos saber como o dispositivo está preparado. Alguns já vêm formatados; outros podem exigir configuração.”

**Precisão:** não afirmar que toda mídia recém-comprada vem zerada, sem partição ou sem sistema de arquivos. O retângulo é uma representação, não um retrato físico dos setores ou das células.

## 2 · Preparação e formato — 12–27 s

**Visual:** a folha é delimitada como volume. Uma interface de formatação apresenta NTFS, exFAT, ext4 e APFS como exemplos, sem insinuar que todos estão disponíveis em qualquer sistema. Os metadados aparecem e uma grade surge sobre o volume.

**Narração:** “Ao criar um sistema de arquivos, a ferramenta organiza estruturas de metadados e define como o espaço será administrado. Cada formato tem suas próprias estruturas.”

**Legenda:** “Formatar pode apagar dados.”  
**Precisão:** FAT utiliza tabela de alocação; outros sistemas usam estruturas diferentes, como bitmaps, inodes ou árvores. Não representar todos como FAT nem confundir partição com sistema de arquivos.

## 3 · Unidade de alocação — 27–43 s

**Visual:** a grade alterna entre unidades pequenas e grandes. Um seletor mostra “padrão” e “tamanho personalizado, quando disponível”. Para o exemplo, um arquivo de 1 KiB ocupa uma unidade de 4 KiB e depois uma de 64 KiB, destacando 3 KiB e 63 KiB não utilizados dentro das unidades.

**Narração:** “A ferramenta escolhe uma unidade padrão conforme formato e ambiente; algumas permitem mudar esse valor dentro dos limites aceitos. Unidades menores podem reduzir desperdício em muitos arquivos pequenos. Unidades maiores podem reduzir a quantidade de unidades necessárias para arquivos grandes.”

**Precisão:** os números são um modelo simplificado; compressão, arquivos residentes, cópia em escrita e outros mecanismos podem mudar a ocupação. Mais unidades podem exigir mais informação de gerenciamento, mas desempenho depende do sistema e da carga; não prometer que blocos maiores são sempre mais rápidos.

## 4 · Fragmentação — 43–62 s

**Visual:** arquivos A, B e C recebem cores distintas. B é removido e A cresce; sem espaço contíguo suficiente, trechos de A aparecem separados. Exibir “A1 · A2 · A3” para deixar claro que são partes do mesmo arquivo.

**Narração:** “Com criação, exclusão e crescimento de arquivos, o espaço livre pode ficar dividido. Um arquivo pode então ser armazenado em trechos separados: isso é fragmentação.”

**Precisão:** tamanho de bloco não causa automaticamente fragmentação; espaço livre, padrão de uso e algoritmo de alocação também importam. Fragmentação não é desfragmentação.

## 5 · Comparação HDD e SSD — 62–82 s

**Visual:** ao lado esquerdo, um prato de HDD gira e o braço percorre trechos separados; em seguida, lê trechos próximos com menos deslocamento. À direita, um SSD de memória flash, sem partes móveis, recebe pedidos por trechos. As setas representam o fluxo lógico de pedidos, não o posicionamento físico das células.

**Narração:** “Em um disco mecânico, a leitura de trechos espalhados pode exigir mais movimentos da cabeça e espera pela rotação. Em SSDs não há busca mecânica, então o impacto costuma ser diferente e menor, embora a organização dos acessos ainda possa influenciar a carga.”

## 6 · Alocação inteligente e manutenção — 82–105 s

**Visual:** um alocador tenta reservar uma sequência de blocos; quando não há espaço suficiente, representa trechos adicionais. Em seguida, o HDD mostra blocos sendo reorganizados. No SSD, a tela mostra “otimização conforme o sistema: TRIM e políticas próprias”.

**Narração:** “Sistemas modernos podem tentar agrupar dados e reservar espaço para reduzir a fragmentação, sem garantir contiguidade em todos os casos. Desfragmentação reorganiza arquivos; manutenção de SSD usa políticas adequadas ao dispositivo e ao sistema operacional.”

**Precisão:** não recomendar desfragmentar SSD manualmente como regra. As rotinas de otimização variam por plataforma e podem incluir TRIM e outras operações.

## 7 · Fechamento — 105–120 s

**Visual:** quadro final com três perguntas: “Qual sistema de arquivos?”, “Qual padrão de uso?”, “HDD ou SSD?”. O destaque final diz: “A escolha deve ser medida no ambiente real.”

**Narração:** “Tamanho de alocação, espaço livre, padrão de uso e tipo de mídia trabalham juntos. Escolha com base no cenário e valide com testes.”

## Referências técnicas

- Microsoft, `format`: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format
- Linux kernel, alocação no ext4: https://www.kernel.org/doc/html/latest/filesystems/ext4/allocators.html
- Microsoft, otimização e `defrag`: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/defrag

**Estado:** roteiro proposto; ainda não convertido em animação. O script `gif_tamanho_de_bloco_original.py` reproduz o GIF anterior e não faz parte do novo roteiro visual.
