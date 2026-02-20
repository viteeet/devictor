'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type Locale = 'pt' | 'en' | 'es';

type Messages = Record<string, unknown>;

async function loadMessages(locale: Locale): Promise<Messages> {
  switch (locale) {
    case 'pt':
      return (await import('@/messages/pt.json')).default as Messages;
    case 'en':
      return (await import('@/messages/en.json')).default as Messages;
    case 'es':
      return (await import('@/messages/es.json')).default as Messages;
    default:
      return (await import('@/messages/pt.json')).default as Messages;
  }
}

function getNested(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  get: (key: string) => unknown;
  messages: Messages | null;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

const STORAGE_KEY = 'vctr-locale';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('pt');
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === 'pt' || stored === 'en' || stored === 'es')) {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    loadMessages(locale).then(setMessages);
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      if (!messages) return key;
      const value = getNested(messages as Record<string, unknown>, key);
      return typeof value === 'string' ? value : String(value ?? key);
    },
    [messages]
  );

  const get = useCallback(
    (key: string): unknown => {
      if (!messages) return undefined;
      return getNested(messages as Record<string, unknown>, key);
    },
    [messages]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, get, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
