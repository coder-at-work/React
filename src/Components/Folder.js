import React, { Component } from "react";
import data from "./../data/data.json";
import FolderView from "./FolderView";

class Folder extends Component {
  state = {
    nodes: data
  };
  fetchRootNodes = () => {
    const { nodes } = this.state;
    return Object.keys(nodes).filter(
      nodePath => nodes[nodePath].isRoot === true
    );
  };
  fetchChildNodes = nodePath => {
    const { nodes } = this.state;
    if (!nodes[nodePath].children) return;
    return nodes[nodePath].children.map(path => nodes[path]);
  };
  onClickHandler = node => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  };
  render() {
    const { nodes } = this.state;
    const rootNodes = this.fetchRootNodes();
    return (
      <div>
        {rootNodes.map(path => (
          <FolderView
            nodes={nodes}
            path={path}
            fetchChildNodes={this.fetchChildNodes}
            clicked={this.onClickHandler}
            level={1}
          />
        ))}
      </div>
    );
  }
}

export default Folder;
