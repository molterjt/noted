import React from 'react';
import PropTypes from 'prop-types';
import ModalBox from './ModalBox';
import "./ModalBox-Style.scss"
import {IoMdOpen} from 'react-icons/io';



export default class ModalController extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModal: false,
        };
    }
    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal})
    };
    render(){
        return(
            <div style={{padding:3}}>
                <IoMdOpen
                    color={"#1cb684"}
                    size={24}
                    style={{cursor:'pointer',}}
                    onClick={() => this.toggleModal()}
                />
                {
                    this.state.showModal && (
                        <ModalBox
                            style={{zIndex:2}}
                            onCloseRequest={()=>this.toggleModal()}
                            backColor={this.props.backColor}
                            modalTextColor={this.props.modalTextColor}
                        >
                            {this.props.children}
                        </ModalBox>
                    )
                }

            </div>
        );
    }
}
ModalController.propTypes = {
    buttonLabel: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    backColor: PropTypes.string,
    modalTextColor: PropTypes.string,
};




