import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Wordmark from '../components/wordmark';

export default function Home() {
  const router = useRouter();
  const randomNumber = Math.floor(Math.random() * 3);
  const [theme, setTheme] = useState(randomNumber);
  const [isLoading, setIsLoading] = useState(false);
  const setymediaColors = {
    frameworkGray: '#1D1D26',
    outlineWhite: '#F5F5F5',
    wireframeRed: '#DD1444'
  };
  const wordmarkVariant = {
    hidden: { scale: 3 },
    show: {
      scale: 1,
      transition: { type: 'spring', duration: 2 }
    }
  };

  function cycleThemes() {
    if (theme === 0) {
      setTheme(theme + 1);
    } else if (theme === 1) {
      setTheme(theme + 1);
    } else if (theme === 2) {
      setTheme(0);
    }
  }

  function setWordmarkColors() {
    if (theme === 0) {
      return {
        setyColor: setymediaColors.frameworkGray,
        mediaColor: setymediaColors.wireframeRed
      };
    }

    if (theme === 1) {
      return {
        setyColor: setymediaColors.outlineWhite,
        mediaColor: setymediaColors.frameworkGray
      };
    }

    if (theme === 2) {
      return {
        setyColor: setymediaColors.outlineWhite,
        mediaColor: setymediaColors.wireframeRed
      };
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function goToImsety() {
    setIsLoading(true);
    await sleep(2500);
    router.push('https://imsety.com');
  }

  return (
    <div
      onClick={() => cycleThemes()}
      className={`
      flex flex-col overflow-hidden min-h-screen text-frameworkGray transition-colors duration-500

      ${theme === 0 && 'text-frameworkGray bg-outlineWhite'}
      ${theme === 1 && 'text-outlineWhite bg-wireframeRed'}
      ${theme === 2 && 'text-outlineWhite bg-frameworkGray'}

      ${isLoading && 'cursor-wait'}
    `}
    >
      <Head>
        <title>SetyMedia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex-grow flex items-center justify-center ">
        <div
          onClick={() => cycleThemes()}
          className="cursor-pointer w-60 md:w-96"
        >
          <Wordmark
            setyColor={setWordmarkColors().setyColor}
            mediaColor={setWordmarkColors().mediaColor}
          />
        </div>
      </main>

      <footer className="p-14">
        <p className="text-xs text-center">
          Copyright © 2021 SetyMedia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
