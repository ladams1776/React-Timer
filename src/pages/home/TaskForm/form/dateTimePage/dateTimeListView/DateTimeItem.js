import React from 'react';
import moment from 'moment-timezone';
import { useRippleEffectById } from 'hooks';
import styles from './DateTimeListView.module.css';

const myTimezone = "America/New_York";
const myDatetimeFormat = "YYYY-MM-DD hh:mm:ss a";

const DateTimeItem = ({ dateTime, setEditDateTime }) => {
    const myDatetimeString = moment(dateTime.date)
        .tz(myTimezone)
        .format(myDatetimeFormat);

    const onClick = () => {
        setEditDateTime({ id: dateTime.id, date: dateTime.date, minutes: dateTime.time })
    };
    const rippleClick = useRippleEffectById(dateTime.id, onClick);

    return <div id={dateTime.id} className={styles.content} key={dateTime.id + dateTime.time} onClick={rippleClick} data-testid="DateTimeItem">
        <input type="hidden" value={dateTime.id} name="id" />
        <div className={styles.date}>Date: {myDatetimeString}</div>
        <div className={styles.time}>Minutes: {dateTime.time}</div>
    </div>
};

export default DateTimeItem;