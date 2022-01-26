import { StyledTooltip } from '../Dev-section/App-item_style'

const Tooltip = ({ tooltipContent, parent }) => {
  return (
    <StyledTooltip>
      <span>{tooltipContent}</span>
    </StyledTooltip>
  )
}

export default Tooltip
