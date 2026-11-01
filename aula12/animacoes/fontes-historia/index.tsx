import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {JornadaBrasil} from './jornada-linux-brasil';
const Root = () => <Composition id="SO12-Linux-Brasil-e-industria" component={JornadaBrasil} width={1920} height={1080} fps={30} durationInFrames={3510} />;
registerRoot(Root);
