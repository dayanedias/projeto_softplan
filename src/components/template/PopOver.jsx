import React from 'react';
import './PopOver.css'
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

class SimplePopover extends React.Component {

    state = {
        anchorEl: null,
        cards: this.props.card,
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {

        const props = this.props

        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <React.Fragment>
                <div>
                    <Button
                        aria-owns={open ? 'simple-popper' : undefined}
                        onClick={this.handleClick}>
                        <p className="icon-tag"><i className="fa fa-tags"/></p>
                    </Button>


                    <Popover
                        id="simple-popper"
                        open={open}
                        anchorEl={anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}>

                        <div className="listTag p-3">
                            <span className="listTag-title">Etiquetar Como:</span>
                            {/* {console.log("PopOver",props)} */}

                            {/* {this.popOver(props.tags)} */}

                            {props.tags.map(tag => {

                                return (
                                    <div key={tag.id} className="tags" style={{ backgroundColor: tag.background }}>
                                        <Button className="btnTag" onClick={() => {
                                            this.handleClose()
                                            props.chooseTag(tag.id, this.props.card)
                                        }}>
                                            <span style={{ color: tag.color }} >
                                                {tag.name}
                                            </span>
                                        </Button>
                                    </div>
                                )
                            })}

                        </div>

                    </Popover>


                </div>
            </React.Fragment>
        );
    }

}

// SimplePopover.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default SimplePopover;