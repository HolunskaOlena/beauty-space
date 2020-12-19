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
                       <h3>Неймовірний манікюр - секрет нашого успіху</h3>
                       <p>BeautySpace подарує Вам справжню насолоду від процедури та відмінний результат</p>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                   <img 
                        className="d-block w-100"
                        src={picture_1}
                        alt="manicure"
                   />
                   <Carousel.Caption>
                       <h3>Нові тренди і технології</h3>
                       <p>BeautySpace використовує лише новітні тренди та технології аби обслуговувати клієнтів на високому рівні</p>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                   <img 
                        className="d-block w-100"
                        src={picture_3}
                        alt="manicure"
                   />
                   <Carousel.Caption>
                       <h3>Сучасний дизайн та авторські рішення</h3>
                       <p>Незабутні враження і чудовий результат забезпечать наші висококваліфіковані майстри BeautySpace</p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        )
    }
}
