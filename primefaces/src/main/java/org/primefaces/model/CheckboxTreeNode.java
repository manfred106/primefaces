/*
 * The MIT License
 *
 * Copyright (c) 2009-2024 PrimeTek Informatics
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.primefaces.model;

import java.io.Serializable;
import java.util.List;

public class CheckboxTreeNode<T> implements TreeNode<T>, Serializable {

    public static final String DEFAULT_TYPE = "default";

    private static final long serialVersionUID = 1L;

    private String type;

    private T data;

    private List<TreeNode<T>> children;

    private TreeNode parent;

    private boolean expanded;

    private boolean selected;

    private boolean selectable = true;

    private boolean partialSelected;

    private String rowKey;

    public CheckboxTreeNode() {
        this(null);
    }

    public CheckboxTreeNode(T data) {
        this(data, null);
    }

    public CheckboxTreeNode(T data, TreeNode parent) {
        this(DEFAULT_TYPE, data, parent);
    }

    public CheckboxTreeNode(String type, T data, TreeNode parent) {
        this.type = type;
        this.data = data;
        this.children = new CheckboxTreeNodeChildren(this);
        if (parent != null) {
            parent.getChildren().add(this);
        }
    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public void setType(String type) {
        this.type = type;
    }

    @Override
    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public List<TreeNode<T>> getChildren() {
        return children;
    }

    public void setChildren(List<TreeNode<T>> children) {
        if (children instanceof CheckboxTreeNodeChildren) {
            this.children = children;
        }
        else {
            CheckboxTreeNodeChildren<T> nodeChildren = new CheckboxTreeNodeChildren(this);
            nodeChildren.addAll(children);
            this.children = nodeChildren;
        }
    }

    @Override
    public TreeNode getParent() {
        return parent;
    }

    @Override
    public void setParent(TreeNode parent) {
        this.parent = parent;
    }

    @Override
    public void clearParent() {
        this.parent = null;
    }

    @Override
    public boolean isExpanded() {
        return expanded;
    }

    @Override
    public void setExpanded(boolean expanded) {
        this.expanded = expanded;
    }

    @Override
    public boolean isSelected() {
        return this.selected;
    }

    public void setSelected(boolean selected, boolean propagateDown, boolean propagateUp) {
        this.selected = selected;
        partialSelected = false;

        if (propagateDown && propagateUp) {
            setSelected(selected);
        }
        else if (!propagateDown && propagateUp) {
            if (getParent() != null) {
                ((CheckboxTreeNode) getParent()).propagateSelectionUp();
            }
        }
        else if (propagateDown) {
            if (!isLeaf()) {
                for (TreeNode child : children) {
                    ((CheckboxTreeNode) child).propagateSelectionDown(selected);
                }
            }
        }
    }

    public void setSelected(boolean selected, boolean propagate) {
        if (propagate) {
            setSelected(selected);
        }
        else {
            this.selected = selected;
        }
    }

    @Override
    public void setSelected(boolean selected) {
        this.selected = selected;
        this.partialSelected = false;

        if (!isLeaf()) {
            for (TreeNode child : children) {
                ((CheckboxTreeNode) child).propagateSelectionDown(selected);
            }
        }

        if (getParent() != null) {
            ((CheckboxTreeNode) getParent()).propagateSelectionUp();
        }
    }

    protected void propagateSelectionDown(boolean selected) {
        if (!this.isSelectable()) {
            return;
        }
        this.selected = selected;
        this.partialSelected = false;

        for (TreeNode child : children) {
            ((CheckboxTreeNode) child).propagateSelectionDown(selected);
        }
    }

    protected void propagateSelectionUp() {
        if (!isSelectable()) {
            return;
        }
        boolean allChildrenSelected = true;
        partialSelected = false;

        for (int i = 0; i < getChildCount(); i++) {
            TreeNode childNode = getChildren().get(i);

            boolean childSelected = childNode.isSelected();
            boolean childPartialSelected = childNode.isPartialSelected();
            allChildrenSelected = allChildrenSelected && childSelected;
            partialSelected = partialSelected || childSelected || childPartialSelected;
        }

        selected = allChildrenSelected;

        if (allChildrenSelected) {
            setPartialSelected(false);
        }

        if (getParent() != null) {
            ((CheckboxTreeNode) getParent()).propagateSelectionUp();
        }
    }

    @Override
    public boolean isSelectable() {
        return selectable;
    }

    @Override
    public void setSelectable(boolean selectable) {
        this.selectable = selectable;
    }

    @Override
    public int getChildCount() {
        if (children == null) {
            return 0;
        }
        return children.size();
    }

    @Override
    public String getRowKey() {
        return rowKey;
    }

    @Override
    public void setRowKey(String rowKey) {
        this.rowKey = rowKey;
    }

    @Override
    public boolean isLeaf() {
        if (children == null) {
            return true;
        }

        return children.isEmpty();
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((data == null) ? 0 : data.hashCode());
        result = prime * result + ((rowKey == null) ? 0 : rowKey.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }

        CheckboxTreeNode other = (CheckboxTreeNode) obj;
        if (data == null) {
            if (other.getData() != null) {
                return false;
            }
        }
        else if (!data.equals(other.getData())) {
            return false;
        }

        if (rowKey == null) {
            return other.rowKey == null;
        }

        return rowKey.equals(other.rowKey);
    }

    @Override
    public String toString() {
        if (data != null) {
            return data.toString();
        }
        else {
            return super.toString();
        }
    }

    @Override
    public boolean isPartialSelected() {
        return partialSelected;
    }

    @Override
    public void setPartialSelected(boolean partialSelected) {
        this.partialSelected = partialSelected;
    }
}
