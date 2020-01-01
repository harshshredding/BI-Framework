import React from "react";
import PropTypes from "prop-types"

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
      display: "block",
      padding: "16px 5px",
      color: "#757575",
      textDecoration: "none",
  },
  sidebarLinkSelected: {
    display: "block",
    padding: "16px 5px",
    color: "#757575",
    textDecoration: "none",
    backgroundColor: "#B2F7BA",
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  header: {
    backgroundColor: "#148121",
    color: "white",
    padding: "16px",
    fontSize: "1.5em"
  }
};

class MenuBarContent extends React.Component {

    menuItemList = [
        "Dashboards",
        "Check Sales",
        "Check Items",
        "Labor",
        "PMS",
        "CMS"
    ];

    render() {
        const itemLinks = this.menuItemList.map(
            (item) => {
              if (this.props.selectedMenuItem === item) {
                return (
                  <a href="#" style={styles.sidebarLinkSelected} onClick={() => {this.props.handler(item)}}>
                    {item}
                  </a>
                )
              } else {
                return (
                    <a href="#" style={styles.sidebarLink} onClick={() => {this.props.handler(item)}}>
                      {item}
                    </a>
                )
              }
            }
        )

        return (
        <div>
            <div style={styles.header}>Analyze</div>
            {itemLinks}
        </div>
        );
    }
};

MenuBarContent.propTypes = {
    style: PropTypes.object
}

export default MenuBarContent;