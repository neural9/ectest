import React, {useState} from 'react'

function Button() {
    const [first, setfirst] = useState(true)
    return (
        <button className='bg-gray-100 px-2 text-sm border border-gray-300 rounded-lg' onClick={() => { alert('React integration works') }}>Check React Code</button>
    )
}

export default Button