import React from 'react';
import '../Components.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageButton from '../components/ImageButton';
import Picture from '../components/Picture';
import InputField from '../components/InputField'
import BigInputField from '../components/BigInputField'

class BigPopup extends React.Component {
  
  render() {
    return (
        <div id={this.props.id}>
            <Row>
                <Col md={12}>
                    <ImageButton 
                        className={this.props.imgButtonClassName1} 
                        src={this.props.imgButtonSrc1}
                        onClick={this.props.imgButtonOnClick1}>
                    </ImageButton>
                </Col>
                <Col md={12} className="md-pb-2">
                    <Picture 
                        id={this.props.pictureId1} 
                        src={this.props.pictureSrc1}>
                    </Picture>
                </Col>
                <Col md={12} className="md-pb-2">
                    <InputField 
                        id={this.props.inputFieldId1}
                        value={this.props.inputFieldValue1}
                        readOnly={true}>
                    </InputField>
                </Col>
                <Col md={{ span: 6, offset: 3}} className="text-center md-pb-2">
                    <InputField 
                        id={this.props.inputFieldId2}
                        value={this.props.inputFieldValue2}
                        readOnly={true}>
                    </InputField>
                </Col>
                <Col md={12} className="md-pb-2">
                    <BigInputField 
                        id={this.props.bigInputFieldId1} 
                        rows={8} 
                        value={this.props.bigInputFieldValue1}
                        readOnly={true}> 
                    </BigInputField>
                </Col>
            </Row>
            <Row className="md-pb-2 text-center">
                <Col md={2}>
                    <Picture 
                        id={this.props.pictureId2} 
                        src={this.props.pictureSrc2}>
                    </Picture>
                </Col>
                <Col md={10}>
                <Row></Row>
                    <InputField 
                        id={this.props.inputFieldId3}
                        value={this.props.inputFieldValue3}
                        readOnly={true}>
                    </InputField>
                    <InputField 
                        id={this.props.inputFieldId4}
                        value={this.props.inputFieldValue4}
                        readOnly={true}>
                    </InputField>
                </Col>    
            </Row>
        </div>
    )
  }
}

export default BigPopup;