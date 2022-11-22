import React from 'react'
import { useCanvas } from './CanvasContext'

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return <button onClick={clearCanvas}>Erase</button>
}

export const ZoomInButton = () => {
    const { zoomIn } = useCanvas()
  
    return <button onClick={zoomIn}>Zoom In</button>
  }