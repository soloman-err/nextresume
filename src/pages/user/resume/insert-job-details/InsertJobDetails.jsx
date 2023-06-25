const InsertJobDetails = () => {
  return (
    <>
      <div className="space-y-10">
        <div>
          <textarea
            className="w-full h-[80] bg-transparent border p-5"
            cols="50"
            rows="25"
            placeholder="Paste job description here..."
          ></textarea>
        </div>

        <div className="space-y-2 lg:space-x-2 text-end">
          <button className="btn rounded w-full">Submit</button>
        </div>
      </div>
    </>
  )
}

export default InsertJobDetails
