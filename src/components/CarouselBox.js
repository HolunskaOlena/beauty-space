import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import picture_1 from '../photos/picture_1.jpg';
import picture_2 from '../photos/picture_2.jpg';
import picture_3 from '../photos/picture_3.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
           <Carousel style={{marginTop: '56px'}}>
               <Carousel.Item>
                   <img 
                        className="d-block w-100"
                        src={picture_2}
                        alt="manicure"
                   />
                   <Carousel.Caption>
                       <h3>Manicure image</h3>
                       <p>Some text blblblblblblblblblblblblblblblblblb</p>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                   <img 
                        className="d-block w-100"
                        src={picture_1}
                        alt="manicure"
                   />
                   <Carousel.Caption>
                       <h3>Manicure image</h3>
                       <p>Some text blblblblblblblblblblblblblblblblblb</p>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                   <img 
                        className="d-block w-100"
                        src={picture_3}
                        alt="manicure"
                   />
                   <Carousel.Caption>
                       <h3>Manicure image</h3>
                       <p>Some text blblblblblblblblblblblblblblblblblb</p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        )
    }
}
