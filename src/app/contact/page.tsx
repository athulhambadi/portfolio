"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/layout/Contact";
import MagneticButton from "@/components/ui/MagneticButton";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
       console.error("EmailJS credentials are missing!");
       setSubmitStatus("error");
       setIsSubmitting(false);
       return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSubmitStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSubmitStatus("error");
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <div className="space-y-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
              Let&apos;s build <br/> something <span className="text-accent">great.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-md leading-relaxed">
              Open for freelance opportunities, brand collaborations, and creative consulting.
            </p>

            <div className="space-y-8 pt-8 border-t border-zinc-900">
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest font-semibold mb-2">Email</p>
                <a href="mailto:athulhambadi@gmail.com" className="text-2xl font-medium text-white hover:text-accent transition-colors">athulhambadi@gmail.com</a>
              </div>
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest font-semibold mb-2">Phone</p>
                <a href="tel:+917012901767" className="text-2xl font-medium text-white hover:text-accent transition-colors">+91 7012 901 767</a>
              </div>
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest font-semibold mb-2">Location</p>
                <p className="text-2xl font-medium text-white">Bengaluru, India</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-white/5">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  required
                  className="bg-transparent border-b border-zinc-800 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  required
                  className="bg-transparent border-b border-zinc-800 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  className="bg-transparent border-b border-zinc-800 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="bg-transparent border-b border-zinc-800 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="text-green-500 text-sm font-medium">Message sent successfully! I will get back to you soon.</div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-500 text-sm font-medium">Failed to send message. Please check the console or try again.</div>
              )}

              <div className="pt-4">
                <MagneticButton className="w-full" onClick={() => handleSubmit()}>
                  <div className={`w-full px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-colors text-center cursor-pointer ${isSubmitting ? "opacity-70 pointer-events-none" : "hover:bg-zinc-200"}`}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </div>
                </MagneticButton>
              </div>
            </form>
          </div>
          
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
