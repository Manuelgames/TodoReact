import { ReactComponent as CheckComponent } from '../CheckComponent/check.svg'
import { ReactComponent as DeleteComponent } from '../DeleteComponent/delete.svg'

function TodoIcon({ type, onClick, className = '' }) {
    const Icon = type === 'delete' ? DeleteComponent : CheckComponent;
    
    return (
        <span
            onClick={onClick}
            className={`Icon icon-svg Icon-${type} ${className}`}
        >
            <Icon fill="currentColor" width="24" height="24" />
        </span>
    );
}
export { TodoIcon }
