import StartLogo from '../assets/startlogo.png'

export const StartButton = () => {
    return (
        <div className='startbutton'>
            <img src={StartLogo} width="20"></img>
            <p>start</p>
        </div>
    )
}
