export default {
    time_table_wrapper: {
      height: "100%",
      margin: "0",
      fontFamily: '"Open Sans", sans-serif',
      color: "#efefef",
      overflow: "hidden"
    },
    day: {
      position: "relative",
      height: "100vh",
      float: "left",
      backgroundColor: "#fff",
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.08) 50%, transparent 50%)"
    },
    day_title: {
      backgroundColor: "#34495e",
      fontSize: "0.7rem",
      fontWeight: "600",
      textTransform: "uppercase",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      zIndex: "2"
    },
    hour: {
      backgroundColor: "rgba(52, 73, 94, 0.9)",
      fontSize: "12px",
      textAlign: "center",
      width: "5rem"
    },
    event: {
      position: "absolute",
      width: "100%",
      height: "15vh",
      lineHeight: "15vh",
      backgroundColor: "rgb(18, 205, 177)",
      fontSize: "0.7em",
      fontWeight: "300",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    },
    event_info: {
      lineHeight: "initial",
      textAlign: "center"
    }
  };
  