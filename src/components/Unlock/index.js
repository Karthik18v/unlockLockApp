import {useState} from 'react'

import {AppContainer, LockImage, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [bulbStatus, setBulbStatus] = useState(false)

  const onClickButton = () => {
    setBulbStatus(prevStatus => !prevStatus)
  }

  const imageUrl = bulbStatus
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = bulbStatus ? 'unlock' : 'lock'
  const buttonText = bulbStatus ? 'Lock' : 'Unlock'
  const statusText = bulbStatus
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  return (
    <AppContainer>
      <LockImage src={imageUrl} alt={altText} />
      <Heading>{statusText}</Heading>
      <Button buttonColor={bulbStatus} onClick={onClickButton}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}
export default Unlock
