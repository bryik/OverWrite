import OverWriteEditor from "./components/OverWriteEditor";

//import "./debug.css";

const exampleText = `def dfs(start_node):
    to_explore = [start_node]
    while len(to_explore) > 0:
        node = to_explore.pop()
        yield node
        
        if node.left is not None:
            to_explore.append(node.left)
        if node.right is not None:
            to_explore.append(node.right)

def dfs(start_node):
    to_explore = [start_node]
    while len(to_explore) > 0:
        node = to_explore.pop()
        yield node
        
        if node.left is not None:
            to_explore.append(node.left)
        if node.right is not None:
            to_explore.append(node.right)

def dfs(start_node):
    to_explore = [start_node]
    while len(to_explore) > 0:
        node = to_explore.pop()
        yield node
        
        if node.left is not None:
            to_explore.append(node.left)
        if node.right is not None:
            to_explore.append(node.right)
`;

export default function App() {
  return (
    <div className="helvetica ma3 pa3">
      <h1 className="f1 lh-title">OverWrite</h1>
      <div className="">
        <OverWriteEditor textToCopy={exampleText} />
      </div>
    </div>
  );
}
