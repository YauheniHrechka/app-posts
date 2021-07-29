import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../';
import { FocusTrapCallout, Stack, FocusZone, mergeStyleSets, FontWeights, Text } from '@fluentui/react';

const Notification = ({ buttonId, title, onClickAnswer }) => {

    return (
        <FocusTrapCallout
            role="alertdialog"
            backgroundColor="#fed9cc"
            className={styles.callout}
            target={`#${buttonId}`}
            setInitialFocus
        >
            <Text block variant="small" className={styles.calloutMain}>
                <span>{`Are you sure you want to delete the post `}<b>{`"${title}"`}</b>{` ?`}</span>
            </Text>
            <FocusZone>
                <Stack className={styles.buttons} horizontal>
                    <Button kind="default" className={styles.button} onClick={() => onClickAnswer(true)}>Delete</Button>
                    <Button kind="default" className={styles.button} onClick={() => onClickAnswer(false)}>Cancel</Button>
                </Stack>
            </FocusZone>
        </FocusTrapCallout>
    )
}

const styles = mergeStyleSets({
    callout: {
        width: '320px',
    },
    calloutMain: {
        padding: '20px 24px',
    },
    title: {
        marginBottom: '12px',
        fontWeight: FontWeights.semilight,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '0 24px 20px 0',
    },
    button: {
        background: '#ffffff',
        borderRadius: '10px',
        margin: '0 5px'
    },
});

Notification.propTypes = {
    buttonId: PropTypes.string,
    title: PropTypes.string,
    onClickAnswer: PropTypes.func,
}

Notification.defaultProps = {
    buttonId: '',
    title: '',
    onClickAnswer: () => { },
}

export default Notification;