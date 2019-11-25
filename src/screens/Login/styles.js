import { Colors } from "../../utils";

export const style = {
  mainContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: Colors.background,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  authWrapper: {
    width: 450,
    height: "80vh",
    backgroundColor: Colors.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  authHeader: {
    width: "100%",
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  borderWrapper: {
    width: 300,
    height: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderLeftWidth: 5,
    borderLeftColor: Colors.skyBlue,
    borderLeftStyle: "solid"
  },

  headerTitle: {
    fontSize: 24,
    color: Colors.headerTextColor,
    margin: "0px 0px 0px 5px"
  },

  makeBold: {
    fontWeight: "bold"
  },

  changeColor: {
    fontWeight: "bold",
    color: Colors.skyBlue
  },

  headerSubHeading: {
    fontSize: 12,
    margin: "0px 0px 0px 5px",
    color: Colors.headerTextColor
  },

  fieldsWrapper: {
    width: "80%"
  },

  makeWidth: {
    width: "100%"
  },

  btnCreateAccount: {
    width: "100%",
    marginTop: 20
  }
};
