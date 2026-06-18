import React from "react";
import { siteConfig } from "../../data/site";

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-gray-50 border-t border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Slogan and Name */}
          <div className="flex flex-col space-y-4">
            <h2 id="footer-logo" className="text-xl font-bold text-brand-purple">
              {siteConfig.name}
            </h2>
            <p id="footer-slogan" className="text-sm font-semibold text-gray-700 leading-relaxed max-w-sm">
              &ldquo;{siteConfig.slogan}&rdquo;
            </p>
            <p className="text-xs text-gray-400">
              현직 베테랑 교사 및 실전 교육진이 직접 융합 매칭하고 추천해주는 안심 과외 서비스입니다.
            </p>
          </div>

          {/* Right Column: Contact info & metadata */}
          <div className="flex flex-col space-y-3 pt-4 md:pt-0">
            <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
              상담 및 운영 안내
            </h3>
            <div id="footer-contact-details" className="space-y-1.5 text-xs sm:text-sm text-gray-500">
              <p>
                <span className="font-medium text-gray-700">전화번호: </span>
                <span className="font-mono">{siteConfig.contact}</span> (문자 수신 가능)
              </p>
              <p>
                <span className="font-medium text-gray-700">대표 메일: </span>
                <span className="font-mono">{siteConfig.email}</span>
              </p>
              <p>
                <span className="font-medium text-gray-700">운영 시간: </span>
                {siteConfig.businessHours}
              </p>
              <p>
                <span className="font-medium text-gray-700">소재지: </span>
                {siteConfig.address}
              </p>
            </div>
          </div>
        </div>

        {/* Separator / Copyright line */}
        <div className="border-t border-gray-200/50 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p id="footer-copyright">{siteConfig.copyright}</p>
          <div className="flex space-x-6">
            <a href="#consult" className="hover:text-brand-purple transition-colors">
              이용약관
            </a>
            <a href="#consult" className="hover:text-brand-purple transition-colors font-medium">
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
