import React from 'react'



const AvatarList =(props)=> {

	return(
	<>
	 <div className="avatarstyle">
		<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
		<h2>{props.name} </h2>
		<p>{props.work}</p>
	 </div>
	</>
	)
}

export default AvatarList
