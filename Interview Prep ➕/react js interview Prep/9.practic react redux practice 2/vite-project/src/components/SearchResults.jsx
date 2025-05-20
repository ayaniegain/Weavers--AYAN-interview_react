import React from 'react'
import { useSelector } from 'react-redux'

function SearchResults() {
    const { searchedItem } = useSelector((state) => state.cart)

    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            {searchedItem.map((e) => (
                <h2 key={e.id} className="text-xl font-semibold text-blue-700 mb-4">
                    {e.title}
                </h2>
            ))}
        </div>
    )
}

export default SearchResults
