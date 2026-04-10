'use client';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme, pillStyle, stepLabel, stepTitle, stepDesc, backBtnStyle } from '@/lib/theme';
import { ArrowLeftIcon } from '@/components/icons/Icons';
const goals = ['Career switch','Upskill','Freelance','Curiosity','Startup','Academic'];
export default function StepGoal() {
  const { data, setField, nextStep, prevStep } = useOnboardingStore();
  const t = useTheme();
  return (
    <div style={{ animation:'slide-up 0.5s ease-out forwards' }}>
      <p style={stepLabel(t)}>Step 6 of 7</p>
      <h2 style={stepTitle(t)}>What&apos;s your end<br/>goal?</h2>
      <p style={stepDesc(t)}>This shapes where your roadmap leads</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px', marginBottom:'24px' }}>
        {goals.map(g=>(<button key={g} onClick={()=>{setField('goal',g);setTimeout(nextStep,200);}} style={{ ...pillStyle(t,data.goal===g), padding:'12px 8px' }}>{g}</button>))}
      </div>
      <button onClick={prevStep} style={backBtnStyle(t)}><ArrowLeftIcon size={14} color={t.text.muted}/> Back</button>
    </div>
  );
}
