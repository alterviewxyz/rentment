import React from "react";
import "./Footer.css";
import { Logo } from "../Logo/Logo";

const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = React.useState("");

  const handleSubscribe = () => {
    if (newsletterEmail.trim()) {
      alert(`Subscribed with: ${newsletterEmail}`);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <div className="footer__info-item">
            <div className="footer__info-content">
              <span className="footer__info-title">ارتباط با ما</span>
              <span className="footer__info-text">0912-2123456</span>
            </div>
            <span className="footer__info-icon">📞</span>
          </div>
          <div className="footer__info-item">
            <div className="footer__info-content">
              <span className="footer__info-title">ایمیل</span>
              <span className="footer__info-text">autorent@info.com</span>
            </div>
            <span className="footer__info-icon">📧</span>
          </div>
          <div className="footer__info-item">
            <div className="footer__info-content">
              <span className="footer__info-title">آدرس</span>
              <span className="footer__info-text">تهران - خ شادمان</span>
            </div>
            <span className="footer__info-icon">📍</span>
          </div>
        </div>
      </div>
      <div className="footer__middle">
        <div className="footer__about">
          <div className="footer__logo">
            <Logo className="footer__logo_svg" />
            <span> رنت‌منت!</span>
          </div>
          <p>
            رنت‌منت با رویکرد اعتماد به مشتری با در اختیار داشتن بزرگترین ناوگان
            خودروئی شامل از انواع خودروهای سفر کوتاه، اقتصادی تا تجاری در سراسر
            کشور ایران آماده خدمت‌رسانی به مشتریان است.
          </p>
        </div>
        <div className="footer__links">
          <span className="footer__link-title">دسترسی آسان</span>
          <ul>
            <li>سوالات متداول</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
          </ul>
        </div>
        <div className="footer__newsletter">
          <span className="footer__newsletter-title">خبرنامه</span>
          <div className="footer__newsletter-form">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>ارسال</button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>تمامی حقوق این وبسایت متعلق به رنت‌منت می‌باشد ©</p>
      </div>
    </footer>
  );
};

export { Footer };
