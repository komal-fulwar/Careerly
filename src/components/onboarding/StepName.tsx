'use client';
import { useState, useEffect } from 'react';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme, stepLabel, stepTitle, stepDesc, primaryBtnStyle } from '@/lib/theme';
export default function StepName() {
  const { data, setField, nextStep } = useOnboardingStore();
  const t = useTheme();
  const [v, setV] = useState(data.name);
  useEffect(() => { setV(data.name); }, [data.name]);
  const ok = v.trim().length > 0;
  const go = () => { if (ok) { setField('name', v.trim()); nextStep(); } };
  return (
    <div style={{ animation: 'slide-up 0.5s ease-out forwards' }}>
      <p style={stepLabel(t)}>Step 1 of 7</p>
      <h2 style={stepTitle(t)}>What should we<br />call you?</h2>
      <p style={stepDesc(t)}>Let&apos;s personalise your learning journey</p>
      <input id="name-input" type="text" value={v} onChange={(e) => setV(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && go()} placeholder="Your name" autoFocus
        style={{ width: '100%', padding: '14px 16px', borderRadius: t.radius.md, fontSize: '15px', fontWeight: 500, color: t.text.primary, background: t.bg.input, border: `1.5px solid ${ok ? t.accent.primary : t.border.subtle}`, outline: 'none', transition: 'all 0.3s', fontFamily: 'inherit', marginBottom: '16px', minHeight: '48px' }} />
      <button id="step-1-continue" onClick={go} disabled={!ok} style={primaryBtnStyle(t, ok)}>Continue</button>
    </div>
  );
}
