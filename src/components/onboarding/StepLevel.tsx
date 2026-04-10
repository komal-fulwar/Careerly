'use client';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme, backBtnStyle, primaryBtnStyle, stepLabel, stepTitle, stepDesc } from '@/lib/theme';
import { ArrowLeftIcon, SparklesIcon, ChevronRightIcon } from '@/components/icons/Icons';
const levels = [
  { id:'Beginner', label:'Beginner', desc:'Starting fresh' },
  { id:'Basics', label:'Basics', desc:'Dabbled a bit' },
  { id:'Intermediate', label:'Intermediate', desc:'Know fundamentals' },
  { id:'Advanced', label:'Advanced', desc:'Going deeper' },
];
export default function StepLevel() {
  const { data, setField, nextStep, prevStep, setLoading } = useOnboardingStore();
  const t = useTheme();
  const go = () => { if (data.level) { setLoading(true); nextStep(); } };
  return (
    <div style={{ animation:'slide-up 0.5s ease-out forwards' }}>
      <p style={stepLabel(t)}>Step 7 of 7</p>
      <h2 style={stepTitle(t)}>Your current level?</h2>
      <p style={stepDesc(t)}>With {data.skill || 'your chosen skill'}</p>
      <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginBottom:'24px' }}>
        {levels.map(l=>{
          const sel = data.level===l.id;
          return (
            <button key={l.id} onClick={()=>setField('level',l.id)}
              style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', borderRadius:t.radius.md, transition:'all 0.2s', cursor:'pointer', fontFamily:'inherit', minHeight:'52px', border:`1px solid ${sel ? t.accent.primary : t.border.subtle}`, background: sel ? t.accent.dim : t.bg.card, boxShadow: sel ? t.shadow.accent : 'none' }}>
              <span style={{ fontSize:'14px', fontWeight:700, color: sel ? t.accent.primary : t.text.primary }}>{l.label}</span>
              <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                <span style={{ fontSize:'12px', color:t.text.muted }}>{l.desc}</span>
                <ChevronRightIcon size={14} color={sel ? t.accent.primary : t.border.default}/>
              </div>
            </button>
          );
        })}
      </div>
      <div style={{ display:'flex', gap:'10px' }}>
        <button onClick={prevStep} style={backBtnStyle(t)}><ArrowLeftIcon size={14} color={t.text.muted}/> Back</button>
        <button onClick={go} disabled={!data.level} style={primaryBtnStyle(t,!!data.level)}>Map my journey <SparklesIcon size={16} color="#fff"/></button>
      </div>
    </div>
  );
}
