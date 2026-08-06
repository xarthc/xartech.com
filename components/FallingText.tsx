"use client";

import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import "./FallingText.css";

type FallingTextProps = {
  text: string;
  highlightWords?: string[];
  highlightClass?: string;
  fontSize?: string;
};

const FallingText = ({
  text,
  highlightWords = [],
  highlightClass = "highlighted",
  fontSize = "1.5rem",
}: FallingTextProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const [start, setStart] = useState(false);

  // ✅ Render text
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const words = text.split(" ");

    el.innerHTML = words
      .map((word) => {
        const clean = word.replace(/[.,]/g, "");
        const isHighlighted = highlightWords.includes(clean);

        return `<span class="word ${
          isHighlighted ? highlightClass : ""
        }">${word}</span>`;
      })
      .join(" ");
  }, [text, highlightWords, highlightClass]);

  // ✅ 2 sec delay
  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ CLEAN FALL (NO RANDOM)
  useEffect(() => {
    if (!start) return;

    const container = containerRef.current;
    const textEl = textRef.current;
    const canvas = canvasRef.current;

    if (!container || !textEl || !canvas) return;

    const { Engine, Render, World, Bodies, Runner } = Matter;

    const rect = container.getBoundingClientRect();

    const engine = Engine.create();
    engine.world.gravity.y = 0.9;

    const render = Render.create({
      element: canvas,
      engine,
      options: {
        width: rect.width,
        height: rect.height,
        background: "transparent",
        wireframes: false,
      },
    });

    // floor
    const floor = Bodies.rectangle(
      rect.width / 2,
      rect.height + 50,
      rect.width,
      100,
      { isStatic: true }
    );

    World.add(engine.world, [floor]);

    const spans = textEl.querySelectorAll<HTMLSpanElement>(".word");

    const bodies: { el: HTMLSpanElement; body: Matter.Body }[] = [];

    spans.forEach((el) => {
      const r = el.getBoundingClientRect();

      const x = r.left - rect.left + r.width / 2;
      const y = r.top - rect.top + r.height / 2;

      const body = Bodies.rectangle(x, y, r.width, r.height, {
        restitution: 0,        // no bounce
        frictionAir: 0.12,
        friction: 1,
        inertia: Infinity,     // no rotation
      });

      bodies.push({ el, body });
      World.add(engine.world, body);

      // preserve layout
      el.style.position = "absolute";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = "translate(-50%, -50%)";
    });

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const update = () => {
      bodies.forEach(({ el, body }) => {
        el.style.left = `${body.position.x}px`;
        el.style.top = `${body.position.y}px`;
      });

      requestAnimationFrame(update);
    };

    update();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [start]);

  return (
    <div
      ref={containerRef}
      className="falling-text-container"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        ref={textRef}
        className="falling-text-target"
        style={{ fontSize }}
      />
      <div ref={canvasRef} className="falling-text-canvas" />
    </div>
  );
};

export default FallingText;