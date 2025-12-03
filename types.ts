import React from 'react';

export enum PanelType {
  INTRO = 'INTRO',
  PROBLEM = 'PROBLEM',
  REVELATION = 'REVELATION',
  MECHANISM = 'MECHANISM',
  STRATEGY = 'STRATEGY',
  CONCLUSION = 'CONCLUSION'
}

export interface InfographicStep {
  title: string;
  description: string;
  icon: React.ElementType;
}