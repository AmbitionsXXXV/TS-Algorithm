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
  private root: TreeNode<T> | null = null;

  printTree() {
    btPrint(this.root);
  }

  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root;
    let parent: TreeNode<T> | null = null;
    while (current) {
      if (current.value === value) {
        return current;
      }

      parent = current;
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }

      if (current) current.parent = parent;
    }

    return null;
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

  // 最值获取
  getMax(): T | null {
    let current = this.root;
    while (current && current.right) {
      current = current.right;
    }

    return current?.value ?? null;
  }

  getMin(): T | null {
    let current = this.root;
    while (current && current.left) {
      current = current.left;
    }

    return current?.value ?? null;
  }

  // 搜索特定的值，判断是否存在
  search(value: T): boolean {
    return !!this.searchNode(value);
  }

  // 删除操作
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 获取右子树
    let current = delNode.right;
    let successor: TreeNode<T> | null = null;
    while (current) {
      successor = current;
      current = current.left;
      if (current) {
        current.parent = successor;
      }
    }
    // 拿到后继节点
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right;
      successor!.right = delNode.right;
    }

    // 找到后继节点后
    // 一定要进行的操作：将删除节点的left赋值给后继节点的left
    successor!.left = delNode.left;

    return successor!;
  }

  remove(value: T): boolean {
    // 1.先搜索是否有该值
    const current = this.searchNode(value);
    if (!current) return false;

    // 2.获取到三个东西：当前节点/父节点/是属于父节点的左子节点还是右子节点
    // 3.1如果删除的是叶子节点
    if (current.left === null && current.right === null) {
      // 叶子节点
      if (current === this.root) {
        // 根节点
        this.root = null;
      } else if (current.isLeft) {
        // 父节点的左子节点
        current.parent!.left = null;
      } else {
        current.parent!.right = null;
      }
    }

    // 3.2.如果只有一个子节点：只有左子节点
    else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left;
      } else if (current.isLeft) {
        current.parent!.left = current.left;
      } else {
        current.parent!.right = current.left;
      }
    }

    // 3.3.只有一个子节点：只有右子节点
    else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (current.isLeft) {
        current.parent!.left = current.right;
      } else {
        current.parent!.right = current.right;
      }
    }

    // 4.有两个子节点
    else {
      const successor = this.getSuccessor(current);
      if (current === this.root) {
        this.root = successor;
      } else if (current.isLeft) {
        current.parent!.left = successor;
      } else {
        current.parent!.right = successor;
      }
    }

    return true;
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
bst.levelOrderTraverse();

bst.printTree();
// 删除功能
bst.remove(28);
bst.remove(52);
bst.remove(69);
bst.remove(32);

bst.printTree();

export {};
