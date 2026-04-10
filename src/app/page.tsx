'use client';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import { useTheme } from '@/lib/theme';
import { CompassIcon } from '@/components/icons/Icons';
import ThemeToggle from '@/components/ThemeToggle';
import LandingScreen from '@/components/onboarding/LandingScreen';
import ProgressBar from '@/components/onboarding/ProgressBar';
import StepName from '@/components/onboarding/StepName';
import StepSkill from '@/components/onboarding/StepSkill';
import StepLearningStyle from '@/components/onboarding/StepLearningStyle';
import StepTimeCommitment from '@/components/onboarding/StepTimeCommitment';
import StepBudget from '@/components/onboarding/StepBudget';
import StepGoal from '@/components/onboarding/StepGoal';
import StepLevel from '@/components/onboarding/StepLevel';
import LoadingScreen from '@/components/onboarding/LoadingScreen';
import Dashboard from '@/components/dashboard/Dashboard';

function OnboardingStep() {
  const { step } = useOnboardingStore();
  switch (step) {
    case 1: return <StepName />;
    case 2: return <StepSkill />;
    case 3: return <StepLearningStyle />;
    case 4: return <StepTimeCommitment />;
    case 5: return <StepBudget />;
    case 6: return <StepGoal />;
    case 7: return <StepLevel />;
    default: return null;
  }
}

export default function Home() {
  const { step, isComplete, isLoading } = useOnboardingStore();
  const { isGenerated } = useRoadmapStore();
  const t = useTheme();

  if (isComplete && isGenerated) return <Dashboard />;
  if (isLoading && step === 8) return <LoadingScreen />;
  if (step === 0) return <LandingScreen />;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: t.bg.primary, transition: 'background 0.3s' }}>
      {/* Theme toggle */}
      <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}><ThemeToggle /></div>
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 20px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.accent.gradient }}>
            <CompassIcon size={12} color="#fff" />
          </div>
          <h1 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>
            <span style={{ color: t.accent.primary }}>Hey</span>{' '}
            <span style={{ color: t.text.primary }}>Dora</span>
          </h1>
        </div>
        <ProgressBar currentStep={step} totalSteps={7} />
      </header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '32px 20px 24px', maxWidth: '440px', width: '100%', margin: '0 auto' }}>
        <OnboardingStep />
      </main>
    </div>
  );
}
