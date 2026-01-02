import { lazy } from 'react';

// Lazy load interactive components for better performance
export const interactiveComponents: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  Chapter01: lazy(() => import('./Chapter01ArrayLoop/ArrayLoop')),
  Chapter02: lazy(() => import('./Chapter02Sort/SortVisualizer')),
  Chapter03: lazy(() => import('./Chapter03Search/SearchDemo')),
  Chapter04: lazy(() => import('./Chapter04String/StringDemo')),
  Chapter05: lazy(() => import('./Chapter05StackQueue/StackQueueDemo')),
  Chapter06: lazy(() => import('./Chapter06Recursion/RecursionDemo')),
  Chapter07: lazy(() => import('./Chapter07Patterns/PatternsDemo')),
  Chapter08: lazy(() => import('./Chapter08ReactAlgo/ReactAlgoDemo')),
};
