import Head from 'next/head'
import React from 'react'
import {useEffect, useState} from 'react'
import Header from '../components/Header';
import Result from '../components/Result';
import { HomeContainer, Button, GlobalStyle } from '../styles/HomeStyles';
import TimeArea from '../components/TimeArea';
import TestArea from '../components/TestArea';

const Home = () => {
  const [randomParagraph, setRandomParagraph] = useState("")
  const [usersInput, setUsersInput] = useState("")

  const [startTest, setStartTest] = useState(false)
  const [time, setTime] = useState( null)
  const [totalTime, setTotalTime] = useState( null)
  const [displayTime, setDisplayTime] = useState(null)
  const [customTime, setCustomTime] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null);
  const [hideTimerElement, setHideTimerElement] = useState({
    inputBox: true,
    both: false,
  })
  const [result, setResult] = useState(null)
  const [themeMode, toggleThemeMode] = useState(false)

  useEffect(() => {
    if(!selectedOption?.value && !customTime) return
    const tempTimeStamp = selectedOption?.value || customTime
   
    const timeStamp = Number(tempTimeStamp) * 1000 * 60
    setTime(timeStamp)
    setTotalTime(timeStamp)
   
  }, [customTime, selectedOption])

  useEffect(() => {
    if(selectedOption?.value === 'custom'){
      setHideTimerElement({inputBox: false, both: false})
      setSelectedOption(null)
    }
  }, [selectedOption])



  useEffect(() => {
    let timer = setTimeout(() => {
      if(time > 0 && startTest){
        setTime(time - 1000)
      }
    }, [1000])

    return () => clearInterval(timer)
  }, [time, startTest])

  useEffect(() => {
   if (!time) return
    const _time = handleDisplayTime()
    setDisplayTime(_time)
  }, [time])

  useEffect(() => {
    //computes result if time elapses
    if(time === 0){
      handleComputeAccuracyAndSpeed()
    }
  }, [time])


  const handleDisplayTime = () => {
    const dtTime = new Date(time)
    const twoDigitsTime = (timeDigits) => timeDigits.toString().padStart(2, '0')

    return twoDigitsTime(dtTime.getUTCHours()) + ':' + twoDigitsTime(dtTime.getUTCMinutes()) + ":" + twoDigitsTime(dtTime.getUTCSeconds())
  }

 const handleComputeAccuracyAndSpeed = () => {
  //first add generated random words to a dictionary
  let incorrectWordCount = 0
  const sentenceDict = {}
  const randomParagraphArray = randomParagraph.trim().split(' ')
  const usersInputArray = usersInput.trim().split(' ')
  for(let word of randomParagraphArray){
    let trimmedWord = word.trim()
    if(trimmedWord === '') continue
    
    if(trimmedWord in sentenceDict){
      sentenceDict[trimmedWord] += 1
    }else{
      sentenceDict[trimmedWord] = 1
    }
  }

  //subtract words in user words from the random words dictionary
  for(let word of usersInputArray){
    let trimmedWord = word.trim()
    if(trimmedWord === '') continue
    if(trimmedWord in sentenceDict){
      sentenceDict[trimmedWord] -=1
    }
  }

  //count remaining words
  Object.keys(sentenceDict).forEach(word => {
    incorrectWordCount += sentenceDict[word]
  })

  //Time complexity O(N) we transversed just once, 
  //space complexity O(N) because new dictionary is generated

  //compute accuracy
  const accuracy = ~~((1 - (incorrectWordCount / randomParagraphArray.length)) * 100)

  //compute speed
  const timeUsed = (totalTime - time)/(1000 * 60)
  const speed = (usersInputArray.length - 1) / timeUsed

  resetTest()
  setResult({ accuracy, speed })
 }

 const handleStartTest = () => {
  if(!startTest){
      //start test
      const paragraphArray = randomParagraph.split(' ')
      if(paragraphArray < 5){
        alert('You must have at least 5 words before you start the test. You may also try generating a sentence')
      }else if(!displayTime){
        alert('Please select your test duration or enter a custom time')
      }else if (isNaN(time) || time < 1){
        alert('Your test duration must be a positive number')
      }
      else{
        setStartTest(true)
      }
    }else{
      //reset test
      resetTest()
    }
 }

 const resetTest = () => {
    setTotalTime(null)
    setTime(null)
    setTotalTime(null)
    setCustomTime(null)
    setSelectedOption(null)
    setDisplayTime(null)
    setStartTest(false)
    setHideTimerElement({ inputBox: true, both: false })
    setRandomParagraph("")
    setUsersInput("")
 }

  return (
    <React.Fragment>
      <GlobalStyle theme = {themeMode} />
      <HomeContainer theme = {themeMode} >
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <React.Fragment>
        <Header toggleThemeMode={toggleThemeMode} themeMode={themeMode} />
      </React.Fragment>
     
      {!result ?
        <main className="main">
          <TimeArea 
            theme={themeMode}
            hideTimerElement={hideTimerElement} 
            setCustomTime={setCustomTime} 
            startTest={startTest} 
            displayTime={displayTime} 
            handleStartTest={handleStartTest}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setHideTimerElement = {setHideTimerElement}
          />

          <TestArea
            setRandomParagraph = {setRandomParagraph}
            startTest={startTest}
            theme = {themeMode}
            handleComputeAccuracyAndSpeed = {handleComputeAccuracyAndSpeed}
            setUsersInput={setUsersInput}
            randomParagraph = {randomParagraph}
            usersInput = {usersInput}
          />
          
        </main>
        :
        <main>
          <Result theme = {themeMode} result={result} setResult={setResult} />
        </main>
      }

     
    </HomeContainer>
    </React.Fragment>
  )
}

export default Home