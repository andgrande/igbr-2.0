import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { ClassesProvider } from '../hooks/useClassesContext';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ClassesProvider>
        <Flex flexDirection="column" >
            <Header />
            <Component {...pageProps} />
        </Flex>
      </ClassesProvider>
    </ChakraProvider>
  )
}

export default MyApp
