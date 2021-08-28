import React from 'react';
import StatusButton from './StatusButton';

const StatusButtonsContainer = (props) => {
    let { statusFilters, active, buttonLabels } = props
    let Buttons = statusFilters.map((status, index) => {
        return (
            <StatusButton
                key={index}
                id={status}
                onClick={props.onClick}
                active={status === active}
                label={buttonLabels[index]} />
        )
    })
    return <div>{Buttons}</div>
}

export default StatusButtonsContainer;