import styles from "../public/styles/calendar.module.css"
import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Calendar() {
  return (
      <div className={styles.calendar}>
        <div className={styles.calendarHead}>
          <div className={styles.iconButton}>
            <IconButton aria-label="next">
              <ArrowLeftIcon />
            </IconButton>
          </div>
          <div>
            <p className={styles.p}>2022</p>
            <h3 className={styles.h3}>November</h3>
          </div>
          <div className={styles.iconButton}>
            <IconButton aria-label="next">
              <ArrowRightIcon />
            </IconButton>
          </div>
        </div>
        <div class={styles.calendarRow}>
          <div className={styles.calendarColumn}>
            <div className={styles.calendarCell}>Su</div>
            <div className={styles.calendarCell}>1</div>
            <div className={styles.calendarCell}>2</div>
            <div className={styles.calendarCell}>3</div>
            <div className={styles.calendarCell}>4</div>
            <div className={styles.calendarCell}>5</div>
            <div className={styles.calendarCell}>6</div>
          </div>
          <div className={styles.calendarColumn}>
            <div className={styles.calendarCell}>Mo</div>
            <div className={styles.calendarCell}>1</div>
            <div className={styles.calendarCell}>2</div>
            <div className={styles.calendarCell}>3</div>
            <div className={styles.calendarCell}>4</div>
            <div className={styles.calendarCell}>5</div>
            <div className={styles.calendarCell}>6</div>
          </div>
          <div className={styles.calendarColumn}>
            <div className={styles.calendarCell}>Tu</div>
            <div className={styles.calendarCell}>1</div>
            <div className={styles.calendarCell}>2</div>
            <div className={styles.calendarCell}>3</div>
            <div className={styles.calendarCell}>4</div>
            <div className={styles.calendarCell}>5</div>
            <div className={styles.calendarCell}>6</div>
          </div>
          <div className={styles.calendarColumn}>
            <div className={styles.calendarCell}>Th</div>
            <div className={styles.calendarCell}>1</div>
            <div className={styles.calendarCell}>2</div>
            <div className={styles.calendarCell}>3</div>
            <div className={styles.calendarCell}>4</div>
            <div className={styles.calendarCell}>5</div>
            <div className={styles.calendarCell}>6</div>
          </div>
          <div className={styles.calendarColumn}>
            <div className={styles.calendarCell}>Fr</div>
            <div className={styles.calendarCell}>1</div>
            <div className={styles.calendarCell}>2</div>
            <div className={styles.calendarCell}>3</div>
            <div className={styles.calendarCell}>4</div>
            <div className={styles.calendarCell}>5</div>
            <div className={styles.calendarCell}>6</div>
          </div>
          <div className={styles.calendarColumn}>
            <div className={styles.calendarCell}>Sa</div>
            <div className={styles.calendarCell}>1</div>
            <div className={styles.calendarCell}>2</div>
            <div className={styles.calendarCell}>3</div>
            <div className={styles.calendarCell}>4</div>
            <div className={styles.calendarCell}>5</div>
            <div className={styles.calendarCell}>6</div>
          </div>
        </div>
      </div>
  );
}
