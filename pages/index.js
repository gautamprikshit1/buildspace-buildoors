import { Box, Center, Spacer, Stack } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import Head from 'next/head';
import Connected from '../components/Connected';
import Disconnected from '../components/Disconnected';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { connected } = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name='The NFT Collection for Buildoors' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <Navbar />
          {/* Navbar */}
          <Spacer />
          <Center>
            {/* Connected or Disconnected */}
            {connected ? <Connected /> : <Disconnected />}
          </Center>
          <Spacer />
        </Stack>
      </Box>
    </div>
  )
}

export default Home
