import { ReactComponent as CheckComponent } from './CheckComponent/check.svg'
import { ReactComponent as DeleteComponent } from './DeleteComponent/delete.svg'

function TodoIcon({ type, color = 'currentColor', onClick }) {
    const Icon = type === 'delete' ? DeleteComponent : CheckComponent;

    return (
        <span
            className={`Icon icon-svg Icon-${type}`}
            onClick={onClick}
            style={{ color }}
        >
            <Icon fill="currentColor" width="24" height="24" />
        </span>
    );
}
export { TodoIcon }