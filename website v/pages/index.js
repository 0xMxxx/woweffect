import styles from '../styles/Home.module.scss';
import Background from '../public/grids.svg';
import Image from 'next/image';
import dynamic from "next/dynamic"
import { useEffect, useReducer } from 'react';
import Modal from '../src/components/Modal';
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';

export default function Home() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    loading: () => <p>Loading...</p>,
  })

  return (
    <Layout>
      <section className={styles.container}>
          <div className={styles.rightHero}>
          <Spline scene="https://prod.spline.design/xukUcWP4aSSyBDDF/scene.splinecode" />
          </div>
      </section>
    </Layout>
  )
}
