# Fontes da comparação de unidades

A tabela mostra valores documentados e exemplos, não uma promessa de que todos os tamanhos podem ser escolhidos em todas as versões. Os termos bloco, cluster e unidade de alocação variam conforme o sistema.

- NTFS: https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fsa/4e3695bd-7574-4f24-a223-b4679c065b63 — mínimo de 512 bytes e máximo conforme versão, com 4 KiB como padrão citado.
- ext3/ext4 e mke2fs: https://man7.org/linux/man-pages/man8/mke2fs.8.html — tamanhos dependem da arquitetura e dos limites para montagem; bigalloc é uma configuração adicional específica.
- ext4: https://www.kernel.org/doc/html/latest/filesystems/ext4/blocks.html — blocos de 1 a 64 KiB; 4 KiB típico, sujeito às restrições do kernel.
- APFS: https://developer.apple.com/support/apple-file-system/Apple-File-System-Reference.pdf — tamanho de bloco do contêiner; a referência cita mínimo 4 KiB, padrão 4 KiB e máximo 64 KiB. Suporte real e opções da ferramenta podem variar.
- HFS+: https://developer.apple.com/library/archive/technotes/tn/tn1150.html — bloco de alocação é potência de dois com pelo menos 512 bytes; restrições adicionais dependem da implementação.
- NFS: https://man7.org/linux/man-pages/man5/nfs.5.html — rsize/wsize se referem ao tamanho dos pedidos de transferência e não ao tamanho de alocação no armazenamento do servidor.
