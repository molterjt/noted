import React from 'react';
import PropTypes from 'prop-types';
import "./ModalBox-Style.scss"
import {IoIosCloseCircleOutline} from 'react-icons/io'


export default class ModalBox extends React.Component{
    constructor(props){
        super(props);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    componentWillMount(){
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);
    }
    componentWillUnmount(){
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }
    handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
            27: () => {
                e.preventDefault();
                onCloseRequest();
                window.removeEventListener('keyup', this.handleKeyUp, false);
            },
        };

        if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    handleOutsideClick(e){

        if(!this.modal.contains(e.target)){
            this.props.onCloseRequest();
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
    }
    render() {
        return (
            <div
                ref={node => (this.modal = node)}
                className={'modal-box'}
                style={{
                    backgroundColor: (this.props.backColor ? this.props.backColor : '#fff'),
                    color: (this.props.modalTextColor ? this.props.modalTextColor : '#000'),
                }}

            >
                <div style={{height: '100%', width:'100%'}}>
                    <div
                        style={{height: '100%', width:'100%', textAlign:'center', display:'block',}}
                    >
                        {this.props.children}
                    </div>

                    <IoIosCloseCircleOutline
                        color={'springreen'}
                        size={28}
                        onClick={this.props.onCloseRequest}
                        className="close-request-icon"
                    />
                </div>
            </div>
        );
    }
}
ModalBox.propTypes = {
    onCloseRequest: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    backColor: PropTypes.string,
    modalTextColor: PropTypes.string,
};





