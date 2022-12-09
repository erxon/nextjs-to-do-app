import styles from "../public/styles/components.module.css";

function Task({height}) {
    return (
        <div
            style={{
                backgroundColor: "green",
                width: "150px",
                height: `${height}px`,
                borderRadius: "10px"
            }}
        >
                <p
                    style={{
                    paddingLeft: "5px",
                    color: "#fff"
                    }}
                >
                    Task 1
                </p>
            </div>
    );
}

export default function TimeTable(){
    return (
        <div className="App">
      {/* 
        Row 
        ********************************************************
        */}
      <div className={styles.flexboxContainerRow}>
        {/* 
          Column for times
          ********************************************************
          */}
        <div className={styles.flexboxContainerColumn}>
          <div
            className={styles.flexboxCellTime}
            style={{ borderBottom: "0px" }}
          ></div>
          <div className={styles.flexboxCellTime}>
            <p>1:00</p>
          </div>
        </div>
        {/* 
          Column for cells
          ********************************************************
          */}
        {/* 
          Column 1
          ********************************************************
          */}
        <div className={styles.flexboxContainerColumn}>
          <div className={styles.flexboxCell} style={{textAlign: "center", height: "60px"}}>
            <h2 style={{margin: "0"}}>Mon</h2>
            <p style={{marginTop: "0"}}>6</p>
          </div>
          <div className={styles.flexboxCell}></div>
          <Task height={150} />
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
        </div>
        {/* 
          Column 2
          ********************************************************
          */}
        <div className={styles.flexboxContainerColumn}>
          <div className={styles.flexboxCell} style={{textAlign: "center", height: "60px"}}>
            <h2 style={{margin: "0"}}>Mon</h2>
            <p style={{marginTop: "0"}}>6</p>
          </div>
          <Task height={90} />
        </div>
        {/* 
          Column 3
          ********************************************************
          */}
        <div className={styles.flexboxContainerColumn}>
          <div className={styles.flexboxCell} style={{textAlign: "center", height: "60px"}}>
            <h2 style={{margin: "0"}}>Mon</h2>
            <p style={{marginTop: "0"}}>6</p>
          </div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
        </div>
        {/* 
          Column 4
          ********************************************************
          */}
        <div className={styles.flexboxContainerColumn}>
          <div className={styles.flexboxCell} style={{textAlign: "center", height: "60px"}}>
            <h2 style={{margin: "0"}}>Mon</h2>
            <p style={{marginTop: "0"}}>6</p>
          </div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
        </div>
        <div className={styles.flexboxContainerColumn}>
          <div className={styles.flexboxCell} style={{height: "60px", textAlign: "center"}}>
            
            <h2 style={{margin: "0"}}>Mon</h2>
            <p style={{marginTop: "0"}}>6</p>
          </div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
          <div className={styles.flexboxCell}></div>
        </div>
      </div>
    </div>
    );
}

