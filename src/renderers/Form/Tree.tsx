import React from 'react';
import cx from 'classnames';
import TreeSelector from '../../components/Tree';
import {
  FormOptionsControl,
  OptionsControl,
  OptionsControlProps
} from './Options';
import {Spinner} from '../../components';
import {SchemaApi} from '../../Schema';

/**
 * Tree 下拉选择框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/tree
 */
export interface TreeControlSchema extends FormOptionsControl {
  type: 'tree';

  /**
   * 是否隐藏顶级
   */
  hideRoot?: boolean;

  /**
   * 顶级选项的名称
   */
  rootLabel?: string;

  /**
   * 顶级选项的值
   */
  rootValue?: any;

  /**
   * 显示图标
   */
  showIcon?: boolean;

  /**
   * 父子之间是否完全独立。
   */
  cascade?: boolean;

  /**
   * 选父级的时候是否把子节点的值也包含在内。
   */
  withChildren?: boolean;

  /**
   * 选父级的时候，是否只把子节点的值包含在内
   */
  onlyChildren?: boolean;

  deferApi?: SchemaApi;
}

export interface TreeProps
  extends OptionsControlProps,
    Omit<
      TreeControlSchema,
      | 'type'
      | 'options'
      | 'className'
      | 'inputClassName'
      | 'descriptionClassName'
    > {}

export default class TreeControl extends React.Component<TreeProps> {
  static defaultProps: Partial<TreeProps> = {
    placeholder: 'loading',
    multiple: false,
    rootLabel: '顶级',
    rootValue: '',
    showIcon: true
  };

  reload() {
    const reload = this.props.reloadOptions;
    reload && reload();
  }

  render() {
    const {
      className,
      treeContainerClassName,
      classPrefix: ns,
      value,
      onChange,
      disabled,
      joinValues,
      extractValue,
      delimiter,
      placeholder,
      options,
      multiple,
      valueField,
      initiallyOpen,
      unfoldedLevel,
      withChildren,
      onlyChildren,
      loading,
      hideRoot,
      rootLabel,
      cascade,
      rootValue,
      showIcon,
      showRadio,
      showOutline,
      onAdd,
      creatable,
      creatableLevelList,
      createTip,
      addControls,
      onEdit,
      editable,
      editableLevelList,
      editTip,
      editControls,
      removable,
      removableLevelList,
      removeTip,
      onDelete,
      rootCreateTip,
      labelField,
      deferLoad,
      translate: __
    } = this.props;

    return (
      <div
        className={cx(`${ns}TreeControl`, className, treeContainerClassName)}
      >
        <Spinner size="sm" key="info" show={loading} />
        {loading ? null : (
          <TreeSelector
            classPrefix={ns}
            labelField={labelField}
            valueField={valueField}
            disabled={disabled}
            onChange={onChange}
            joinValues={joinValues}
            extractValue={extractValue}
            delimiter={delimiter}
            placeholder={__(placeholder)}
            options={options}
            multiple={multiple}
            initiallyOpen={initiallyOpen}
            unfoldedLevel={unfoldedLevel}
            withChildren={withChildren}
            onlyChildren={onlyChildren}
            hideRoot={hideRoot}
            rootLabel={__(rootLabel)}
            rootValue={rootValue}
            showIcon={showIcon}
            showRadio={showRadio}
            showOutline={showOutline}
            cascade={cascade}
            foldedField="collapsed"
            value={value || ''}
            selfDisabledAffectChildren={false}
            onAdd={onAdd}
            creatable={creatable}
            creatableLevelList={creatableLevelList}
            createTip={createTip}
            rootCreateTip={rootCreateTip}
            onEdit={onEdit}
            editable={editable}
            editableLevelList={editableLevelList}
            editTip={editTip}
            removable={removable}
            removableLevelList={removableLevelList}
            removeTip={removeTip}
            onDelete={onDelete}
            bultinCUD={!addControls && !editControls}
            onDeferLoad={deferLoad}
          />
        )}
      </div>
    );
  }
}

@OptionsControl({
  type: 'tree'
})
export class TreeControlRenderer extends TreeControl {}
