import React from 'react'

const Home = () => {
  const data = [
    {
        heading:'Occurance in Care',
        data:'50'
    },
    {
        heading:'Occurance in Care',
        data:'50'
    },
    {
        heading:'Occurance in Care',
        data:'50'
    },
    {
        heading:'Occurance in Care',
        data:'50'
    },
    {
        heading:'Occurance in Care',
        data:'50'
    },
    {
        heading:'Occurance in Care',
        data:'50'
    }
    ,{
        heading:'Occurance in Care',
        data:'50'
    },
    {
        heading:'Occurance in Care',
        data:'50'
    },
    {
        heading:'Occurance in Care',
        data:'50'
    }
]
  return (
    <div className='Container'>
            <div className='Dashboard_heading'>
                <h3 >Dashboard</h3>
            </div>
            <div className='Dashboard_cards'>


                {data.map((v, i) => {
                    return (
                        <>                <div className="Dashboard_card">

                            <h6>
                                {v.heading}
                            </h6>
                            <h5>{v.data}</h5>
                        </div>
                        </>
                    )
                })}
            </div>

        </div>
  )
}

export default Home