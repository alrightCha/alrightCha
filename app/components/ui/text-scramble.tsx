'use client';
import { type JSX, useEffect, useState, useRef } from 'react';
import { motion, MotionProps } from 'framer-motion';


type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  );
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const text = children;

  useEffect(() => {
    // Clear any ongoing interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    let isCancelled = false;

    const scramble = async () => {
      setIsAnimating(true);

      const steps = duration / speed;
      let step = 0;

      intervalRef.current = setInterval(() => {
        if (isCancelled) return;
        let scrambled = '';
        const progress = step / steps;

        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            scrambled += ' ';
            continue;
          }

          if (progress * text.length > i) {
            scrambled += text[i];
          } else {
            scrambled +=
              characterSet[Math.floor(Math.random() * characterSet.length)];
          }
        }

        setDisplayText(scrambled);
        step++;

        if (step > steps) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setDisplayText(text);
          setIsAnimating(false);
        }
      }, speed * 1000);
    };

    scramble();

    // Cleanup function to clear interval on unmount or when children changes
    return () => {
      isCancelled = true;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [children, duration, speed, characterSet]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
