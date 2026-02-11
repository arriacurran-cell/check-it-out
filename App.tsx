import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Stage } from './types';
import StageSignal from './components/StageSignal';
import StageCircuit from './components/StageCircuit';
import StageOptimizing from './components/StageOptimizing';
import StageConversion from './components/StageConversion';

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>(Stage.SIGNAL);

  const handleNextStage = () => {
    if (stage === Stage.SIGNAL) setStage(Stage.CIRCUIT);
    else if (stage === Stage.CIRCUIT) setStage(Stage.OPTIMIZING);
    else if (stage === Stage.OPTIMIZING) setStage(Stage.CONVERSION);
    else if (stage === Stage.CONVERSION) setStage(Stage.FINAL);
  };

  const handlePrevStage = () => {
    if (stage === Stage.CIRCUIT) setStage(Stage.SIGNAL);
    else if (stage === Stage.CONVERSION) setStage(Stage.CIRCUIT);
    else if (stage === Stage.FINAL) setStage(Stage.CONVERSION);
  };

  return (
    <div className="min-h-screen w-full bg-background text-body font-sans selection:bg-primary/20">
      <AnimatePresence mode="wait">
        {stage === Stage.SIGNAL && (
          <StageSignal key="signal" onComplete={handleNextStage} />
        )}
        {stage === Stage.CIRCUIT && (
          <StageCircuit 
            key="circuit" 
            onComplete={handleNextStage} 
            onBack={handlePrevStage} 
          />
        )}
        {stage === Stage.OPTIMIZING && (
          <StageOptimizing key="optimizing" onComplete={handleNextStage} />
        )}
        {(stage === Stage.CONVERSION || stage === Stage.FINAL) && (
          <StageConversion 
            key="conversion" 
            stage={stage} 
            setStage={setStage}
            onBack={handlePrevStage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;