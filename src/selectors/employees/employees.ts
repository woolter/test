const employeesSelector = {
    elm: {
        listBox:'#listBoxSelected',
        allCheckbox:'td.jqx-cell.jqx-grid-cell.jqx-item.jqx-grid-cell-nowrap > span.jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all',
        allNames: 'td.jqx-cell.jqx-grid-cell.jqx-item.jqx-grid-cell-nowrap > span.jqx-tree-grid-title.jqx-grid-cell-wrap',
        allArrows: 'td.jqx-cell.jqx-grid-cell.jqx-item.jqx-grid-cell-nowrap > span.jqx-tree-grid-expand-button.jqx-grid-group-expand.jqx-icon-arrow-down'
    },
    btn:{
        view:'#listBoxSelected'
    }
}

export { employeesSelector as default };
