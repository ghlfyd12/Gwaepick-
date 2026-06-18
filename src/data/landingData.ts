export interface ReformNewsSnippet {
  id: string;
  topic: string;
  highlightText: string;
  fullText: string;
  impactTitle: string;
  impactDesc: string;
  solution: string;
}

export interface CurriculumCard {
  level: string; // "초등", "중등", "고등"
  description: string;
  subjects: {
    name: string;
    focus: string;
    tip: string;
  }[];
}

export interface TestimonialCard {
  name: string;
  schoolLevel: string;
  subject: string;
  scoreChange: string;
  quote: string;
  reviewText: string;
  matchedTeacherTags: string[];
}

export interface TutorPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface LandingData {
  reformTitle: string;
  reformSubtitle: string;
  reformSnippets: ReformNewsSnippet[];
  curriculums: CurriculumCard[];
  testimonials: TestimonialCard[];
  pillars: TutorPillar[];
}

export const landingData: LandingData = {
  reformTitle: "2028 대학입시제도 개편",
  reformSubtitle: "인공지능·기술 대전환 시대, 주입식 암기가 아닌 '진짜 탐구력'을 평가합니다",
  
  reformSnippets: [
    {
      id: "snippet-1",
      topic: "수능 체제 개편",
      highlightText: "국어·수학 선택과목 폐지..",
      fullText: "2028 수능, 국어·수학 선택과목 폐지.. 탐구는 문항·시험 시간 늘어난다",
      impactTitle: "모두 동일한 통합형 수능",
      impactDesc: "유불리 과목이 완전히 사라집니다. 전체적인 밸런스와 기초 독해력, 융합 수학적 사고력이 수능의 등급을 가릅니다.",
      solution: "단순 양치기 문제 풀이가 아닌, 국어 독해 원리와 수학의 기본 개념을 정밀하게 구조화하는 1:1 상담 선생님의 매칭 학습이 필요합니다."
    },
    {
      id: "snippet-2",
      topic: "핵심 변별 요소",
      highlightText: "탐구력이 변별력을 주는 핵심 요소",
      fullText: "2028년 대입부터는 탐구력이 변별력을 주는 핵심 요소가 될 전망",
      impactTitle: "서술·논술형 핵심 사고",
      impactDesc: "단순 주입식 암기만 하던 학생은 시험 포맷이 바뀐 순간 완전히 무너집니다. 개념을 스스로 설명하고 유기적으로 엮을 줄 아는 '탐구력'이 명문대 합격을 좌우합니다.",
      solution: "학생이 직접 연필을 쥐고 말로 설명하며 수업하는 '질문형 역발상 지도법'에 특화된 상담 선생님을 우선 배정합니다."
    },
    {
      id: "snippet-3",
      topic: "내신 제도 혁신",
      highlightText: "1등급 학생 8배 늘어난다",
      fullText: "내신 5등급제 전환.. 1등급 학생 8배 늘어난다 (기존 4% -> 10% 확대)",
      impactTitle: "내신 등급 변별력 희석",
      impactDesc: "기존 9등급제에서 5등급제로 완화되면서 상위권에 1등급이 넘쳐납니다. 이제 학생부 서류와 '심층 면접', '수능 최저 독해력'이 진정한 하이라이트입니다.",
      solution: "수행평가와 자녀 맞춤 세부능력 및 특기사항(세특) 관리를 완벽하게 지도해줄 수 있는 직접 가르쳐 본 학교 현장 베테랑 진로 지도 선생님을 매칭합니다."
    },
    {
      id: "snippet-4",
      topic: "평가 방식의 대전환",
      highlightText: "외우는 공부 끝났다. 생각하는 법 배워야..",
      fullText: "교육·평가 방식 변화 '외우는 공부 끝났다. 생각하는 법 배워야..'",
      impactTitle: "스스로 탐구하는 역량",
      impactDesc: "고교 전 과목의 서술형·논술형 평가 비중이 비약적으로 증가합니다. 읽고 이해해서 논리적으로 조리 있게 적는 훈련을 일찍 시작해야 합니다.",
      solution: "하루 30분 책읽기 및 글쓰기 피드백을 수업 루틴으로 조합하는 '독서 융합형 과외 모델'을 결합합니다."
    },
    {
      id: "snippet-5",
      topic: "고교학점제 전면화",
      highlightText: "전략적 진로 로드맵 필수!",
      fullText: "고교학점제 시대, 전략적 진로 로드맵 필수!",
      impactTitle: "나만의 맞춤형 교과 설계",
      impactDesc: "자신이 원하는 과목을 선택해서 이수하는 시대입니다. 어떤 과목을 기입하고 어떤 탐구 보고서를 냈는지가 대학 제출용 진학 포트폴리오가 됩니다.",
      solution: "단순 진도 빼기 수업이 아닌, 아이의 희망 전공과 고교학점제 이수 계획을 함께 로드맵 짜 줄 전담 1:1 상담 선생님이 필요합니다."
    }
  ],

  curriculums: [
    {
      level: "초등학교 (습관 & 기초 사고력)",
      description: "인생의 공부 근육을 형성하는 시기. 외우는 국사 및 주입식 산수가 아닌, 읽는 독해 습관과 수 감각을 기르는 베테랑 선생님의 맞춤 설계입니다.",
      subjects: [
        {
          name: "초등 국어 (문해력)",
          focus: "독서 중심 및 글쓰기 지도",
          tip: "2028 개편 대입의 핵심인 문해력을 다집니다. 단순 문제집 풀이를 끊고 스토리텔링 질문법으로 어휘 수준을 끌어올립니다."
        },
        {
          name: "초등 수학 (연산 & 사고)",
          focus: "교구 융합 및 개념 서술",
          tip: "지루한 연산 반복을 통한 피로 누적을 방지하고, 풀이 과정을 예쁜 풀이 노트에 스스로 말로 조리 있게 설명하는 정석 습관을 만듭니다."
        }
      ]
    },
    {
      level: "중학교 (자기주도 & 심화 확장)",
      description: "고등 학습의 분기점. 자유학기제에도 흔들리지 않도록 학습 플래너 사용법 습관을 잡아주고, 중등 심화 응용력을 확립합니다.",
      subjects: [
        {
          name: "중등 국어 (문법 & 문학)",
          focus: "어휘 체계와 기출 독해 기초",
          tip: "수능 국어의 90% 토대를 중등 단계에서 정립합니다. 현대소설과 고전문학 핵심의 분석 능력을 심어줍니다."
        },
        {
          name: "중등 수학 (대수 & 기하)",
          focus: "개념 백지 테스트 및 최고난도 완성",
          tip: "이해한 공식은 반드시 백지에 증명합니다. 증명이 완료된 문제 위주로 심화 오답 원인을 직접 추적하여 해결합니다."
        }
      ]
    },
    {
      level: "고등학교 (수능 1등급 & 학생부 종합 완벽 완비)",
      description: "2028 대입 전면 개편안에 최적화된 최상위 지도. 내신 5등급제 완화로 무너진 내신 변별력을 '수행평가와 세특 기록, 수능 고난도 탐구'로 빈틈없이 극복합니다.",
      subjects: [
        {
          name: "고등 국어 (공통 국어 & 독서)",
          focus: "시간 관리 및 고난도 비문학 논리 분석",
          tip: "지문의 문맥적 관계를 입체적으로 읽는 원리를 전수합니다. 제한된 시간 내 오독 없이 정답률을 올리는 맞춤 비책."
        },
        {
          name: "고등 수학 (공통 수학 & 대입 심화)",
          focus: "킬러 문항 분해 및 서술형 평가 증명",
          tip: "서술형 만점을 목표로 정교한 논리 서술을 체화하고, 대입 수능 수학의 통합형 융합 출제 경향을 사전 예측 학습합니다."
        }
      ]
    }
  ],

  testimonials: [
    {
      name: "김민재 학생 학부모님",
      schoolLevel: "고등 1학년",
      subject: "수학",
      scoreChange: "기존 55점에서 1등급 달성",
      quote: "학원 숙제에 지쳐 울던 아이가, 선생님을 만나 수학 공식의 아름다움을 설명하는 아이로 바뀌었습니다.",
      reviewText: "유명 수학 학원에 1년 내내 보냈지만 아이는 지치고 내신은 계속 4~5등급이었습니다. 상담 선생님을 만나 1:1 상담 끝에, 문제를 건성으로 읽는 눈 버릇을 교정해주실 꼼꼼한 선생님을 배출해 상호 보완을 이뤘습니다. 개념 노트를 직접 적게 하고 예제를 과외 선생님께 가르치듯 역발상 설명 수업을 하자, 신기하게도 복잡한 내신 서술형에서 만점을 맞으며 전교 등수가 올랐어요. 직접 가르쳐보신 상담 선생님의 안목이 없었다면 불가능한 매칭이었습니다.",
      matchedTeacherTags: ["개념서술특화", "태도교정", "동기부여"]
    },
    {
      name: "이지민 학생 상호매칭",
      schoolLevel: "중등 3학년",
      subject: "국어·영어",
      scoreChange: "학업성취도 미달에서 전 과목 A등급 달성",
      quote: "자유학기제 때 풀어진 학습 태도를 플래너 관리와 꼼꼼한 어휘 피드백으로 완벽하게 다잡아주셨어요.",
      reviewText: "스스로 자거나 유튜브만 하던 아이라 갈등이 정말 심했습니다. 저희 고민을 듣고 매칭 상담 선생님께서 '태충 넘겨 짚는 불안을 잠재울 지독하고 온화한 선생님'을 주천해 주셨습니다. 단순 과외뿐 아니라 매일 카톡으로 학습 플래너와 영어 어휘 테스트를 진행해서, 딴짓하던 아이가 책상에 혼자 2시간 넘게 공부하는 자기주도 성향을 갖게 되었습니다. 이제 고등 내신 준비도 전적으로 신뢰하며 이 세션을 유지하고 있습니다.",
      matchedTeacherTags: ["주도적플래너작성", "온화한카리스마", "독해집중피드백"]
    }
  ],

  pillars: [
    {
      title: "직접 가르친 경력의 안목",
      description: "단순히 이력서와 스펙만 보고 대행 매칭하지 않습니다. 실제로 오랫동안 학생을 가르쳐보고 입시를 몸소 분석해온 '선배 상담 선생님'이 1:1 디테일 심층 전화 면담으로 우리 아이의 학습 결핍과 어휘 성향을 입체적으로 진단합니다.",
      iconName: "CheckCircle"
    },
    {
      title: "엄격한 교사 3단계 검증 시스템",
      description: "신원 및 대학 졸업 상태 확인은 기본, 학부모 상담 소양과 설명 중심의 역수업 교수 능력을 원장단이 1:1 모의 시강을 거쳐 선발합니다. 실력뿐 아니라, 아이를 진심으로 기다려주고 경청하는 심성까지 완벽 검증합니다.",
      iconName: "ShieldCheck"
    },
    {
      title: "2028 대입 특화 탐구력 중심 교육",
      description: "수능의 선택과목이 사라지고 내신 1등급이 8배로 증가하는 등 입시가 획기적으로 변했습니다. 이제는 맹목적 문제풀이 강사가 아닌 에세이, 역설명, 수행평가 세특 관리를 유기적으로 이끌 수 있는 미래 입시 정예 선생님을 가용 매칭합니다.",
      iconName: "Sparkles"
    }
  ]
};
