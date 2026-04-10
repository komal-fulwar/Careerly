'use client';
import { useTheme } from '@/lib/theme';
export default function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const t = useTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const s = i + 1; const active = s === currentStep; const done = s < currentStep;
        return (<div key={i} style={{ height: '5px', borderRadius: '100px', transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)', width: active ? '28px' : '7px', background: active ? t.accent.gradient : done ? t.accent.primary : t.border.subtle }} />);
      })}
    </div>
  );
}
