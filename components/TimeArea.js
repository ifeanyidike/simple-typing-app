import React from 'react'
import Select from 'react-select';
import { Button } from '../styles/HomeStyles';
import {TimeAreaContainer} from '../styles/TimeAreaStyles'
import {FaSync} from 'react-icons/fa'
import { GiAlarmClock } from 'react-icons/gi'

const options = [
    { value: 1, label: '1 minute' },
    { value: 2, label: '2 minutes' },
    { value: 5, label: '5 minutes' },
    { value: 10, label: '10 minutes' },
    { value: 'custom', label: 'Custom' },
  ];

const TimeArea = ({
    theme, 
    hideTimerElement, 
    setCustomTime,  
    startTest, 
    setHideTimerElement, 
    displayTime, 
    handleStartTest, 
    selectedOption, 
    setSelectedOption
}) => {

    const handleSync = () => {
        setHideTimerElement({...hideTimerElement, inputBox: !hideTimerElement.inputBox})
        setCustomTime(null)
       }

  return (
    <TimeAreaContainer theme={theme}>
            <div className="timeSelect">
              {
                !hideTimerElement.both && (
                  <>
                    {
                      hideTimerElement.inputBox ? 
                      <div className="selectElement">
                    
                        <Select
                          classNamePrefix="custom-select"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          placeholder="Choose duration for test"
                          options={options}
                          isDisabled={startTest}
                        />
                      </div>
                      : 
                      <div className="timeInput">
                        <div className="element">
                          <input type='number' disabled={startTest}  min={1} onChange={(e) => setCustomTime(e.target.value)} placeholder="Please enter time" />
                          <span>Minutes</span>
                        </div>
                        <div className="syncIcon" onClick= {handleSync}>
                          <FaSync size={20} />
                        </div>
                      </div>
                    }
                  </>
                )
              }
            </div>
            <div className="timeDisplay">
              {displayTime && <><GiAlarmClock size={30} /> {displayTime}</>}
            </div>
            <div className="startTest">
              <Button theme = {theme} className="button" onClick={handleStartTest}><span>{!startTest ? 'Start Test' : 'Reset Test'}</span></Button>
            </div>
          </TimeAreaContainer>
  )
}

export default TimeArea