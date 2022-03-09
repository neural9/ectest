import React, { useState, useEffect } from 'react'


function ExternalAPICheck() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {data ? "Does work: " + data.title : "Not connected"}
    </div>
  )
}

export default ExternalAPICheck