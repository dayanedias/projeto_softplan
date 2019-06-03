import React from 'react';
import './PopOver.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';

const styles = theme => ({
    typography: {
        margin: theme.spacing(2),
    },
});

class SimplePopover extends React.Component {
    state = {
        anchorEl: null,
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
                    <IconButton
                        aria-owns={open ? 'simple-popper' : undefined}
                        aria-haspopup="true"
                        variant="contained"
                        onClick={this.handleClick}>
                        <p className="icon-tag"><i className="fa fa-tags" /></p>
                    </IconButton>
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
                            <td className="listTag-title">Etiquetar Como:</td>
                            {props.tags.map(tag => {
                                return (
                                    <div key={tag.id} className="tags" style={{backgroundColor: tag.background}}>
                                        <Button className="btnTag" onClick={() => {
                                            this.handleClose()
                                            props.setTag(tag.id)
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

SimplePopover.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopover);