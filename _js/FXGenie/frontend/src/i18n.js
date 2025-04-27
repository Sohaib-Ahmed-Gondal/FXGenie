import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { Login: 'Login', Email: 'Email', Password: 'Password', 'Sign Up': 'Sign Up' } },
  ur: { translation: { Login: 'لاگ ان', Email: 'ای میل', Password: 'پاس ورڈ', 'Sign Up': 'سائن اپ' } },
  ar: { translation: { Login: 'تسجيل الدخول', Email: 'البريد الإلكتروني', Password: 'كلمة المرور', 'Sign Up': 'اشتراك' } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;