// Hey Dora — Design System (Light + Dark)

import { useThemeStore } from '@/store/useThemeStore';

export interface Theme {
  bg: { primary: string; secondary: string; card: string; cardHover: string; input: string };
  border: { subtle: string; default: string; active: string };
  text: { primary: string; secondary: string; muted: string; disabled: string };
  accent: { primary: string; hover: string; dim: string; gradient: string };
  semantic: { success: string; successDim: string; warning: string; warningDim: string; error: string; errorDim: string; info: string; infoDim: string };
  category: { violet: string; cyan: string; rose: string; amber: string; emerald: string; blue: string };
  radius: { sm: string; md: string; lg: string; xl: string; full: string };
  shadow: { card: string; elevated: string; accent: string };
}

export const lightTheme: Theme = {
  bg: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    card: '#ffffff',
    cardHover: '#f1f5f9',
    input: '#f8fafc',
  },
  border: {
    subtle: '#e2e8f0',
    default: '#cbd5e1',
    active: '#4f46e5',
  },
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    muted: '#94a3b8',
    disabled: '#cbd5e1',
  },
  accent: {
    primary: '#4f46e5',
    hover: '#4338ca',
    dim: 'rgba(79, 70, 229, 0.06)',
    gradient: 'linear-gradient(135deg, #4f46e5, #4338ca)',
  },
  semantic: {
    success: '#059669', successDim: 'rgba(5, 150, 105, 0.08)',
    warning: '#d97706', warningDim: 'rgba(217, 119, 6, 0.08)',
    error: '#dc2626', errorDim: 'rgba(220, 38, 38, 0.06)',
    info: '#0284c7', infoDim: 'rgba(2, 132, 199, 0.06)',
  },
  category: { violet: '#7c3aed', cyan: '#0891b2', rose: '#e11d48', amber: '#d97706', emerald: '#059669', blue: '#2563eb' },
  radius: { sm: '8px', md: '12px', lg: '16px', xl: '20px', full: '100px' },
  shadow: {
    card: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)',
    elevated: '0 4px 12px rgba(0,0,0,0.06)',
    accent: '0 2px 8px rgba(79, 70, 229, 0.12)',
  },
};

export const darkTheme: Theme = {
  bg: {
    primary: '#0c0c0f',
    secondary: '#18181b',
    card: '#1c1c22',
    cardHover: '#232329',
    input: '#1c1c22',
  },
  border: {
    subtle: '#27272a',
    default: '#3f3f46',
    active: '#6366f1',
  },
  text: {
    primary: '#fafafa',
    secondary: '#a1a1aa',
    muted: '#71717a',
    disabled: '#52525b',
  },
  accent: {
    primary: '#6366f1',
    hover: '#818cf8',
    dim: 'rgba(99, 102, 241, 0.1)',
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
  },
  semantic: {
    success: '#10b981', successDim: 'rgba(16, 185, 129, 0.1)',
    warning: '#f59e0b', warningDim: 'rgba(245, 158, 11, 0.08)',
    error: '#ef4444', errorDim: 'rgba(239, 68, 68, 0.08)',
    info: '#06b6d4', infoDim: 'rgba(6, 182, 212, 0.08)',
  },
  category: { violet: '#8b5cf6', cyan: '#06b6d4', rose: '#f43f5e', amber: '#f59e0b', emerald: '#10b981', blue: '#3b82f6' },
  radius: { sm: '8px', md: '12px', lg: '16px', xl: '20px', full: '100px' },
  shadow: {
    card: '0 1px 3px rgba(0,0,0,0.3)',
    elevated: '0 4px 12px rgba(0,0,0,0.4)',
    accent: '0 2px 8px rgba(99, 102, 241, 0.15)',
  },
};

// Single hook to get current theme
export function useTheme(): Theme {
  const mode = useThemeStore((s) => s.mode);
  return mode === 'dark' ? darkTheme : lightTheme;
}

// Shared style factories (take theme as param)
export const cardStyle = (t: Theme, active = false): React.CSSProperties => ({
  padding: '16px', borderRadius: t.radius.lg, transition: 'all 0.2s ease', cursor: 'pointer', fontFamily: 'inherit',
  background: active ? t.accent.dim : t.bg.card,
  border: `1px solid ${active ? t.accent.primary : t.border.subtle}`,
  boxShadow: active ? t.shadow.accent : t.shadow.card,
});

export const pillStyle = (t: Theme, active = false): React.CSSProperties => ({
  padding: '12px 16px', borderRadius: t.radius.md, fontSize: '13px', fontWeight: 600, textAlign: 'center' as const,
  transition: 'all 0.2s ease', cursor: 'pointer', fontFamily: 'inherit',
  border: `1px solid ${active ? t.accent.primary : t.border.subtle}`,
  background: active ? t.accent.dim : t.bg.card,
  color: active ? t.accent.primary : t.text.primary,
  boxShadow: active ? t.shadow.accent : 'none',
});

export const backBtnStyle = (t: Theme): React.CSSProperties => ({
  padding: '10px 20px', borderRadius: t.radius.md, fontSize: '13px', fontWeight: 600, cursor: 'pointer',
  background: 'transparent', border: `1px solid ${t.border.subtle}`, color: t.text.muted,
  display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'inherit', transition: 'all 0.2s',
});

export const primaryBtnStyle = (t: Theme, enabled = true): React.CSSProperties => ({
  padding: '12px 28px', borderRadius: t.radius.md, border: 'none', fontWeight: 700, fontSize: '14px',
  cursor: enabled ? 'pointer' : 'default', transition: 'all 0.2s', fontFamily: 'inherit',
  background: enabled ? t.accent.gradient : t.bg.secondary,
  color: enabled ? '#fff' : t.text.disabled, opacity: enabled ? 1 : 0.6,
  boxShadow: enabled ? t.shadow.accent : 'none', display: 'flex', alignItems: 'center', gap: '6px',
});

export const stepLabel = (t: Theme): React.CSSProperties => ({
  fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '12px',
  textTransform: 'uppercase' as const, color: t.accent.primary,
});

export const stepTitle = (t: Theme): React.CSSProperties => ({
  fontSize: '28px', fontWeight: 800, marginBottom: '6px', color: t.text.primary, lineHeight: 1.2,
});

export const stepDesc = (t: Theme): React.CSSProperties => ({
  fontSize: '14px', marginBottom: '28px', color: t.text.muted,
});
