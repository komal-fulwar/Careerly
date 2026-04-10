'use client';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme, pillStyle, stepLabel, stepTitle, stepDesc, backBtnStyle } from '@/lib/theme';
import { ArrowLeftIcon } from '@/components/icons/Icons';
const options = ['30 min/day','1 hour/day','2 hours/day','Flexible'];
export default function StepTimeCommitment() {
  const { data, setField, nextStep, prevStep } = useOnboardingStore();
  const t = useTheme();
  return (
    <div style={{ animation:'slide-up 0.5s ease-out forwards' }}>
      <p style={stepLabel(t)}>Step 4 of 7</p>
      <h2 style={stepTitle(t)}>Daily time<br/>commitment?</h2>
      <p style={stepDesc(t)}>Consistency matters more than hours</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
        {options.map(o=>(<button key={o} onClick={()=>{setField('timeCommitment',o);setTimeout(nextStep,200);}} style={pillStyle(t,data.timeCommitment===o)}>{o}</button>))}
      </div>
      <button onClick={prevStep} style={backBtnStyle(t)}><ArrowLeftIcon size={14} color={t.text.muted}/> Back</button>
    </div>
  );
}
