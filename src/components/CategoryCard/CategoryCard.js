import './CategoryCard.css'


const CategoryCard = ({category:{name,image},endPoint}) => { 
    return(
      <div className='CategoryCard' style={{
        backgroundImage:`url(${endPoint}${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        borderRadius: 15,
      }}>
        <div style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)',
          bottom: 0,
          left: 0,
          borderRadius: 15,
          position: 'absolute',
          right: 0,
          top: 'auto',
          overflow:'hidden'
        }}>
          <strong style={{ color: '#fff', padding: '10px' }}>{name}</strong>
        </div>
      </div>
    )
  }
  
export default CategoryCard