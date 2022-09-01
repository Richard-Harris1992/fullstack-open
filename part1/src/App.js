/* Header takes care of rendering the name of the course, 
  Content renders the parts and their number of exercises and
   Total renders the total number of exercises. */
  const Header = (props) => { 
      return (
        <div>
          <p>"Half Stack application development"</p>
        </div>
      )
  }
  
  const Content = () => {
    const part1 = "Fundamentals of React";
    const part2 = "Using props to pass data";
    const part3 = "State of a componenet";
    const exercises1 = 10;
    const exercises2 = 7;
    const exercises3 = 14;
    
    return (
      <div>
        <p>{part1} {exercises1}</p>
        <p>{part2} {exercises2}</p>
        <p>{part3} {exercises3}</p>
      </div>
    )
  }

  const Total = () => {
    return(10 + 7 +14)
  }


   const App = () => {

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App