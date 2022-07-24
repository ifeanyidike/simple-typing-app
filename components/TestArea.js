import React from 'react'
import { faker } from '@faker-js/faker';
import { Button, TestAreaContainer } from '../styles/HomeStyles'

const TestArea = ({
    setRandomParagraph, 
    startTest, 
    randomParagraph,
    usersInput, 
    theme, 
    setUsersInput, 
    handleComputeAccuracyAndSpeed
}) => {
    const handleUsersInput = (e) => { 
        setUsersInput(e.target.value)
      }

      const handleUserInputKeyDown = () => {
        const paragraphArray = randomParagraph.split(' ')
        if(paragraphArray < 5){
          return alert('You havent generated a paragraph or you entered less than 5 words. Please click on generate texts or enter more texts')
        }
      }

      const handleGenerateParagraph = () => {
        const sentence = faker.lorem.sentences(10)
        setRandomParagraph(sentence)
      }
    
      const handlePaste = (e) => {
        e.preventDefault()
        alert("You cannot paste on this box")
        return false
      }

      const handleCopy = (e) => {
        e.preventDefault()
        alert("You cannot copy from this box")
        return false
      }
  return (
    <TestAreaContainer >
        <div className="mainText">
            <label>Generate Text or Copy and Paste Some Texts in the Space</label>
            <textarea  
                disabled={startTest} 
                value={randomParagraph} 
                onChange={(e) => setRandomParagraph(e.target.value)} 
                onCopy = {handleCopy} 
            />
            <Button theme = {theme} className="button" disabled={startTest} onClick={handleGenerateParagraph}>Generate random text</Button>
        </div>
        <div className="userText">
          <label>Type the Text in the Space</label>
          <textarea 
            maxLength={randomParagraph.length} 
            value={usersInput} 
            onKeyDown={handleUserInputKeyDown} 
            onChange={handleUsersInput} 
            onPaste={handlePaste}
            disabled = {!startTest}
          />
          <Button theme={theme} className="button" disabled={!startTest}  onClick={handleComputeAccuracyAndSpeed}>Compute Accuracy</Button>
        </div>
      </TestAreaContainer>
  )
}

export default TestArea