import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary'

import PlayersContainer from '../src/components/PlayersContainer/PlayersContainer';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>
        <main className={styles.main}>
          <PlayersContainer />
        </main>
      </ErrorBoundary>
      <footer className={styles.footer}>
        Powered by &nbsp;<a href="https://t.me/dmtrby">Dzmitry Mahliui</a>
      </footer>
    </div>
  )
}
