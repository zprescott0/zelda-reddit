import triforceLogo from '../../../Images/assets/triforceLogo.png';
import './title.css';

export const Title = props => {
    return (
        <div className='title-container'>
            <span className='title'>
                <span className='title-text'>Zelda</span>
                <img src={triforceLogo}
                className='logo'
                alt='triforce logo' />
                <span className='title-text'>Reddit</span>
            </span>
        </div>
    );
};