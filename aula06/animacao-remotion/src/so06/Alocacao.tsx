import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, Screen, mono} from './Visual';

const orange = '#ff7900';
const panelStyle: React.CSSProperties = {background:'linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.045))', border:'1px solid rgba(255,255,255,.24)', borderRadius:26, padding:'26px 30px', boxShadow:'0 14px 36px rgba(0,0,0,.20)', minHeight:390, boxSizing:'border-box'};

const UnitCard: React.FC<{size:4|64; frame:number; fps:number}> = ({size, frame, fps}) => {
  const show = interpolate(frame, [0, fps*.6], [0, 1], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  const fill = interpolate(frame, [fps*1.2, fps*2.2], [0, 1], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  const columns = size === 4 ? 4 : 16;
  const square = size === 4 ? 70 : 28;
  return <div style={{...panelStyle, opacity:show}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10}}><strong style={{font:'bold 34px Arial, sans-serif',color:C.text}}>Unidade de {size} KiB</strong><span style={{background:orange,color:'#101010',borderRadius:24,padding:'8px 15px',font:`bold 19px ${mono}`}}>file1 · 1 KiB</span></div>
    <div style={{fontSize:21,color:C.muted,margin:'15px 0 18px'}}>1 unidade representada em partes de 1 KiB</div>
    <div style={{display:'grid',gridTemplateColumns:`repeat(${columns}, ${square}px)`,gap:5,minHeight:132,alignContent:'center'}}>
      {Array.from({length:size},(_,i)=><div key={i} style={{height:square,width:square,border:'1px solid #6e7075',borderRadius:4,boxSizing:'border-box',background:i===0?`rgba(255,121,0,${fill})`:'repeating-linear-gradient(135deg,#25282a,#25282a 7px,#4a4032 8px,#25282a 10px)'}} />)}
    </div>
    <div style={{height:1,background:'#66676b',margin:'14px 0'}} />
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:15}}><span style={{font:`bold 31px ${mono}`,color:orange}}>{size-1} KiB</span><span style={{fontSize:23,color:C.muted}}>não utilizados na unidade</span></div>
  </div>;
};

export const Alocacao: React.FC = () => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  return <Screen kicker="03 · UNIDADE DE ALOCAÇÃO" title="Um arquivo. Dois tamanhos." subtitle="Compare a mesma quantidade de dados em duas unidades de alocação." caption="MODELO SIMPLIFICADO · 1 KiB de dados ocupa uma unidade inteira; recursos do sistema podem mudar a ocupação.">
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:28}}>
      <UnitCard size={4} frame={f} fps={fps}/><UnitCard size={64} frame={f} fps={fps}/>
    </div>
  </Screen>;
};
