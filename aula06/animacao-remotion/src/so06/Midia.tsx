import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, Screen, Terminal, Note, mono, fade} from './Visual';

const Window: React.FC<{label:string;children:React.ReactNode}> = ({label,children}) => <Terminal label={label}>{children}</Terminal>;
const DiskModel: React.FC<{first:string; second:string; t:number; fps:number}> = ({first,second,t,fps}) => {
 const width=interpolate(t,[fps,fps*3.5],[290,850],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const partitions=fade(t,fps*3.5,fps*5);
 const grid=fade(t,fps*6,fps*8);
 const zoom=fade(t,fps*9,fps*10.5);
 const scale=interpolate(t,[fps*9,fps*10.5],[.78,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 380px',gap:26,alignItems:'center'}}>
  <div style={{width,maxWidth:'100%',height:245,background:'#42494b',border:`2px solid ${C.line}`,borderRadius:8,display:'flex',overflow:'hidden',position:'relative'}}>
   <div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',opacity:1-partitions,font:`bold 30px ${mono}`}}>ESPAÇO DO DISCO</div>
   <div style={{display:'flex',width:'100%',opacity:partitions}}>
    {[{name:first,color:'#554566'},{name:second,color:'#315153'}].map((item,i)=><div key={item.name} style={{width:'50%',background:item.color,borderRight:i===0?'2px solid #a3abad':undefined,boxSizing:'border-box',position:'relative',overflow:'hidden'}}>
     <div style={{position:'absolute',inset:0,opacity:grid,backgroundImage:'linear-gradient(#ffffff50 1px,transparent 1px),linear-gradient(90deg,#ffffff50 1px,transparent 1px)',backgroundSize:'28px 28px'}}/>
     <div style={{position:'absolute',top:15,left:18,padding:'7px 10px',background:'#14171bd9',borderRadius:6,font:`bold 24px ${mono}`,color:C.text}}>{item.name}</div>
     {i===0&&<div style={{position:'absolute',left:112,top:112,width:28,height:28,border:`3px solid ${C.amber}`,borderRadius:3,boxShadow:`0 0 15px ${C.amber}`,opacity:zoom,boxSizing:'border-box'}}/>}
    </div>)}
   </div>
  </div>
  <div style={{opacity:zoom,scale,border:`1px solid ${C.amber}`,borderRadius:12,padding:'18px 20px',background:'#2e2b25',fontFamily:mono,boxSizing:'border-box'}}>
    <div style={{fontSize:18,color:C.amber,letterSpacing:1}}>AMPLIAÇÃO · 1 UNIDADE</div>
    <div style={{display:'flex',alignItems:'center',gap:18,margin:'12px 0'}}><div style={{width:72,height:72,border:`3px solid ${C.amber}`,background:'#66573b',borderRadius:5,display:'grid',placeItems:'center',fontSize:19}}>4 KiB</div><span style={{fontSize:19,color:C.muted}}>Exemplo<br/>de escolha</span></div>
    <div style={{fontSize:19,color:C.text}}>4 · 8 · 16 · 32 · 64 KiB</div>
    <div style={{fontSize:15,color:C.muted,marginTop:8}}>Opções variam conforme formato e ferramenta.</div>
  </div>
 </div>;
};

const NfsTraffic: React.FC<{t:number;fps:number}> = ({t,fps}) => {
 const hosts=[{name:'Linux · cliente',color:'#c9a6ff',y:57},{name:'macOS · cliente',color:'#75e6df',y:125},{name:'Windows · cliente compatível',color:'#ffc46b',y:193}];
 return <div style={{position:'relative',display:'grid',gridTemplateColumns:'32% 1fr 36%',alignItems:'center',height:250,opacity:fade(t,fps*.5,fps*2)}}>
   <svg viewBox="0 0 1100 250" preserveAspectRatio="none" style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}} aria-label="Pacotes ilustrativos de ida e volta entre clientes e servidor NFS">
    {hosts.map((host,i)=>{
      const elapsed=Math.max(0,t-fps*(4+i));
      const cycle=(elapsed%(fps*4))/(fps*2);
      const progress=cycle<=1?cycle:2-cycle;
      const x=704-352*progress;
      const y=host.y+(125-host.y)*progress;
      const connection=fade(t,fps*(3+i),fps*(3.85+i));
      const visible=fade(t,fps*(4+i),fps*(4.4+i));
      return <g key={host.name}>
        <line x1="704" y1={host.y} x2="352" y2="125" stroke={host.color} strokeWidth="2.2" opacity=".65" pathLength="1" strokeDasharray="1" strokeDashoffset={1-connection} />
        <g opacity={visible}><circle cx={x} cy={y} r="12" fill={host.color} opacity=".20"/><rect x={x-7} y={y-7} width="14" height="14" rx="3" fill={host.color}/></g>
      </g>;
    })}
   </svg>
   <div style={{position:'relative',padding:'32px',border:`2px solid ${C.purple}`,borderRadius:12,background:'#3c3247',fontFamily:mono}}><div style={{fontSize:30,fontWeight:700}}>SERVIDOR NFS</div><div style={{fontSize:22,color:C.muted,marginTop:14}}>/srv/dados</div><div style={{fontSize:20,color:C.muted,marginTop:10}}>armazenamento do servidor</div></div>
   <div />
   <div style={{position:'relative',display:'grid',gap:12,fontFamily:mono}}>{hosts.map((host,i)=><div key={host.name} style={{opacity:fade(t,fps*(2+i),fps*(3+i)),padding:'15px 20px',background:'#263333',border:`1px solid ${host.color}`,borderRadius:8,fontSize:22,display:'flex',alignItems:'center',gap:12}}><span style={{width:12,height:12,borderRadius:'50%',background:host.color,flexShrink:0}} />{host.name}</div>)}</div>
 </div>;
};

export const Midia: React.FC = () => {
 const frame=useCurrentFrame(); const {fps}=useVideoConfig();
 const part=frame<fps*18?0:frame<fps*36?1:2; const t=frame-(part===0?0:part===1?fps*18:fps*36);
 const duration=part===2?12:18;
 const phaseOpacity=interpolate(t,[0,fps*.5, fps*(duration-.6),fps*duration],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const config=[
  {kicker:'01A · LINUX',title:'Um disco, duas partições.',subtitle:'No Linux, o disco pode aparecer como /dev/sda e suas partições como /dev/sda1 e /dev/sda2.',caption:'LINUX · /dev/sda e /dev/sdb são exemplos de dispositivos diferentes; os nomes variam.'},
  {kicker:'01B · WINDOWS',title:'Volumes recebem caminhos.',subtitle:'No Windows, letras como C: e D: identificam pontos de acesso a volumes.',caption:'WINDOWS · Letras e partições não têm correspondência automática com os nomes usados no Linux.'},
  {kicker:'01C · ARQUIVOS EM REDE',title:'Um recurso, vários hosts.',subtitle:'NFS compartilha arquivos pela rede com clientes que possuam suporte e configuração adequados.',caption:'NFS · O servidor administra o armazenamento; clientes acessam arquivos pelo protocolo de rede.'},
 ][part];
 return <Screen kicker={config.kicker} title={config.title} subtitle={config.subtitle} caption={config.caption}>
  <div style={{opacity:phaseOpacity}}>
   {part===0 && <Window label="Linux · disco e partições"><div style={{font:`24px ${mono}`,color:C.muted,marginBottom:15}}>/dev/sda · disco de exemplo</div><DiskModel first="/dev/sda1" second="/dev/sda2" t={t} fps={fps}/><div style={{opacity:fade(t,fps*4,fps*5),marginTop:16,font:`22px ${mono}`,color:C.muted}}>/dev/sdb · outro disco de exemplo &nbsp; → &nbsp; /dev/sdb1</div><Note>Grade ilustrativa: um volume real pode conter milhões de unidades.</Note></Window>}
   {part===1 && <Window label="Windows · disco e volumes"><div style={{font:`24px ${mono}`,color:C.muted,marginBottom:15}}>Disco 0 · exemplo de disco básico</div><DiskModel first="Volume C:" second="Volume D:" t={t} fps={fps}/><div style={{opacity:fade(t,fps*4,fps*5),marginTop:16,font:`22px ${mono}`,color:C.muted}}>C:\ e D:\ · exemplos de caminhos de acesso</div><Note>A grade representa unidades de alocação; seu tamanho é definido na formatação.</Note></Window>}
   {part===2 && <Window label="NFS · servidor e clientes"><NfsTraffic t={t} fps={fps}/><Note>Os pacotes representam acessos pela rede; suporte, configurações e permissões determinam o acesso.</Note></Window>}
  </div>
 </Screen>;
};
