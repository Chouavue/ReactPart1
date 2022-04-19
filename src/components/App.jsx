
import React, { useState } from 'react'

//1.6

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const goodReview = () => setGood(good + 1)
//   const neutralReview = () => setNeutral(neutral + 1)
//   const badReview = () => setBad(bad + 1)


//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick = {goodReview}>good</button>
//       <button onClick = {neutralReview}>neutral</button>
//       <button onClick = {badReview}>bad</button>
//       <h1>Statistics</h1>
//       <p>Good = {good}</p>
//       <p>Neutral = {neutral}</p>
//       <p>Bad = {bad}</p>
//     </div>
//   )
// }


//1.7

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const goodReview = () => setGood(good + 1)
//   const neutralReview = () => setNeutral(neutral + 1)
//   const badReview = () => setBad(bad + 1)
//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick = {goodReview}>good</button>
//       <button onClick = {neutralReview}>neutral</button>
//       <button onClick = {badReview}>bad</button>
//       <h1>Statistics</h1>
//       <p>Good = {good}</p>
//       <p>Neutral = {neutral}</p>
//       <p>Bad = {bad}</p>
//       <p>All = {good + neutral + bad}</p>
//       <p>Average = {(good - bad ) / (good + neutral + bad)} </p>
//       <p>Positive = {good / (good + neutral + bad)*100}% </p>
//     </div>
//   )
// }

// export default App


//1.8

// const Statistics = (props) => {
// 	return (
// 		<div>
// 			<p>Good: {props.good}</p>
// 			<p>Neutral: {props.neutral}</p>
// 			<p>Bad: {props.bad}</p>
// 			<p>All: {props.All}</p>
// 			<p>Average: {props.average}</p>
// 			<p>Positive: {props.positive} %</p>
// 		</div>
// 	)
// }


// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const goodReview = () => setGood(good + 1)
//   const neutralReview = () => setNeutral(neutral + 1)
//   const badReview = () => setBad(bad + 1)

//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick = {goodReview}>good</button>
//       <button onClick = {neutralReview}>neutral</button>
//       <button onClick = {badReview}>bad</button>
//       <h1>Statistics</h1>
//       <Statistics 
// 				good={good} 
// 				neutral= {neutral} 
// 				bad= {bad} 
// 				All= {good + neutral + bad} 
// 				average= {(good - bad)/(good + neutral + bad)} 
// 				positive= {good / (good + neutral + bad)*100}
// 			/>
//     </div>
//   )
// }


//1.9
// const Statistics = (props) => {
//   if (props.All === 0) {
//       return (
//         <div>
//           <p>No Feedback Given</p>
//         </div>
//       )
//     }
//   return (
//     <div>
//       <p>Good: {props.good}</p>
//       <p>Neutral: {props.neutral}</p>
//       <p>Bad: {props.bad}</p>
//       <p>All: {props.All}</p>
//       <p>Average: {props.average}</p>
//       <p>Positive: {props.positive} %</p>
//     </div>
//   )
//   }

// const App = () => {
//     // save clicks of each button to its own state
//     const [good, setGood] = useState(0)
//     const [neutral, setNeutral] = useState(0)
//     const [bad, setBad] = useState(0)
  
//     const goodReview = () => setGood(good + 1)
//     const neutralReview = () => setNeutral(neutral + 1)
//     const badReview = () => setBad(bad + 1)
//     return (
//       <div>
//         <h1>Give Feedback</h1>
//         <button onClick = {goodReview}>good</button>
//         <button onClick = {neutralReview}>neutral</button>
//         <button onClick = {badReview}>bad</button>
//         <h1>Statistics</h1>
//         <Statistics 
// 				good={good} 
// 				neutral= {neutral} 
// 				bad= {bad} 
// 				All= {good + neutral + bad} 
// 				average= {(good - bad)/(good + neutral + bad)} 
// 				positive= {good / (good + neutral + bad)*100}
// 			/>
//       </div>
//     )
//   }

//1.10

// const Statistics = ({good, neutral, bad}) => {
//         const All= (good + neutral + bad) 
//         const average = (good - bad)/(good + neutral + bad) 
//         const positive = (good / (good + neutral + bad)*100)
  
//   if (All === 0) {
//       return (
//         <div>
//           <p>No Feedback Given</p>
//         </div>
//       )
//     }
// return(
//   <div>
//     <StatisticLine text="good" value ={good}/>
//     <StatisticLine text="neutral" value ={neutral} />
//     <StatisticLine text="bad" value ={bad} />
//     <StatisticLine text="all" value = {All} />
//     <StatisticLine text="average " value = {average} />
//     <StatisticLine text="positive " value = {positive}/>
//   </div>
// )
// }


// const StatisticLine = ({ text, value }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//   )
// }


//   const App = () => {
//       const [good, setGood] = useState(0)
//       const [neutral, setNeutral] = useState(0)
//       const [bad, setBad] = useState(0)
    
//       const goodReview = () => setGood(good + 1)
//       const neutralReview = () => setNeutral(neutral + 1)
//       const badReview = () => setBad(bad + 1)

//     let Button = ({ text, clicked }) => {
//         return <button onClick={clicked}> {text} </button>;
//     }
//       return (
//         <div>
//           <h1>Give Feedback</h1>
//           <Button text="good" clicked={() => goodReview()}/>
//           <Button text="neutral" clicked={() => neutralReview()}/>
//           <Button text="bad" clicked={() => badReview()}/>
//           <h1>Statistics</h1>
//           <Statistics good={good} neutral= {neutral} bad= {bad}/>
//         </div>
//       )
//     }

// 1.11
const Statistics = ({good, neutral, bad}) => {
  const All= (good + neutral + bad) 
  const average = (good - bad)/(good + neutral + bad) 
  const positive = (good / (good + neutral + bad)*100).toFixed(1) + "%"

if (All === 0) {
return (
  <div>
    <p>No Feedback Given</p>
  </div>
)
}
return(
<div>
<StatisticLine text="good" value ={good}/>
<StatisticLine text="neutral" value ={neutral} />
<StatisticLine text="bad" value ={bad} />
<StatisticLine text="all" value = {All} />
<StatisticLine text="average " value = {average} />
<StatisticLine text="positive " value = {positive}/>
</div>
)
}


const StatisticLine = ({ text, value }) => {
return (
<tr>
<td>{text}</td>
<td>{value}</td>
</tr>
)
}


const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const goodReview = () => setGood(good + 1)
const neutralReview = () => setNeutral(neutral + 1)
const badReview = () => setBad(bad + 1)

let Button = ({ text, clicked }) => {
  return <button onClick={clicked}> {text} </button>;
}
return (
  <div>
    <h1>Give Feedback</h1>
    <Button text="good" clicked={() => goodReview()}/>
    <Button text="neutral" clicked={() => neutralReview()}/>
    <Button text="bad" clicked={() => badReview()}/>
    <h1>Statistics</h1>
    <Statistics good={good} neutral= {neutral} bad= {bad}/>
  </div>
)
}




export default App

