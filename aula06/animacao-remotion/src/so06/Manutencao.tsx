import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, Screen, Terminal, mono, fade} from './Visual';

const data = [
  {slot:0,name:'file01',at:1}, {slot:1,name:'file01',at:2.5},
  {slot:2,name:'file01',at:4}, {slot:3,name:'file01',at:5.5},
  {slot:4,name:'file02',at:7.5}, {slot:5,name:'file02',at:9}, {slot:6,name:'file02',at:10.5},
  {slot:7,name:'file01',at:19}, {slot:8,name:'file01',at:20.5},
];
const cell=92, gap=9;

export const Manutencao: React.FC = () => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig(); const seconds=f/fps;
 const question=seconds>=12 && seconds<19;
 const methods=seconds>=26;
 const message=seconds<7?'file01 é gravado bloco a bloco.':seconds<12?'file02 ocupa os três blocos seguintes.':question?'O próximo bloco de file01 já está ocupado por file02.':seconds<26?'No exemplo, file01 cresce em outra região livre.':'Os metadados registram como localizar os trechos.';
 const kicker=seconds<12?'01 · GRAVAÇÃO':question?'02 · PERGUNTA':seconds<26?'03 · CRESCIMENTO':'04 · COMO ENCONTRAR?';
 return <Screen kicker="06 · CRESCIMENTO E ALOCAÇÃO" title="Quando o arquivo cresce" subtitle="Observe a gravação e investigue como o sistema encontra cada trecho." caption={seconds>=37 ? 'MANUTENÇÃO · HDD: reorganização pode reduzir deslocamentos. SSD: siga a otimização do sistema, como TRIM.' : 'MODELO CONCEITUAL · O sistema procura espaço livre e mantém informações para localizar os dados.'}>
  <Terminal label="volume · tabela de blocos fixa">
   <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 390px',gap:28,alignItems:'start'}}>
    <div>
     <div style={{font:`20px ${mono}`,color:C.muted,height:42}}>ESPAÇO DE ARMAZENAMENTO · BLOCOS 00–19</div>
     <div style={{display:'grid',gridTemplateColumns:`repeat(10, ${cell}px)`,gap,position:'relative'}}>
      {Array.from({length:20},(_,slot)=>{
        const item=data.find(x=>x.slot===slot);
        const done=item && seconds>=item.at+1;
        const bg=done?(item.name==='file01'?C.purple:C.teal):'#2e3436';
        return <div key={slot} style={{width:cell,height:cell,border:`1px solid ${C.line}`,borderRadius:5,background:bg,boxSizing:'border-box',position:'relative',display:'grid',placeItems:'center',font:`bold 18px ${mono}`,color:'#181a1c'}}><span style={{position:'absolute',top:5,left:6,font:`13px ${mono}`,color:done?'#28282c':C.muted}}>{String(slot).padStart(2,'0')}</span>{done?item.name:''}</div>;
      })}
      {data.map(item=>{
        const progress=interpolate(seconds,[item.at,item.at+1],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
        const show=seconds>=item.at && seconds<item.at+1;
        const x=(item.slot%10)*(cell+gap);const y=Math.floor(item.slot/10)*(cell+gap);
        return <div key={item.slot} style={{position:'absolute',left:interpolate(progress,[0,1],[370,x]),top:interpolate(progress,[0,1],[-54,y]),width:cell,height:cell,borderRadius:5,background:item.name==='file01'?C.purple:C.teal,color:'#181a1c',display:'grid',placeItems:'center',font:`bold 18px ${mono}`,opacity:show?1:0,boxShadow:'0 5px 18px #0008'}}>{item.name}</div>;
      })}
     </div>
    </div>
    <div style={{border:`1px solid ${question?C.amber:C.line}`,borderRadius:14,padding:'20px 22px',minHeight:215,background:question?'#3c3322':'#252a2e',boxSizing:'border-box'}}>
     <div style={{font:`bold 18px ${mono}`,letterSpacing:2,color:question?C.amber:C.teal}}>{kicker}</div>
     <p style={{font:'bold 24px/1.3 Arial,sans-serif',color:C.text,margin:'12px 0'}}>{question?'file01 precisa crescer: grava em sequência ou em outro lugar?':message}</p>
     {seconds>=19 && <div style={{opacity:fade(f,19*fps,20*fps),font:`18px/1.5 ${mono}`,color:C.muted}}>file01: 00–03 + 07–08<br/>file02: 04–06</div>}
    </div>
   </div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:24,opacity:methods?fade(f,26*fps,27*fps):0}}>
    <div style={{padding:'14px 16px',border:`1px solid ${C.line}`,borderRadius:9}}><strong style={{color:C.purple,fontSize:22}}>Contígua</strong><div style={{color:C.muted,fontSize:19,marginTop:5}}>Crescer pode exigir mover o arquivo.</div></div>
    <div style={{padding:'14px 16px',border:`1px solid ${C.line}`,borderRadius:9}}><strong style={{color:C.teal,fontSize:22}}>Encadeada</strong><div style={{color:C.muted,fontSize:19,marginTop:5}}>Referências ligam os blocos.</div></div>
    <div style={{padding:'14px 16px',border:`1px solid ${C.line}`,borderRadius:9}}><strong style={{color:C.amber,fontSize:22}}>Indexada / extents</strong><div style={{color:C.muted,fontSize:19,marginTop:5}}>Índices ou intervalos localizam dados.</div></div>
   </div>
  </Terminal>
 </Screen>;
};
