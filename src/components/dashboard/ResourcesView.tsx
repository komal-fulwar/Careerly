'use client';
import { useState } from 'react';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import type { Resource } from '@/store/useRoadmapStore';
import { useTheme } from '@/lib/theme';
import { GraduationCapIcon, VideoIcon, FileTextIcon, WrenchIcon, ClockIcon, StarIcon, SearchIcon } from '@/components/icons/Icons';
const tc: Record<string,{icon:React.ReactNode;color:string}> = { course:{icon:<GraduationCapIcon size={14}/>,color:'#7c3aed'}, video:{icon:<VideoIcon size={14}/>,color:'#e11d48'}, article:{icon:<FileTextIcon size={14}/>,color:'#0891b2'}, project:{icon:<WrenchIcon size={14}/>,color:'#d97706'} };
export default function ResourcesView() {
  const { roadmap } = useRoadmapStore();
  const t = useTheme();
  const [filter, setFilter] = useState('all');
  const [modIdx, setModIdx] = useState(0);
  if (!roadmap) return null;
  const mod = roadmap.modules[modIdx];
  const resources = mod?.resources||[];
  const filtered = filter==='all' ? resources : resources.filter((r:Resource)=>r.type===filter);
  return (
    <div style={{ padding:'14px 0' }}>
      <h2 style={{ fontSize:'17px', fontWeight:800, color:t.text.primary, margin:'0 0 3px' }}>Learning Resources</h2>
      <p style={{ fontSize:'11px', color:t.text.muted, margin:'0 0 16px' }}>Curated & compared across platforms</p>
      <div style={{ display:'flex', gap:'6px', overflowX:'auto', paddingBottom:'10px', marginBottom:'10px', WebkitOverflowScrolling:'touch' as const, scrollbarWidth:'none' as const }}>
        {roadmap.modules.map((m,i)=>(
          <button key={m.id} onClick={()=>setModIdx(i)} style={{ flexShrink:0, padding:'7px 12px', borderRadius:'8px', fontSize:'11px', fontWeight:600, whiteSpace:'nowrap', cursor:'pointer', transition:'all 0.2s', fontFamily:'inherit', background:modIdx===i?t.accent.dim:t.bg.card, border:`1px solid ${modIdx===i?t.accent.primary:t.border.subtle}`, color:modIdx===i?t.accent.primary:t.text.disabled, minHeight:'34px' }}>{m.title}</button>
        ))}
      </div>
      <div style={{ display:'flex', gap:'5px', marginBottom:'14px', flexWrap:'wrap' }}>
        {['all','course','video','article','project'].map(f=>{const a=filter===f;return(
          <button key={f} onClick={()=>setFilter(f)} style={{ padding:'5px 10px', borderRadius:'100px', fontSize:'10px', fontWeight:600, cursor:'pointer', transition:'all 0.2s', fontFamily:'inherit', display:'flex', alignItems:'center', gap:'4px', textTransform:'capitalize' as const, background:a?t.accent.dim:'transparent', border:`1px solid ${a?t.accent.primary:t.border.subtle}`, color:a?t.accent.primary:t.text.disabled, minHeight:'30px' }}>
            {f==='all'?<><SearchIcon size={10}/>All</>:<>{tc[f]?.icon}{f}</>}
          </button>
        );})}
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
        {filtered.map((res:Resource,i:number)=>{const cfg=tc[res.type];return(
          <div key={res.id} style={{ padding:'14px', borderRadius:t.radius.md, background:t.bg.card, border:`1px solid ${t.border.subtle}`, boxShadow:t.shadow.card, animation:'slide-up 0.4s ease-out forwards', animationDelay:`${i*0.04}s`, opacity:0 }}>
            <div style={{ display:'flex', alignItems:'flex-start', gap:'10px', marginBottom:'8px' }}>
              <div style={{ width:'32px', height:'32px', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:`${cfg?.color}12`, color:cfg?.color }}>{cfg?.icon}</div>
              <div style={{ flex:1, minWidth:0 }}>
                <h4 style={{ fontSize:'13px', fontWeight:700, color:t.text.primary, margin:0, lineHeight:1.3 }}>{res.title}</h4>
                <p style={{ fontSize:'10px', color:t.text.muted, margin:'2px 0 0' }}>{res.platform}</p>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ fontSize:'10px', color:t.text.muted, display:'flex', alignItems:'center', gap:'3px' }}><ClockIcon size={10}/>{res.duration}</span>
                <span style={{ fontSize:'10px', color:t.semantic.warning, display:'flex', alignItems:'center', gap:'2px' }}><StarIcon size={10} color={t.semantic.warning}/>{res.rating}</span>
              </div>
              <span style={{ fontSize:'10px', fontWeight:700, padding:'3px 8px', borderRadius:'100px', background:res.isFree?t.semantic.successDim:t.semantic.warningDim, color:res.isFree?t.semantic.success:t.semantic.warning }}>{res.price}</span>
            </div>
          </div>
        );})}
      </div>
      {filtered.length===0&&(<div style={{ textAlign:'center', padding:'40px 0' }}><SearchIcon size={28} color={t.text.disabled}/><p style={{ fontSize:'12px', color:t.text.muted, marginTop:'10px' }}>No resources found</p></div>)}
    </div>
  );
}
