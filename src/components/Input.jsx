const Input = () => {
  return (
    <div className="md:w-[30%] bg-blue-50 p-5 space-y-10">
      <div>
        <textarea
          className="w-full h-[80] bg-transparent border p-5"
          cols="50"
          rows="25"
          placeholder="Paste your resume here..."
        ></textarea>
      </div>

      <div className="space-y-2 lg:space-x-2 text-end">
        <button className="btn btn-sm btn-wid rounded">Submit</button>
      </div>
    </div>
  );
};

export default Input;
