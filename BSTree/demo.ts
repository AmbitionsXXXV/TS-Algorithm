import Node from "../types/Node";
import { btPrint } from "hy-algokit";

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  parent: TreeNode<T> | null = null;

  get isLeft() {
    return !!(this.parent && this.parent.left === this);
  }

  get isRight() {
    return !!(this.parent && this.parent.right === this);
  }
}

class BSTree<T> {
  root: TreeNode<T> | null = null;

  printTree() {
    btPrint(this.root);
  }

  // 插入数据的操作
  insert(value: T) {
    // 1.根据传入value创建Node(TreeNode)节点
    const newNode = new TreeNode<T>(value);

    // 2.判断当前是否已经有根节点
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      // 去左边继续查找空白位置
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 去右边查找空白位置
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 层序遍历
  levelOrderTraverse() {
    // 1.如果没有根节点，不需要遍历
    if (!this.root) return;

    // 2.创建队列结构
    const queue: TreeNode<T>[] = [];
    // 第一个节点是根节点
    queue.push(this.root);

    // 3.遍历队列中所有的节点(一次出队)
    while (queue.length) {
      // 3.1访问节点的过程
      const current = queue.shift()!;
      console.log(current.value);

      // 3.2将左子节点放入到队列
      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}

const bst = new BSTree<number>();
bst.insert(31);
bst.insert(22);
bst.insert(13);
bst.insert(44);
bst.insert(52);
bst.insert(34);
bst.insert(28);
bst.printTree();

// 反转树
function invertTree(root: TreeNode<number> | null): TreeNode<number> | null {
  if (root === null) return null;

  // root不为空
  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);

  return root;
}

const root = invertTree(bst.root);
btPrint(root);

export {};
