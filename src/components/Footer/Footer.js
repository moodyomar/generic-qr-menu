

const Footer = () => { 

return(

<div className='Footer' style={footerStyle}>
<p>פיתוח על ידי <a href="https://qbmedia.co.il" target="_blank" rel="noreferrer" style={footerStyle.a}>קיובי מדיה</a></p>
</div>

)
}

const footerStyle = {
    marginBottom:"56px",
    backgroundColor:"#1E1E1E",
    height:"100px",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    a:{
        textDecoration:"none",
        color:"#D39F47",
        pointer:"cursor"
    }
}

export default Footer