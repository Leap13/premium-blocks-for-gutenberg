import classnames from "classnames";

const save = props => {

    const { className } = props;

    const {
        id,
        align,
        monthsCheck,
        weeksCheck,
        daysCheck,
        hoursCheck,
        minutesCheck,
        secondsCheck,
        monthLabel,
        weekLabel,
        dayLabel,
        hourLabel,
        minuteLabel,
        secondLabel

    } = props.attributes;

    const mainClasses = classnames(className, "premium-countdown");

    return (
        <div
            id={`premium-countdown__${id}`}
            className={`${mainClasses}`}
            style={{ justifyContent: align || "center" }}
        >
            <div id={`countdown__${id}`} className={`premium-countdown__init countdown down is-pre_countdown`}>
                <span className={`premium-countdown__row premium-countdown__show4`}>

                    {monthsCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>00</span>
                                <span className={`premium-countdown__period`}>{monthLabel}</span>
                            </span>
                        </span>
                    )}
                    {weeksCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>00</span>
                                <span className={`premium-countdown__period`}>{weekLabel}</span>
                            </span>
                        </span>
                    )}
                    {daysCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>00</span>
                                <span className={`premium-countdown__period`}>{dayLabel}</span>
                            </span>
                        </span>
                    )}
                    {hoursCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>23</span>
                                <span className={`premium-countdown__period`}>{hourLabel}</span>
                            </span>
                        </span>
                    )}
                    {minutesCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>16</span>
                                <span className={`premium-countdown__period`}>{minuteLabel}</span>
                            </span>
                        </span>
                    )}
                    {secondsCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}>
                                <span className={`premium-countdown__amount`}>37</span>
                                <span className={`premium-countdown__period`}>{secondLabel}</span>
                            </span>
                        </span>
                    )}

                </span>
            </div>
        </div>
    )

};

export default save;