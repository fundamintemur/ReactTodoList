import React from 'react'

function List({contact}) {
  return (
    <div className="main">
    <ul className="todo-list">
		{
			contact.map((con,i)=>(
			<li className="completed" key={i}>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>{con}</label>
					<button className="destroy"></button>
				</div>
			</li>
			))
		}
			
			
		</ul>
    </div>
  )
}

export default List
