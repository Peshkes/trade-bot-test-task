const BotSvg = ({color}: {color: string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535 416">
            <path fill={color} fillRule="evenodd" style={{ filter: "brightness(0.8)" }}
                  d="M297,178h119v59h-119v-59ZM267,59v357h30v-60h59v60h60v-60h59v60h60v-238h-60v-59h-59v-60h-60V0h-59v59h-30Z"/>
            <path fill={color} fillRule="evenodd"
                  d="M119,178h119v59h-119v-59h0ZM267,416V59h-29V0h-60v59h-59v60h-60v59H0v238h59v-60h60v60h59v-60h60v60h29Z"/>
        </svg>
    )
}
export default BotSvg
