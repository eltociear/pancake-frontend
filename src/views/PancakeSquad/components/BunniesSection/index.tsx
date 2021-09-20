import { Box, Button, Flex, Link, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import PurpleWordHeading from 'views/Home/components/PurpleWordHeading'
import bunniesConfig from './config'
import { StyledBunnySectionContainer } from './styles'

const BunniesSection = () => {
  const { t } = useTranslation()

  const { headingText, bodyText, subHeadingText, primaryButton, image } = bunniesConfig

  const headingTranslatedText = t(headingText)
  const subHeadingTranslatedText = t(subHeadingText)
  return (
    <StyledBunnySectionContainer
      px={['16px', null, '0']}
      py={['64px', null, '0']}
      justifyContent={['flex-start', null, 'center']}
      alignItems={['flex-end', null, 'flex-start']}
      flexDirection={['column', null, 'row']}
    >
      <Box mb={['24px', null, '-3px']} maxWidth={['192px', null, '100%']}>
        <img src={image.src} alt={image.alt} />
      </Box>
      <Flex flexDirection="column" ml={[null, null, null, '64px']} alignSelf={['flex-start', null, null, 'center']}>
        <PurpleWordHeading text={headingTranslatedText} mb="0" />
        <PurpleWordHeading text={subHeadingTranslatedText} color="failure" />
        {bodyText.map((text) => (
          <Text key={text} color="textSubtle" mb="20px">
            {text}
          </Text>
        ))}
        <Flex>
          <Link mr="16px" external={primaryButton.external} href={primaryButton.to}>
            <Button>
              <Text color="card" bold fontSize="16px">
                {t(primaryButton.text)}
              </Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </StyledBunnySectionContainer>
  )
}

export default BunniesSection
