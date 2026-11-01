import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
export const C={bg:'#0d0f15',panel:'rgba(31,33,39,.86)',line:'#51565b',text:'#f3f1ed',muted:'#c4c6c6',purple:'#bc97e9',teal:'#75e6df',amber:'#e4c478'};
export const mono='Consolas, "Cascadia Mono", monospace';
export const fade=(f:number,a:number,b:number)=>interpolate(f,[a,b],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
export const Screen:React.FC<{kicker:string;title:string;subtitle:string;children:React.ReactNode;caption:string}> = ({kicker,title,subtitle,children,caption}) => {
 const frame=useCurrentFrame(); const {fps}=useVideoConfig();
 return <AbsoluteFill style={{backgroundColor:C.bg,color:C.text,backgroundImage:'radial-gradient(ellipse at 90% 0%, rgba(255,121,0,.10), transparent 38%), radial-gradient(ellipse at 8% 95%, rgba(115,95,230,.12), transparent 38%), linear-gradient(#ffffff05 1px,transparent 1px), linear-gradient(90deg,#ffffff05 1px,transparent 1px)',backgroundSize:'auto, auto, 120px 120px, 120px 120px',padding:'48px 80px 55px',fontFamily:'Arial, sans-serif'}}>
   <div style={{fontFamily:mono,letterSpacing:3,fontSize:19,color:C.muted}}>{kicker}  /  SISTEMAS OPERACIONAIS</div>
   <header style={{display:'grid',gridTemplateColumns:'1fr 0.9fr',alignItems:'center',gap:60,padding:'18px 0 22px',borderBottom:`1px solid ${C.line}`,opacity:fade(frame,0,fps*.6)}}>
     <h1 style={{font:'bold 65px/1.05 Georgia, serif',letterSpacing:-1,margin:0}}>{title.replace(/\n/g,' ')}</h1>
     <p style={{fontSize:27,lineHeight:1.3,color:C.muted,margin:0}}>{subtitle}</p>
   </header>
   <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',minHeight:0,padding:'22px 0'}}><div style={{width:'100%',maxWidth:1490}}>{children}</div></div>
   <div style={{borderTop:`3px solid ${C.purple}`,background:'#313638',padding:'18px 27px 20px',color:C.text}}><div style={{fontFamily:mono,fontSize:16,letterSpacing:2,color:C.purple,marginBottom:7}}>IDEIA PRINCIPAL</div><div style={{fontFamily:mono,fontSize:25,lineHeight:1.3}}>{caption}</div></div>
 </AbsoluteFill>;
};
export const Terminal:React.FC<{label:string;children:React.ReactNode}> =({label,children})=><div style={{background:C.panel,border:`1px solid ${C.line}`,borderRadius:20,overflow:'hidden',boxShadow:'0 16px 40px #0006',width:'100%',boxSizing:'border-box'}}><div style={{padding:'14px 22px',background:'#262a2a',fontFamily:mono,fontSize:21,color:C.muted}}><span style={{color:'#f27670'}}>●</span> <span style={{color:C.amber}}>●</span> <span style={{color:'#7dc992'}}>●</span> &nbsp; {label}</div><div style={{padding:26}}>{children}</div></div>;
export const FileGrid:React.FC<{cells:string[];cols?:number;cell?:number;labels?:Record<string,string>}> =({cells,cols=10,cell=65,labels})=><div style={{display:'grid',gridTemplateColumns:`repeat(${cols}, ${cell}px)`,gap:8}}>{cells.map((v,i)=><div key={i} style={{width:cell,height:cell,border:`1px solid ${C.line}`,borderRadius:4,background:v==='A'?C.purple:v==='B'?C.teal:v==='C'?C.amber:'#2e3436',display:'grid',placeItems:'center',font:`bold ${cell*(labels?.[v] ? .22 : .31)}px ${mono}`,color:'#17191a'}}>{labels?.[v] || v || ''}</div>)}</div>;
export const Note:React.FC<{children:React.ReactNode}> =({children})=><div style={{font:`25px/1.45 ${mono}`,color:C.muted,marginTop:18}}>{children}</div>;
