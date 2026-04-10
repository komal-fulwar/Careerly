'use client';
import { useState, useEffect, useRef } from 'react';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useTheme, type Theme } from '@/lib/theme';
import { ArrowRightIcon } from '@/components/icons/Icons';

interface Msg { role: 'user' | 'cara'; text: string; }

// Cara's avatar - a friendly AI bot face
function CaraAvatar({ size = 28 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: 'linear-gradient(135deg, #818cf8, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(99,102,241,0.25)' }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        {/* Face */}
        <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.15)" />
        {/* Eyes */}
        <circle cx="8.5" cy="10" r="1.8" fill="#fff" />
        <circle cx="15.5" cy="10" r="1.8" fill="#fff" />
        <circle cx="9" cy="10" r="0.8" fill="#312e81" />
        <circle cx="16" cy="10" r="0.8" fill="#312e81" />
        {/* Smile */}
        <path d="M8 14.5 C9.5 17 14.5 17 16 14.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Antenna */}
        <line x1="12" y1="2" x2="12" y2="4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="12" cy="1.5" r="1" fill="#a5b4fc" />
      </svg>
    </div>
  );
}

function generateResponse(input: string, skill: string, name: string): string {
  const q = input.toLowerCase();
  if (q.includes('hello') || q.includes('hi') || q.includes('hey'))
    return `Hey ${name}! 👋 I'm Cara, your AI career companion. How can I help you today? I know a lot about ${skill} — ask me anything!`;
  if (q.includes('who are you') || q.includes('your name') || q.includes('about you'))
    return `I'm Cara! 🤖 I'm the AI assistant inside Careerly. I help you navigate your ${skill} journey — from finding the best resources to understanding salary trends in India. Think of me as your pocket career advisor!`;
  if (q.includes('salary') || q.includes('earn') || q.includes('pay') || q.includes('money'))
    return `Great question! For ${skill} in India:\n\n• Entry level: ₹4-8L/year\n• Mid level (2-4 yrs): ₹10-20L/year\n• Senior (5+ yrs): ₹25-50L/year\n\nTop companies like Google, Microsoft pay significantly more. Want me to break it down by role?`;
  if (q.includes('how long') || q.includes('time') || q.includes('duration'))
    return `With consistent practice, here's a realistic timeline for ${skill}:\n\n• Basics: 4-6 weeks\n• Job-ready: 4-6 months\n• Intermediate: 8-12 months\n• Advanced: 1.5-2 years\n\nThe key is daily consistency — even 1 hour/day compounds.`;
  if (q.includes('resource') || q.includes('course') || q.includes('learn') || q.includes('where'))
    return `Here are my top picks for ${skill}:\n\n🎓 Free: freeCodeCamp, CS50, YouTube channels\n💻 Paid: Coursera, Udemy (wait for sales!)\n📚 Practice: LeetCode, HackerRank\n🔧 Projects: Build real things!\n\nCheck your Resources tab — I've curated the best ones there.`;
  if (q.includes('job') || q.includes('hire') || q.includes('interview') || q.includes('career'))
    return `The ${skill} job market in India is strong! Tips:\n\n1. Build 3-5 portfolio projects\n2. Contribute to open source\n3. Network on LinkedIn & Twitter\n4. Apply to both startups & MNCs\n5. Prep DSA for tech interviews\n\nCompanies like Flipkart, Razorpay, CRED are actively hiring. Check your Career tab!`;
  if (q.includes('roadmap') || q.includes('plan') || q.includes('start') || q.includes('begin'))
    return `Your ${skill} roadmap is already set up! Check the Roadmap tab. Here's the gist:\n\n1. Start with fundamentals\n2. Build small projects early\n3. Learn tools & frameworks\n4. Create a portfolio\n5. Apply & interview\n\nTap "Roadmap" to see the detailed module breakdown.`;
  if (q.includes('motivat') || q.includes('stuck') || q.includes('help') || q.includes('hard'))
    return `I get it, ${name} — learning something new is tough. Here's what helps:\n\n• Break tasks into 25-min blocks\n• Celebrate small wins\n• Join communities (Discord, Reddit)\n• Find an accountability partner\n• Remember WHY you started\n\nYou've already taken the first step by being here. That counts!`;
  if (q.includes('project') || q.includes('build') || q.includes('portfolio'))
    return `Great projects for ${skill}:\n\n• Clone a popular app (simplified)\n• Solve a real problem you face\n• Contribute to open source\n• Build something for a friend/local biz\n• Create a personal portfolio site\n\nEmployers care more about WHAT you built than WHERE you studied.`;
  if (q.includes('freelanc') || q.includes('remote') || q.includes('work from home'))
    return `Freelancing in ${skill} is very doable! Start here:\n\n• Upwork, Fiverr, Toptal for gigs\n• Build a strong portfolio first\n• Start with small projects\n• Gradually increase your rates\n• India's freelance market is booming — ₹50K-3L/month is achievable.\n\nWant specific platform recommendations?`;
  return `That's a great question about ${skill}! Here's what I think:\n\nThe field is growing rapidly in India, with lots of opportunities for both freshers and experienced professionals. Focus on building practical skills through projects, and stay consistent with your learning schedule.\n\nIs there something specific about ${skill} you'd like to explore? I can help with salaries, resources, career paths, or study plans.`;
}

function TypingIndicator({ t }: { t: Theme }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '16px 16px 16px 4px', background: t.bg.card, border: `1px solid ${t.border.subtle}`, maxWidth: '80px', animation: 'message-in 0.3s ease-out' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.text.muted, animation: `typing-dot 1.2s ease-in-out ${i * 0.15}s infinite` }} />
      ))}
    </div>
  );
}

export default function ChatView() {
  const { roadmap } = useRoadmapStore();
  const { data } = useOnboardingStore();
  const t = useTheme();
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const skill = roadmap?.skill || data.skill || 'your skill';
  const name = data.name || 'there';

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsgs([{ role: 'cara', text: `Hey ${name}! 🎯 I'm Cara, your AI career guide inside Careerly. I know everything about ${skill} — from salary ranges to the best learning resources.\n\nTry asking me:\n• "How much can I earn?"\n• "Where should I start?"\n• "How long will it take?"\n• "Suggest projects to build"` }]);
    }, 500);
    return () => clearTimeout(timer);
  }, [name, skill]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, typing]);

  const send = () => {
    const text = input.trim();
    if (!text || typing) return;
    setInput('');
    setMsgs(prev => [...prev, { role: 'user', text }]);
    setTyping(true);
    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      setMsgs(prev => [...prev, { role: 'cara', text: generateResponse(text, skill, name) }]);
      setTyping(false);
    }, delay);
  };

  const quickActions = ['How much can I earn?', 'Best resources?', 'How long to learn?', 'Career options?'];

  return (
    <div style={{ padding: '14px 0', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 260px)' }}>
      {/* Header with Cara identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <CaraAvatar size={36} />
        <div>
          <h2 style={{ fontSize: '17px', fontWeight: 800, color: t.text.primary, margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            Cara
            <span style={{ fontSize: '9px', fontWeight: 600, padding: '2px 6px', borderRadius: '100px', background: t.semantic.successDim, color: t.semantic.success }}>Online</span>
          </h2>
          <p style={{ fontSize: '11px', color: t.text.muted, margin: '1px 0 0' }}>Your AI career advisor</p>
        </div>
      </div>

      {/* Quick actions */}
      {msgs.length <= 1 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
          {quickActions.map(q => (
            <button key={q} onClick={() => {
              setMsgs(prev => [...prev, { role: 'user', text: q }]);
              setTyping(true);
              setTimeout(() => {
                setMsgs(prev => [...prev, { role: 'cara', text: generateResponse(q, skill, name) }]);
                setTyping(false);
              }, 800 + Math.random() * 1200);
            }}
              style={{ padding: '6px 12px', borderRadius: t.radius.full, fontSize: '11px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', background: t.accent.dim, border: `1px solid ${t.border.subtle}`, color: t.accent.primary, transition: 'all 0.2s' }}>
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Messages */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '12px', WebkitOverflowScrolling: 'touch' as const }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', animation: 'message-in 0.35s ease-out' }}>
            {m.role === 'cara' && (
              <div style={{ marginRight: '8px', marginTop: '2px' }}>
                <CaraAvatar size={28} />
              </div>
            )}
            <div style={{
              maxWidth: '80%', padding: '12px 14px', borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              fontSize: '13px', lineHeight: 1.6, whiteSpace: 'pre-wrap',
              background: m.role === 'user' ? t.accent.gradient : t.bg.card,
              color: m.role === 'user' ? '#fff' : t.text.primary,
              border: m.role === 'cara' ? `1px solid ${t.border.subtle}` : 'none',
              boxShadow: t.shadow.card,
            }}>
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ marginRight: '8px', marginTop: '2px' }}>
              <CaraAvatar size={28} />
            </div>
            <TypingIndicator t={t} />
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ display: 'flex', gap: '8px', paddingTop: '12px', borderTop: `1px solid ${t.border.subtle}` }}>
        <input
          type="text" value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Ask Cara anything..."
          style={{
            flex: 1, padding: '12px 14px', borderRadius: t.radius.md, fontSize: '14px', fontWeight: 500,
            color: t.text.primary, background: t.bg.card, border: `1px solid ${t.border.subtle}`,
            outline: 'none', fontFamily: 'inherit', minHeight: '44px',
          }}
        />
        <button onClick={send}
          style={{
            width: '44px', height: '44px', borderRadius: t.radius.md, border: 'none',
            background: input.trim() ? t.accent.gradient : t.bg.secondary,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() ? 'pointer' : 'default',
            transition: 'all 0.2s',
          }}>
          <ArrowRightIcon size={16} color={input.trim() ? '#fff' : t.text.disabled} />
        </button>
      </div>
    </div>
  );
}
