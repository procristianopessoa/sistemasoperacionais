window.BLOCOS_REVISAO = [
  {
    "id": "bloco-1",
    "title": "Fundamentos e terminal",
    "summary": "O sistema operacional administra recursos; o kernel executa funções centrais e o shell interpreta comandos. O terminal apresenta uma sessão para interagir com o shell.",
    "image": "persistencia.gif",
    "questions": [
      {
        "id": "b1q1",
        "question": "Qual componente administra recursos como CPU e memória?",
        "choices": [
          "Kernel",
          "Navegador",
          "Editor de texto"
        ],
        "answer": 0,
        "explanation": "Kernel."
      },
      {
        "id": "b1q2",
        "question": "Qual é a função principal de um shell?",
        "choices": [
          "Interpretar comandos",
          "Fabricar memória RAM",
          "Substituir o hardware"
        ],
        "answer": 0,
        "explanation": "Interpretar comandos."
      },
      {
        "id": "b1q3",
        "question": "O terminal é melhor descrito como:",
        "choices": [
          "Interface para uma sessão de comandos",
          "Sistema de arquivos",
          "Processador físico"
        ],
        "answer": 0,
        "explanation": "Interface para uma sessão de comandos."
      },
      {
        "id": "b1q4",
        "question": "Qual comando mostra o diretório atual no Linux?",
        "choices": [
          "pwd",
          "mkdir",
          "rm"
        ],
        "answer": 0,
        "explanation": "pwd."
      },
      {
        "id": "b1q5",
        "question": "No CMD, qual comando lista arquivos do diretório atual?",
        "choices": [
          "dir",
          "pwd",
          "ps"
        ],
        "answer": 0,
        "explanation": "dir."
      },
      {
        "id": "b1q6",
        "question": "No PowerShell, qual comando informa o diretório atual?",
        "choices": [
          "Get-Location",
          "Get-Process",
          "Stop-Process"
        ],
        "answer": 0,
        "explanation": "Get-Location."
      },
      {
        "id": "b1q7",
        "question": "O que é um caminho absoluto no Linux?",
        "choices": [
          "Caminho que parte da raiz /",
          "Caminho que sempre começa com Downloads",
          "Nome de usuário"
        ],
        "answer": 0,
        "explanation": "Caminho que parte da raiz /."
      },
      {
        "id": "b1q8",
        "question": "Qual comando lista arquivos no macOS e no Linux?",
        "choices": [
          "ls",
          "tasklist",
          "ipconfig"
        ],
        "answer": 0,
        "explanation": "ls."
      },
      {
        "id": "b1q9",
        "question": "Qual operador do shell substitui o conteúdo ao redirecionar?",
        "choices": [
          ">",
          ">>",
          "&&"
        ],
        "answer": 0,
        "explanation": ">."
      },
      {
        "id": "b1q10",
        "question": "Qual operador do shell acrescenta ao fim do arquivo?",
        "choices": [
          ">>",
          ">",
          "<"
        ],
        "answer": 0,
        "explanation": ">>."
      }
    ]
  },
  {
    "id": "bloco-2",
    "title": "Processos e estados",
    "summary": "Um programa em execução é um processo. PID identifica um processo no contexto do sistema; estados e uso de recursos mudam ao longo do tempo.",
    "image": "fila-prontos.gif",
    "questions": [
      {
        "id": "b2q1",
        "question": "O que é um processo?",
        "choices": [
          "Uma instância de programa em execução",
          "Um arquivo necessariamente executável",
          "Uma partição de disco"
        ],
        "answer": 0,
        "explanation": "Uma instância de programa em execução."
      },
      {
        "id": "b2q2",
        "question": "O que identifica um processo no sistema?",
        "choices": [
          "PID",
          "SSID",
          "Endereço MAC"
        ],
        "answer": 0,
        "explanation": "PID."
      },
      {
        "id": "b2q3",
        "question": "Qual estado indica que o processo pode disputar a CPU?",
        "choices": [
          "Pronto",
          "Encerrado",
          "Excluído"
        ],
        "answer": 0,
        "explanation": "Pronto."
      },
      {
        "id": "b2q4",
        "question": "Um processo bloqueado normalmente aguarda:",
        "choices": [
          "Um evento ou recurso",
          "A instalação do sistema operacional",
          "A troca da placa-mãe"
        ],
        "answer": 0,
        "explanation": "Um evento ou recurso."
      },
      {
        "id": "b2q5",
        "question": "Dois processos do mesmo programa:",
        "choices": [
          "Podem ter PIDs distintos",
          "Devem ter o mesmo PID",
          "Não podem coexistir"
        ],
        "answer": 0,
        "explanation": "Podem ter PIDs distintos."
      },
      {
        "id": "b2q6",
        "question": "Qual comando Linux permite listar processos?",
        "choices": [
          "ps",
          "mkdir",
          "df"
        ],
        "answer": 0,
        "explanation": "ps."
      },
      {
        "id": "b2q7",
        "question": "Qual comando CMD lista processos?",
        "choices": [
          "tasklist",
          "dir",
          "format"
        ],
        "answer": 0,
        "explanation": "tasklist."
      },
      {
        "id": "b2q8",
        "question": "Qual comando PowerShell consulta processos?",
        "choices": [
          "Get-Process",
          "Get-Location",
          "Get-ChildItem"
        ],
        "answer": 0,
        "explanation": "Get-Process."
      },
      {
        "id": "b2q9",
        "question": "Uma consulta de processos mostra:",
        "choices": [
          "Um retrato que pode mudar",
          "Uma lista imutável",
          "Somente processos futuros"
        ],
        "answer": 0,
        "explanation": "Um retrato que pode mudar."
      },
      {
        "id": "b2q10",
        "question": "Qual atitude é adequada antes de encerrar um processo?",
        "choices": [
          "Identificá-lo e entender seu papel",
          "Encerrar qualquer PID desconhecido",
          "Apagar arquivos do sistema"
        ],
        "answer": 0,
        "explanation": "Identificá-lo e entender seu papel."
      }
    ]
  },
  {
    "id": "bloco-3",
    "title": "Escalonamento e concorrência",
    "summary": "O escalonador decide qual processo apto executa. A escolha de política envolve equilíbrio entre resposta, espera e custo de troca de contexto.",
    "image": "fila-prontos.gif",
    "questions": [
      {
        "id": "b3q1",
        "question": "O escalonador da CPU escolhe:",
        "choices": [
          "Qual tarefa apta executa",
          "O formato do pendrive",
          "A senha de rede"
        ],
        "answer": 0,
        "explanation": "Qual tarefa apta executa."
      },
      {
        "id": "b3q2",
        "question": "Na política FIFO, uma tarefa longa pode:",
        "choices": [
          "Aumentar a espera das seguintes",
          "Eliminar toda espera",
          "Criar mais CPUs"
        ],
        "answer": 0,
        "explanation": "Aumentar a espera das seguintes."
      },
      {
        "id": "b3q3",
        "question": "No Round Robin, o quantum é:",
        "choices": [
          "Uma fatia de tempo de execução",
          "O tamanho de um arquivo",
          "O endereço do gateway"
        ],
        "answer": 0,
        "explanation": "Uma fatia de tempo de execução."
      },
      {
        "id": "b3q4",
        "question": "Um quantum muito curto pode aumentar:",
        "choices": [
          "O custo de trocas de contexto",
          "A capacidade do disco",
          "O número de núcleos físicos"
        ],
        "answer": 0,
        "explanation": "O custo de trocas de contexto."
      },
      {
        "id": "b3q5",
        "question": "Uma troca de contexto ocorre quando o sistema:",
        "choices": [
          "Salva e restaura o estado necessário para mudar de tarefa",
          "Formata uma partição",
          "Troca a senha do usuário"
        ],
        "answer": 0,
        "explanation": "Salva e restaura o estado necessário para mudar de tarefa."
      },
      {
        "id": "b3q6",
        "question": "O SJF favorece tarefas com:",
        "choices": [
          "Menor duração estimada",
          "Maior nome",
          "Maior endereço IP"
        ],
        "answer": 0,
        "explanation": "Menor duração estimada."
      },
      {
        "id": "b3q7",
        "question": "Tempo de resposta corresponde ao intervalo até:",
        "choices": [
          "A primeira resposta ou primeiro atendimento considerado",
          "A instalação do sistema",
          "A exclusão do processo"
        ],
        "answer": 0,
        "explanation": "A primeira resposta ou primeiro atendimento considerado."
      },
      {
        "id": "b3q8",
        "question": "Concorrência significa que tarefas:",
        "choices": [
          "Podem avançar em períodos sobrepostos",
          "Sempre executam no mesmo instante físico",
          "Usam obrigatoriamente dois computadores"
        ],
        "answer": 0,
        "explanation": "Podem avançar em períodos sobrepostos."
      },
      {
        "id": "b3q9",
        "question": "Um mutex pode ajudar a:",
        "choices": [
          "Proteger uma região crítica",
          "Aumentar o tamanho da RAM",
          "Formatar um volume"
        ],
        "answer": 0,
        "explanation": "Proteger uma região crítica."
      },
      {
        "id": "b3q10",
        "question": "Uma política ideal para toda carga de trabalho:",
        "choices": [
          "Não existe sem considerar objetivos e carga",
          "É sempre FIFO",
          "É sempre Round Robin"
        ],
        "answer": 0,
        "explanation": "Não existe sem considerar objetivos e carga."
      }
    ]
  },
  {
    "id": "bloco-4",
    "title": "Observação de processos",
    "summary": "Observe antes de agir. Comandos mostram retratos e métricas; CPU alta, memória e espera exigem análise do contexto.",
    "image": "fila-prontos.gif",
    "questions": [
      {
        "id": "b4q1",
        "question": "No Linux, top é útil para:",
        "choices": [
          "Observar processos e uso de recursos",
          "Criar partições",
          "Alterar o endereço MAC"
        ],
        "answer": 0,
        "explanation": "Observar processos e uso de recursos."
      },
      {
        "id": "b4q2",
        "question": "No CMD, tasklist apresenta:",
        "choices": [
          "Uma lista de processos",
          "Uma lista de sistemas de arquivos",
          "O histórico do navegador"
        ],
        "answer": 0,
        "explanation": "Uma lista de processos."
      },
      {
        "id": "b4q3",
        "question": "No PowerShell, Get-Process serve para:",
        "choices": [
          "Consultar processos",
          "Formatar o disco",
          "Criar usuário Linux"
        ],
        "answer": 0,
        "explanation": "Consultar processos."
      },
      {
        "id": "b4q4",
        "question": "PPID identifica:",
        "choices": [
          "O processo pai",
          "O tamanho de um arquivo",
          "O protocolo de rede"
        ],
        "answer": 0,
        "explanation": "O processo pai."
      },
      {
        "id": "b4q5",
        "question": "Uso de CPU em um instante:",
        "choices": [
          "Pode mudar com o tempo",
          "É fixo durante toda a execução",
          "É igual ao espaço livre"
        ],
        "answer": 0,
        "explanation": "Pode mudar com o tempo."
      },
      {
        "id": "b4q6",
        "question": "O PID de uma aplicação deve ser interpretado:",
        "choices": [
          "Na máquina e no momento da observação",
          "Como identidade permanente universal",
          "Como senha de administrador"
        ],
        "answer": 0,
        "explanation": "Na máquina e no momento da observação."
      },
      {
        "id": "b4q7",
        "question": "O sinal SIGTERM normalmente solicita:",
        "choices": [
          "Encerramento que pode ser tratado pelo processo",
          "Formatação imediata",
          "Criação de um usuário"
        ],
        "answer": 0,
        "explanation": "Encerramento que pode ser tratado pelo processo."
      },
      {
        "id": "b4q8",
        "question": "Antes de encerrar uma aplicação de teste, é útil:",
        "choices": [
          "Confirmar nome e PID",
          "Escolher um processo aleatório",
          "Excluir o diretório raiz"
        ],
        "answer": 0,
        "explanation": "Confirmar nome e PID."
      },
      {
        "id": "b4q9",
        "question": "No Linux, ps pode mostrar:",
        "choices": [
          "Processos e identificadores",
          "A marca física do cabo",
          "As senhas dos usuários"
        ],
        "answer": 0,
        "explanation": "Processos e identificadores."
      },
      {
        "id": "b4q10",
        "question": "Uma evidência útil para diagnóstico inclui:",
        "choices": [
          "Comando, momento e resultado observado",
          "Somente uma suposição",
          "Apenas o nome do computador"
        ],
        "answer": 0,
        "explanation": "Comando, momento e resultado observado."
      }
    ]
  },
  {
    "id": "bloco-5",
    "title": "Arquivos, diretórios e montagem",
    "summary": "Um sistema de arquivos organiza nomes e dados. Um volume pode ser montado em um caminho; o inode armazena metadados em sistemas como ext4.",
    "image": "ext4-ntfs.gif",
    "questions": [
      {
        "id": "b5q1",
        "question": "Um diretório organiza:",
        "choices": [
          "Nomes e referências a entradas",
          "Somente pacotes de rede",
          "Núcleos físicos"
        ],
        "answer": 0,
        "explanation": "Nomes e referências a entradas."
      },
      {
        "id": "b5q2",
        "question": "Em sistemas como ext4, o inode contém:",
        "choices": [
          "Metadados e informações de mapeamento",
          "A senha de todos os usuários",
          "O endereço da internet"
        ],
        "answer": 0,
        "explanation": "Metadados e informações de mapeamento."
      },
      {
        "id": "b5q3",
        "question": "No Linux, ls -li pode mostrar:",
        "choices": [
          "Nomes e números de inode",
          "Somente o fabricante do disco",
          "A senha do administrador"
        ],
        "answer": 0,
        "explanation": "Nomes e números de inode."
      },
      {
        "id": "b5q4",
        "question": "Um hard link para um arquivo no mesmo sistema de arquivos:",
        "choices": [
          "É outro nome para o mesmo inode",
          "É sempre uma cópia independente",
          "É uma nova partição"
        ],
        "answer": 0,
        "explanation": "É outro nome para o mesmo inode."
      },
      {
        "id": "b5q5",
        "question": "Um ponto de montagem é:",
        "choices": [
          "Um caminho associado a um sistema de arquivos",
          "Uma placa de rede",
          "Uma senha"
        ],
        "answer": 0,
        "explanation": "Um caminho associado a um sistema de arquivos."
      },
      {
        "id": "b5q6",
        "question": "Qual comando Linux mostra o sistema de arquivos associado a um caminho?",
        "choices": [
          "findmnt -T /mnt/dados",
          "tasklist",
          "whoami"
        ],
        "answer": 0,
        "explanation": "findmnt -T /mnt/dados."
      },
      {
        "id": "b5q7",
        "question": "A capacidade disponível consultada em /mnt/dados depende:",
        "choices": [
          "Do sistema de arquivos associado ao caminho",
          "Somente do nome da pasta",
          "Da cor do terminal"
        ],
        "answer": 0,
        "explanation": "Do sistema de arquivos associado ao caminho."
      },
      {
        "id": "b5q8",
        "question": "Qual comando Linux consulta espaço por sistema de arquivos?",
        "choices": [
          "df -h",
          "ps -e",
          "cat /etc/passwd"
        ],
        "answer": 0,
        "explanation": "df -h."
      },
      {
        "id": "b5q9",
        "question": "Um arquivo persistente pode continuar disponível:",
        "choices": [
          "Após o programa que o salvou terminar",
          "Somente enquanto o editor estiver aberto",
          "Somente enquanto a CPU estiver em uso"
        ],
        "answer": 0,
        "explanation": "Após o programa que o salvou terminar."
      },
      {
        "id": "b5q10",
        "question": "Um volume de dados pode ser acessado em Linux:",
        "choices": [
          "Por um ponto de montagem",
          "Apenas com uma letra de unidade",
          "Somente como processo"
        ],
        "answer": 0,
        "explanation": "Por um ponto de montagem."
      }
    ]
  },
  {
    "id": "bloco-6",
    "title": "Formatos, blocos e recuperação",
    "summary": "O formato determina estruturas e recursos do sistema de arquivos. Escolhas de unidade de alocação e mídia afetam espaço e desempenho; journal não substitui backup.",
    "image": "hfs-apfs.gif",
    "questions": [
      {
        "id": "b6q1",
        "question": "Qual formato é comum em instalações Linux?",
        "choices": [
          "ext4",
          "NTFS exclusivamente",
          "SMB"
        ],
        "answer": 0,
        "explanation": "ext4."
      },
      {
        "id": "b6q2",
        "question": "Qual formato é comum em Windows?",
        "choices": [
          "NTFS",
          "NFS",
          "SSH"
        ],
        "answer": 0,
        "explanation": "NTFS."
      },
      {
        "id": "b6q3",
        "question": "O APFS é um sistema de arquivos associado a:",
        "choices": [
          "macOS",
          "Protocolo de e-mail",
          "Escalonamento da CPU"
        ],
        "answer": 0,
        "explanation": "macOS."
      },
      {
        "id": "b6q4",
        "question": "O suporte ao APFS em macOS começa em:",
        "choices": [
          "macOS 10.13",
          "Todos os sistemas Mac antigos sem exceção",
          "Somente Windows"
        ],
        "answer": 0,
        "explanation": "macOS 10.13."
      },
      {
        "id": "b6q5",
        "question": "No APFS, volumes de um contêiner podem:",
        "choices": [
          "Compartilhar espaço livre",
          "Ser sempre discos físicos independentes",
          "Eliminar toda necessidade de backup"
        ],
        "answer": 0,
        "explanation": "Compartilhar espaço livre."
      },
      {
        "id": "b6q6",
        "question": "Blocos maiores em muitos arquivos pequenos podem:",
        "choices": [
          "Aumentar espaço não utilizado dentro da última unidade",
          "Eliminar todo desperdício",
          "Impedir qualquer arquivo grande"
        ],
        "answer": 0,
        "explanation": "Aumentar espaço não utilizado dentro da última unidade."
      },
      {
        "id": "b6q7",
        "question": "A fragmentação em HDD pode aumentar:",
        "choices": [
          "Deslocamentos de leitura e custo de acesso",
          "A velocidade de rotação física",
          "A capacidade nominal"
        ],
        "answer": 0,
        "explanation": "Deslocamentos de leitura e custo de acesso."
      },
      {
        "id": "b6q8",
        "question": "O objetivo do journal é ajudar:",
        "choices": [
          "Na consistência e recuperação conforme o sistema",
          "A substituir todos os backups",
          "A garantir recuperação de toda exclusão"
        ],
        "answer": 0,
        "explanation": "Na consistência e recuperação conforme o sistema."
      },
      {
        "id": "b6q9",
        "question": "Um snapshot e um backup independente:",
        "choices": [
          "Têm papéis diferentes",
          "São sempre idênticos",
          "Dispensam testes"
        ],
        "answer": 0,
        "explanation": "Têm papéis diferentes."
      },
      {
        "id": "b6q10",
        "question": "Antes de trocar uma mídia entre sistemas, é adequado:",
        "choices": [
          "Verificar suporte a leitura e escrita",
          "Presumir suporte universal",
          "Desativar todas as permissões"
        ],
        "answer": 0,
        "explanation": "Verificar suporte a leitura e escrita."
      }
    ]
  },
  {
    "id": "bloco-7",
    "title": "Rede, identidade e permissões",
    "summary": "SMB e NFS são protocolos de acesso a arquivos. Autenticação identifica o solicitante; autorização determina quais ações ele pode executar.",
    "image": "smb-nfs.gif",
    "questions": [
      {
        "id": "b7q1",
        "question": "SMB e NFS são exemplos de:",
        "choices": [
          "Protocolos de compartilhamento de arquivos",
          "Processadores",
          "Formatos de imagem"
        ],
        "answer": 0,
        "explanation": "Protocolos de compartilhamento de arquivos."
      },
      {
        "id": "b7q2",
        "question": "A autenticação responde principalmente:",
        "choices": [
          "Quem é o solicitante?",
          "Qual é o tamanho do disco?",
          "Qual arquivo será apagado?"
        ],
        "answer": 0,
        "explanation": "Quem é o solicitante?."
      },
      {
        "id": "b7q3",
        "question": "A autorização determina:",
        "choices": [
          "Se uma identidade pode realizar uma ação",
          "A frequência da CPU",
          "A marca do cabo"
        ],
        "answer": 0,
        "explanation": "Se uma identidade pode realizar uma ação."
      },
      {
        "id": "b7q4",
        "question": "Autenticação bem-sucedida:",
        "choices": [
          "Não garante autorização para todo arquivo",
          "Garante acesso irrestrito",
          "Desativa ACLs"
        ],
        "answer": 0,
        "explanation": "Não garante autorização para todo arquivo."
      },
      {
        "id": "b7q5",
        "question": "Uma ACL é usada para:",
        "choices": [
          "Descrever permissões de acesso",
          "Substituir o disco",
          "Aumentar a frequência de rede"
        ],
        "answer": 0,
        "explanation": "Descrever permissões de acesso."
      },
      {
        "id": "b7q6",
        "question": "Em Linux, qual comando consulta identidade e grupos locais?",
        "choices": [
          "id",
          "format",
          "ipconfig"
        ],
        "answer": 0,
        "explanation": "id."
      },
      {
        "id": "b7q7",
        "question": "Qual comando pode exibir ACLs no Linux quando disponível?",
        "choices": [
          "getfacl",
          "pwd",
          "echo"
        ],
        "answer": 0,
        "explanation": "getfacl."
      },
      {
        "id": "b7q8",
        "question": "Para atravessar um diretório no Linux, normalmente é necessária:",
        "choices": [
          "Permissão de execução/travessia no diretório",
          "Somente permissão de escrita no arquivo final",
          "Uma conexão Bluetooth"
        ],
        "answer": 0,
        "explanation": "Permissão de execução/travessia no diretório."
      },
      {
        "id": "b7q9",
        "question": "Um servidor pode usar ext4 e oferecer:",
        "choices": [
          "Um compartilhamento via SMB ou NFS configurado",
          "Somente armazenamento local sem rede",
          "Apenas protocolo HTTP"
        ],
        "answer": 0,
        "explanation": "Um compartilhamento via SMB ou NFS configurado."
      },
      {
        "id": "b7q10",
        "question": "Num compartilhamento, permissões podem depender:",
        "choices": [
          "Das regras do serviço e do sistema de arquivos",
          "Apenas da cor do ícone",
          "Somente da capacidade da mídia"
        ],
        "answer": 0,
        "explanation": "Das regras do serviço e do sistema de arquivos."
      }
    ]
  },
  {
    "id": "bloco-8",
    "title": "Armazenamento e integração",
    "summary": "Bloco, arquivo e objeto oferecem interfaces diferentes. A recuperação exige cópias e testes; redundância e controle de acesso resolvem outras necessidades.",
    "image": "modelos-armazenamento.gif",
    "questions": [
      {
        "id": "b8q1",
        "question": "Armazenamento em bloco apresenta normalmente:",
        "choices": [
          "Um volume endereçado em blocos",
          "Uma caixa de e-mail",
          "Uma fila de processos"
        ],
        "answer": 0,
        "explanation": "Um volume endereçado em blocos."
      },
      {
        "id": "b8q2",
        "question": "Armazenamento de arquivos organiza acesso por:",
        "choices": [
          "Diretórios e caminhos",
          "Somente endereço de CPU",
          "Vídeos de treinamento"
        ],
        "answer": 0,
        "explanation": "Diretórios e caminhos."
      },
      {
        "id": "b8q3",
        "question": "Um objeto é normalmente acessado por:",
        "choices": [
          "Chave e API do serviço",
          "Número de PID",
          "Comando de escalonamento"
        ],
        "answer": 0,
        "explanation": "Chave e API do serviço."
      },
      {
        "id": "b8q4",
        "question": "Armazenamento de objetos é automaticamente uma pasta de rede montada?",
        "choices": [
          "Não; depende de solução e configuração",
          "Sim, em todos os serviços",
          "Sim, sem nenhum protocolo"
        ],
        "answer": 0,
        "explanation": "Não; depende de solução e configuração."
      },
      {
        "id": "b8q5",
        "question": "Redundância e backup:",
        "choices": [
          "Têm funções diferentes",
          "São sempre a mesma coisa",
          "Eliminam testes"
        ],
        "answer": 0,
        "explanation": "Têm funções diferentes."
      },
      {
        "id": "b8q6",
        "question": "Uma cópia de segurança é mais útil quando:",
        "choices": [
          "A restauração é testada",
          "Nunca é verificada",
          "Fica necessariamente no mesmo volume"
        ],
        "answer": 0,
        "explanation": "A restauração é testada."
      },
      {
        "id": "b8q7",
        "question": "Um hash pode ajudar a:",
        "choices": [
          "Comparar conteúdo de arquivos",
          "Provar sozinho a identidade do autor",
          "Substituir toda política de backup"
        ],
        "answer": 0,
        "explanation": "Comparar conteúdo de arquivos."
      },
      {
        "id": "b8q8",
        "question": "Dados na nuvem podem exigir:",
        "choices": [
          "Identidade, permissões e configuração de acesso",
          "Apenas um monitor",
          "Somente uma extensão de arquivo"
        ],
        "answer": 0,
        "explanation": "Identidade, permissões e configuração de acesso."
      },
      {
        "id": "b8q9",
        "question": "Se o serviço negar uma operação, a análise deve incluir:",
        "choices": [
          "Identidade, autorização e configuração",
          "Somente a cor do gabinete",
          "A idade do navegador"
        ],
        "answer": 0,
        "explanation": "Identidade, autorização e configuração."
      },
      {
        "id": "b8q10",
        "question": "Para escolher bloco, arquivo ou objeto é preciso considerar:",
        "choices": [
          "Aplicação, interface de acesso e requisitos",
          "Apenas o nome da tecnologia",
          "Somente o tamanho da tela"
        ],
        "answer": 0,
        "explanation": "Aplicação, interface de acesso e requisitos."
      }
    ]
  }
];
