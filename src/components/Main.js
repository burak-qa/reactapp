import React from 'react'
import List from './List'

export default function main() {
    return ( //buraya once bir div yada section acmayiliz sonra onun icine bir cok div acabiliriz
        <section>
            <h1>Main Section</h1>
            <List/>
        {1+1} <br/>
        {"Burak".toUpperCase()}
        </section>
    )
}
