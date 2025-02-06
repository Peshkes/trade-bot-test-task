import {useBalance} from "../../../features/balance/useBalance.ts";
import styles from "./balance.module.css"

const Balance = () => {
    const {balance, on_hold, trading_capital, trading_capital_currency} = useBalance();
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>TRADING CAPITAL</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.botleft + " " + styles.white}>
                    {trading_capital && trading_capital_currency ?
                        <>
                            <div className={styles.amount}>{trading_capital}</div>
                            <div className={styles.currency}>{trading_capital_currency}</div>
                        </>

                        :
                        <p>загрузка</p>}
                </div>
                <div className={styles.botright}>
                    <div>
                        <p>BALANCE: </p>
                        {balance ? <p><span className={styles.white}>{balance}</span> 🅗</p> : <p>загрузка</p>}
                    </div>
                    <div>
                        <p>ON HOLD: </p>
                        {on_hold ? <p><span className={styles.white}>{on_hold}</span> 🅗</p> : <p>загрузка</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Balance
