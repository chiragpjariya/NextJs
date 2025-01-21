import React from 'react'

function Linking({ linking, Link }) {
    return (
        <div>
            <Link to={linking} className="text-blue-500">{Link}</Link>
        </div>
    )
}

export default Linking