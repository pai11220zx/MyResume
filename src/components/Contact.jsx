import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, Phone } from 'lucide-react';
import { GithubIcon } from './Icons';
import { supabase } from '../lib/supabaseClient';
import { profileData } from '../data/profile';
import SectionHeading from './common/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({ type: 'error', text: 'กรุณากรอกข้อมูลให้ครบทุกช่องที่จำเป็น' });
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setStatusMessage({ type: 'error', text: 'รูปแบบอีเมลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      if (!supabase) {
        // Fallback demo simulation if Supabase credentials are not set
        await new Promise(res => setTimeout(res, 1000));
        setStatusMessage({
          type: 'success',
          text: 'ส่งข้อความเรียบร้อยแล้ว! (Demo Mode: กรุณาตั้งค่า Supabase URL ใน .env เพื่อบันทึกลง Database จริง)'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }

      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim() || 'No Subject',
            message: formData.message.trim()
          }
        ]);

      if (error) throw error;

      setStatusMessage({
        type: 'success',
        text: 'ส่งข้อความเรียบร้อยแล้ว! ขอบคุณที่ติดต่อเข้ามาครับ ผมจะรีบตอบกลับโดยเร็วที่สุด'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatusMessage({
        type: 'error',
        text: 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง หรือติดต่อทางอีเมลโดยตรง'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Get In Touch"
          title="ติดต่อเรา (Contact)"
          description="มีโปรเจกต์ที่สนใจหรือต้องการพูดคุย สามารถส่งข้อความมาได้เลยครับ"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mt-8">
          {/* Contact Info (Frameless Floating) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <a href={profileData.socialLinks.phone} className="flex items-center gap-4 text-[#A1A1AA] hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">เบอร์โทรศัพท์ (Phone)</span>
                    <span className="text-sm font-medium text-white">{profileData.phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a href={profileData.socialLinks.email} className="flex items-center gap-4 text-[#A1A1AA] hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">อีเมล (Email)</span>
                    <span className="text-sm font-medium text-white">{profileData.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 text-[#A1A1AA]">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">สถานที่ / มหาวิทยาลัย (Location)</span>
                    <span className="text-sm font-medium text-white">{profileData.location}</span>
                  </div>
                </div>

                {/* GitHub */}
                <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#A1A1AA] hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">GitHub Profile</span>
                    <span className="text-sm font-medium text-white">{profileData.socialLinks.github}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Frameless Floating) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              {statusMessage && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`p-4 rounded-xl border flex items-center gap-3 text-sm ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-950/40 border-rose-500/30 text-rose-300'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">
                    ชื่อของคุณ (Name) <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="เช่น สมชาย ใจดี"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">
                    อีเมล (Email) <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">
                  หัวข้อข้อความ (Subject)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="เช่น สอบถามเรื่องการฝึกงาน / สนใจร่วมงาน"
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">
                  ข้อความ (Message) <span className="text-[#8B5CF6]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="พิมพ์ข้อความของคุณที่นี่..."
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>กำลังส่งข้อความ...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>ส่งข้อความ (Send Message)</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
