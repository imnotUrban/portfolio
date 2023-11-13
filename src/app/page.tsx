'use client';
import { NavBar } from '@/components/NavBar';
import styles from './page.module.css';
import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Proyects } from '@/components/Proyects';
import  Experience  from '@/components/Experience';
import { Contact } from '@/components/Contact';

const Page = () => {

  return (
    <main className={styles.main}>
      <NavBar />
      <Hero />
      <Skills />
      <Proyects />
      <Experience />
      <Contact />

    </main>
  );
};

export default Page;

