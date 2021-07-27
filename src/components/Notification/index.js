import React from 'react';
import { MessageBar, MessageBarType, MessageBarButton } from '@fluentui/react';

const Notification = ({ title, onClickAnswer }) => {

    return (
        <MessageBar
            messageBarIconProps={{ iconName: 'Delete' }}
            messageBarType={MessageBarType.severeWarning}
            actions={
                <div>
                    <MessageBarButton onClick={() => onClickAnswer(true)}>Delete</MessageBarButton>
                    <MessageBarButton onClick={() => onClickAnswer(false)}>Cancel</MessageBarButton>
                </div>
            }
        >
            <span>{`Are you sure you want to delete the post `}<b>{`"${title}"`}</b>{` ?`}</span>
        </MessageBar>
    )
}

export default Notification;