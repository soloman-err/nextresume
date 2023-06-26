import { useForm } from 'react-hook-form';

const InsertJobDetails = () => {
  const {
    register,
    handleSubmit
    // fromState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <textarea
          className="w-full h-[80] bg-transparent border p-5"
          cols="50"
          rows="25"
          placeholder="Paste job description here..."
          {...register('text', { required: true })}
        ></textarea>
      </div>

      <div className="space-y-2 lg:space-x-2 text-end">
        <button type='submit' className="btn rounded w-full">Submit</button>
      </div>
    </div>
  )
}

export default InsertJobDetails
