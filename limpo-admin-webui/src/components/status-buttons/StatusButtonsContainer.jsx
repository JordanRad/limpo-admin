import React from 'react';
import StatusButton from './StatusButton';

const StatusButtonsContainer = (props) => {
    const statusFilters = ["ALL", "NEW", "PENDING", "APPROVED"]
    const buttonLabels = ["Всички", "Нови", "Чакащи", "Одобрени"]
    let { active } = props
    let Buttons = statusFilters.map((status, index) => {
        return (
            <StatusButton
                key={index}
                id={status}
                active={status === active}
                label={buttonLabels[index]} />
        )
    })
    return <div>{Buttons}</div>
}

export default StatusButtonsContainer;