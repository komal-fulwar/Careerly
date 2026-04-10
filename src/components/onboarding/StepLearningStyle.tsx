'use client';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme, cardStyle, stepLabel, stepTitle, stepDesc, backBtnStyle } from '@/lib/theme';
import { PlayCircleIcon, BookOpenIcon, ZapIcon, PuzzleIcon, ArrowLeftIcon } from '@/components/icons/Icons';
const styles = [
  { id:'Visual', icon:(c:string)=><PlayCircleIcon size={20} color={c}/>, label:'Visual', desc:'Videos & tutorials' },
  { id:'Reading', icon:(c:string)=><BookOpenIcon size={20} color={c}/>, label:'Reading', desc:'Articles & docs' },
  { id:'Builder', icon:(c:string)=><ZapIcon size={20} color={c}/>, label:'Builder', desc:'Projects & code' },
  { id:'Interactive', icon:(c:string)=><PuzzleIcon size={20} color={c}/>, label:'Interactive', desc:'Quizzes & exercises' },
];
const colors = ['#e11d48','#0891b2','#d97706','#7c3aed'];
export default function StepLearningStyle() {
  const { data, setField, nextStep, prevStep } = useOnboardingStore();
  const t = useTheme();
  return (
    <div style={{ animation:'slide-up 0.5s ease-out forwards' }}>
      <p style={stepLabel(t)}>Step 3 of 7</p>
      <h2 style={stepTitle(t)}>How do you learn<br/>best?</h2>
      <p style={stepDesc(t)}>We&apos;ll prioritise resources that match</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
        {styles.map((s,i)=>(
          <button key={s.id} onClick={()=>{ setField('learningStyle',s.id); setTimeout(nextStep,200); }}
            style={{ ...cardStyle(t, data.learningStyle===s.id), display:'flex', flexDirection:'column', alignItems:'flex-start', textAlign:'left' as const, minHeight:'88px' }}>
            <div style={{ marginBottom:'8px' }}>{s.icon(colors[i])}</div>
            <span style={{ fontSize:'13px', fontWeight:700, color:t.text.primary }}>{s.label}</span>
            <span style={{ fontSize:'11px', marginTop:'2px', color:t.text.muted }}>{s.desc}</span>
          </button>
        ))}
      </div>
      <button onClick={prevStep} style={backBtnStyle(t)}><ArrowLeftIcon size={14} color={t.text.muted}/> Back</button>
    </div>
  );
}
