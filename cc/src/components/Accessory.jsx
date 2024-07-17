import React from 'react'
import { Link } from 'react-router-dom'
import icon from "../Assets/Images/strore-icon.png"

export default function Accessory() {
  return (
    <>
      <div className='accessory-details'  >
      {/* details */}
        <div className='details' style={{padding:'0px',border:"none"}}>
          <div className='top-bar' >
            <img className='store-icon' src={icon} />   
            <Link><strong>CC.CC  	&#9679; STORE</strong></Link>
          </div>
          <div  className="top-bar" >
            <Link>  <p>store &#11166;</p></Link>
            <Link><span>  Accessories</span> </Link>
          </div>
        </div>
      </div>

    <div class="accessory">
      <div class="image">
        <Link >
          <img src="https://pcp-img3.cc.cc/2023/202308/20230816/a9322c1c09_t.jpg" alt="Image 1"/>
          <span class="price">$19.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img3.cc.cc/2023/202308/20230816/e299924683_t.jpg" alt="Image 2"/>
          <span class="price">$24.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img3.cc.cc/2023/202308/20230816/13d841c544_t.jpg" alt="Image 3"/>
          <span class="price">$29.99</span>
        </Link>
      </div>

      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2023/202311/20231107/03a74c36_t.jpg" alt="Image 1"/>
          <span class="price">$19.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2023/202310/20231018/ce467851_t.jpg" alt="Image 2"/>
          <span class="price">$24.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2024/202404/20240421/5de0b7dd_t.jpg" alt="Image 3"/>
          <span class="price">$29.99</span>
        </Link>
      </div>

      <div class="image">
        <Link >
          <img src="https://pcp-img1.cc.cc/2024/202403/20240318/f00d9472_t.jpg" alt="Image 1"/>
          <span class="price">$19.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2024/202402/20240207/0bb16747_t.jpg" alt="Image 2"/>
          <span class="price">$24.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img1.cc.cc/2024/202401/20240122/28fc392d_t.jpg" alt="Image 3"/>
          <span class="price">$29.99</span>
        </Link>
      </div>

      <div class="image">
        <Link >
          <img src="https://pcp-img1.cc.cc/2024/202401/20240112/7eabd318_t.jpg" alt="Image 1"/>
          <span class="price">$19.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img1.cc.cc/2023/202310/20231021/82065594_t.jpg" alt="Image 2"/>
          <span class="price">$24.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2023/202311/20231126/182cc430_t.jpg" alt="Image 3"/>
          <span class="price">$29.99</span>
        </Link>
      </div>

      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2023/202311/20231116/06e046a7_t.jpg" alt="Image 1"/>
          <span class="price">$19.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img1.cc.cc/2023/202311/20231119/3087e01a_t.jpg" alt="Image 2"/>
          <span class="price">$24.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2023/202311/20231124/13f29f3d_t.jpg" alt="Image 3"/>
          <span class="price">$29.99</span>
        </Link>
      </div>

      <div class="image">
        <Link >
          <img src="https://pcp-img1.cc.cc/2023/202311/20231125/7b6436b0_t.jpg" alt="Image 1"/>
          <span class="price">$19.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2023/202311/20231126/4984179a_t.jpg" alt="Image 2"/>
          <span class="price">$24.99</span>
        </Link>
      </div>
      <div class="image">
        <Link >
          <img src="https://pcp-img2.cc.cc/2023/202311/20231126/b02270a0_t.jpg" alt="Image 3"/>
          <span class="price">$29.99</span>
        </Link>
      </div>

    </div>
  </>
  )
}
