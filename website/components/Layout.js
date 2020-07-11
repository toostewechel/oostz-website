const layoutStyle = {
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "960px",
  padding: "16px",
};

const Layout = (props) => <div style={layoutStyle}>{props.children}</div>;

export default Layout;
