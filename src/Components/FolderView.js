import React from "react";
import { last } from "lodash";
import styled from "styled-components";
import { FaFile, FaFolder, FaFolderOpen } from "react-icons/fa";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const renderNodeText = node => {
  return last(node.path.split("/"));
};
const FolderView = props => {
  const { path, nodes, fetchChildNodes, clicked, level } = props;
  const node = nodes[path];
  const givePaddingLeft = (level, type) => {
    let paddingLeft = level * 20;
    if (type === "file") paddingLeft += 10;
    return paddingLeft;
  };
  const StyledNode = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    padding: 10px 20px;
    margin: 2px 0;
    padding-left: ${props => givePaddingLeft(props.level, props.type)}px;
    &:hover {
      background-color: #f4f4f4;
    }
  `;
  const StyledSpan = styled.span`
    margin-left: ${props => (props.marginLeft ? props.marginLeft : 5)}px;
    text-transform: capitalize;
    font-family: "ZCOOL XiaoWei", serif;
  `;
  const NodeIcon = styled.div`
    margin-right: ${props => (props.marginRight ? props.marginRight : 0)}px;
  `;
  return (
    <React.Fragment>
      <StyledNode onClick={() => clicked(node)} level={level} type={node.type}>
        <NodeIcon marginRight={5}>
          {node.type === "folder" &&
            (node.isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />)}
        </NodeIcon>
        <NodeIcon>
          {node.type === "file" && <FaFile />}
          {node.type === "folder" &&
            (node.isOpen ? <FaFolderOpen /> : <FaFolder />)}
        </NodeIcon>
        <StyledSpan marginLeft={5}>{renderNodeText(node)}</StyledSpan>
      </StyledNode>
      <div>
        {node.isOpen &&
          fetchChildNodes(node.path).map(childPath => (
            <FolderView {...props} path={childPath.path} level={level + 1} />
          ))}
      </div>
    </React.Fragment>
  );
};

export default FolderView;
