'use client';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme } from '@/lib/theme';
import { MapIcon, BookOpenIcon, BriefcaseIcon, CalendarIcon, CompassIcon, MessageCircleIcon } from '@/components/icons/Icons';
import ThemeToggle from '@/components/ThemeToggle';
import RoadmapView from './RoadmapView';
import ResourcesView from './ResourcesView';
import CareerView from './CareerView';
import ScheduleView from './ScheduleView';
import ChatView from './ChatView';

const tabs = [
  { id: 'roadmap' as const, label: 'Roadmap', icon: MapIcon },
  { id: 'resources' as const, label: 'Resources', icon: BookOpenIcon },
  { id: 'career' as const, label: 'Career', icon: BriefcaseIcon },
  { id: 'schedule' as const, label: 'Schedule', icon: CalendarIcon },
  { id: 'chat' as const, label: 'Dora AI', icon: MessageCircleIcon },
];

export default function Dashboard() {
  const { roadmap, activeTab, setActiveTab } = useRoadmapStore();
  const { data, reset } = useOnboardingStore();
  const t = useTheme();
  if (!roadmap) return null;
  const progress = roadmap.totalModules > 0 ? Math.round((roadmap.completedModules / roadmap.totalModules) * 100) : 0;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: t.bg.primary, transition: 'background 0.3s' }}>
      <header style={{ padding: '16px 16px 0', position: 'sticky', top: 0, zIndex: 10, background: t.bg.primary, borderBottom: `1px solid ${t.border.subtle}` }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.accent.gradient }}>
              <CompassIcon size={14} color="#fff" />
            </div>
            <h1 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>
              <span style={{ color: t.accent.primary }}>Hey</span>{' '}
              <span style={{ color: t.text.primary }}>Dora</span>
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ThemeToggle />
            <button id="restart-btn" onClick={reset}
              style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', background: t.accent.dim, border: `1px solid ${t.border.subtle}`, color: t.accent.primary, transition: 'all 0.2s', minHeight: '40px' }}>
              New Roadmap
            </button>
          </div>
        </div>

        {/* Progress card */}
        <div style={{ background: t.bg.card, border: `1px solid ${t.border.subtle}`, borderRadius: t.radius.lg, padding: '14px 16px', marginBottom: '12px', boxShadow: t.shadow.card }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div>
              <p style={{ fontSize: '11px', color: t.text.muted, margin: 0 }}>Welcome back,</p>
              <p style={{ fontSize: '16px', fontWeight: 700, color: t.text.primary, margin: '2px 0 0' }}>{data.name || 'Explorer'}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '22px', fontWeight: 800, color: t.accent.primary, margin: 0, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{progress}%</p>
              <p style={{ fontSize: '10px', color: t.text.muted, margin: '2px 0 0' }}>Complete</p>
            </div>
          </div>
          <div style={{ height: '4px', borderRadius: '100px', overflow: 'hidden', background: t.bg.secondary }}>
            <div style={{ height: '100%', borderRadius: '100px', transition: 'width 0.7s ease-out', width: `${progress}%`, background: t.accent.gradient }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
            <span style={{ fontSize: '10px', color: t.text.disabled }}>{roadmap.completedModules} of {roadmap.totalModules} modules</span>
            <span style={{ fontSize: '10px', color: t.text.disabled }}>ETA: {roadmap.estimatedTime}</span>
          </div>
        </div>

        {/* Tab bar — scrollable for 5 tabs on mobile */}
        <div style={{ display: 'flex', gap: '2px', padding: '3px', borderRadius: t.radius.md, background: t.bg.secondary, marginBottom: '8px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' as const, scrollbarWidth: 'none' as const }}>
          {tabs.map(tab => {
            const active = activeTab === tab.id;
            const Icon = tab.icon;
            const isChat = tab.id === 'chat';
            return (
              <button key={tab.id} id={`tab-${tab.id}`} onClick={() => setActiveTab(tab.id as typeof activeTab)}
                style={{
                  flex: '1 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
                  padding: '10px 12px', borderRadius: '9px', fontSize: '11px', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s', border: 'none', fontFamily: 'inherit',
                  minHeight: '40px', whiteSpace: 'nowrap',
                  background: active ? t.accent.dim : 'transparent',
                  color: active ? t.accent.primary : t.text.disabled,
                }}>
                <Icon size={13} color={active ? t.accent.primary : t.text.disabled} />
                <span>{tab.label}</span>
                {isChat && !active && (
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.semantic.success, flexShrink: 0 }} />
                )}
              </button>
            );
          })}
        </div>
      </header>

      <main style={{ flex: 1, overflowY: 'auto', padding: '0 16px 32px', WebkitOverflowScrolling: 'touch' as const }}>
        <div key={activeTab} style={{ animation: 'fade-in 0.25s ease-out' }}>
          {activeTab === 'roadmap' && <RoadmapView />}
          {activeTab === 'resources' && <ResourcesView />}
          {activeTab === 'career' && <CareerView />}
          {activeTab === 'schedule' && <ScheduleView />}
          {activeTab === 'chat' && <ChatView />}
        </div>
      </main>
    </div>
  );
}
