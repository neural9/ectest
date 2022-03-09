import React, {useState, useEffect} from 'react'

function InternalAPICheck() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/hello')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])

  return (
      <div>
          {data ? "Does work: " + data.name : "Not connected"}
      </div>
  )
}

export default InternalAPICheck