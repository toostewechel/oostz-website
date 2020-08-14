const layoutStyle = {
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "1024px",
  padding: "16px",
};

const Layout = (props) => (
  <div id={props.id} style={layoutStyle}>
    {props.children}
  </div>
);

export default Layout;
