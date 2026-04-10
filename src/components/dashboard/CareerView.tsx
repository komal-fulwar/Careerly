'use client';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import { useTheme } from '@/lib/theme';
import { TrendingUpIcon, BuildingIcon, AwardIcon, InfoIcon } from '@/components/icons/Icons';
export default function CareerView() {
  const { roadmap } = useRoadmapStore();
  const t = useTheme();
  if (!roadmap) return null;
  const ds:Record<string,{bg:string;color:string}> = { High:{bg:t.semantic.successDim,color:t.semantic.success}, Medium:{bg:t.semantic.warningDim,color:t.semantic.warning}, Low:{bg:t.semantic.errorDim,color:t.semantic.error} };
  return (
    <div style={{ padding:'14px 0' }}>
      <h2 style={{ fontSize:'17px', fontWeight:800, color:t.text.primary, margin:'0 0 3px' }}>Career Paths</h2>
      <p style={{ fontSize:'11px', color:t.text.muted, margin:'0 0 20px' }}>Where {roadmap.skill} can take you in India</p>
      <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
        {roadmap.careerPaths.map((c,i)=>{const d=ds[c.demand]||ds.Medium;return(
          <div key={c.id} style={{ padding:'16px', borderRadius:t.radius.lg, background:t.bg.card, border:`1px solid ${t.border.subtle}`, boxShadow:t.shadow.card, animation:'slide-up 0.4s ease-out forwards', animationDelay:`${i*0.06}s`, opacity:0 }}>
            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'12px' }}>
              <div>
                <h3 style={{ fontSize:'15px', fontWeight:700, color:t.text.primary, margin:'0 0 5px' }}>{c.title}</h3>
                <span style={{ fontSize:'10px', fontWeight:700, padding:'2px 8px', borderRadius:'100px', background:d.bg, color:d.color }}>{c.demand} Demand</span>
              </div>
              <div style={{ textAlign:'right' }}>
                <p style={{ fontSize:'18px', fontWeight:800, color:t.accent.primary, margin:0, lineHeight:1 }}>{c.avgSalary}</p>
                <p style={{ fontSize:'9px', color:t.text.disabled, margin:'2px 0 0' }}>avg salary</p>
              </div>
            </div>
            <div style={{ display:'flex', gap:'8px', marginBottom:'12px' }}>
              <div style={{ flex:1, padding:'8px', borderRadius:'8px', textAlign:'center' as const, background:t.bg.secondary }}>
                <p style={{ fontSize:'11px', fontWeight:700, color:t.text.primary, margin:0 }}>{c.salaryRange}</p>
                <p style={{ fontSize:'9px', color:t.text.disabled, margin:'2px 0 0' }}>Range</p>
              </div>
              <div style={{ flex:1, padding:'8px', borderRadius:'8px', textAlign:'center' as const, background:t.bg.secondary, display:'flex', flexDirection:'column', alignItems:'center' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'3px' }}>
                  <TrendingUpIcon size={11} color={t.semantic.success}/>
                  <p style={{ fontSize:'11px', fontWeight:700, color:t.semantic.success, margin:0 }}>{c.growth}</p>
                </div>
                <p style={{ fontSize:'9px', color:t.text.disabled, margin:'2px 0 0' }}>YoY Growth</p>
              </div>
            </div>
            <div style={{ marginBottom:'10px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'5px', marginBottom:'6px' }}><BuildingIcon size={11} color={t.text.muted}/><p style={{ fontSize:'10px', fontWeight:600, color:t.text.muted, margin:0 }}>Top Companies</p></div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'4px' }}>{c.companies.map(co=>(<span key={co} style={{ padding:'3px 8px', borderRadius:'5px', fontSize:'10px', fontWeight:500, background:t.bg.secondary, color:t.text.secondary }}>{co}</span>))}</div>
            </div>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:'5px', marginBottom:'6px' }}><AwardIcon size={11} color={t.text.muted}/><p style={{ fontSize:'10px', fontWeight:600, color:t.text.muted, margin:0 }}>Key Skills</p></div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'4px' }}>{c.skills.map(s=>(<span key={s} style={{ padding:'3px 8px', borderRadius:'5px', fontSize:'10px', fontWeight:500, background:t.accent.dim, color:t.accent.primary, border:`1px solid ${t.border.subtle}` }}>{s}</span>))}</div>
            </div>
          </div>
        );})}
      </div>
      <div style={{ marginTop:'16px', padding:'12px 14px', borderRadius:t.radius.md, background:t.semantic.warningDim, border:`1px solid ${t.border.subtle}`, display:'flex', alignItems:'flex-start', gap:'8px' }}>
        <InfoIcon size={14} color={t.semantic.warning}/><p style={{ fontSize:'11px', color:t.semantic.warning, margin:0, lineHeight:1.5 }}>Salary data based on 2024–2025 Indian market averages from Glassdoor, AmbitionBox, and LinkedIn.</p>
      </div>
    </div>
  );
}
