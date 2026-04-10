'use client';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import { useTheme } from '@/lib/theme';
import { CheckIcon, ClockIcon, BookOpenIcon, ZapIcon, WrenchIcon, RefreshIcon } from '@/components/icons/Icons';
const ti:Record<string,(c:string)=>React.ReactNode> = { learn:c=><BookOpenIcon size={11} color={c}/>, practice:c=><ZapIcon size={11} color={c}/>, project:c=><WrenchIcon size={11} color={c}/>, review:c=><RefreshIcon size={11} color={c}/> };
const tcMap:Record<string,string> = { learn:'#0891b2', practice:'#7c3aed', project:'#d97706', review:'#e11d48' };
export default function ScheduleView() {
  const { roadmap, toggleTask } = useRoadmapStore();
  const t = useTheme();
  if (!roadmap) return null;
  const { weeklyPlan } = roadmap;
  const total = weeklyPlan.days.reduce((a,d)=>a+d.tasks.length,0);
  const done = weeklyPlan.days.reduce((a,d)=>a+d.tasks.filter(tk=>tk.completed).length,0);
  const pct = total>0?Math.round((done/total)*100):0;
  return (
    <div style={{ padding:'14px 0' }}>
      <h2 style={{ fontSize:'17px', fontWeight:800, color:t.text.primary, margin:'0 0 3px' }}>Weekly Schedule</h2>
      <p style={{ fontSize:'11px', color:t.text.muted, margin:'0 0 16px' }}>Week {weeklyPlan.currentWeek} of {weeklyPlan.totalWeeks}</p>
      <div style={{ background:t.bg.card, border:`1px solid ${t.border.subtle}`, borderRadius:t.radius.lg, padding:'14px 16px', marginBottom:'16px', boxShadow:t.shadow.card }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'8px' }}>
          <p style={{ fontSize:'13px', fontWeight:700, color:t.text.primary, margin:0 }}>This Week</p>
          <p style={{ fontSize:'13px', fontWeight:700, color:t.accent.primary, margin:0, fontVariantNumeric:'tabular-nums' }}>{done}/{total}</p>
        </div>
        <div style={{ height:'4px', borderRadius:'100px', overflow:'hidden', background:t.bg.secondary, marginBottom:'5px' }}>
          <div style={{ height:'100%', borderRadius:'100px', transition:'width 0.5s', width:`${pct}%`, background:t.accent.gradient }}/>
        </div>
        <p style={{ fontSize:'10px', textAlign:'right', color:t.text.disabled, margin:0, fontVariantNumeric:'tabular-nums' }}>{pct}%</p>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
        {weeklyPlan.days.map((day,di)=>{
          const allDone=day.tasks.every(tk=>tk.completed);
          const dayPct=day.tasks.length>0?Math.round((day.tasks.filter(tk=>tk.completed).length/day.tasks.length)*100):0;
          return(
            <div key={day.day} style={{ borderRadius:t.radius.md, overflow:'hidden', background:t.bg.card, border:`1px solid ${allDone?t.accent.primary:t.border.subtle}`, boxShadow:t.shadow.card, animation:'slide-up 0.4s ease-out forwards', animationDelay:`${di*0.04}s`, opacity:0 }}>
              <div style={{ padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'space-between', background:allDone?t.accent.dim:'transparent' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
                  <span style={{ fontSize:'13px', fontWeight:700, color:allDone?t.accent.primary:t.text.primary }}>{day.day}</span>
                  {allDone&&<CheckIcon size={13} color={t.accent.primary}/>}
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                  <span style={{ fontSize:'10px', color:t.text.disabled, display:'flex', alignItems:'center', gap:'3px' }}><ClockIcon size={10}/>{day.timeEstimate}</span>
                  <span style={{ fontSize:'10px', fontWeight:600, color:t.accent.primary, fontVariantNumeric:'tabular-nums' }}>{dayPct}%</span>
                </div>
              </div>
              <div style={{ padding:'4px 10px 10px', display:'flex', flexDirection:'column', gap:'4px' }}>
                {day.tasks.map(task=>(
                  <button key={task.id} onClick={()=>toggleTask(di,task.id)}
                    style={{ width:'100%', display:'flex', alignItems:'center', gap:'10px', padding:'10px', borderRadius:'8px', transition:'all 0.15s', cursor:'pointer', border:'none', fontFamily:'inherit', minHeight:'44px', background:task.completed?t.accent.dim:t.bg.secondary }}>
                    <div style={{ width:'18px', height:'18px', borderRadius:'5px', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', background:task.completed?t.accent.primary:'transparent', border:`2px solid ${task.completed?t.accent.primary:t.border.default}` }}>
                      {task.completed&&<CheckIcon size={10} color="#fff"/>}
                    </div>
                    <div style={{ flex:1, textAlign:'left' as const }}>
                      <p style={{ fontSize:'12px', fontWeight:600, margin:0, color:task.completed?t.text.disabled:t.text.primary, textDecoration:task.completed?'line-through':'none' }}>{task.title}</p>
                      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginTop:'2px' }}>
                        {ti[task.type]?.(tcMap[task.type])}
                        <span style={{ fontSize:'9px', fontWeight:500, textTransform:'capitalize' as const, color:tcMap[task.type] }}>{task.type}</span>
                        <span style={{ fontSize:'9px', color:t.text.disabled }}>· {task.duration}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
