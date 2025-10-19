"use client";

import { useState } from 'react';

export const useDragAnimation = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - startPos.x;
    const y = e.clientY - startPos.y;
    const moveX = Math.max(Math.min(x, 50), -50);
    const moveY = Math.max(Math.min(y, 50), -50);
    setOffset({ x: moveX, y: moveY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setOffset({ x: 0, y: 0 });
  };

  const dragProps = {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp,
    style: {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
      transition: isDragging ? "none" : "transform 0.3s ease",
      cursor: isDragging ? "grabbing" : "grab",
    }
  };

  return dragProps;
};