import Part from '/components/Part'

const Content = ({parts}) => {
    console.log("🚀 ~ Content ~ parts:", parts)
    return (
      <div>
        {parts.map(part => <Part part={part} key={part.id}/>)}
      </div>
    )
  }

export default Content