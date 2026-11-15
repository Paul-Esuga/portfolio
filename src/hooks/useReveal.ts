import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';
export function useReveal<T extends HTMLElement>() { const ref = useRef<T>(null); const reduced = useReducedMotion(); useEffect(() => { const el = ref.current; if (!el) return; if (reduced || !('IntersectionObserver' in window)) { el.classList.add('in'); return; } const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); io.disconnect(); } }, { threshold: .12 }); io.observe(el); return () => io.disconnect(); }, [reduced]); return ref; }
