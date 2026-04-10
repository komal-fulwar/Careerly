'use client';
import { useState } from 'react';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme, cardStyle, stepLabel, stepTitle, stepDesc, backBtnStyle } from '@/lib/theme';
import { MonitorIcon, BarChartIcon, CodeIcon, PaletteIcon, RocketIcon, ShieldIcon, ArrowLeftIcon, BrainIcon, LayersIcon, GraduationCapIcon, VideoIcon, WrenchIcon, PuzzleIcon, ChevronRightIcon } from '@/components/icons/Icons';

const allSkills = [
  { id: 'web-development', label: 'Web Development', desc: 'React, Node, Full-Stack', icon: (c: string) => <CodeIcon size={18} color={c} />, color: '#2563eb' },
  { id: 'data-science', label: 'Data Science', desc: 'Python, ML, Analytics', icon: (c: string) => <BarChartIcon size={18} color={c} />, color: '#0891b2' },
  { id: 'ui-ux-design', label: 'UI/UX Design', desc: 'Figma, Research, Systems', icon: (c: string) => <PaletteIcon size={18} color={c} />, color: '#e11d48' },
  { id: 'digital-marketing', label: 'Digital Marketing', desc: 'SEO, Ads, Content', icon: (c: string) => <MonitorIcon size={18} color={c} />, color: '#7c3aed' },
  { id: 'product-management', label: 'Product Mgmt', desc: 'Strategy, Metrics, Agile', icon: (c: string) => <RocketIcon size={18} color={c} />, color: '#d97706' },
  { id: 'cybersecurity', label: 'Cybersecurity', desc: 'Networks, Ethical Hacking', icon: (c: string) => <ShieldIcon size={18} color={c} />, color: '#059669' },
  { id: 'ai-ml', label: 'AI & Machine Learning', desc: 'Deep Learning, NLP, LLMs', icon: (c: string) => <BrainIcon size={18} color={c} />, color: '#8b5cf6' },
  { id: 'mobile-dev', label: 'Mobile Development', desc: 'React Native, Flutter', icon: (c: string) => <LayersIcon size={18} color={c} />, color: '#06b6d4' },
  { id: 'cloud-devops', label: 'Cloud & DevOps', desc: 'AWS, Docker, CI/CD', icon: (c: string) => <WrenchIcon size={18} color={c} />, color: '#f59e0b' },
  { id: 'blockchain', label: 'Blockchain', desc: 'Web3, Smart Contracts', icon: (c: string) => <PuzzleIcon size={18} color={c} />, color: '#6366f1' },
  { id: 'game-dev', label: 'Game Development', desc: 'Unity, Unreal, C#', icon: (c: string) => <VideoIcon size={18} color={c} />, color: '#ef4444' },
  { id: 'content-creation', label: 'Content Creation', desc: 'YouTube, Writing, Editing', icon: (c: string) => <GraduationCapIcon size={18} color={c} />, color: '#ec4899' },
];

const keyMap: Record<string, string> = {};
allSkills.forEach(s => { keyMap[s.id] = s.label; });

export default function StepSkill() {
  const { data, setField, nextStep, prevStep } = useOnboardingStore();
  const t = useTheme();
  const [showAll, setShowAll] = useState(false);
  const selId = Object.entries(keyMap).find(([, v]) => v === data.skill)?.[0] || '';
  const visible = showAll ? allSkills : allSkills.slice(0, 6);

  return (
    <div style={{ animation: 'slide-up 0.5s ease-out forwards' }}>
      <p style={stepLabel(t)}>Step 2 of 7</p>
      <h2 style={stepTitle(t)}>What do you want<br />to learn?</h2>
      <p style={stepDesc(t)}>Pick a skill and we&apos;ll map your path</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
        {visible.map((s, i) => (
          <button key={s.id} onClick={() => { setField('skill', keyMap[s.id]); setTimeout(nextStep, 200); }}
            style={{
              ...cardStyle(t, selId === s.id),
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' as const,
              padding: '12px 14px', minHeight: '76px',
              animation: `scale-in 0.35s ease-out ${i * 0.04}s both`,
            }}>
            <div style={{ marginBottom: '6px' }}>{s.icon(s.color)}</div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: t.text.primary, lineHeight: 1.2 }}>{s.label}</span>
            <span style={{ fontSize: '10px', marginTop: '2px', color: t.text.muted }}>{s.desc}</span>
          </button>
        ))}
      </div>

      {/* Show more/less */}
      <button onClick={() => setShowAll(!showAll)}
        style={{
          width: '100%', padding: '10px', borderRadius: t.radius.md, fontSize: '12px', fontWeight: 600,
          cursor: 'pointer', fontFamily: 'inherit', marginBottom: '20px',
          background: t.bg.secondary, border: `1px solid ${t.border.subtle}`,
          color: t.accent.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
          transition: 'all 0.2s',
        }}>
        {showAll ? 'Show less' : `Show ${allSkills.length - 6} more skills`}
        <ChevronRightIcon size={12} color={t.accent.primary} />
      </button>

      <button onClick={prevStep} style={backBtnStyle(t)}>
        <ArrowLeftIcon size={14} color={t.text.muted} /> Back
      </button>
    </div>
  );
}
