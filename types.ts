import React from 'react';

export enum Stage {
  SIGNAL = 'SIGNAL',
  CIRCUIT = 'CIRCUIT',
  OPTIMIZING = 'OPTIMIZING',
  CONVERSION = 'CONVERSION',
  FINAL = 'FINAL'
}

export interface CircuitComponent {
  id: string;
  type: 'battery' | 'resistor' | 'capacitor' | 'switch';
  name: string;
  description: string;
  connectedText: string[];
  cuteComment: string; // Added field
  icon: React.ReactNode;
}