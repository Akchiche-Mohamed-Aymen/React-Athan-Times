function Prayer({title , time , source}) {
  return (
    <div className='bg-white w-72 md:w-52 pb-3'>
      <img src={source} alt=""  className='w-full h-24'/>
      <h2 className='text-black pt-8 text-2xl font-bold px-3'>{title}</h2>
      <h1 className='text-gray-500  text-5xl px-3'>{time}</h1>
    </div>
  )
}

export default Prayer
