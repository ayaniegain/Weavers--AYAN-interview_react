import React, { useState } from 'react'

function DoM() {
    let data=[{id:1,name:"subir"},{id:2,name:"bikash"}]
    const [people, setpeople] = useState(data)

  return (
    <>
    <div>DoM</div>
        <section className='px-2'>
            <ul>
                
            {people.map((e,index)=><li key={e.id}>{e.name}</li>)}
            </ul>
        </section>
        <button className='border-2 ' onClick={()=>(setpeople([...data,{id:3,name:"kunal"}]))}>click add</button>

    </>
  )
}

export default DoM