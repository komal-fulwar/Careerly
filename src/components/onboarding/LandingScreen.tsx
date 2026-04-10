'use client';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme } from '@/lib/theme';
import { TargetIcon, BarChartIcon, RefreshIcon, TrendingUpIcon, ArrowRightIcon, CompassIcon, BrainIcon, UsersIcon } from '@/components/icons/Icons';
import ThemeToggle from '@/components/ThemeToggle';

export default function LandingScreen() {
  const { nextStep } = useOnboardingStore();
  const t = useTheme();

  const features = [
    { icon: <TargetIcon size={15} color={t.accent.primary} />, title: 'Personalized Roadmap', desc: 'Tailored to your goals' },
    { icon: <BarChartIcon size={15} color={t.semantic.success} />, title: 'Salary Insights', desc: 'Real India market data' },
    { icon: <RefreshIcon size={15} color={t.category.cyan} />, title: 'Platform Comparison', desc: 'Best resources, compared' },
    { icon: <TrendingUpIcon size={15} color={t.category.amber} />, title: 'Career Paths', desc: 'See where skills lead' },
  ];

  const stats = [
    { value: '50+', label: 'Skills mapped' },
    { value: '500+', label: 'Resources' },
    { value: '100K+', label: 'Users' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: t.bg.primary, transition: 'background 0.3s', position: 'relative', overflow: 'hidden' }}>
      {/* Theme toggle */}
      <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}><ThemeToggle /></div>

      {/* Subtle gradient orb */}
      <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', opacity: 0.07, background: `radial-gradient(circle, ${t.accent.primary}, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px 40px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>

          {/* Logo with bounce */}
          <div style={{ marginBottom: '24px', animation: 'bounce-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}>
            <div style={{
              width: '72px', height: '72px', margin: '0 auto', borderRadius: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: t.accent.gradient, boxShadow: t.shadow.accent,
              animation: 'float 4s ease-in-out infinite',
            }}>
              <CompassIcon size={34} color="#fff" />
            </div>
          </div>

          {/* Title with stagger */}
          <h1 style={{ fontSize: '46px', fontWeight: 900, marginBottom: '8px', letterSpacing: '-0.04em', lineHeight: 1.05, animation: 'slide-up 0.6s ease-out 0.15s both' }}>
            <span style={{ color: t.accent.primary }}>Career</span><span style={{ color: t.text.primary }}>ly</span>
          </h1>

          <p style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: t.text.secondary, animation: 'slide-up 0.6s ease-out 0.25s both' }}>
            Google Maps for your career
          </p>

          <p style={{ fontSize: '14px', lineHeight: 1.7, color: t.text.muted, maxWidth: '320px', margin: '0 auto 32px', animation: 'slide-up 0.6s ease-out 0.35s both' }}>
            AI-powered roadmaps that tell you what to learn, where to learn it, and what career it leads to — with real salary data from India.
          </p>

          {/* Feature cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
            {features.map((f, i) => (
              <div key={f.title} style={{
                padding: '14px 12px', borderRadius: t.radius.md, textAlign: 'left',
                background: t.bg.card, border: `1px solid ${t.border.subtle}`,
                boxShadow: t.shadow.card, animation: `scale-in 0.5s ease-out ${0.4 + i * 0.08}s both`,
              }}>
                <div style={{ marginBottom: '6px' }}>{f.icon}</div>
                <p style={{ fontSize: '12px', fontWeight: 700, color: t.text.primary, margin: 0 }}>{f.title}</p>
                <p style={{ fontSize: '10px', color: t.text.muted, margin: '2px 0 0' }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button onClick={nextStep} id="start-journey-btn"
            style={{
              width: '100%', padding: '16px 24px', borderRadius: '14px', border: 'none',
              fontWeight: 700, fontSize: '16px', cursor: 'pointer', fontFamily: 'inherit',
              background: t.accent.gradient, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              boxShadow: t.shadow.accent, transition: 'transform 0.15s, box-shadow 0.15s',
              minHeight: '56px', animation: 'slide-up 0.6s ease-out 0.7s both',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
            Start your journey <ArrowRightIcon size={18} color="#fff" />
          </button>

          {/* Stats bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '24px', animation: 'fade-in 0.8s ease-out 0.9s both' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: 800, color: t.accent.primary, margin: 0 }}>{s.value}</p>
                <p style={{ fontSize: '10px', color: t.text.muted, margin: '2px 0 0' }}>{s.label}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '11px', marginTop: '16px', color: t.text.disabled, animation: 'fade-in 0.8s ease-out 1s both' }}>
            Free · No signup required · 2 min setup
          </p>
        </div>
      </div>
    </div>
  );
}
