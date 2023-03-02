import React from 'react'

const Mensaje = (props) => {
    const { mensaje } = props
    return (
        <div className="bg-yellow-500 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"><p>{mensaje}</p></div>
    )
}

export default Mensaje