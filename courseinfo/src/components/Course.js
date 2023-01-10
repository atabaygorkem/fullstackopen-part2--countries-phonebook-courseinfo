const Header = ({ course }) => {
  return (
    <>
      <h2>{course}</h2>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  )
}

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <>
      <strong>
        total of {parts.reduce((sum, current) => sum + current.exercises, 0)}{" "}
        exercises
      </strong>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course
