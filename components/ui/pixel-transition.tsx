"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PixelTransitionProps = {
  active: boolean;
  firstContent: ReactNode;
  secondContent: ReactNode;
  gridSize?: number;
  columns?: number;
  rows?: number;
  pixelColor?: string;
  exitPixelColor?: string;
  animationStepDuration?: number;
  exitAnimationStepDuration?: number;
  squarePixels?: boolean;
  pixelSize?: number;
  className?: string;
};

function shuffle(items: number[]) {
  const nextItems = [...items];

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [nextItems[index], nextItems[swapIndex]] = [nextItems[swapIndex], nextItems[index]];
  }

  return nextItems;
}

export function PixelTransition({
  active,
  firstContent,
  secondContent,
  gridSize = 7,
  columns,
  rows,
  pixelColor = "currentColor",
  exitPixelColor,
  animationStepDuration = 0.32,
  exitAnimationStepDuration,
  squarePixels = false,
  pixelSize = 12,
  className,
}: PixelTransitionProps) {
  const activeRef = useRef<HTMLSpanElement>(null);
  const pixelsRef = useRef<HTMLSpanElement>(null);
  const timersRef = useRef<number[]>([]);
  const visiblePixelsRef = useRef<boolean[]>([]);
  const activeStateRef = useRef(active);
  const initialActiveRef = useRef(active);
  const initializedRef = useRef(false);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }, []);

  const setActiveDisplayed = useCallback((visible: boolean) => {
    const activeEl = activeRef.current;
    if (!activeEl) return;

    activeEl.style.display = visible ? "grid" : "none";
    activeEl.style.pointerEvents = visible ? "none" : "";
  }, []);

  const setPixelVisible = useCallback((pixelIndex: number, visible: boolean) => {
    const pixel = pixelsRef.current?.children[pixelIndex] as HTMLElement | undefined;
    if (!pixel) return;

    visiblePixelsRef.current[pixelIndex] = visible;
    pixel.style.display = visible ? "block" : "none";
  }, []);

  const schedulePixels = useCallback(
    (pixelIndexes: number[], visible: boolean, startAt: number, duration: number) => {
      const stepDuration = duration / Math.max(pixelIndexes.length, 1);

      pixelIndexes.forEach((pixelIndex, orderIndex) => {
        timersRef.current.push(
          window.setTimeout(() => {
            setPixelVisible(pixelIndex, visible);
          }, (startAt + orderIndex * stepDuration) * 1000)
        );
      });

      return startAt + pixelIndexes.length * stepDuration;
    },
    [setPixelVisible]
  );

  const animateTo = useCallback(
    (targetActive: boolean) => {
      const pixelsEl = pixelsRef.current;
      if (!pixelsEl) return;

      activeStateRef.current = targetActive;
      clearTimers();

      const pixels = Array.from(pixelsEl.children);
      const duration = targetActive
        ? animationStepDuration
        : exitAnimationStepDuration ?? animationStepDuration;
      const coverColor = targetActive ? pixelColor : exitPixelColor ?? pixelColor;
      const allIndexes = pixels.map((_, index) => index);

      setActiveDisplayed(!targetActive);

      pixels.forEach((pixel) => {
        (pixel as HTMLElement).style.backgroundColor = coverColor;
      });

      allIndexes.forEach((pixelIndex) => {
        setPixelVisible(pixelIndex, false);
      });

      const switchAt = schedulePixels(
        shuffle(allIndexes),
        true,
        0,
        duration
      );

      timersRef.current.push(
        window.setTimeout(() => {
          setActiveDisplayed(targetActive);
        }, switchAt * 1000)
      );
    },
    [
      animationStepDuration,
      clearTimers,
      exitAnimationStepDuration,
      exitPixelColor,
      pixelColor,
      schedulePixels,
      setActiveDisplayed,
      setPixelVisible,
    ]
  );

  useEffect(() => {
    activeStateRef.current = active;
  }, [active]);

  useEffect(() => {
    const pixelsEl = pixelsRef.current;
    if (!pixelsEl) return;

    clearTimers();
    pixelsEl.innerHTML = "";
    visiblePixelsRef.current = [];

    const buildGrid = () => {
      clearTimers();
      pixelsEl.innerHTML = "";
      visiblePixelsRef.current = [];

      const bounds = pixelsEl.getBoundingClientRect();
      const columnCount = squarePixels
        ? Math.max(1, Math.ceil(bounds.width / pixelSize))
        : columns ?? gridSize;
      const rowCount = squarePixels
        ? Math.max(1, Math.ceil(bounds.height / pixelSize))
        : rows ?? gridSize;

      for (let row = 0; row < rowCount; row += 1) {
        for (let col = 0; col < columnCount; col += 1) {
          const pixel = document.createElement("span");
          const width = 100 / columnCount;
          const height = 100 / rowCount;

          pixel.style.position = "absolute";
          pixel.style.display = "none";
          pixel.style.backgroundColor = pixelColor;

          if (squarePixels) {
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;
            pixel.style.left = `${col * pixelSize}px`;
            pixel.style.top = `${row * pixelSize}px`;
          } else {
            pixel.style.width = `${width}%`;
            pixel.style.height = `${height}%`;
            pixel.style.left = `${col * width}%`;
            pixel.style.top = `${row * height}%`;
          }

          visiblePixelsRef.current.push(false);
          pixelsEl.appendChild(pixel);
        }
      }

      setActiveDisplayed(activeStateRef.current);
    };

    buildGrid();

    const resizeObserver =
      squarePixels && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(buildGrid)
        : null;

    resizeObserver?.observe(pixelsEl);

    setActiveDisplayed(initialActiveRef.current);

    return () => {
      resizeObserver?.disconnect();
      clearTimers();
    };
  }, [
    clearTimers,
    columns,
    gridSize,
    pixelColor,
    pixelSize,
    rows,
    setActiveDisplayed,
    squarePixels,
  ]);

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      return;
    }

    animateTo(active);
  }, [active, animateTo]);

  return (
    <span className={cn("relative block overflow-hidden", className)}>
      <span className="absolute inset-0 grid place-items-center" aria-hidden={active}>
        {firstContent}
      </span>
      <span
        ref={activeRef}
        className="absolute inset-0 hidden place-items-center"
        aria-hidden={!active}
      >
        {secondContent}
      </span>
      <span
        ref={pixelsRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
      />
    </span>
  );
}
