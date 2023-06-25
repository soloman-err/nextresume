import InsertJobDetails from './insert-job-details/InsertJobDetails'
import MyResume from './my-resume/MyResume'
const Resume = () => {
  return (
    <div className="flex gap-3">
      <MyResume />
      <InsertJobDetails />
    </div>
  )
}

export default Resume
