'use client';

import { motion, useInView } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contact } from '@/data/contact';
import { FEATURES } from '@/lib/config';

import { InteractiveMap } from './InteractiveMap';

// Hero Section
const ContactHeroSection = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/landingPage/heroSection/heroSection1.jpg"
        alt="Bubb's Corner Pub interior"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={100}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm tracking-[0.4em] text-brand uppercase md:text-base"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 text-center text-4xl font-bold text-white uppercase tracking-tight md:text-6xl lg:text-7xl"
        >
          Contact Us
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-1 w-24 origin-center bg-brand"
        />
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };

  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    // Validate required fields
    if (!data.name.trim()) {
      form.setError('name', { message: 'Name is required' });
      return;
    }
    if (!data.email.trim()) {
      form.setError('email', { message: 'Email is required' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      form.setError('email', { message: 'Please enter a valid email address' });
      return;
    }
    if (!data.message.trim()) {
      form.setError('message', { message: 'Message is required' });
      return;
    }
    if (data.message.trim().length < 10) {
      form.setError('message', {
        message: 'Message must be at least 10 characters',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-lg border border-brand/50 bg-black/50 p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand"
        >
          <Send className="h-8 w-8 text-white" />
        </motion.div>
        <h3 className="mb-2 text-2xl font-bold text-white uppercase">
          Message Sent!
        </h3>
        <p className="text-white/70">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="h-full w-full"
    >
      <Card className="h-full border-white/20 bg-zinc-900/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white uppercase tracking-tight">
            Send Us a Message
          </CardTitle>
          <CardDescription className="text-white/70">
            Have a question or want to make a reservation? Fill out the form
            below and we&apos;ll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your name"
                            className="border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:border-brand focus:ring-brand"
                            disabled={isSubmitting}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your.email@example.com"
                            className="border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:border-brand focus:ring-brand"
                            disabled={isSubmitting}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="(224) 555-1234"
                            className="border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:border-brand focus:ring-brand"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="What's this about?"
                            className="border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:border-brand focus:ring-brand"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell us how we can help..."
                          rows={6}
                          className="border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:border-brand focus:ring-brand"
                          disabled={isSubmitting}
                          required
                          minLength={10}
                        />
                      </FormControl>
                      <FormDescription className="text-white/60">
                        Minimum 10 characters required
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    className="w-full uppercase tracking-wider"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Business Details Section - Unified Design
const BusinessDetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const phoneHref = `tel:${contact.phone.replace(/\D/g, '')}`;

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="h-full w-full"
    >
      <Card className="h-full border-white/20 bg-zinc-900/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <span className="mb-1 block text-xs tracking-[0.3em] text-brand uppercase">
            Find Us
          </span>
          <CardTitle className="text-2xl font-bold text-white uppercase tracking-tight">
            Visit Our Location
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Address */}
          <motion.div variants={itemVariants}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 rounded-full bg-brand/20 p-1.5">
                <MapPin className="h-5 w-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Address
                </h3>
                <p className="mb-2 text-sm text-white/90 leading-snug">
                  {contact.address.full}
                </p>
                <motion.a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white uppercase tracking-wider transition-all hover:bg-brand-hover"
                >
                  Get Directions
                  <motion.svg
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/20" />

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 rounded-full bg-brand/20 p-1.5">
                <Phone className="h-5 w-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Phone
                </h3>
                <p className="mb-2 text-sm text-white/90">{contact.phone}</p>
                <motion.a
                  href={phoneHref}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white uppercase tracking-wider transition-all hover:bg-brand-hover"
                >
                  Call Us
                  <motion.svg
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/20" />

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 rounded-full bg-brand/20 p-1.5">
                <Clock className="h-5 w-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                  Hours
                </h3>
                <div className="space-y-1 text-sm text-white/90">
                  <p>{contact.hours.weekdays}</p>
                  <p>{contact.hours.weekend}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/20" />

          {/* Email */}
          <motion.div variants={itemVariants}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 rounded-full bg-brand/20 p-1.5">
                <Mail className="h-5 w-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Email
                </h3>
                <p className="mb-2 text-sm text-white/90">info@bubbspub.com</p>
                <motion.a
                  href="mailto:info@bubbspub.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white uppercase tracking-wider transition-all hover:bg-brand-hover"
                >
                  Send Email
                  <motion.svg
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Map Component (standalone, no section wrapper)
const ContactMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="h-full w-full"
    >
      <InteractiveMap height="h-full min-h-[400px] md:min-h-[500px]" />
    </motion.div>
  );
};

// Main Contact Page Component
const ContactUsPage = () => {
  return (
    <main
      className={
        !FEATURES.showContactHeroSection ? 'bg-zinc-950 pt-24 md:pt-28' : ''
      }
    >
      {FEATURES.showContactHeroSection && <ContactHeroSection />}

      {/* Map and Business Details - Side by side on large screens */}
      <section className="bg-zinc-950 px-4 py-8 md:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
            {/* Interactive Map - Left side on large screens */}
            <div className="flex">
              <ContactMap />
            </div>

            {/* Business Details - Right side on large screens */}
            <div className="flex">
              <BusinessDetailsSection />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Full width below */}
      {FEATURES.showContactForm && (
        <section className="bg-zinc-950 px-4 py-8 md:px-8 lg:py-12">
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </section>
      )}
    </main>
  );
};

export default ContactUsPage;
