import React from "react";
import { TodoIcon } from '../TodoIcon/TodoIcon';


function CheckComponent({ onClick, className }) {
    return (
        <TodoIcon
            type='check'
            onClick={onClick}
            className={className}
        ></TodoIcon>
    )
}
export { CheckComponent }
