import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
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
      setStatusMessage({ type: 'error', text: 'กรุณากรอกรูปแบบอีเมลให้ถูกต้อง (เช่น your.email@example.com)' });
      return;
    }

    if (formData.name.trim().length > 100 || formData.email.trim().length > 100 || (formData.subject && formData.subject.trim().length > 150)) {
      setStatusMessage({ type: 'error', text: 'ความยาวของข้อมูลเกินขีดจำกัดที่กำหนด' });
      return;
    }

    if (formData.message.trim().length > 1000) {
      setStatusMessage({ type: 'error', text: 'ข้อความต้องมีความยาวไม่เกิน 1,000 ตัวอักษร' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'No Subject',
          message: formData.message.trim()
        }
      ]);

      if (error) throw error;

      setStatusMessage({ type: 'success', text: 'ขอบคุณครับ! บันทึกข้อความติดต่อของคุณเรียบร้อยแล้ว' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatusMessage({ type: 'error', text: 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้งหรือติดต่อผ่านอีเมลโดยตรง' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Get in Touch"
          title="Let's Work Together"
          description="มีโปรเจกต์ที่สนใจหรือต้องการพูดคุย สามารถส่งข้อความมาได้เลยครับ"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <a href={profileData.socialLinks.email} className="flex items-center gap-4 text-[#A1A1AA] hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1117] border border-[#272A33] flex items-center justify-center text-[#8B5CF6] group-hover:border-[#8B5CF6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">Email</span>
                    <span className="text-sm font-medium text-white">{profileData.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-[#A1A1AA]">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1117] border border-[#272A33] flex items-center justify-center text-[#8B5CF6]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">Location</span>
                    <span className="text-sm font-medium text-white">{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#171A21] border border-[#272A33] space-y-5">
              {statusMessage && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`p-4 rounded-xl border flex items-center gap-3 text-sm ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  }`}
                >
                  {statusMessage.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="your.email@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={150}
                  placeholder="Project inquiry or message topic"
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                  placeholder="Write your message here..."
                  className="form-input resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
