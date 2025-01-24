import Part from '/components/Part'

const Content = ({parts}) => {
    console.log("🚀 ~ Content ~ parts:", parts)
    return (
      <div>
        {parts.map(part => <Part part={part} key={part.id}/>)}
        <p><b>total of {parts.map(part => part.exercises).reduce((a,b) => a+b)} exercises</b></p>
      </div>
    )
  }

export default Content