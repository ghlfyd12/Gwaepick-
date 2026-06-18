export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  contact: string;
  businessHours: string;
  email: string;
  address: string;
  copyright: string;
  ctaLabel: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "맞춤과외상담",
  slogan: "선생님을 보는 눈은, 선생님이 가장 정확합니다.",
  contact: "010-XXXX-XXXX",
  businessHours: "평일/주말 09:00 ~ 22:00 (전화 및 문자 상담 가능)",
  email: "contact@gwawoematching.com",
  address: "서울특별시 강남구 테헤란로 123, 4층",
  copyright: "© 2026 맞춤과외상담. All rights reserved.",
  ctaLabel: "무료 상담 신청",
  navItems: [
    { label: "추천 교사 소개", href: "#hero" },
    { label: "과목별 커리큘럼", href: "#curriculum" },
    { label: "후기 & 성장스토리", href: "#proof" },
    { label: "무료 상담 신청", href: "#consult" },
  ],
};
