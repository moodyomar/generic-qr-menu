import React, { useContext, useState } from 'react';
import { FaShare } from 'react-icons/fa';
import { MdOutlineAddCircle } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import WhatsappContext from '../../contexts/WhatsappCart'
import { v4 as uuid } from 'uuid';
import './ProductCard.css';

export default function ProductCard({ product: { name, price, picture, desc }, endPoint,
  wspDetails: { ownerPhone, wspMsgStart, specialNotes, shareBtn, orderBtn, placeholder } }) {

  const [showDetails, setShowDetails] = useState(false);
  const [orderNotes, setOrderNotes] = useState(null);
  const defaultPic = picture ? picture : 'default.jpg';
  const { memoizedValue } = useContext(WhatsappContext)


  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  const checkIfExists = (name) => {
    memoizedValue.productsInWspCart.forEach(product => console.log(product.name))
    console.log(memoizedValue.productsInWspCart)
  };

  return (
    <div className="food-card" data-aos={`zoom-in`} data-aos-duration="1000">
      <div
        className="food-card-img-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img className="logo" src={`${endPoint}logo.png`} alt="Logo" />
        <button onClick={e => memoizedValue.addToWspCart({ name, price, picture, id: uuid(), qnty: 1 })} className="add-product"><MdOutlineAddCircle size={25} color={'#60D003'} /></button>
        <img src={`${endPoint}${defaultPic}`} alt="Product" />
        <div className={`food-card-details${showDetails ? ' show' : ''}`}>
          <p className="food-card-details-text">{desc}</p>
          <input type="text" onChange={e => setOrderNotes(e.target.value)} className='order-notes' placeholder={placeholder} />
          <div className="card-buttons">
            <a href={`https://api.whatsapp.com/send?phone=${ownerPhone}&text=${wspMsgStart} ${name} ${desc}.\n ${orderNotes !== null ? `\0*${specialNotes}:* \0${orderNotes}` : ''}`}>
              <RiWhatsappFill size={20} color={'#FEFC00'} />{orderBtn}</a>
            <a href={`whatsapp://send?text=${name} ב${price} מהבורגריה. זה הלינק www.website.com`} data-action="share/whatsapp/share" rel="noreferrer" target="_blank" >
              <FaShare size={20} color={'#FEFC00'} />{shareBtn}</a>
          </div>
        </div>
        {
          !showDetails &&
          <div className="food-card-title-container">
            <h3 className="food-card-title">{name}</h3>
            <p className="food-card-price">₪{price}</p>
          </div>
        }
      </div>
    </div>
  );
}
