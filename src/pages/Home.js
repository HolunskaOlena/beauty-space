import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import img1 from "../photos/product_1.jpg";
import img2 from "../photos/product_2.jpg";
import img3 from "../photos/product_3.jpg";

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4">Послуги</h2>
                <CardDeck className="m-4">
                    <Card>
                        <Card.Img variant="top" src={img1} style={{height: 350}}/>
                        <Card.Body>
                            <Card.Title>Покриття гель лаком</Card.Title>
                            <Card.Text>
                            Вирушаючи в салон краси, щоб зробити манікюр з гель-лаком, приготуйтеся провести там не менше години. Що стосується ціни гель-лаку, то вона, безумовно, різна у різних майстрів, але в середньому завжди вище, ніж манікюр з традиційним покриттям. Зваживши всі «за» і «проти», більшість клієнток все ж приходять до висновку, що покривати нігті гель-лаком вигідніше, ніж кожні три-чотири дні оновлювати звичайний манікюр. 
                            </Card.Text>
                            <Button variant="primary" style={{alignSelf: "flex-end", marginTop: 40}}>Детальніше</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={img2} style={{height: 350}}/>
                        <Card.Body>
                            <Card.Title>Зняття гель лаку</Card.Title>
                            <Card.Text>
                            Як правило, гель-лак тримається в середньому 14-21 день, без сколів і тріщин. Після зазначеного терміну покриття повністю знімається і наноситься заново. Іншими словами, мрія про бездоганні нігтики нарешті здійснилася, і гель-лаковий манікюр миттєво став фаворитом у більшості представниць прекрасної статі різного віку. Тому майстри нейл-студій і салонів з радістю пропонують цю послугу.
                            </Card.Text>
                            <Button variant="primary" style={{alignSelf: "flex-end", marginTop: 60}}>Детальніше</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={img3} style={{height: 350}}/>
                        <Card.Body>
                            <Card.Title>Масаж рук з кремом</Card.Title>
                            <Card.Text>
                            Мануальна дія впливає не тільки на суглоби, м'язи, шкіру кисті, а й на стан ЦНС. Адже пальці і долоні багаті нервовими закінченнями, які під час масажу рук посилають заспокійливі імпульси в головний мозок, стабілізуючи його роботу. Також на кистях розташовано безліч акупунктурних точок, що відповідають за функціональну активність різних органів і систем. Тому регулярний масаж верхніх кінцівок позитивно впливає на весь організм в цілому.
                            </Card.Text>
                            <Button variant="primary" style={{alignSelf: "flex-end", marginTop: 10}}>Детальніше</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        )
    }
}
