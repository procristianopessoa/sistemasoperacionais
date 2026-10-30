import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {C, Screen, Terminal, mono} from './Visual';

const rows = [
  {name:'NTFS', unit:'512 B até 2 MiB', note:'4 KiB comum; limite depende da versão do Windows'},
  {name:'ext3', unit:'1, 2 ou 4 KiB', note:'Exemplos comuns; depende do sistema e arquitetura'},
  {name:'ext4', unit:'1 a 64 KiB', note:'4 KiB típico; blocos maiores dependem do kernel'},
  {name:'APFS', unit:'4 a 64 KiB', note:'Bloco do contêiner; 4 KiB padrão na referência Apple'},
  {name:'HFS+', unit:'≥ 512 B', note:'Potências de 2; a implementação e o volume impõem limites'},
];

export const Formato: React.FC = () => {
  const frame = useCurrentFrame(); const {fps} = useVideoConfig();
  const active = Math.min(rows.length - 1, Math.floor(frame / (fps * 4)));
  const nfs = frame >= fps * 21;
  return <Screen kicker="02 · COMPARAR SISTEMAS DE ARQUIVOS" title={'Cada formato.\nSuas unidades.'} subtitle="Compare tamanhos de bloco ou alocação com atenção à versão e à plataforma." caption="REFERÊNCIAS TÉCNICAS · São exemplos e limites documentados; confirme no ambiente real.">
    <Terminal label="unidades de alocação · comparação">
      <div style={{display:'grid',gridTemplateColumns:'1.1fr 1.45fr 3.6fr',gap:12,padding:'4px 18px 10px',font:`bold 18px ${mono}`,color:C.muted}}><span>FORMATO</span><span>TAMANHO</span><span>OBSERVAÇÃO</span></div>
      {rows.map((row,i)=><div key={row.name} style={{display:'grid',gridTemplateColumns:'1.1fr 1.45fr 3.6fr',gap:12,padding:'13px 18px',borderBottom:`1px solid ${C.line}`,background:!nfs&&active===i?'#393348':'transparent',fontFamily:mono,fontSize:23,alignItems:'center'}}><strong style={{color:!nfs&&active===i?C.purple:C.text}}>{row.name}</strong><span style={{color:C.teal}}>{row.unit}</span><span style={{color:C.muted,fontSize:21}}>{row.note}</span></div>)}
      <div style={{marginTop:15,padding:'13px 18px',border:`1px solid ${nfs?C.teal:C.line}`,background:nfs?'#263f40':'#202627',fontFamily:mono,color:C.text,fontSize:22}}><strong style={{color:C.teal}}>NFS · REDE</strong> &nbsp; rsize/wsize = tamanho de transferência; a alocação pertence ao servidor.</div>
    </Terminal>
  </Screen>;
};
