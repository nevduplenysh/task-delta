
import avatar from '../../images/avatar.jpg'
import email from '../../images/mail.svg'
import phone from '../../images/phone.svg'
import './header.css'

const Header = () => (
    <header className="header">
        <div className="container-header-image">
        </div>
        <div className="container-info">
            <div className='container-image-avatar'>
                <img
                    className="image-avatar"
                    src={avatar}
                    alt="Фото профиля"
                /> 
            </div>
            <div className='container-name-info'>
                <p className='name-user'>Ricardo Cooper</p>
                <div className='container-botton'>
                    <button className='button'>
                        <img 
                            className='image-btn'
                            src={email}
                        />
                        Message
                    </button>
                    <button className='button'>
                        <img
                            className='image-btn'
                            src={phone}
                        />
                        Call
                    </button>
                </div>
            </div>
        </div>
    </header>
)

export default Header