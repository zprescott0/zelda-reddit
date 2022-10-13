import triforceLogo from '../../../Images/assets/triforceLogo.png';

export const Title = props => {
    return (
        <span className='title'>
            Zelda
            <img src={triforceLogo}
            className='logo' />
            Reddit
        </span>
    );
};