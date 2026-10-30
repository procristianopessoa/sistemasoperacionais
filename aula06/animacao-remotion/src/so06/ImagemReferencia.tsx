import React from 'react';
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, mono} from './Visual';

export const ImagemReferencia: React.FC = () => {
  const frame = useCurrentFrame(); const {fps} = useVideoConfig();
  const move = (start:number, end:number, from:number, to:number) => interpolate(frame, [start*fps,end*fps], [from,to], {extrapolateLeft:'clamp', extrapolateRight:'clamp', easing:Easing.inOut(Easing.cubic)});
  const x1=move(1.5,4.5,90,430); const y1=move(1.5,4.5,292,462);
  const x2=move(5,7.5,390,90); const y2=336;
  const glow=interpolate(frame,[0,fps,8*fps,10*fps],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <AbsoluteFill style={{background:C.bg,overflow:'hidden'}}>
    <Img src={staticFile('so06/referencia-visual-alocacao.png')} style={{width:'100%',height:'100%',objectFit:'cover'}} />
    <svg viewBox="0 0 1920 1080" width="100%" height="100%" style={{position:'absolute',inset:0}} aria-label="Simulação de arquivos se deslocando pelo espaço lógico">
      <rect x="70" y="270" width="635" height="320" rx="8" fill="#13171b"/>
      {Array.from({length:72},(_,i)=><rect key={i} x={80+(i%12)*51} y={280+Math.floor(i/12)*44} width="45" height="38" rx="3" fill="#252b30" stroke="#59616a" strokeWidth="1.5"/>)}
      <rect x="190" y="412" width="142" height="35" rx="5" fill="#e4c478"/><text x="261" y="436" textAnchor="middle" fontFamily={mono} fontSize="19" fontWeight="bold" fill="#16181b">file03</text>
      <g transform={`translate(${x2} ${y2})`}><rect width="142" height="35" rx="5" fill="#75e6df"/><text x="71" y="24" textAnchor="middle" fontFamily={mono} fontSize="19" fontWeight="bold" fill="#16181b">file02</text></g>
      <g transform={`translate(${x1} ${y1})`}><rect width="142" height="35" rx="5" fill="#bc97e9"/><text x="71" y="24" textAnchor="middle" fontFamily={mono} fontSize="19" fontWeight="bold" fill="#16181b">file01</text></g>
      <text x="80" y="563" fontFamily={mono} fontSize="18" fill="#d8dadd">MOVIMENTAÇÃO LÓGICA · SIMULAÇÃO</text>
    </svg>
    <div style={{position:'absolute',left:'2%',top:'18%',width:'48%',height:'38%',border:`3px solid ${C.purple}`,borderRadius:20,boxShadow:`0 0 22px ${C.purple}70`,opacity:glow,pointerEvents:'none'}} />
  </AbsoluteFill>;
};
