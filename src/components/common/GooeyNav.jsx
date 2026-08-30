import React, { useRef, useEffect, useState, useCallback } from 'react';
import './GooeyNav.css';

const GooeyNav = ({
  items = [],
  animationTime = 500,
  particleCount = 6,
  particleDistances = [50, 10],
  particleR = 80,
  timeVariance = 200,
  colors = [1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  onItemClick
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = useCallback((element) => {
    if (!element) return;
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    const fragment = document.createDocumentFragment();
    const timeouts = [];

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 1.5 + noise(timeVariance);
      const p = createParticle(i, t, d, r);

      const particle = document.createElement('span');
      const point = document.createElement('span');
      particle.classList.add('particle');
      particle.style.setProperty('--start-x', `${p.start[0]}px`);
      particle.style.setProperty('--start-y', `${p.start[1]}px`);
      particle.style.setProperty('--end-x', `${p.end[0]}px`);
      particle.style.setProperty('--end-y', `${p.end[1]}px`);
      particle.style.setProperty('--time', `${p.time}ms`);
      particle.style.setProperty('--scale', `${p.scale}`);
      particle.style.setProperty('--color', `var(--color-${p.color}, #8B5CF6)`);
      particle.style.setProperty('--rotate', `${p.rotate}deg`);

      point.classList.add('point');
      particle.appendChild(point);
      fragment.appendChild(particle);

      const toId = setTimeout(() => {
        try {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        } catch {
          // safe cleanup
        }
      }, t);
      timeouts.push(toId);
    }

    requestAnimationFrame(() => {
      element.appendChild(fragment);
    });
  }, [animationTime, particleCount, particleDistances, particleR, timeVariance, colors]);

  const updateEffectPosition = useCallback((element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current || !element) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  }, []);

  const handleClick = (e, index, item) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;

    setActiveIndex(index);
    if (onItemClick) {
      onItemClick(item, index);
    }

    // Defer DOM measurements and particle creation out of the critical input path
    requestAnimationFrame(() => {
      updateEffectPosition(liEl);
      if (textRef.current) {
        textRef.current.classList.add('active');
      }
      if (filterRef.current) {
        makeParticles(filterRef.current);
      }
    });
  };

  const handleKeyDown = (e, index, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index, item);
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex, updateEffectPosition]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav ref={navRef} aria-label="Main Navigation">
        <ul>
          {items.map((item, index) => (
            <li
              key={item.href || item.label}
              className={activeIndex === index ? 'active' : ''}
              onClick={e => handleClick(e, index, item)}
            >
              <a
                href={item.href}
                tabIndex={0}
                onKeyDown={e => handleKeyDown(e, index, item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} aria-hidden="true" />
      <span className="effect text" ref={textRef} aria-hidden="true" />
    </div>
  );
};

export default GooeyNav;
