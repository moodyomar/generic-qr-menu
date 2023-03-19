const Footer = () => { 

return(

<div className='Footer' style={footerStyle}>
<p>פיתוח על ידי <a href="https://qbmedia.co.il" target="_blank" rel="noreferrer" style={footerStyle.a}>קיובי מדיה</a></p>
<a href="https://qbmedia.co.il" target="_blank" rel="noreferrer">
    <img src={process.env.PUBLIC_URL + 'qbmedia.svg'} width={125} alt="QB Media" style={footerStyle.img}/>
</a>
</div>

)
}

const footerStyle = {
    marginBottom:"56px",
    backgroundColor:"#1E1E1E",
    height:"100px",
    color:"white",
    display:"flex",
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
    a:{
        textDecoration:"none",
        color:"#D39F47",
        pointer:"cursor"
    },
    img:{
        marginTop:'10px'
    }
}

export default Footer