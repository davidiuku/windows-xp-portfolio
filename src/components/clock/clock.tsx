import { useLiveDate } from '../../hooks/use-live-date'
import styles from './Clock.module.css';

export const Clock = () => {
    const now = useLiveDate();
    const hour = now.getHours() % 12 || 12;
    const minute = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() < 12 ? 'AM' : 'PM';

    return (
        <div className={styles.clock}>
            {hour}:{minute} {ampm}
        </div>
    );
};
