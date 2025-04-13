export const getFooterStyles = (open: boolean) => ({
  box: {
    width: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
      xl: open ? "calc(1870px - 250px)" : "1870px"
    },
    maxWidth: open ? "calc(1870px - 250px)" : "1870px",
    mx: "auto",
    backgroundColor: "#212121",
    color: "white",
    py: { xs: 2, sm: 4 },
    mt: 5,
    borderRadius: 2,
    transition: "width 0.3s ease"
  }
});
