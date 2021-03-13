import React,{useState} from 'react'
import AvatarList from './AvatarList';


const Result =(props)=> {

	const [set , setUpdate] = useState('Welcome to Avatar World');
	const handler = ()=>{
		setUpdate('React Js')
	}
	const avatarlistarray = [
	{
		id:1,
		name:'Pravesh Sharma', 
		work:'Multi-Talented'
	},
		{
		id:2,
		name:'Vitanshu Sahu', 
		work:'Multi-Talented'
	},
	{
		id:3,
		name:'Mohit Karnawat', 
		work:'Web Developer'
	},
	{
		id:4,
		name:'Mayuk Nair', 
		work:'Web Developer'
	},
	
	{
		id:5,
		name:'Amom Imocha', 
		work:'Multi-Talented'
	},
	]

	const arrayavatarcard = avatarlistarray.map((avatarcatd, i)=>{
		return <AvatarList keys={1} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
	})

	return(
	<>
	<h2>{set}</h2>
		{arrayavatarcard}

	<button onClick={handler}>Subcribe</button>
	</>
	)
}

export default Result
