import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import ThemedButton from '../../themed/Button'
import { useWallet } from '../../hooks'

// const TEMPLE_CONTRACT_ADDRESS = '0x85Fe671A158bf98f1C79b56A100171b99231E6aE'

const Hero: React.FC = () => {
  const { currentAccount, connectWallet } = useWallet()
  const history = useHistory()

  const goToWhitepaper = () => {
    history.push('/whitepaper')
  }

  return (
    <Box h="700px" w="100%" backgroundColor="targetBlue" color="white">
      <Box maxW="1200px" mx="auto">
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          py="20px"
        >
          <Text as="span" fontSize="3xl">
            GREEK GODS &amp; MORTALS
          </Text>
          {currentAccount ? (
            <Flex justifyContent="space-between" alignItems="center">
              <Image
                src="/assets/png/kind.png"
                height="25px"
                alt="sword"
                mr="8px"
              />
              <Text as="span" fontSize="sm" className="plex">
                {`${currentAccount.substring(0, 9)}...`}
              </Text>
            </Flex>
          ) : (
            <ThemedButton size="md" onClick={goToWhitepaper}>
              Whitepaper
            </ThemedButton>
          )}
        </Flex>
        <Flex w="100%" h="575px" justifyContent="center" alignItems="center">
          <Box mr="150px">
            <Box>
              <Text as="h4" fontSize="5xl" lineHeight={1}>
                Become a Greek God.
              </Text>
              <Flex maxW="max-content">
                <Text as="h4" fontSize="5xl" lineHeight={1}>
                  Rule the World.
                </Text>
                <Image src="/assets/png/kind.png" alt="sword" ml="8px" />
              </Flex>
            </Box>
            <Text as="p" maxW="48ch" my="30px" className="plex">
              As a Mortal Human, you will worship Greek Gods in temples in the
              metaverse to collect $FAITH.{' '}
            </Text>
            <Flex>
              {!currentAccount && (
                <ThemedButton size="lg" mr="8px" onClick={connectWallet}>
                  Connect Metamask
                </ThemedButton>
              )}
              <Button
                variant="ghost"
                size="lg"
                textTransform="uppercase"
                fontWeight="400"
                _hover={{
                  backgroundColor: 'blue.300',
                }}
                _active={{
                  backgroundColor: 'blue.400',
                }}
                {...(currentAccount && {
                  border: '1px solid white',
                })}
                onClick={goToWhitepaper}
              >
                Read the whitepaper
              </Button>
            </Flex>
          </Box>
          <Box backgroundColor="lightBlue" w="500px" h="440px" />
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero