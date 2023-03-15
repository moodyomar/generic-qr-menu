import './Title.css'


const Title = ({category:{name,desc}}) => { 

return(

<div data-aos={`fade-in`} data-aos-duration="1500" className='Title' id={name}>
<h1>{name}</h1>
<p>{desc}</p>
</div>

)
}

export default Title