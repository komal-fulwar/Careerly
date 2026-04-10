'use client';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme, pillStyle, stepLabel, stepTitle, stepDesc, backBtnStyle } from '@/lib/theme';
import { ArrowLeftIcon } from '@/components/icons/Icons';
const options = ['Free only','< ₹1,000/mo','₹1K–5K/mo','No limit'];
export default function StepBudget() {
  const { data, setField, nextStep, prevStep } = useOnboardingStore();
  const t = useTheme();
  return (
    <div style={{ animation:'slide-up 0.5s ease-out forwards' }}>
      <p style={stepLabel(t)}>Step 5 of 7</p>
      <h2 style={stepTitle(t)}>Monthly learning<br/>budget?</h2>
      <p style={stepDesc(t)}>Great resources exist at every price point</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
        {options.map(o=>(<button key={o} onClick={()=>{setField('budget',o);setTimeout(nextStep,200);}} style={pillStyle(t,data.budget===o)}>{o}</button>))}
      </div>
      <button onClick={prevStep} style={backBtnStyle(t)}><ArrowLeftIcon size={14} color={t.text.muted}/> Back</button>
    </div>
  );
}
