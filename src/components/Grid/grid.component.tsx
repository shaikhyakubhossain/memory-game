export default function Grid() {
  return (
    <div className='grid grid-cols-3 w-60 h-60 mx-auto text-center'>
        {
            [...Array(9)].map((_, index) => {
                return (
                    <div key={index} className="flex justify-center w-20 h-20 bg-red-500 border border-red-800 m-auto items-center">
                        {index}
                    </div>
                )
            })
        }
    </div>
  )
}
