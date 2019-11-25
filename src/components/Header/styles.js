import { Colors } from "../../utils";

export const style = {
  headerContainer: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 4
  },
  secondaryTitle: {
    color: Colors.skyBlue
  },
  btnLogout: {
    width: 80,
    height: 40,
    marginRight: 10
  }
};
