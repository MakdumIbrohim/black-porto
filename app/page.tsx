"use client";

import { useState, useRef } from "react";
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
  const draggableRef = useRef(null);

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
    <main className="min-h-screen w-full relative p-4 md:p-12 font-sans overflow-hidden">
      {/* Background decoration - Fake Folders */}
      <div className="absolute top-10 left-10 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform z-0">
        <div className="w-16 h-12 bg-[#F8F5E9] border-[3px] border-[#2d2d2d] rounded-sm shadow-[4px_4px_0_0_#2d2d2d] relative before:content-[''] before:absolute before:top-[-10px] before:left-[-3px] before:w-6 before:h-3 before:bg-[#F8F5E9] before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-[#2d2d2d] before:rounded-t-sm" />
        <span className="text-xs font-bold text-[#2d2d2d] mt-2 bg-[#F8F5E9] px-2 py-0.5 border-2 border-[#2d2d2d] -rotate-2">Projects</span>
      </div>

      <div className="absolute bottom-20 right-16 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform z-0">
        <div className="w-16 h-12 bg-[#FFBD2E] border-[3px] border-[#2d2d2d] rounded-sm shadow-[4px_4px_0_0_#2d2d2d] relative before:content-[''] before:absolute before:top-[-10px] before:left-[-3px] before:w-6 before:h-3 before:bg-[#FFBD2E] before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-[#2d2d2d] before:rounded-t-sm" />
        <span className="text-xs font-bold text-[#2d2d2d] mt-2 bg-white px-2 py-0.5 border-2 border-[#2d2d2d] rotate-3">Assets.zip</span>
      </div>

      <div className="absolute top-40 right-10 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform z-0">
        <div className="w-16 h-12 bg-[#FF5F56] border-[3px] border-[#2d2d2d] rounded-sm shadow-[4px_4px_0_0_#2d2d2d] relative before:content-[''] before:absolute before:top-[-10px] before:left-[-3px] before:w-6 before:h-3 before:bg-[#FF5F56] before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-[#2d2d2d] before:rounded-t-sm" />
        <span className="text-xs font-bold text-white mt-2 bg-[#2d2d2d] px-2 py-0.5 border-2 border-[#2d2d2d] -rotate-6">SECRET</span>
      </div>

      <div className="absolute bottom-10 left-32 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform z-0">
        <div className="w-16 h-12 bg-blue-400 border-[3px] border-[#2d2d2d] rounded-sm shadow-[4px_4px_0_0_#2d2d2d] relative before:content-[''] before:absolute before:top-[-10px] before:left-[-3px] before:w-6 before:h-3 before:bg-blue-400 before:border-t-[3px] before:border-l-[3px] before:border-r-[3px] before:border-[#2d2d2d] before:rounded-t-sm" />
        <span className="text-xs font-bold text-[#2d2d2d] mt-2 bg-[#F8F5E9] px-2 py-0.5 border-2 border-[#2d2d2d] rotate-2">Client Work</span>
      </div>

      {/* Main Window Container */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden flex items-center justify-center">
        <Draggable handle=".drag-handle" nodeRef={draggableRef} defaultPosition={{ x: 0, y: 0 }}>
          <div ref={draggableRef} className="pointer-events-auto w-[90%] max-w-5xl h-[85vh] bg-[#F8F5E9] border-[3px] border-[#2d2d2d] rounded-xl shadow-[8px_8px_0_0_#2d2d2d] flex flex-col overflow-hidden relative transition-shadow hover:shadow-[12px_12px_0_0_#2d2d2d] active:shadow-[4px_4px_0_0_#2d2d2d]">
            {/* Title Bar - Drag Handle */}
            <div className="drag-handle h-12 border-b-[3px] border-[#2d2d2d] bg-[#F8F5E9] flex items-center justify-between px-4 shrink-0 shadow-sm cursor-grab active:cursor-grabbing">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-[#FF5F56] border-[3px] border-[#2d2d2d] hover:brightness-110 cursor-pointer" />
                <div className="w-4 h-4 rounded-full bg-[#FFBD2E] border-[3px] border-[#2d2d2d] hover:brightness-110 cursor-pointer" />
                <div className="w-4 h-4 rounded-full bg-[#27C93F] border-[3px] border-[#2d2d2d] hover:brightness-110 cursor-pointer" />
              </div>
              <div className="font-black tracking-wide text-[#2d2d2d] uppercase text-sm">Slack_Portfolio.app</div>
              <div className="w-16" /> {/* Spacer for centering */}
            </div>

            {/* Content Area */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-full max-w-[260px] border-r-[3px] border-[#2d2d2d] bg-[#F8F5E9] flex flex-col shrink-0">
                {/* Workspace Header */}
                <div className="p-4 border-b-[3px] border-[#2d2d2d] flex items-center justify-between cursor-pointer hover:bg-[#e6e2d3] transition-colors">
                  <span className="font-black text-xl text-[#2d2d2d] uppercase">MyTeam</span>
                  <div className="bg-[#2d2d2d] text-white p-1 border-[2px] border-[#2d2d2d] shadow-[2px_2px_0_0_#2d2d2d]">
                    <ChevronDown size={18} strokeWidth={4} />
                  </div>
                </div>

                {/* Channels List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-[#2d2d2d] font-black mb-3">
                      <MessageSquare size={20} strokeWidth={3} />
                      <span className="uppercase tracking-wider">Channels</span>
                    </div>
                    <div className="space-y-1 ml-2">
                      <button
                        onClick={() => setActiveTab("profile")}
                        className={`w-full flex items-center gap-2 px-3 py-2 border-2 border-transparent rounded font-bold transition-all ${activeTab === 'profile' ? 'bg-[#2d2d2d] text-white shadow-[2px_2px_0_0_#2d2d2d] border-[#2d2d2d]' : 'text-[#666] hover:bg-[#e0dcd0] hover:text-[#2d2d2d] hover:border-[#2d2d2d]'}`}
                      >
                        <span className="text-xl leading-none opacity-50">#</span> profile
                      </button>
                      <button
                        onClick={() => setActiveTab("certificates")}
                        className={`w-full flex items-center gap-2 px-3 py-2 border-2 border-transparent rounded font-bold transition-all ${activeTab === 'certificates' ? 'bg-[#2d2d2d] text-white shadow-[2px_2px_0_0_#2d2d2d] border-[#2d2d2d]' : 'text-[#666] hover:bg-[#e0dcd0] hover:text-[#2d2d2d] hover:border-[#2d2d2d]'}`}
                      >
                        <span className="text-xl leading-none opacity-50">#</span> certificates
                      </button>
                      <button
                        onClick={() => setActiveTab("contact")}
                        className={`w-full flex items-center gap-2 px-3 py-2 border-2 border-transparent rounded font-bold transition-all ${activeTab === 'contact' ? 'bg-[#2d2d2d] text-white shadow-[2px_2px_0_0_#2d2d2d] border-[#2d2d2d]' : 'text-[#666] hover:bg-[#e0dcd0] hover:text-[#2d2d2d] hover:border-[#2d2d2d]'}`}
                      >
                        <span className="text-xl leading-none opacity-50">#</span> contact
                      </button>
                    </div>
                  </div>

                  {/* Direct Messages Dummy */}
                  <div>
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

                {/* Bottom User Area */}
                <div className="p-4 border-t-[3px] border-[#2d2d2d] flex items-center gap-3 bg-[#e6e2d3]">
                  <div className="w-12 h-12 rounded bg-yellow-400 border-[3px] border-[#2d2d2d] shrink-0 overflow-hidden shadow-[2px_2px_0_0_#2d2d2d]">
                    <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=dev_portfolio`} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-sm uppercase truncate">Web Developer</div>
                    <div className="text-xs text-[#2d2d2d] font-bold flex items-center gap-1 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#2d2d2d]" /> Online
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Pane */}
              <div className="flex-1 flex flex-col bg-white">
                {/* Header */}
                <div className="h-16 border-b-[3px] border-[#2d2d2d] bg-white flex items-center justify-between px-6 shrink-0 relative">
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2d2d2d]/10" />
                  <div>
                    <h1 className="font-black text-2xl text-[#2d2d2d] flex items-center gap-2">
                      <span className="text-gray-400">#</span> {activeTab}
                    </h1>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-[#2d2d2d]">
                    <span className="hidden md:inline-block px-2 py-1 bg-yellow-100 border-2 border-[#2d2d2d] shadow-[2px_2px_0_0_#2d2d2d]">Members: [1]</span>
                    <button className="p-1 hover:bg-gray-100 border-2 border-transparent hover:border-[#2d2d2d] rounded transition-all">
                      <Search className="text-[#2d2d2d]" size={20} strokeWidth={3} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 border-2 border-transparent hover:border-[#2d2d2d] rounded transition-all">
                      <Settings className="text-[#2d2d2d]" size={20} strokeWidth={3} />
                    </button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 relative bg-[#fcfcfc] custom-scrollbar">
                  <div className="relative z-10 max-w-4xl mx-auto pb-10">
                    {activeTab === "profile" && <ProfileSection />}
                    {activeTab === "certificates" && <CertificatesSection />}
                    {activeTab === "contact" && <ContactSection />}
                  </div>
                </div>

                {/* Message Input Bottom Bar */}
                <div className="p-4 border-t-[3px] border-[#2d2d2d] bg-white">
                  <div className="w-full h-12 border-[3px] border-[#2d2d2d] rounded flex items-center px-4 bg-[#f8f5e9] shadow-[2px_2px_0_0_#2d2d2d] focus-within:shadow-[4px_4px_0_0_#2d2d2d] transition-shadow">
                    <input type="text" placeholder={`Type 'sudo' for a surprise...`} className="flex-1 bg-transparent border-none outline-none font-bold text-[#2d2d2d] placeholder:text-[#2d2d2d]/50" />
                    <button className="px-4 py-1.5 bg-[#2d2d2d] text-white font-black text-sm border-2 border-[#2d2d2d] rounded hover:bg-[#FF5F56] transition-colors shadow-[2px_2px_0_0_#2d2d2d]">Send</button>
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
      <div className="text-center pb-8 border-b-2 border-dashed border-gray-300">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-[#2d2d2d] tracking-tighter shadow-sm">Hello, World!</h2>
        <p className="mt-4 font-bold text-gray-500 font-mono text-sm max-w-lg mx-auto">This is where I build things that live on the internet.</p>
      </div>

      <div className="flex gap-4 group">
        <div className="w-12 h-12 rounded bg-yellow-300 border-[3px] border-[#2d2d2d] shrink-0 mt-1 flex items-center justify-center shadow-[3px_3px_0_0_#2d2d2d] group-hover:scale-110 transition-transform">
          <User size={24} strokeWidth={3} className="text-[#2d2d2d]" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-black text-xl text-[#2d2d2d]">System</span>
            <span className="text-xs font-bold text-gray-400 font-mono px-2 py-0.5 bg-gray-100 border border-gray-300 rounded">12:00</span>
          </div>
          <div className="bg-[#EAE5FF] border-[3px] border-[#2d2d2d] p-6 rounded-lg shadow-[6px_6px_0_0_#2d2d2d] text-[#2d2d2d] mt-2 group-hover:bg-[#dfd8ff] transition-colors relative">
            <div className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full border-2 border-[#2d2d2d] animate-pulse block" />
              System Initialization Complete
            </div>

            <p className="text-base md:text-lg font-bold leading-relaxed mb-6 font-mono text-gray-700 bg-black/5 p-4 rounded border-2 border-[#2d2d2d] shadow-[inner_2px_2px_0_rgba(0,0,0,0.1)]">
              <span className="text-pink-600">{'>'}</span> Loading profile data...<br />
              <span className="text-green-600">{'>'}</span> Status: <span className="text-green-600">SUCCESS</span><br />
              <span className="text-blue-600">{'>'}</span> Welcome to my portfolio. I am a passionate frontend developer focused on building modern, aesthetic, and functional digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white border-[3px] border-[#2d2d2d] p-5 rounded z-10 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#2d2d2d] shadow-[4px_4px_0_0_#2d2d2d] transition-all cursor-crosshair">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase text-lg border-b-2 border-[#2d2d2d] pb-2"><Monitor size={20} strokeWidth={3} /> Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'Figma'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-yellow-200 border-2 border-[#2d2d2d] text-xs font-black uppercase rounded shadow-[2px_2px_0_0_#2d2d2d]">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border-[3px] border-[#2d2d2d] p-5 rounded z-10 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#2d2d2d] shadow-[4px_4px_0_0_#2d2d2d] transition-all cursor-text">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase text-lg border-b-2 border-[#2d2d2d] pb-2"><Plus size={20} strokeWidth={3} /> Interests</h3>
                <p className="text-sm font-bold text-gray-700 leading-relaxed">
                  UI/UX Design, Neo-brutalism, Web Accessibility, Performance Optimization, and Creative Error Pages.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#FFBD2E] rounded-full border-[3px] border-[#2d2d2d] flex items-center justify-center shadow-[2px_2px_0_0_#2d2d2d] rotate-12 z-20">
              <Star size={24} fill="white" className="text-white" />
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
        <div className="w-12 h-12 rounded bg-blue-300 border-[3px] border-[#2d2d2d] shrink-0 mt-1 flex items-center justify-center shadow-[3px_3px_0_0_#2d2d2d] group-hover:scale-110 transition-transform">
          <FileBadge size={24} strokeWidth={3} className="text-[#2d2d2d]" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-black text-xl text-[#2d2d2d]">System</span>
            <span className="text-xs font-bold text-gray-400 font-mono px-2 py-0.5 bg-gray-100 border border-gray-300 rounded">12:05</span>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4">
            {/* Cert 1 */}
            <div className="bg-[#FFFDF5] border-[3px] border-[#2d2d2d] rounded-lg overflow-hidden shadow-[6px_6px_0_0_#2d2d2d] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#2d2d2d] transition-all flex flex-col md:flex-row relative">
              <div className="absolute top-0 right-0 p-2 bg-yellow-300 border-l-[3px] border-b-[3px] border-[#2d2d2d] font-black uppercase text-xs">Featured</div>
              <div className="h-48 md:h-auto md:w-1/3 bg-[#E5FFE5] border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#2d2d2d] p-4 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full border-2 border-dashed border-green-600 rounded bg-green-100 flex items-center justify-center flex-col gap-2">
                  <FileBadge size={48} className="text-green-700" strokeWidth={2} />
                  <span className="font-black text-green-800 text-xs uppercase tracking-widest opacity-60">Verified</span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                <div className="text-xs font-black text-gray-400 font-mono mb-2 bg-gray-100 inline-block px-2 py-1 rounded w-fit border border-gray-200">Dec 2025</div>
                <h3 className="font-black text-2xl text-[#2d2d2d] leading-tight mb-2 uppercase">Advanced Frontend Architecture</h3>
                <p className="text-sm font-bold text-gray-600 mb-6 font-mono">Issued by Tech Academy // ID: cert_x89f_2</p>
                <button className="self-start py-2 px-6 bg-[#2d2d2d] text-white border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#FFBD2E] active:shadow-none hover:bg-[#FF5F56] transition-all">
                  View Credential &rarr;
                </button>
              </div>
            </div>

            {/* Cert 2 & 3 in a grid row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[3px] border-[#2d2d2d] rounded-lg overflow-hidden shadow-[6px_6px_0_0_#2d2d2d] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#2d2d2d] transition-all flex flex-col">
                <div className="h-40 bg-[#FFF5E5] border-b-[3px] border-[#2d2d2d] p-4 flex items-center justify-center">
                  <FileBadge size={40} className="text-orange-400 opacity-60" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs font-black text-gray-400 mb-1">Oct 2025</div>
                  <h3 className="font-black text-lg text-[#2d2d2d] leading-tight mb-2 uppercase">Fullstack React Bootcamp</h3>
                  <p className="text-sm font-bold text-gray-500 mb-4 font-mono flex-1">Issued by Code Masters</p>
                  <button className="w-full py-2 bg-white text-[#2d2d2d] border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#2d2d2d] hover:bg-gray-100 active:translate-y-[3px] active:translate-x-[3px] active:shadow-none transition-all">
                    Open Document
                  </button>
                </div>
              </div>

              <div className="bg-white border-[3px] border-[#2d2d2d] rounded-lg overflow-hidden shadow-[6px_6px_0_0_#2d2d2d] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#2d2d2d] transition-all flex flex-col">
                <div className="h-40 bg-[#FFE5FF] border-b-[3px] border-[#2d2d2d] p-4 flex items-center justify-center">
                  <FileBadge size={40} className="text-pink-400 opacity-60" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs font-black text-gray-400 mb-1">Jan 2024</div>
                  <h3 className="font-black text-lg text-[#2d2d2d] leading-tight mb-2 uppercase">UI Design Principles</h3>
                  <p className="text-sm font-bold text-gray-500 mb-4 font-mono flex-1">Issued by Design Institute</p>
                  <button className="w-full py-2 bg-white text-[#2d2d2d] border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#2d2d2d] hover:bg-gray-100 active:translate-y-[3px] active:translate-x-[3px] active:shadow-none transition-all">
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
        <div className="w-12 h-12 rounded bg-green-400 border-[3px] border-[#2d2d2d] shrink-0 mt-1 flex items-center justify-center shadow-[3px_3px_0_0_#2d2d2d] group-hover:scale-110 transition-transform">
          <Mail size={24} strokeWidth={3} className="text-[#2d2d2d]" />
        </div>
        <div className="flex-1 w-full max-w-2xl">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-black text-xl text-[#2d2d2d]">System</span>
            <span className="text-xs font-bold text-gray-400 font-mono px-2 py-0.5 bg-gray-100 border border-gray-300 rounded">12:10</span>
          </div>

          <div className="bg-[#FFFDF5] border-[3px] border-[#2d2d2d] p-8 rounded-xl shadow-[8px_8px_0_0_#2d2d2d] mt-4 relative">
            <div className="absolute top-0 right-0 w-16 h-16 border-l-[3px] border-b-[3px] border-[#2d2d2d] bg-[#FF5F56] rounded-tr-lg rounded-bl flex items-center justify-center">
              <Mail fill="white" className="text-white" size={28} />
            </div>

            <h2 className="text-3xl font-black mb-8 uppercase tracking-widest text-[#2d2d2d] border-b-[3px] border-[#2d2d2d] pb-4 pr-16">Ping Me //</h2>

            <form className="space-y-6 block" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase mb-2">Subject Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white border-[3px] border-[#2d2d2d] p-3 rounded font-bold shadow-[4px_4px_0_0_#2d2d2d] focus:outline-none focus:bg-yellow-100 focus:shadow-[2px_2px_0_0_#2d2d2d] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black uppercase mb-2">Return Address</label>
                  <input
                    type="email"
                    placeholder="name@server.com"
                    className="w-full bg-white border-[3px] border-[#2d2d2d] p-3 rounded font-bold shadow-[4px_4px_0_0_#2d2d2d] focus:outline-none focus:bg-yellow-100 focus:shadow-[2px_2px_0_0_#2d2d2d] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2">Message Payload</label>
                <textarea
                  rows={5}
                  placeholder="Transmit your thoughts here..."
                  className="w-full bg-white border-[3px] border-[#2d2d2d] p-3 rounded font-bold shadow-[4px_4px_0_0_#2d2d2d] focus:outline-none focus:bg-yellow-100 focus:shadow-[2px_2px_0_0_#2d2d2d] focus:translate-x-[2px] focus:translate-y-[2px] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2d2d2d] text-white font-black text-xl tracking-widest uppercase py-4 border-[3px] border-[#2d2d2d] rounded hover:bg-[#27C93F] hover:text-[#2d2d2d] hover:shadow-[4px_4px_0_0_#2d2d2d] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all shadow-[6px_6px_0_0_#27C93F]"
              >
                [ SEND TRANSMISSION ]
              </button>
            </form>

            <div className="mt-12 pt-8 border-t-[3px] border-dashed border-[#2d2d2d] text-center">
              <div className="text-sm font-black uppercase mb-6 text-gray-400 tracking-wider">Alternative Protocols</div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="px-6 py-2 bg-blue-100 border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#2d2d2d] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#2d2d2d] transition-all rounded">LinkedIn</a>
                <a href="#" className="px-6 py-2 bg-gray-100 border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#2d2d2d] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#2d2d2d] transition-all rounded">GitHub</a>
                <a href="#" className="px-6 py-2 bg-rose-100 border-[3px] border-[#2d2d2d] font-black text-sm uppercase shadow-[3px_3px_0_0_#2d2d2d] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#2d2d2d] transition-all rounded">Dribbble</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
