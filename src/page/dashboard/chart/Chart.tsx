import {Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import styles from "./chart.module.css"
import {useBots} from "../../../features/bots/useBots.ts";

const generateRandomData = () => {
    const data = [];
    let value = Math.random() * 50;

    for (let i = 1; i <= 7; i++) {
        value += (Math.random() - 0.5) * 15;
        data.push({ date: `2${i}.04`, value: Math.round(value * 10) / 10 });
    }

    return data;
};

const Chart = () => {
    const {selectedBot, selectedInterval, botsData} = useBots();
    const data = generateRandomData();

    let percent : string | number = "загрузка";
    if (botsData && selectedBot) {
        const botData = botsData.find((b) => b.name === selectedBot);
        percent = botData ? botData[selectedInterval] ?? 0 : 0;
    }

    const percentClass =
        typeof percent === "string"
            ? styles.stringPercents
            : percent >= 0
                ? styles.positivePercents
                : styles.negativePercents;

    return (
        <div className={styles.container}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ right: -1, left: -1, }}>
                    <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#007BD8" stopOpacity={0.7} />
                            <stop offset="90%" stopColor="#007BD8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#4E607730" strokeLinecap={"round"}  />
                    <XAxis
                        dataKey="date"
                        tick={{ fill: "#4E6077FF", fontSize: 13 }}
                        axisLine={false}
                        tickLine={false}
                        tickCount={2}
                        tickMargin={12}
                        tickFormatter={(value, index) => (index === 5 ? "" : value)}
                    />
                    <Area type="monotone" dataKey="value" stroke="#007BD8" fill="url(#colorGradient)" strokeWidth={1}/>
                    <Tooltip contentStyle={{ backgroundColor: "#1B263B", border: "none", color: "#007BD8" }}/>
                    <Line type="monotone" dataKey="value" stroke="#007BD8" strokeWidth={2} dot={false}/>
                </AreaChart>
            </ResponsiveContainer>
            <p className={styles.percentage + " " + percentClass}>{percent}%</p>
        </div>
    );
};
export default Chart
