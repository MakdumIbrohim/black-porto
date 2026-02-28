"use client";

import { useState, useRef, useEffect } from "react";
import {
  Folder,
  MessageSquare,
  User,
  FileBadge,
  Mail,
  Plus,
  Settings,
  Star,
  ChevronDown,
  Search,
  Hash,
  Monitor,
  TerminalSquare
} from "lucide-react";
import Draggable from 'react-draggable';

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile");
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [keySequence, setKeySequence] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("theme-green");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Terminal Easter Egg Listener
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => {
      const newSeq = (keySequence + e.key).slice(-4);
      setKeySequence(newSeq);
      if (newSeq.toLowerCase() === "sudo") {
        setEasterEggActive(true);
      }
    };
  }

  return (
    <main className={`min-h-screen w-full relative p-4 md:p-12 font-sans overflow-hidden ${theme} transition-colors duration-500`}>
      {/* Background decoration - Fake Folders */}
      <div className="absolute top-10 left-10 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform z-0">
        <div className="w-16 h-12 bg-[var(--window-bg)] border-[3px] border-[#2d2d2d] rounded-sm shadow-[4px_4px_0_0_#2d2d2d] relative before:content-[''] before:absolute before:top-[-10px] before:left-[-3px] before:w-6 before:h-3 before:bg-[var(--window-bg)] before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-[#2d2d2d] before:rounded-t-sm" />
        <span className="text-xs font-bold text-[#2d2d2d] mt-2 bg-[var(--window-bg)] px-2 py-0.5 border-2 border-[#2d2d2d] -rotate-2">Projects</span>
      </div>

      <div className="absolute bottom-20 right-16 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform z-0">
        <div className="w-16 h-12 bg-white border-[3px] border-[#2d2d2d] rounded-sm shadow-[4px_4px_0_0_#2d2d2d] relative before:content-[''] before:absolute before:top-[-10px] before:left-[-3px] before:w-6 before:h-3 before:bg-white before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-[#2d2d2d] before:rounded-t-sm" />
        <span className="text-xs font-bold text-[#2d2d2d] mt-2 bg-white px-2 py-0.5 border-2 border-[#2d2d2d] rotate-3">Assets.zip</span>
      </div>

      <div className="absolute top-40 right-10 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform z-0">
        <div className="w-16 h-12 bg-[#2d2d2d] border-[3px] border-[#2d2d2d] rounded-sm shadow-[4px_4px_0_0_#F8F5E9] relative before:content-[''] before:absolute before:top-[-10px] before:left-[-3px] before:w-6 before:h-3 before:bg-[#2d2d2d] before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-[#2d2d2d] before:rounded-t-sm" />
        <span className="text-xs font-bold text-[#F8F5E9] mt-2 bg-[#2d2d2d] px-2 py-0.5 border-2 border-[#2d2d2d] -rotate-6">SECRET</span>
      </div>

      <div className="absolute bottom-10 left-32 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform z-0">
        <div className="w-16 h-12 bg-[var(--window-bg-hover)] border-[3px] border-[#2d2d2d] rounded-sm shadow-[4px_4px_0_0_#2d2d2d] relative before:content-[''] before:absolute before:top-[-10px] before:left-[-3px] before:w-6 before:h-3 before:bg-[var(--window-bg-hover)] before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-[#2d2d2d] before:rounded-t-sm" />
        <span className="text-xs font-bold text-[#2d2d2d] mt-2 bg-[var(--window-bg)] px-2 py-0.5 border-2 border-[#2d2d2d] rotate-2">Client Work</span>
      </div>

      {/* Main Window Container */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden flex items-center justify-center">
        <Draggable
          handle=".drag-handle"
          nodeRef={draggableRef}
          position={position}
          onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
          disabled={isMobile}
          bounds="parent"
        >
          <div ref={draggableRef} className="pointer-events-auto w-full md:w-[90%] md:max-w-5xl h-full md:h-[85vh] bg-[var(--window-bg)] md:border-[3px] border-[var(--window-border)] md:rounded-xl shadow-none md:shadow-[8px_8px_0_0_var(--window-border)] flex flex-col overflow-hidden relative transition-shadow">
            {/* Title Bar - Drag Handle */}
            <div className="drag-handle h-12 border-b-[3px] border-[var(--window-border)] bg-[var(--window-bg)] flex items-center justify-between px-4 shrink-0 shadow-sm cursor-grab active:cursor-grabbing">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-[#2d2d2d] border-[3px] border-[#2d2d2d] hover:bg-[#666] cursor-pointer" />
                <div className="w-4 h-4 rounded-full bg-[var(--window-bg-hover)] border-[3px] border-[#2d2d2d] hover:bg-[#666] cursor-pointer" />
                <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#2d2d2d] hover:bg-[#666] cursor-pointer" />
              </div>
              <div className="font-black tracking-wide text-[var(--window-text)] uppercase text-sm">Slack_Portfolio.app</div>
              <div className="w-16" /> {/* Spacer for centering */}
            </div>

            {/* Content Area */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="sidebar-area w-full md:max-w-[260px] border-b-[3px] md:border-b-0 md:border-r-[3px] border-[var(--window-border)] bg-[var(--window-bg)] flex md:flex-col shrink-0 overflow-x-auto custom-scrollbar md:overflow-visible relative">

                {/* Channels List (Horizontal on Mobile, Vertical on Desktop) */}
                <div className="flex md:flex-col p-2 md:p-4 gap-2 md:gap-6 w-max mx-auto md:w-full md:mx-0 items-center md:items-stretch">
                  <div className="flex flex-row md:flex-col md:w-full">
                    <div className="hidden md:flex items-center gap-2 text-[var(--window-text)] font-black mb-3">
                      <MessageSquare size={20} strokeWidth={3} />
                      <span className="uppercase tracking-wider">Channels</span>
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 md:space-y-1 md:ml-2">
                      <button
                        onClick={() => setActiveTab("profile")}
                        data-tab="profile"
                        className={`tab-btn tab-btn-profile whitespace-nowrap flex items-center gap-2 px-3 py-2 border-2 rounded font-bold transition-all ${activeTab === 'profile' ? 'tab-active shadow-[2px_2px_0_0_var(--window-border)] border-[var(--window-border)]' : 'border-transparent text-[var(--window-text)] opacity-70 hover:opacity-100 hover:bg-[var(--window-bg-hover)] hover:border-[var(--window-border)]'}`}
                      >
                        <span className="text-xl leading-none opacity-50">#</span> profile
                      </button>
                      <button
                        onClick={() => setActiveTab("certificates")}
                        data-tab="certificates"
                        className={`tab-btn tab-btn-certificates whitespace-nowrap flex items-center gap-2 px-3 py-2 border-2 rounded font-bold transition-all ${activeTab === 'certificates' ? 'tab-active shadow-[2px_2px_0_0_var(--window-border)] border-[var(--window-border)]' : 'border-transparent text-[var(--window-text)] opacity-70 hover:opacity-100 hover:bg-[var(--window-bg-hover)] hover:border-[var(--window-border)]'}`}
                      >
                        <span className="text-xl leading-none opacity-50">#</span> certificates
                      </button>
                      <button
                        onClick={() => setActiveTab("contact")}
                        data-tab="contact"
                        className={`tab-btn tab-btn-contact whitespace-nowrap flex items-center gap-2 px-3 py-2 border-2 rounded font-bold transition-all ${activeTab === 'contact' ? 'tab-active shadow-[2px_2px_0_0_var(--window-border)] border-[var(--window-border)]' : 'border-transparent text-[var(--window-text)] opacity-70 hover:opacity-100 hover:bg-[var(--window-bg-hover)] hover:border-[var(--window-border)]'}`}
                      >
                        <span className="text-xl leading-none opacity-50">#</span> contact
                      </button>
                    </div>
                  </div>

                  {/* Direct Messages Dummy - Hidden on mobile */}
                  <div className="hidden md:block">
                    <div className="flex items-center gap-2 text-[#2d2d2d] font-black mb-3">
                      <User size={20} strokeWidth={3} />
                      <span className="uppercase tracking-wider">Direct Messages</span>
                    </div>
                    <div className="space-y-2 ml-2">
                      <div className="flex items-center gap-2 px-3 py-1 opacity-50 grayscale">
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <span className="font-bold line-through">client_01</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 opacity-50 grayscale">
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <span className="font-bold line-through">recruiter_A</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />

                {/* Bottom User Area - Hidden on Mobile to save space */}
                <div className="user-area hidden md:flex p-4 border-t-[3px] border-[var(--window-border)] flex items-center gap-3 bg-[var(--window-bg-hover)]">
                  <div className="w-12 h-12 rounded bg-[#2d2d2d] border-[3px] border-[#2d2d2d] shrink-0 overflow-hidden shadow-[2px_2px_0_0_#2d2d2d] grayscale">
                    <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=dev_portfolio`} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-sm uppercase truncate">Web Developer</div>
                    <div className="text-xs text-[#2d2d2d] font-bold flex items-center gap-1 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2d2d2d] border-2 border-[#F8F5E9]" /> Online
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Pane */}
              <div className="content-pane flex-1 flex flex-col bg-[var(--window-bg)] overflow-hidden min-h-0 relative">
                {/* Header */}
                <div className="content-header h-16 border-b-[3px] border-[var(--window-border)] bg-[var(--window-bg)] flex items-center justify-between px-6 shrink-0 relative">
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2d2d2d]/10" />
                  <div>
                    <h1 className="font-black text-2xl text-[#2d2d2d] flex items-center gap-2">
                      <span className="text-gray-400">#</span> {activeTab}
                    </h1>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-[#2d2d2d]">
                    <span className="members-badge hidden md:inline-block px-2 py-1 bg-yellow-100 border-2 border-[#2d2d2d] shadow-[2px_2px_0_0_#2d2d2d]">Members: [1]</span>
                    <button className="p-1 hover:bg-gray-100 border-2 border-transparent hover:border-[#2d2d2d] rounded transition-all">
                      <Search className="text-[#2d2d2d]" size={20} strokeWidth={3} />
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                        className={`p-1 border-2 rounded transition-all ${isSettingsOpen ? 'bg-gray-100 border-[#2d2d2d]' : 'hover:bg-gray-100 border-transparent hover:border-[#2d2d2d]'}`}
                      >
                        <Settings className="text-[#2d2d2d]" size={20} strokeWidth={3} />
                      </button>

                      {isSettingsOpen && (
                        <div className="settings-dropdown absolute top-full right-0 mt-2 bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] rounded shadow-[4px_4px_0_0_var(--window-border)] w-48 z-50 overflow-hidden">
                          <div className="px-3 py-2 border-b-[3px] border-[var(--window-border)] bg-[var(--window-bg-hover)] font-black uppercase text-xs text-[var(--window-text)]">
                            Theme Changer
                          </div>
                          <div className="p-2 space-y-1 text-[var(--window-text)]">
                            <button
                              onClick={() => { setTheme('theme-green'); setIsSettingsOpen(false); }}
                              className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[var(--window-bg-hover)] font-bold text-sm border-2 border-transparent hover:border-[var(--window-border)] transition-all rounded"
                            >
                              <span>Slack Green</span>
                              {theme === 'theme-green' && <div className="w-2 h-2 rounded-full bg-[var(--window-text)]" />}
                            </button>
                            <button
                              onClick={() => { setTheme('theme-gray'); setIsSettingsOpen(false); }}
                              className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-gray-100 font-bold text-sm border-2 border-transparent hover:border-[#2d2d2d] transition-all rounded"
                            >
                              <span>Win95 Gray</span>
                              {theme === 'theme-gray' && <div className="w-2 h-2 rounded-full bg-[#2d2d2d]" />}
                            </button>
                            <button
                              onClick={() => { setTheme('theme-blue'); setIsSettingsOpen(false); }}
                              className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-gray-100 font-bold text-sm border-2 border-transparent hover:border-[#2d2d2d] transition-all rounded"
                            >
                              <span>Classic Teal</span>
                              {theme === 'theme-blue' && <div className="w-2 h-2 rounded-full bg-[#2d2d2d]" />}
                            </button>
                            <button
                              onClick={() => { setTheme('theme-black'); setIsSettingsOpen(false); }}
                              className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[var(--window-bg-hover)] font-bold text-sm border-2 border-transparent hover:border-[var(--window-border)] transition-all rounded"
                            >
                              <span>Pitch Black</span>
                              {theme === 'theme-black' && <div className="w-2 h-2 rounded-full bg-[var(--window-text)]" />}
                            </button>
                            <button
                              onClick={() => { setTheme('theme-rainbow'); setIsSettingsOpen(false); }}
                              className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[var(--window-bg-hover)] font-bold text-sm border-2 border-transparent hover:border-[var(--window-border)] transition-all rounded"
                            >
                              <span>Carnival</span>
                              {theme === 'theme-rainbow' && <div className="w-2 h-2 rounded-full bg-[var(--window-text)]" />}
                            </button>
                            <div className="pt-2 mt-1 border-t-2 border-dashed border-[#2d2d2d]">
                              <button
                                onClick={() => { setPosition({ x: 0, y: 0 }); setIsSettingsOpen(false); }}
                                className="w-full text-left px-3 py-2 bg-yellow-50 hover:bg-yellow-100 font-black text-xs uppercase border-2 border-[#2d2d2d] shadow-[2px_2px_0_0_#2d2d2d] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all rounded text-black"
                              >
                                Reset Window Position
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 relative bg-[var(--window-bg)] custom-scrollbar h-full">
                  <div className="relative z-10 max-w-4xl mx-auto pb-10">
                    {activeTab === "profile" && <ProfileSection />}
                    {activeTab === "certificates" && <CertificatesSection />}
                    {activeTab === "contact" && <ContactSection />}
                  </div>
                </div>

                {/* Message Input Bottom Bar */}
                <div className="input-bar p-4 border-t-[3px] border-[var(--window-border)] bg-[var(--window-bg)]">
                  <div className="w-full h-12 border-[3px] border-[var(--window-border)] rounded flex items-center px-4 bg-[var(--window-bg-hover)] shadow-[2px_2px_0_0_var(--window-border)] focus-within:shadow-[4px_4px_0_0_var(--window-border)] transition-shadow">
                    <input type="text" placeholder={`Type 'sudo' for a surprise...`} className="flex-1 bg-transparent border-none outline-none font-bold text-[var(--window-text)] placeholder:text-[var(--window-text)] opacity-50" />
                    <button className="px-4 py-1.5 bg-[var(--window-border)] text-[var(--window-bg)] font-black text-sm border-2 border-[var(--window-border)] rounded hover:opacity-80 transition-opacity shadow-[2px_2px_0_0_var(--window-border)]">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      </div>

      {/* Easter Egg Modal */}
      {easterEggActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-black border-4 border-[#27C93F] p-6 rounded shadow-[0_0_20px_#27C93F] font-mono text-[#27C93F]">
            <div className="flex justify-between items-center border-b-2 border-[#27C93F] pb-2 mb-4">
              <span className="font-bold flex items-center gap-2"><TerminalSquare size={18} /> ROOT ACCESS GRANTED</span>
              <button onClick={() => setEasterEggActive(false)} className="px-2 py-0.5 bg-[#27C93F] text-black font-black hover:bg-white hover:text-black">X</button>
            </div>
            <div className="space-y-2 opacity-90">
              <p>{'>'} Initializing hidden protocols...</p>
              <p className="delay-100">{'>'} Bypassing mainframe security...</p>
              <p className="delay-200 text-yellow-400">{'>'} WARNING: Unauthorized access detected.</p>
              <p className="delay-300">{'>'} Just kidding. Thanks for finding the Easter Egg!</p>
              <p className="delay-500 mt-4 text-white">Hello there! You seem to be poking around. I'm glad you liked the design enough to explore. Feel free to contact me if you have a cool project in mind!</p>
              <p className="mt-8 animate-pulse">_</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// Sub-components
function ProfileSection() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-8 border-b-2 border-dashed border-[var(--window-border)] opacity-50">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--window-text)] tracking-tighter shadow-sm">Hello, World!</h2>
        <p className="mt-4 font-bold text-[var(--window-text)] opacity-60 font-mono text-sm max-w-lg mx-auto">This is where I build things that live on the internet.</p>
      </div>

      <div className="flex gap-4 group">
        <div className="w-12 h-12 rounded bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] shrink-0 mt-1 flex items-center justify-center shadow-[3px_3px_0_0_var(--window-border)] group-hover:scale-110 transition-transform">
          <User size={24} strokeWidth={3} className="text-[var(--window-text)]" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-black text-xl text-[var(--window-text)]">System</span>
            <span className="text-xs font-bold text-[var(--window-text)] opacity-60 font-mono px-2 py-0.5 bg-[var(--window-bg-hover)] border border-[var(--window-border)] rounded">12:00</span>
          </div>
          <div className="bg-[var(--window-bg-hover)] border-[3px] border-[var(--window-border)] p-6 rounded-lg shadow-[6px_6px_0_0_var(--window-border)] text-[var(--window-text)] mt-2 transition-colors relative">
            <div className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight flex items-center gap-2">
              <span className="w-3 h-3 bg-[var(--window-border)] rounded-full border-2 border-[var(--window-bg)] animate-pulse block" />
              System Initialization Complete
            </div>

            <p className="text-base md:text-lg font-bold leading-relaxed mb-6 font-mono text-[var(--window-text)] opacity-90 bg-[var(--window-bg)] p-4 rounded border-2 border-[var(--window-border)]">
              <span className="opacity-60">{'>'}</span> Loading profile data...<br />
              <span className="opacity-60">{'>'}</span> Status: <span className="font-black">SUCCESS</span><br />
              <span className="opacity-60">{'>'}</span> Welcome to my portfolio. I am a passionate frontend developer focused on building modern, aesthetic, and functional digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] p-5 rounded z-10 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_var(--window-border)] shadow-[4px_4px_0_0_var(--window-border)] transition-all cursor-crosshair">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase text-lg border-b-2 border-[var(--window-border)] pb-2 text-[var(--window-text)]"><Monitor size={20} strokeWidth={3} /> Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'Figma'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-[var(--window-bg-hover)] border-2 border-[var(--window-border)] text-[var(--window-text)] text-xs font-black uppercase rounded shadow-[2px_2px_0_0_var(--window-border)]">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] p-5 rounded z-10 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_var(--window-border)] shadow-[4px_4px_0_0_var(--window-border)] transition-all cursor-text">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase text-lg border-b-2 border-[var(--window-border)] pb-2 text-[var(--window-text)]"><Plus size={20} strokeWidth={3} /> Interests</h3>
                <p className="text-sm font-bold text-[var(--window-text)] opacity-80 leading-relaxed">
                  UI/UX Design, Neo-brutalism, Web Accessibility, Performance Optimization, and Creative Error Pages.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[var(--window-border)] rounded-full border-[3px] border-[var(--window-bg)] flex items-center justify-center shadow-[2px_2px_0_0_var(--window-border)] rotate-12 z-20">
              <Star size={24} fill="currentColor" className="text-[var(--window-bg)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CertificatesSection() {
  return (
    <div className="space-y-8">
      <div className="flex gap-4 group">
        <div className="w-12 h-12 rounded bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] shrink-0 mt-1 flex items-center justify-center shadow-[3px_3px_0_0_var(--window-border)] group-hover:scale-110 transition-transform">
          <FileBadge size={24} strokeWidth={3} className="text-[var(--window-text)]" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-black text-xl text-[var(--window-text)]">System</span>
            <span className="text-xs font-bold text-[var(--window-text)] opacity-60 font-mono px-2 py-0.5 bg-[var(--window-bg-hover)] border border-[var(--window-border)] rounded">12:05</span>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4">
            <div className="bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] rounded-lg overflow-hidden shadow-[6px_6px_0_0_var(--window-border)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_var(--window-border)] transition-all flex flex-col md:flex-row relative">
              <div className="absolute top-0 right-0 p-2 bg-[var(--window-border)] text-[var(--window-bg)] border-l-[3px] border-b-[3px] border-[var(--window-border)] font-black uppercase text-xs">Featured</div>
              <div className="h-48 md:h-auto md:w-1/3 bg-[var(--window-bg-hover)] border-b-[3px] md:border-b-0 md:border-r-[3px] border-[var(--window-border)] p-4 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full border-2 border-dashed border-[var(--window-border)] rounded bg-[var(--window-bg-hover)] flex items-center justify-center flex-col gap-2">
                  <FileBadge size={48} className="text-[var(--window-text)]" strokeWidth={2} />
                  <span className="font-black text-[var(--window-text)] text-xs uppercase tracking-widest opacity-80">Verified</span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                <div className="text-xs font-black text-[var(--window-text)] opacity-60 font-mono mb-2 bg-[var(--window-bg-hover)] inline-block px-2 py-1 rounded w-fit border border-[var(--window-border)]">Dec 2025</div>
                <h3 className="font-black text-2xl text-[var(--window-text)] leading-tight mb-2 uppercase">Advanced Frontend Architecture</h3>
                <p className="text-sm font-bold text-[var(--window-text)] opacity-70 mb-6 font-mono">Issued by Tech Academy // ID: cert_x89f_2</p>
                <button className="self-start py-2 px-6 bg-[var(--window-border)] text-[var(--window-bg)] border-[3px] border-[var(--window-border)] font-black text-sm uppercase shadow-[3px_3px_0_0_var(--window-border)] active:shadow-none hover:opacity-80 transition-all">
                  View Credential &rarr;
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] rounded-lg overflow-hidden shadow-[6px_6px_0_0_var(--window-border)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_var(--window-border)] transition-all flex flex-col">
                <div className="h-40 bg-[var(--window-bg-hover)] border-b-[3px] border-[var(--window-border)] p-4 flex items-center justify-center">
                  <FileBadge size={40} className="text-[var(--window-text)] opacity-80" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs font-black text-[var(--window-text)] opacity-60 mb-1">Oct 2025</div>
                  <h3 className="font-black text-lg text-[var(--window-text)] leading-tight mb-2 uppercase">Fullstack React Bootcamp</h3>
                  <p className="text-sm font-bold text-[var(--window-text)] opacity-70 mb-4 font-mono flex-1">Issued by Code Masters</p>
                  <button className="w-full py-2 bg-[var(--window-bg)] text-[var(--window-text)] border-[3px] border-[var(--window-border)] font-black text-sm uppercase shadow-[3px_3px_0_0_var(--window-border)] hover:bg-[var(--window-bg-hover)] active:translate-y-[3px] active:translate-x-[3px] active:shadow-none transition-all">
                    Open Document
                  </button>
                </div>
              </div>

              <div className="bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] rounded-lg overflow-hidden shadow-[6px_6px_0_0_var(--window-border)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_var(--window-border)] transition-all flex flex-col">
                <div className="h-40 bg-[var(--window-bg-hover)] border-b-[3px] border-[var(--window-border)] p-4 flex items-center justify-center">
                  <FileBadge size={40} className="text-[var(--window-text)] opacity-80" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs font-black text-[var(--window-text)] opacity-60 mb-1">Jan 2024</div>
                  <h3 className="font-black text-lg text-[var(--window-text)] leading-tight mb-2 uppercase">UI Design Principles</h3>
                  <p className="text-sm font-bold text-[var(--window-text)] opacity-70 mb-4 font-mono flex-1">Issued by Design Institute</p>
                  <button className="w-full py-2 bg-[var(--window-bg)] text-[var(--window-text)] border-[3px] border-[var(--window-border)] font-black text-sm uppercase shadow-[3px_3px_0_0_var(--window-border)] hover:bg-[var(--window-bg-hover)] active:translate-y-[3px] active:translate-x-[3px] active:shadow-none transition-all">
                    Open Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="space-y-8">
      <div className="flex gap-4 group">
        <div className="w-12 h-12 rounded bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] shrink-0 mt-1 flex items-center justify-center shadow-[3px_3px_0_0_var(--window-border)] group-hover:scale-110 transition-transform">
          <Mail size={24} strokeWidth={3} className="text-[var(--window-text)]" />
        </div>
        <div className="flex-1 w-full max-w-2xl">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-black text-xl text-[var(--window-text)]">System</span>
            <span className="text-xs font-bold text-[var(--window-text)] opacity-60 font-mono px-2 py-0.5 bg-[var(--window-bg-hover)] border border-[var(--window-border)] rounded">12:10</span>
          </div>

          <div className="bg-[var(--window-bg)] border-[3px] border-[var(--window-border)] p-8 rounded-xl shadow-[8px_8px_0_0_var(--window-border)] mt-4 relative">
            <div className="absolute top-0 right-0 w-16 h-16 border-l-[3px] border-b-[3px] border-[var(--window-border)] bg-[var(--window-border)] rounded-tr-lg rounded-bl flex items-center justify-center">
              <Mail fill="currentColor" className="text-[var(--window-bg)]" size={28} />
            </div>

            <h2 className="text-3xl font-black mb-8 uppercase tracking-widest text-[var(--window-text)] border-b-[3px] border-[var(--window-border)] pb-4 pr-16">Ping Me //</h2>

            <form className="space-y-6 block" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase mb-2 text-[var(--window-text)]">Subject Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-[var(--window-bg-hover)] border-[3px] border-[var(--window-border)] p-3 rounded font-bold shadow-[4px_4px_0_0_var(--window-border)] focus:outline-none focus:opacity-90 focus:shadow-[2px_2px_0_0_var(--window-border)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all text-[var(--window-text)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black uppercase mb-2 text-[var(--window-text)]">Return Address</label>
                  <input
                    type="email"
                    placeholder="name@server.com"
                    className="w-full bg-[var(--window-bg-hover)] border-[3px] border-[var(--window-border)] p-3 rounded font-bold shadow-[4px_4px_0_0_var(--window-border)] focus:outline-none focus:opacity-90 focus:shadow-[2px_2px_0_0_var(--window-border)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all text-[var(--window-text)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2 text-[var(--window-text)]">Message Payload</label>
                <textarea
                  rows={5}
                  placeholder="Transmit your thoughts here..."
                  className="w-full bg-[var(--window-bg-hover)] border-[3px] border-[var(--window-border)] p-3 rounded font-bold shadow-[4px_4px_0_0_var(--window-border)] focus:outline-none focus:opacity-90 focus:shadow-[2px_2px_0_0_var(--window-border)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all resize-none text-[var(--window-text)]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2d2d2d] text-white font-black text-xl tracking-widest uppercase py-4 border-[3px] border-[#2d2d2d] rounded hover:bg-black hover:text-white hover:shadow-[4px_4px_0_0_#2d2d2d] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all shadow-[6px_6px_0_0_#999]"
              >
                [ SEND TRANSMISSION ]
              </button>
            </form>

            <div className="mt-12 pt-8 border-t-[3px] border-dashed border-[#2d2d2d] text-center">
              <div className="text-sm font-black uppercase mb-6 text-gray-400 tracking-wider">Alternative Protocols</div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="px-6 py-2 bg-[#f2efe4] border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#2d2d2d] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#2d2d2d] transition-all rounded">LinkedIn</a>
                <a href="#" className="px-6 py-2 bg-[#e0dcd0] border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#2d2d2d] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#2d2d2d] transition-all rounded">GitHub</a>
                <a href="#" className="px-6 py-2 bg-white border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#2d2d2d] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#2d2d2d] transition-all rounded">Dribbble</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

