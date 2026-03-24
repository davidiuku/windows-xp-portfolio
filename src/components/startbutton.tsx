import StartLogo from '../assets/startlogo.png'

export const StartButton = () => {
    return (
        <button className='startbutton'>
            <img src={StartLogo} width="20" />
            start
        </button>
    )
}
