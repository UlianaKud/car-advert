import scss from './Filter.module.scss';
import Dropdown from '../../../components/Dropdown';

const Filter = () => {
    return(
        <div className={scss.filter}>
            <Dropdown/>
        </div>
    )
};

export default Filter;