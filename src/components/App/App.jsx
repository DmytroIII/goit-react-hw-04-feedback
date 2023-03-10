import Notification from '../Notification/Notification.jsx'
import Section from 'components/Section/Section.jsx';
import Statistics from 'components/Statistics/Statistics.jsx';
import React from 'react'
import  FeedbackOptions  from '../Feedback/Feedback.jsx'
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const ratingButtonClick = item => {
    switch (item) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  } 

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => 
  Math.round((good / countTotalFeedback()) * 100);

  const positiveFeedback = countPositiveFeedbackPercentage();
  const totalFeedback = countTotalFeedback();

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions 
          // options={Object.keys(this.state)}
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={ratingButtonClick} 
        />
      </Section>

      <Section title="Statistics:">
        {totalFeedback ? ( 
            <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              PositivePercentage=
              {positiveFeedback ? positiveFeedback : 0 }
            />           
          ) : (    
            <Notification  message="There is no one feedback" />      
             )                          
        }          
      </Section>        
    </>
  )  
}

export default App
