const Part = ({part}) => {
    console.log("🚀 ~ Part ~ part:", part)
    return (
        <p>{part.name} {part.exercises}</p>
    )
  }

export default Part