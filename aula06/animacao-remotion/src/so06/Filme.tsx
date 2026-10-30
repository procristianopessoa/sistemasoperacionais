import {ImagemReferencia} from './ImagemReferencia';
import React from 'react';import {Series,useVideoConfig} from 'remotion';import {Midia} from './Midia';import {Formato} from './Formato';import {Alocacao} from './Alocacao';import {Fragmentacao} from './Fragmentacao';import {Midias} from './Midias';import {Manutencao} from './Manutencao';import {Fechamento} from './Fechamento';
export const Filme:React.FC=()=>{const {fps}=useVideoConfig();return <Series><Series.Sequence name="01 · Linux, Windows e NFS" durationInFrames={48*fps} premountFor={fps}><Midia/></Series.Sequence><Series.Sequence name="02 · Formato" durationInFrames={32*fps} premountFor={fps}><Formato/></Series.Sequence><Series.Sequence name="02b · Imagem em movimento" durationInFrames={10*fps} premountFor={fps}><ImagemReferencia/></Series.Sequence><Series.Sequence
    name="03 · Alocação"
    durationInFrames={12*fps}
    premountFor={fps}
    style={{
      translate: '6px 0px'
    }}
  ><Alocacao/></Series.Sequence><Series.Sequence name="04 · Fragmentação" durationInFrames={19*fps} premountFor={fps}><Fragmentacao/></Series.Sequence><Series.Sequence name="05 · HDD e SSD" durationInFrames={20*fps} premountFor={fps}><Midias/></Series.Sequence><Series.Sequence name="06 · Crescimento e alocação" durationInFrames={45*fps} premountFor={fps}><Manutencao/></Series.Sequence><Series.Sequence name="07 · Fechamento" durationInFrames={15*fps} premountFor={fps}><Fechamento/></Series.Sequence></Series>};
