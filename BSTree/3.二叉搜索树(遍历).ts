import Node from "../types/Node";
import { btPrint } from "hy-algokit";

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;

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

  /** 遍历操作 */
  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }

  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }

  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left);
      console.log(node.value);
      this.inOrderTraverseNode(node.right);
    }
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }

  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
      console.log(node.value);
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
bst.insert(37);
bst.insert(69);
bst.insert(32);
bst.insert(35);
bst.insert(30);
bst.insert(45);
bst.insert(33);
bst.insert(72);
bst.insert(28);
bst.insert(31);
bst.insert(36);
bst.insert(44);
bst.insert(52);
bst.insert(71);
bst.insert(80);

bst.printTree();
// 先序遍历测试
// bst.preOrderTraverse();
// 中序遍历测试
// bst.inOrderTraverse();
// 后序遍历测试
// bst.postOrderTraverse();
// 层序遍历测试
// bst.levelOrderTraverse();

export {};
