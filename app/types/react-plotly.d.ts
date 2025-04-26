declare module 'react-plotly.js' {
  import { Component } from 'react';
  import { Data, Layout } from 'plotly.js';

  interface PlotParams {
    data: Data[];
    layout?: Partial<Layout>;
    config?: any;
    frames?: any[];
    style?: React.CSSProperties;
    className?: string;
    onInitialized?: (figure: any) => void;
    onUpdate?: (figure: any) => void;
    onPurge?: (figure: any) => void;
    onError?: (error: any) => void;
    onHover?: (event: any) => void;
    onUnhover?: (event: any) => void;
    onClick?: (event: any) => void;
    onDoubleClick?: (event: any) => void;
    onSelected?: (event: any) => void;
    onSelecting?: (event: any) => void;
    onDeselect?: (event: any) => void;
    onRelayout?: (event: any) => void;
    onRedraw?: (event: any) => void;
    onRestyle?: (event: any) => void;
    onAnimated?: (event: any) => void;
    onAnimatingFrame?: (event: any) => void;
    onAnimationInterrupted?: (event: any) => void;
    onTransitioning?: (event: any) => void;
    onTransitionInterrupted?: (event: any) => void;
    onSliderChange?: (event: any) => void;
    onSliderEnd?: (event: any) => void;
    onSunburstClick?: (event: any) => void;
    onSunburstHover?: (event: any) => void;
    onSunburstUnhover?: (event: any) => void;
    onSunburstSelect?: (event: any) => void;
    onSunburstDeselect?: (event: any) => void;
    onSunburstRestyle?: (event: any) => void;
    onSunburstRelayout?: (event: any) => void;
    onSunburstRedraw?: (event: any) => void;
    onSunburstAnimated?: (event: any) => void;
    onSunburstAnimatingFrame?: (event: any) => void;
    onSunburstAnimationInterrupted?: (event: any) => void;
    onSunburstTransitioning?: (event: any) => void;
    onSunburstTransitionInterrupted?: (event: any) => void;
    onSunburstSliderChange?: (event: any) => void;
    onSunburstSliderEnd?: (event: any) => void;
  }

  class Plot extends Component<PlotParams> {}

  export default Plot;
} 