'use client';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import { useTheme } from '@/lib/theme';
import { CheckIcon, LockIcon, ChevronRightIcon } from '@/components/icons/Icons';
export default function RoadmapView() {
  const { roadmap, setModuleStatus } = useRoadmapStore();
  const t = useTheme();
  if (!roadmap) return null;
  const click = (id:string, status:string) => { if (status==='current') { setModuleStatus(id,'completed'); const i=roadmap.modules.findIndex(m=>m.id===id); if(i<roadmap.modules.length-1) setModuleStatus(roadmap.modules[i+1].id,'current'); } };
  return (
    <div style={{ padding:'14px 0' }}>
      <h2 style={{ fontSize:'17px', fontWeight:800, color:t.text.primary, margin:'0 0 3px' }}>{roadmap.title}</h2>
      <p style={{ fontSize:'11px', color:t.text.muted, margin:'0 0 20px' }}>{roadmap.totalModules} modules · {roadmap.estimatedTime} estimated</p>
      <div style={{ position:'relative' }}>
        <div style={{ position:'absolute', left:'13px', top:0, bottom:0, width:'2px', background:`linear-gradient(180deg, ${t.accent.primary}, ${t.border.subtle})` }}/>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          {roadmap.modules.map((mod,i)=>{
            const done=mod.status==='completed'; const cur=mod.status==='current'; const locked=mod.status==='locked';
            return (
              <div key={mod.id} style={{ position:'relative', paddingLeft:'40px', animation:'slide-up 0.4s ease-out forwards', animationDelay:`${i*0.05}s`, opacity:0 }}>
                <div style={{ position:'absolute', left:'5px', top:'16px', width:'18px', height:'18px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1, background:done?t.accent.primary:cur?t.bg.primary:t.bg.card, border:`2px solid ${done?t.accent.primary:cur?t.accent.primary:t.border.subtle}` }}>
                  {done&&<CheckIcon size={10} color="#fff"/>}
                  {cur&&<div style={{ width:'5px', height:'5px', borderRadius:'50%', background:t.accent.primary }}/>}
                </div>
                <button onClick={()=>click(mod.id,mod.status)} disabled={locked}
                  style={{ width:'100%', textAlign:'left' as const, padding:'14px', borderRadius:t.radius.md, transition:'all 0.2s', cursor:locked?'default':'pointer', fontFamily:'inherit', background:cur?t.accent.dim:t.bg.card, border:`1px solid ${cur?t.accent.primary:t.border.subtle}`, opacity:locked?0.4:1, boxShadow:cur?t.shadow.accent:t.shadow.card }}>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'5px' }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'4px' }}>
                        <span style={{ fontSize:'10px', padding:'2px 7px', borderRadius:'100px', fontWeight:700, background:done||cur?t.accent.dim:t.bg.secondary, color:done||cur?t.accent.primary:t.text.disabled }}>{done?'Completed':cur?'In Progress':`Module ${i+1}`}</span>
                        <span style={{ fontSize:'10px', color:t.text.disabled }}>{mod.duration}</span>
                      </div>
                      <h3 style={{ fontSize:'14px', fontWeight:700, margin:'0 0 3px', color:locked?t.text.disabled:t.text.primary }}>{mod.title}</h3>
                      <p style={{ fontSize:'11px', margin:0, color:t.text.muted, lineHeight:1.4 }}>{mod.description}</p>
                    </div>
                    {locked&&<LockIcon size={14} color={t.text.disabled}/>}
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'4px', marginTop:'8px' }}>
                    {mod.topics.map(tp=>(<span key={tp} style={{ padding:'2px 7px', borderRadius:'5px', fontSize:'10px', fontWeight:600, background:t.bg.secondary, color:locked?t.text.disabled:t.text.muted }}>{tp}</span>))}
                  </div>
                  {cur&&(<div style={{ marginTop:'10px', paddingTop:'8px', borderTop:`1px solid ${t.border.subtle}`, display:'flex', alignItems:'center', gap:'4px' }}>
                    <span style={{ fontSize:'11px', fontWeight:600, color:t.accent.primary }}>Tap to mark complete</span>
                    <ChevronRightIcon size={13} color={t.accent.primary}/>
                  </div>)}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
