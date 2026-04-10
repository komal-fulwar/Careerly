'use client';
import { useEffect, useState } from 'react';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import { generateMockRoadmap } from '@/lib/mockData';
import { useTheme } from '@/lib/theme';
import { CompassIcon, BrainIcon, MapIcon, BookOpenIcon, DollarSignIcon, CheckIcon } from '@/components/icons/Icons';

export default function LoadingScreen() {
  const { data, setComplete, setLoading } = useOnboardingStore();
  const { setRoadmap } = useRoadmapStore();
  const t = useTheme();
  const [idx, setIdx] = useState(0);
  const [pct, setPct] = useState(0);
  const steps = [
    { icon: <BrainIcon size={16} color={t.accent.primary}/>, text:'Analysing your profile...' },
    { icon: <MapIcon size={16} color={t.category.cyan}/>, text:'Building your roadmap...' },
    { icon: <BookOpenIcon size={16} color={t.category.blue}/>, text:'Finding best resources...' },
    { icon: <DollarSignIcon size={16} color={t.category.amber}/>, text:'Fetching salary data...' },
    { icon: <CheckIcon size={16} color={t.semantic.success}/>, text:'Almost there...' },
  ];
  useEffect(() => {
    const si = setInterval(()=>setIdx(p=>p>=steps.length-1?(clearInterval(si),p):p+1), 800);
    const pi = setInterval(()=>setPct(p=>p>=100?(clearInterval(pi),100):p+2), 80);
    const ft = setTimeout(()=>{ setRoadmap(generateMockRoadmap(data)); setLoading(false); setComplete(true); }, 4200);
    return ()=>{ clearInterval(si); clearInterval(pi); clearTimeout(ft); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'24px 20px', background:t.bg.primary, transition:'background 0.3s' }}>
      <div style={{ marginBottom:'36px', position:'relative' }}>
        <div style={{ width:'64px', height:'64px', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', background:t.accent.gradient, animation:'spin-slow 3s linear infinite', boxShadow:t.shadow.accent }}>
          <CompassIcon size={28} color="#fff"/>
        </div>
      </div>
      <h2 style={{ fontSize:'20px', fontWeight:800, color:t.text.primary, marginBottom:'4px', textAlign:'center' }}>Mapping your journey</h2>
      <p style={{ fontSize:'13px', marginBottom:'32px', textAlign:'center', color:t.text.muted }}>Hey {data.name||'there'}, crafting your {data.skill} roadmap</p>
      <div style={{ width:'100%', maxWidth:'260px', marginBottom:'28px' }}>
        <div style={{ height:'4px', borderRadius:'100px', overflow:'hidden', background:t.bg.secondary }}>
          <div style={{ height:'100%', borderRadius:'100px', transition:'width 0.3s', width:`${Math.min(pct,100)}%`, background:t.accent.gradient }}/>
        </div>
        <p style={{ fontSize:'10px', textAlign:'right', marginTop:'5px', color:t.text.disabled, fontVariantNumeric:'tabular-nums' }}>{Math.min(pct,100)}%</p>
      </div>
      <div style={{ width:'100%', maxWidth:'260px', display:'flex', flexDirection:'column', gap:'12px' }}>
        {steps.map((s,i)=>(
          <div key={i} style={{ display:'flex', alignItems:'center', gap:'10px', transition:'all 0.5s', opacity:i<=idx?1:0.15, transform:i<=idx?'translateX(0)':'translateX(8px)' }}>
            {i<idx?<CheckIcon size={16} color={t.semantic.success}/>:s.icon}
            <span style={{ fontSize:'12px', fontWeight:500, color:i<=idx?t.text.secondary:t.text.disabled }}>{s.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
