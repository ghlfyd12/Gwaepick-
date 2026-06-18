/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingCTA } from "./components/layout/FloatingCTA";
import { siteConfig } from "./data/site";
import { landingData } from "./data/landingData";
import { CTAButton } from "./components/ui/CTAButton";
import { 
  Compass, 
  BookOpen, 
  ThumbsUp, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Phone,
  User,
  GraduationCap,
  MessageSquare,
  AlertCircle,
  FileText,
  Star
} from "lucide-react";

export default function App() {
  // States for interactive UI elements
  const [activeSnippetId, setActiveSnippetId] = useState<string>("snippet-1");
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "중등 2학년",
    subject: "수학",
    phone: "",
    concern: "단순 암기 위주 학습 탈피 / 서술형·논술형 문제 대비",
    agreed: true
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<string>("");

  const activeSnippet = landingData.reformSnippets.find(s => s.id === activeSnippetId) || landingData.reformSnippets[0];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim()) {
      setFormErrors("학생 이름을 입력해주세요.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setFormErrors("올바른 연락처 번호를 입력해주세요.");
      return;
    }
    if (!formData.agreed) {
      setFormErrors("개인정보 연동 및 활용에 동의하셔야 상담 신청이 가능합니다.");
      return;
    }

    setFormErrors("");
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#fcfcfd]">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-grow">
        
        {/* HERO SECTION (Incorporates here-main concept) */}
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-b from-brand-purple-light/50 via-white to-transparent pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-gray-100/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Descriptive texts & direct leads */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-brand-purple bg-brand-purple-light rounded-full border border-brand-purple/10">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
                  직접 가르쳐 온 선임 선생님의 안심 1:1 상담 매칭
                </span>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.15]">
                  선생님을 보는 눈은,<br />
                  <span className="text-brand-purple relative inline-block">
                    선생님이 가장 정확합니다.
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-purple/10 -z-10 rounded"></span>
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  이력서와 화려한 화술만 보고 대행 매칭하는 일반 플랫폼과 다릅니다. 우리 아이를 직접 오래 지도하며 특성을 입증해 온 선배 상담 선생님들이 학업 습관과 기초 분석을 토대로 가장 잘 맞는 최정예 전담 교사를 1:1 보장 연결해 드립니다.
                </p>

                {/* Core USP indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 border-t border-b border-gray-100 my-6">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">검증된 현직·베테랑진</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-brand-purple flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">3단계 심성 역량 검증</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-brand-purple flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">2028 대입 특화 프로그램</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <CTAButton
                    id="hero-primary-cta"
                    variant="accent"
                    size="lg"
                    className="text-center"
                  />
                  <a
                    id="hero-secondary-cta"
                    href="#reform"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 min-h-[48px] rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-bold transition-all duration-200 text-sm shadow-sm hover:border-gray-400 active:scale-95 cursor-pointer"
                  >
                    <span>2028 대입 교육 개편 읽어보기</span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </a>
                </div>

                {/* Tiny proof metrics */}
                <p className="text-xs text-gray-400 font-medium">
                  ⚡️ 현재 평일 심층상담 배정 대기 시간: 평균 3시간 내외 | 당일 신청자 만족도 98.7%
                </p>
              </div>

              {/* Right Column: Visual representation (here-main) */}
              <div className="lg:col-span-5 relative">
                {/* Decorative purple circular background blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-purple-light/60 rounded-full filter blur-3xl -z-10"></div>
                
                {/* Main image card container */}
                <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-gray-100 flex flex-col transform hover:rotate-1 transition-transform duration-300">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative">
                    <img
                      src="/assets/here-main"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('/assets/here-main') && !target.src.endsWith('.png')) {
                          target.src = '/assets/here-main.png';
                        } else if (target.src.endsWith('/assets/here-main.png')) {
                          target.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800';
                        }
                      }}
                      alt="1:1 맞춤 안심과외 멘토링 세션"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Floating badge over image */}
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded-lg shadow-md">
                      <Star className="w-3.5 h-3.5 fill-white text-brand-purple" />
                      실제 1:1 안심 과외 현장
                    </span>

                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-lg shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      철저한 안심 3단계 검증 완료
                    </span>
                  </div>

                  {/* Info banner beneath the image */}
                  <div className="pt-4 pb-2 text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-gray-800">김지윤 파트너 선생님</h4>
                      <span className="text-xs bg-brand-purple-light text-brand-purple font-bold px-2 py-0.5 rounded">수학 전담</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      &quot;단순 공식을 주집하지 않고, 아이가 문제를 직관적으로 해석하고 연필로 직접 말하며 풀게 이끌 때 비로소 뇌가 작동합니다.&quot;
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <div className="flex -space-x-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <span key={star} className="text-[10px] text-amber-400">★</span>
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold">누적 학부모 상담 평점 4.98/5.0</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements mimicking UI/UX cues */}
                <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2.5 max-w-xs animate-bounce" style={{animationDuration: "3s"}}>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 font-bold text-xs">
                    99.8%
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-800">성향 융합 매칭율</h5>
                    <p className="text-[10px] text-gray-400">성격지표 및 학습 습관 융합</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2028 REFORM ANALYSIS SECTION (Incorporating here-news as editorial board) */}
        <section
          id="reform"
          className="py-20 bg-gray-50/50 border-b border-gray-100/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100">
                <Info className="w-3.5 h-3.5" />
                미래 교육 분석 리포트
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                {landingData.reformTitle}과 안심 매칭전략
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
                {landingData.reformSubtitle}. 겉만 번지르르한 문제집 강사는 답하지 못합니다. 달라진 핵심 변경안을 직접 누르고 대비책을 조율해보세요.
              </p>
            </div>

            {/* 개편 주제 선택 탭 (Image가 보일 때도 상호작용성 보장) */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
              {landingData.reformSnippets.map((snippet) => {
                const isActive = snippet.id === activeSnippetId;
                return (
                  <button
                    key={snippet.id}
                    onClick={() => setActiveSnippetId(snippet.id)}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-brand-purple text-white border-brand-purple shadow-sm scale-105"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {snippet.topic}
                  </button>
                );
              })}
            </div>

            {/* Grid for Interactive Editorial Board */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left 7 Columns: Newspaper Replica in Pure Gorgeous CSS/HTML (No broken loading, interactive by default) */}
              <div className="lg:col-span-7 flex flex-col">
                <div 
                  id="here-news-board" 
                  className="bg-[#faf8f4] p-5 sm:p-7 rounded-3xl border border-neutral-300 shadow-xl overflow-hidden flex-grow flex flex-col justify-start min-h-[500px] sm:min-h-[550px] relative transition-all duration-300 hover:shadow-2xl hover:border-neutral-400"
                >
                  {/* Subtle noise and radial gradient overlay for authentic newsprint texture */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/[0.02] opacity-45 pointer-events-none z-0"></div>
                  
                  {/* Newspaper Header Section */}
                  <div className="space-y-3 mb-5 select-none z-10 relative">
                    <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold text-neutral-500 uppercase tracking-widest font-mono text-left">
                      <span>📰 2028학년도 대입 개편 종합 특보</span>
                      <span className="hidden sm:inline">정밀 분석 기보드 제194호</span>
                    </div>
                    
                    <div className="border-t-4 border-b-2 border-neutral-950 py-3 text-center">
                      <h3 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-extrabold text-[#111111] tracking-widest font-serif leading-tight">
                        {landingData.reformTitle}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-neutral-500 font-bold tracking-tight mt-1.5 label-news-lead">
                        종합 분석판 • 현 베테랑 상담 선생님이 바라보는 명문대 대입 방향선
                      </p>
                    </div>
                  </div>

                  {/* Newspaper Print Background Columns & Interacting Sticker Cards */}
                  <div className="relative flex-grow min-h-[350px] z-10 flex flex-col justify-center">
                    {/* Background blurry/faint print column text mimicking Image 1 exactly */}
                    <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 gap-6 opacity-[0.08] select-none pointer-events-none overflow-hidden text-neutral-950 font-serif leading-relaxed text-[8px] sm:text-[10px] text-justify pt-1 pb-4">
                      <div>
                        2028학년도 대입 개편안의 구체적인 윤곽이 드러나고 있다. 교육부에 따르면 현 중등부 학생들이 대학에 입학하는 시점부터 수능 등급 체제와 내신 산정이 완전히 새로운 장으로 개편되며 통합형 수능체제로 돌입하게 된다. 이에 국어와 수학의 선택과목이 전격 폐지되고 문양과 시험시간이 변하는 탐구 과목 중심의 변별력이 대폭 상승하기 시작했다. 단순 모의고사 기출문제 암기 및 양치기 방식은 한계를 보일 수밖에 없으며 자발적 독해와 논리적 탐구역량이야말로 대입의 결정적인 키가 되었다.
                      </div>
                      <div className="hidden sm:block">
                        동시에 전국 고교에서 내신 성적 산출이 기존의 9등급에서 5등급 평가로 변환되어 상위권 1등급에 해당하는 수치 폭이 무려 10%까지 대폭 완화되었다. 이로 인해 학생부 내신 등급만으로 아이들의 우열을 변별하기란 불가능에 가까워졌고, 대학들은 학생부의 ‘세부능력 및 특기사항(세특)’이나 ‘심층면접’ 및 ‘논술형 학업성취지표’를 훨씬 높게 책정하여 학생을 평가할 수밖에 없게 되었다. 즉, 스스로 생각하고 탐구하며 말로써 입증하는 학습 능력이 승부수다.
                      </div>
                      <div>
                        고교학점제의 전면 실시 역시 중요한 변화 요소 중 하나이다. 학생들 스스로 자신의 미래 전공과 융합 진로 로드맵을 선제 구축하고 필요한 과목을 조합 선택하여 전략적 학점을 채워야 한다. 이러한 대변혁 앞에 맞춤과외는 더 이상 단순 교과 진도 빼기 수준이 되어서는 살아남을 수 없으며 자녀의 진로 로드맵을 함께 빌드해 나가야 하는 파트너가 절실하다. 매칭 상담을 이끄는 베테랑 상담 교사들이 학생의 성격 지표와 독해 성향을 체크하여 최정예 교사진을...
                      </div>
                    </div>

                    {/* Styled floating stickies placed in staggered positions (Matches User Image exactly) */}
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-3.5 xl:gap-4 py-2 flex-grow items-center">
                      {landingData.reformSnippets.map((snippet, idx) => {
                        const isActive = snippet.id === activeSnippetId;
                        
                        // Slightly rotate layout to look organic and tactile, stacking beautifully or spanning
                        const styles = [
                          "lg:rotate-[-0.8deg] sm:translate-y-[-4px]",
                          "lg:rotate-[0.6deg]",
                          "lg:rotate-[-0.5deg] sm:translate-y-[4px]",
                          "lg:rotate-[1deg]",
                          "lg:rotate-[-1deg] sm:col-span-2 sm:max-w-md sm:mx-auto w-full"
                        ];
                        
                        return (
                          <div 
                            key={snippet.id}
                            className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer text-left border ${styles[idx]} ${
                              isActive 
                                ? "bg-white border-brand-purple shadow-xl scale-[1.04] ring-2 ring-brand-purple/20 pr-6" 
                                : "bg-white/95 hover:bg-white border-neutral-200/85 hover:border-neutral-300 shadow-md hover:shadow-lg hover:scale-[1.01]"
                            }`}
                            onClick={() => setActiveSnippetId(snippet.id)}
                          >
                            <div className="flex items-start gap-2.5">
                              {/* Sequential number block */}
                              <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-black mt-0.5 flex-shrink-0 transition-colors ${
                                isActive ? "bg-brand-purple text-white" : "bg-neutral-800 text-white"
                              }`}>
                                {idx + 1}
                              </span>
                              
                              <div className="flex-grow space-y-1">
                                <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider ${
                                  isActive ? "bg-brand-purple/10 text-brand-purple" : "bg-neutral-100 text-neutral-600"
                                }`}>
                                  {snippet.topic}
                                </span>
                                
                                <p className="font-bold text-neutral-900 text-xs sm:text-[13px] tracking-tight leading-snug">
                                  {snippet.fullText.includes(snippet.highlightText) ? (
                                    <>
                                      {snippet.fullText.split(snippet.highlightText)[0]}
                                      <span className="bg-yellow-200 text-neutral-950 font-black px-1 rounded-sm border-b-2 border-yellow-400">
                                        {snippet.highlightText}
                                      </span>
                                      {snippet.fullText.split(snippet.highlightText)[1]}
                                    </>
                                  ) : (
                                    snippet.fullText
                                  )}
                                </p>
                              </div>
                              <ChevronRight className={`w-4 h-4 mt-1 transition-transform self-center flex-shrink-0 ${
                                isActive ? "text-brand-purple translate-x-1" : "text-[#E04F2F]"
                              }`} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 5 Columns: Clear Match Response analysis card */}
              <div className="lg:col-span-5 flex">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/75 shadow-lg flex-col justify-between flex-grow flex text-left">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-10 bg-brand-purple rounded-full"></span>
                      <div>
                        <span className="text-xs font-bold text-brand-purple">대해법 매칭포인트</span>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                          {activeSnippet.topic} 맞춤 분석
                        </h4>
                      </div>
                    </div>

                    {/* Headline impact summary */}
                    <div className="p-4 bg-brand-purple-light/50 rounded-2xl border border-brand-purple/10">
                      <h5 className="text-sm font-bold text-brand-purple flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        학습적 파장: {activeSnippet.impactTitle}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                        {activeSnippet.impactDesc}
                      </p>
                    </div>

                    {/* Teacher match solution representation */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-[#E04F2F] tracking-wide uppercase block">
                        🔑 무조건 가르쳐본 상담교사진의 솔루션
                      </span>
                      <div className="p-4 bg-brand-coral-light/60 rounded-2xl border border-brand-coral/15">
                        <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                          {activeSnippet.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connect to lead trigger */}
                  <div className="pt-6 border-t border-gray-100 mt-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
                    <div className="text-left">
                      <p className="text-xs text-gray-400 font-medium">우리 아이 성향 진단 요청</p>
                      <p className="text-sm font-bold text-gray-800">2028 개편 분석 우선 매칭</p>
                    </div>
                    <a
                      id="news-cta"
                      href="#consult"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-coral hover:bg-brand-coral-hover text-white text-xs sm:text-sm font-bold rounded-full transition-transform active:scale-95 cursor-pointer shadow shadow-brand-coral/10"
                    >
                      상담 선생님 추천 받기
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* REASON TO CHOOSE (Core Pillars) */}
        <section className="py-20 bg-white border-b border-gray-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-brand-purple bg-brand-purple-light rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                선택의 이유
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                왜 다른 곳이 아닌, 맞춤과외상담일까요?
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                이력서 낱장을 돌리는 대행업체가 아닙니다. 교육을 천직으로 영해온 직접 가르쳐 온 선생님들의 진정성 있는 인맥 매칭의 차이를 보여드립니다.
              </p>
            </div>

            {/* Premium bento-style columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {landingData.pillars.map((pillar, index) => {
                let iconComponent = <CheckCircle2 className="w-8 h-8 text-brand-purple" />;
                if (pillar.iconName === "ShieldCheck") {
                  iconComponent = <ShieldCheck className="w-8 h-8 text-brand-purple" />;
                } else if (pillar.iconName === "Sparkles") {
                  iconComponent = <Sparkles className="w-8 h-8 text-brand-purple" />;
                }
                
                return (
                  <div 
                    key={index}
                    id={`pillar-card-${index}`}
                    className="p-8 rounded-3xl bg-gray-50/50 border border-gray-100 text-left space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      {iconComponent}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{pillar.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CURRICULUM SECTION */}
        <section
          id="curriculum"
          className="py-20 bg-gray-50/20 border-b border-gray-100/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-brand-purple bg-brand-purple-light rounded-full">
                <BookOpen className="w-3.5 h-3.5" />
                체계적인 과목 로드맵
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                아이의 단계별 성장을 정밀 견인하는 과외 로드맵
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
                가르치는 사람의 자질이 다르면 도달하는 고점이 완전히 달라집니다. 초등 기본기부터 고등 수능 1등급까지 완비하는 과목별 설계입니다.
              </p>
            </div>

            {/* Horizontal timeline or Vertical detailed cards */}
            <div className="space-y-8 max-w-5xl mx-auto">
              {landingData.curriculums.map((curr, idx) => (
                <div 
                  key={idx}
                  id={`curriculum-row-${idx}`}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm text-left grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:shadow-md transition-shadow"
                >
                  {/* Left Column: Grade level identifier */}
                  <div className="md:col-span-4 space-y-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold text-brand-purple bg-brand-purple-light rounded-full">
                      Level {idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                      {curr.level}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                      {curr.description}
                    </p>
                  </div>

                  {/* Right Column: Detailed courses list */}
                  <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {curr.subjects.map((sub, sIdx) => (
                      <div key={sIdx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-left space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm sm:text-base font-bold text-brand-purple">{sub.name}</h4>
                          <span className="text-[10px] bg-white text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full font-medium">단독관리</span>
                        </div>
                        <p className="text-xs text-gray-600 font-semibold mb-1">
                          중점 사항: {sub.focus}
                        </p>
                        <p className="text-[11px] text-gray-500 leading-relaxed font-normal border-t border-gray-200/50 pt-1.5">
                          💡 <span className="font-medium text-gray-700">대비법 백서:</span> {sub.tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center pt-8">
              <p className="text-xs sm:text-sm text-gray-400 font-medium mb-3">※ 위 과목 외에도 영어, 과학, 사회 등 융합 수강 설계가 가능합니다.</p>
              <a 
                href="#consult" 
                className="inline-flex items-center justify-center gap-1 text-xs sm:text-sm font-bold text-brand-purple hover:text-brand-purple-hover cursor-pointer"
              >
                <span>우리 아이 최적 로드맵 상담 매칭하기</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* PROOF (Testimonials & Parent quotes) */}
        <section
          id="proof"
          className="py-20 bg-white border-b border-gray-100/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#E04F2F] bg-brand-coral-light rounded-full border border-brand-coral/10">
                <ThumbsUp className="w-3.5 h-3.5" />
                안심 동행 이야기
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                직접 겪으신 선배 학부모들의 진심 어린 추천
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                공부를 억지로 강제하지 않고, 한결같은 지지와 설명형 소통으로 올바른 변화를 이뤄냅니다. 
              </p>
            </div>

            {/* Testimonials detail columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              {landingData.testimonials.map((test, index) => (
                <div 
                  key={index}
                  id={`testimonial-card-${index}`}
                  className="bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-350 text-left"
                >
                  <div className="space-y-4">
                    {/* Header: Student specs & Rating */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-purple-light text-brand-purple flex items-center justify-center font-bold text-sm">
                          {test.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">{test.name}</p>
                          <p className="text-xs text-gray-400">{test.schoolLevel} • {test.subject}</p>
                        </div>
                      </div>
                      
                      <div className="bg-emerald-50 text-emerald-700 font-bold text-xs px-2.5 py-1 rounded-full border border-emerald-100">
                        {test.scoreChange}
                      </div>
                    </div>

                    {/* Big Quote */}
                    <p className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                      &ldquo;{test.quote}&rdquo;
                    </p>

                    {/* Paragraph */}
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                      {test.reviewText}
                    </p>
                  </div>

                  {/* Matched Teacher Tag badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200/50">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mr-1 mt-1">추천 강사 키워드:</span>
                    {test.matchedTeacherTags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-white text-brand-purple border border-brand-purple/10 text-[10px] font-bold px-2.5 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Satisfaction Indicator Panel */}
            <div className="max-w-4xl mx-auto mt-12 bg-brand-purple-light/40 p-6 sm:p-8 rounded-3xl border border-brand-purple/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-1">
                <p className="text-sm font-bold text-brand-purple">대단히 높은 일치도 실적</p>
                <h4 className="text-lg font-bold text-gray-900">상담 배정된 전담 교사와의 지속 기간 평균 14.8개월</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  과외 도주 불만족으로 인한 교체율이 1.2% 미만으로 학계 최저 수준입니다. 1:1 상담 선생님의 밀착형 인성 사전 진폭 설계 덕분입니다.
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-brand-purple/5 shadow-sm text-center flex-shrink-0 min-w-[130px]">
                <div className="text-2xl font-black text-brand-purple font-mono">98.7%</div>
                <div className="text-[10px] text-gray-400 font-bold tracking-tight mt-0.5">상담 만족률</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONSULT SIGNUP SECTION (Live Form Integration) */}
        <section
          id="consult"
          className="py-20 bg-gradient-to-b from-white to-brand-purple-light/10 relative"
        >
          {/* Subtle background nodes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-purple-light/40 rounded-full filter blur-2xl pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-brand-coral bg-brand-coral-light rounded-full border border-brand-coral/10">
              <Calendar className="w-3.5 h-3.5" />
              1:1 무료 매칭 상담 접수
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              {siteConfig.ctaLabel}
            </h2>
            
            <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
              아이의 과목별 취약점, 어휘 역량, 학업 습관을 오랫동안 실지 지도해 본 노련한 상담 선생님이 상세 진단 끝에 가장 합치되는 교육팀 선생님을 배치해 드립니다.
            </p>

            <div className="pt-6 relative max-w-xl mx-auto">
              {!isSubmitted ? (
                <form 
                  id="consult-lead-form"
                  onSubmit={handleSubmit}
                  className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-xl text-left space-y-5"
                >
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono text-center">
                    ✏️ 1:1 안심 상담 간편 가입신청서
                  </p>

                  {/* Errors Block */}
                  {formErrors && (
                    <div className="p-3 bg-brand-coral-light text-[#E04F2F] text-xs sm:text-sm font-bold rounded-xl border border-brand-coral/10 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{formErrors}</span>
                    </div>
                  )}

                  {/* Input 1: Student Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="studentName" className="text-xs font-bold text-gray-700 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      <span>학생 이름 <span className="text-[#E04F2F]">*</span></span>
                    </label>
                    <input
                      required
                      type="text"
                      id="studentName"
                      name="studentName"
                      placeholder="예) 홍길동"
                      value={formData.studentName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent bg-gray-50/50"
                    />
                  </div>

                  {/* Form inline grid: Grade and Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Grade/Level */}
                    <div className="space-y-1.5">
                      <label htmlFor="grade" className="text-xs font-bold text-gray-700 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
                        <span>학생 학년 <span className="text-[#E04F2F]">*</span></span>
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent bg-gray-50/50 cursor-pointer font-medium"
                      >
                        <option value="초등 1~3학년">초등 1~3학년</option>
                        <option value="초등 4~6학년">초등 4~6학년</option>
                        <option value="중등 1학년">중등 1학년</option>
                        <option value="중등 2학년">중등 2학년</option>
                        <option value="중등 3학년">중등 3학년</option>
                        <option value="고등 1학년">고등 1학년 (2028 개편 대상)</option>
                        <option value="고등 2학년">고등 2학년</option>
                        <option value="고등 3학년/재수">고등 3학년 및 n수생</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-bold text-gray-700 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                        <span>희망 과목 <span className="text-[#E04F2F]">*</span></span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent bg-gray-50/50 cursor-pointer font-medium"
                      >
                        <option value="수학">수학 (개념서술 중심)</option>
                        <option value="국어">국어 (문해력/수능 독서)</option>
                        <option value="영어">영어 (어휘/독해 내신완벽)</option>
                        <option value="사회/과학">통합 사회 / 통합 과학</option>
                        <option value="기타 종합">기타 종합 (학력평가/수수 습관)</option>
                      </select>
                    </div>
                  </div>

                  {/* Input 3: Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-700 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      <span>학부모님 연락처 <span className="text-[#E04F2F]">*</span></span>
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="예) 010-1234-5678"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent bg-gray-50/50 font-mono"
                    />
                  </div>

                  {/* Input 4: Learning Concern */}
                  <div className="space-y-1.5">
                    <label htmlFor="concern" className="text-xs font-bold text-gray-700 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
                      <span>학습 고민 지침 (선택)</span>
                    </label>
                    <textarea
                      id="concern"
                      name="concern"
                      rows={2}
                      placeholder="예) 학원 숙제에 너무 지쳐하며 주입식 문제풀이에서 넘어가 성적으로 증명받고 싶습니다."
                      value={formData.concern}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent bg-gray-50/50 resize-none"
                    ></textarea>
                  </div>

                  {/* Aggrement Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agreed"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 text-brand-purple border-gray-300 rounded focus:ring-brand-purple cursor-pointer"
                    />
                    <label htmlFor="agreed" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                      (필수) <span className="font-semibold text-gray-700">[개인정보 수집 및 상담 연동 동의]</span> 상담 연결, 교사 매칭 진단 등 상담 고유 용도로만 성심껏 처리 후 즉각 파기됩니다.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      id="form-submit-btn"
                      type="submit"
                      className="w-full py-4 bg-brand-coral hover:bg-brand-coral-hover text-white font-extrabold text-base rounded-full shadow-lg shadow-brand-coral/25 active:scale-[0.98] transition-all cursor-pointer min-h-[52px]"
                    >
                      🎉 {siteConfig.ctaLabel} 무료 완료하기
                    </button>
                    <p className="text-center text-[10px] text-gray-400 font-medium mt-3">
                      🔒 전원 암호화 처리되며 상담원 외에는 누구도 열람하지 않는 기밀 신청서입니다.
                    </p>
                  </div>
                </form>
              ) : (
                <div 
                  id="form-success-container"
                  className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-2xl text-center space-y-6 max-w-md mx-auto"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900">상담 신청 안심 완료!</h3>
                    <p className="text-sm text-brand-purple font-bold">
                      {formData.studentName} 학생 ({formData.grade}) • {formData.subject} 과목
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                    기록해주신 학부모님 연락처(<span className="font-mono font-bold text-gray-700">{formData.phone}</span>)로 직접 학생을 지도해 본 선임 배정 상담 선생님이 분석 후 **3시간 이내(평일 기준)**에 1:1 심층 상담 전화를 먼저 드리겠습니다. 아이의 학습 성향을 진심으로 이해하겠습니다.
                  </p>

                  <div className="pt-4 flex flex-col gap-2">
                    <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-[11px] text-left text-gray-500 space-y-1">
                      <p className="font-bold text-gray-700">📌 안심 매칭 프로세스:</p>
                      <p>1. 선임 상담 선생님의 심층 전화상담 진단</p>
                      <p>2. 추천 교사 면담 및 모의 시강 (무료 1회 제공)</p>
                      <p>3. 최종 매칭 진행 및 습관 포트폴리오 가동</p>
                    </div>

                    <button
                      id="reset-form-btn"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          studentName: "",
                          grade: "중등 2학년",
                          subject: "수학",
                          phone: "",
                          concern: "",
                          agreed: true
                        });
                      }}
                      className="w-full py-2.5 border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      새로운 상담 추가 신청하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* 밝은 회색 톤의 공통 푸터 */}
      <Footer />

      {/* 우측 하단 플로팅 안심 상담 CTA */}
      <FloatingCTA />
    </div>
  );
}


