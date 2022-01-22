import { StyledTooltip } from '../AppsSection.jsx/App-item_style'

const Tooltip = ({tooltipContent, parent}) => {
    return (
        <StyledTooltip>
            <span>{tooltipContent}</span>
        </StyledTooltip> 
    )
}

export default Tooltip