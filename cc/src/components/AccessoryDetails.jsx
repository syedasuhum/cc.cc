import React from 'react'
import { Link } from 'react-router-dom'
import icon from "../Assets/Images/strore-icon.png"

export default function AccessoryDetails() {
  return (
    <div className='accessory-details'>
      
        <div className='details' style={{padding:'0px',border:"none"}}>
       <div className='top-bar' ><img className='store-icon' src={icon} />   <Link><strong>CC.CC  	&#9679; STORE</strong></Link></div>
       <div  className="top-bar" >
        <Link>  <p>store &#11166;</p></Link>
        <Link><span>  Accessories</span> </Link>
       </div>
        </div>
  
      {/* details */}
        <div style={{paddingBottom:"20px"}} className='details'>
          <strong style={{marginRight:"10px"}} className='detail'>Buy Vintage Rustic Chinese Pocket Bamboo Fan Home Decor Antique Online in India</strong>
          <span className='detail'> • $ 99.00 USD </span>
          <span className='detail'>• OrientalHub57 </span>
          <Link  className='detail'>• Accessory &#11166; hand fan </Link>
          <span className='detail'>• India</span>
        </div>
       
       
    {/* image box */}
    <div className='img-box'>
    <img src="https://pcp-img3.cc.cc/2023/202308/20230816/a9322c1c09.jpg" />
    <img src="https://pcp-img3.cc.cc/2023/202308/20230816/d5dc4ccf2c.jpg" />
    <img src="https://pcp-img3.cc.cc/2023/202308/20230816/44f059aa17.jpg" />
    </div>

{/* descrition */}
    <div className='details'>
         <strong className='detail'> item description</strong>
                <span style={{marginRight:"10px"}} className='detail'>A lovely vintage Chinese folding hand fan
        The fan is made from wood and features decorative cut out designs.
        Great vintage condition, no cracks or repairs, clean and vibrant.
        Material: Bamboo
        Size - HxWxD: 2x21x1 cm
        Weight: 31 Grams </span>
        <div className='send-message'>
        <button className='send-meassage'>send a meassage</button>
        </div>
        </div>


      {/*  constact information */}
        <div style={{paddingBottom:"20px"}} className='details'>
         <strong className='detail'>contact information</strong>
         <span className='detail'>• Email : <Link>user1@demo.com</Link></span>
        </div>

        <textarea rows={3} placeholder='enter your requirements (size color , etc)' className='details text-area'></textarea>

        <button  className='details add-to-cart'>
          <h2 style={{margin:'0px'}}>Add To Cart</h2>
          <strong>paypal to user@demo.com</strong>
          </button>

          <div className='details'>
          <Link className='detail protected'> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-shaded" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
</svg> &nbsp;
          All purchases through CC.CC are covered by PayPal Buyer Protection </Link>
          </div>


          <div className='details language-box'>
            <div className='language'>
         <p style={{cursor:"pointer"}}>english &#11166; </p>
         <button  className='language-right-button'>cc.cc</button>
            </div>
        </div>

        <div className='details footer'>
          <Link>sign in with google</Link>
          <Link className='footer-link'>launch your store in just 4 seconds</Link>
          <Link className='footer-link'>Report a link</Link>
        </div>
    </div>
  )
}
