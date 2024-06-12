import React from 'rect'
import img from "./images/imagess.jpeg"
function image() {
    return (

        <>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" thumbnail />
                    </Col>
                </Row>
            </Container>
            <div >
                <img src={img1} alt="" />
            </div>
        </>
    )
}
export default image


