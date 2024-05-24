import React from 'react'
import Carousel from "react-multi-carousel";
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';

function HomeProductsSlider() {

  const ProducstData = [
       "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/1/solar-panels-for-home_0_1200.jpg",
       "https://www.bobvila.com/wp-content/uploads/2021/09/How-To-Clean-Solar-Panels.jpg?w=1200",
       "https://www.chicagoindustrial.com/wp-content/uploads/2013/08/DSCN2003-Large1.jpg"
  ];

  const ProductsData2 = [
     "https://c1.wallpaperflare.com/preview/793/683/790/science-electronic-experiment-electricity.jpg", 
     "https://toolsinaction.com/wp-content/uploads/2018/11/HowtoUseAMultimeter19.jpg",
     "https://miro.medium.com/v2/resize:fit:1400/1*ftPrLbR2S6TGVBWTEmiJDg.jpeg"
  ]


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      

  return (
    <div className='wo-main-carousel'>
        <div className="carousel">
        <Carousel
        swipeable={true}  draggable={false} showDots={true}
        responsive={responsive}   ssr={true}
        infinite={true}  autoPlay={true}
        autoPlaySpeed={4000}    keyBoardControl={true}    customTransition="all .5"   transitionDuration={6000}
        containerclassName="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"  itemclassName="carousel-item-padding-40-px" >
          
          {ProducstData.map((item, index)=>{
                return (
                 <Link to="#">
                   <div className='carousel-element' key={index+1}> 
                    <ImageLazyLoading source={item} height={500} /> 
                    <div className="over-info">
                          <div className="name">Paineis HLOPS RDX</div>
                           <div className="price-tag">746.61€ –  <s>7,970.40€ </s></div>
                      </div>
                   </div>
                 </Link>
                )
            })
          } 
       </Carousel>
        </div>
        <div className="carousel-vertical">
          <div className="carousel">
        <Carousel
        swipeable={true}  draggable={false} showDots={true}
        responsive={responsive}   ssr={true}
        infinite={true}  autoPlay={true}
        autoPlaySpeed={4500}    keyBoardControl={true}    customTransition="all .5"   transitionDuration={7000}
        containerclassName="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"  itemclassName="carousel-item-padding-40-px" >
          
          {ProductsData2.map((item, index)=>{
                return (
                  <Link to="#">
                    <div className='carousel-element' key={index+1}> 
                      <ImageLazyLoading source={item} height={500} /> 
                      <div className="over-info">
                          <div className="name">Paineis HLOPS RDX</div>
                           <div className="price-tag">746.61€ –  <s>7,970.40€ </s></div>
                      </div>
                   </div>
                </Link>
                )
            })
          } 
       </Carousel>
        </div>
        </div>
    </div>
  )
}

export default HomeProductsSlider