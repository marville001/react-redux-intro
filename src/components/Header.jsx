import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const Header = (props) => {
    const {todos} = useSelector(state => state.todos)
    const {count} = useSelector(state => state.counter)
    return (
        <div className="header">
            <h2>Hello User</h2>
            <h4>Count: {count}</h4>
            <p>{todos.length} tasks</p>
        </div>
    )
}


export default Header
