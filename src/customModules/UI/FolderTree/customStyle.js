export default {
  tree: {
    base: {
      listStyle: "none",
      backgroundColor: "#transparent",
      margin: 0,
      // padding: "15px 0",
      color: "#9DA5AB",
      fontFamily: "Roboto ,sans-serif",
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      height: "100%"
    },
    node: {
      base: {
        position: "relative"
      },
      link: {
        cursor: "pointer",
        position: "relative",
        padding: "5px 5px",
        display: "block"
      },
      activeLink: {
        background: "#6294c6",
        margin: "5px 0"
      },
      toggle: {
        // base: {
        //   position: "relative",
        //   display: "inline-block",
        //   verticalAlign: "top",
        //   marginLeft: "-5px",
        //   height: "30px",
        //   width: "25px"
        // },
        wrapper: {
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-7px 0 0 -7px",
          height: "14px"
        },
        height: 14,
        width: 14,
        arrow: {
          fill: "transparent",
          strokeWidth: 0
        }
      },
      header: {
        base: {
          display: "inline-block",
          verticalAlign: "top",
          color: "#343a40"
        },
        connector: {
          width: "2px",
          height: "12px",
          borderLeft: "solid 2px black",
          borderBottom: "solid 2px black",
          position: "absolute",
          top: "0px",
          left: "-21px"
        },
        title: {
          lineHeight: "100px",
          verticalAlign: "middle"
        }
      },
      subtree: {
        listStyle: "none",
        paddingLeft: "20px"
      },
      loading: {
        color: "#343a40"
      }
    }
  }
};
