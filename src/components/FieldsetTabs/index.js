import React, { createRef, forwardRef, useCallback, useEffect, useState } from 'react';
import {
  withDocument,
  FormBuilderInput,
  patches,
} from 'part:@sanity/form-builder';
import { resolveTypeName } from './utils';
import InvalidValue from '@sanity/form-builder/lib/inputs/InvalidValueInput';
import * as PathUtils from '@sanity/util/paths.js';
import ErrorOutlineIcon from 'part:@sanity/base/error-outline-icon';
import WarningOutlineIcon from 'part:@sanity/base/warning-outline-icon';
import defaultStyles from 'part:@sanity/components/formfields/default-style';
import classNames from 'classnames';
import styles from './tabs.css';

const { setIfMissing } = patches;

const FieldsetTabs = (props, _ref) => {
  const {
    level,
    readOnly,
    focusPath,
    value,
    type,
    ...otherProps
  } = props;

  const {
    description,
    fieldsets,
    fields,
    options,
    title,
  } = type;

  const includeDescriptionAboveTabs = options && options.includeDescriptionAboveTabs;
  const includeTitleAboveTabs = options && options.includeTitleAboveTabs;

  const firstFieldInput = createRef();
  const activeTabPanel = createRef();

  const [activeTab, setActiveTab] = useState('');

  const focus = useCallback(() => {
    if (firstFieldInput.current) {
      firstFieldInput.current.focus();
    }
  }, [firstFieldInput]);  
  _ref({ focus });

  const getTabFields = useCallback(tabName => {
    return fields.filter(
      (f) => f.fieldset == tabName && f.type.hidden !== true
    );
  }, [fields]);

  const flattenFields = useCallback(arr => {
    return arr.reduce((acc, a) => {
      if (a.type && Array.isArray(a.type.fields)) {
        return [...acc, a, ...flattenFields(a.type.fields)];
      } else {
        return [...acc, a];
      }
    }, []);
  }, []);

  const trimChildPath = useCallback((path, childPath) => {
    return PathUtils.startsWith(path, childPath)
      ? PathUtils.trimLeft(path, childPath)
      : [];
  }, []);

  const getFieldSet = useCallback((path) => {
    if (path && path.length > 0) {
      var f = fields.find((f) => {
        return path.findIndex(f.name) > -1;
      });

      return f.fieldset;
    }
  }, [fields]);

  const getTabMarkers = useCallback(tabName => {
    let _f = getTabFields(tabName)
    var _fields = flattenFields(_f);
    var markers = _fields.reduce((result, f) => {
      var fm = getFieldMarkers(f.name);
      if (fm && fm.length > 0) {
        result = result.concat(fm);
      }

      return result;
    }, []);

    return markers;
  }, [flattenFields, getTabFields, getFieldMarkers]);

  const getFieldMarkers = useCallback(fieldName => {
    return props.markers.filter((marker) =>
      PathUtils.startsWith([fieldName], marker.path)
    );
  }, [props.markers]);

  const getActiveTabFields = useCallback(() => {
    if (activeTab !== '') {
      return getTabFields(activeTab);
    }

    return null;
  }, [activeTab, getTabFields]);

  const onFieldBlurHandler = useCallback(field => {
    if (props.onBlur) {
      props.onBlur();
    }
  }, [props.onBlur]);

  const onFieldFocusHandler = useCallback((field, path) => {
    if (props.onFocus) {
      props.onFocus(path);
    }
  }, [props.onFocus]);

  const onFieldChangeHandler = useCallback((field, fieldPatchEvent) => {
    if (!field.type.readOnly) {
      var e = fieldPatchEvent;

      if (field.type.jsonType === 'object') {
        e = e.prepend(setIfMissing({ _type: field.type.name }));
      }
      e = e.prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }));

      if (props.onChange) {
        props.onChange(e);
      }
    }
  }, [props.onChange, type]);

  const onHandleInvalidValue = useCallback((field, fieldPatchEvent) => {
    
  }, [props.onChange, type]);

  const onTabClicked = useCallback(fieldset => {
    setActiveTab(fieldset.name);
    activeTabPanel.current.focus();
  }, [setActiveTab, activeTabPanel]);

  const setInput = useCallback(input => {
    firstFieldInput.current = input;
  }, [firstFieldInput]);

  useEffect(() => {
    if (activeTab === '' && type.fieldsets.length > 0) {
      setActiveTab(type.fieldsets[0].name);
    }
  }, []);

  const renderTabHeader = useCallback((fs) => {
    var markers = getTabMarkers(fs.name);
    
    var validation = markers.filter(
      (marker) => marker.type === 'validation'
    );
    var errors = validation.filter(
      (marker) => marker.level === 'error'
    );
    var warnings = validation.filter(
      (marker) => marker.level === 'warning'
    );
    var hasErrors = errors.length > 0;
    var hasWarnings = warnings.length > 0;
    var hasIcon = hasErrors || hasWarnings;
    var title = fs.title || 'Other';

    const iconStyles = classNames(
      styles.icon,
      hasErrors && styles.icon__error,
      !hasErrors && hasWarnings && styles.icon__warning
    );

    return (
      <button
        key={fs.name || 'other'}
        className={classNames(styles.tab, {
          [styles.tab__active]: activeTab === fs.name,
        })}
        onClick={() => onTabClicked(fs)}
        role="tab"
        aria-selected={activeTab === fs.name}
        aria-controls={`${fs.name}-tab-panel`}
        id={`${fs.name}-tab`}
      >
        <div className={styles.tab_inner}>
          {title}
          {hasIcon && (
            <span className={iconStyles}>
              {hasErrors && <ErrorOutlineIcon />}
              {!hasErrors && hasWarnings && <WarningOutlineIcon />}
            </span>
          )}
        </div>
      </button>
    );
  }, [getTabMarkers, onTabClicked, activeTab]);

  const renderField = useCallback((field, i) => {
    var fieldLevel = level;
    var fieldRef = i === 0 ? firstFieldInput : null;
    var fieldMarkers = getFieldMarkers(field.name);
    var fieldPath = [field.name];
    var fieldType = field.type;
    var fieldReadOnly = field.type.readOnly || readOnly;
    var fieldValue =
      value && value[field.name] ? value[field.name] : undefined;

    var fieldWrapperProps = {
      key: field.name,
      className: classNames(defaultStyles.root, styles.field_wrapper),
    };

    var fieldProps = {
      ...otherProps,
      ref: fieldRef,
      type: fieldType,
      markers: fieldMarkers,
      level: fieldLevel,
      path: fieldPath,
      focusPath: focusPath,
      readOnly: fieldReadOnly,
      value: fieldValue,
      onFocus: (path) => onFieldFocusHandler(field, path),
      onChange: (patchEvent) =>
        onFieldChangeHandler(field, patchEvent),
      onBlur: () => onFieldBlurHandler(field),
    };

    // Handle invalid values.
    // Lifted from https://github.com/sanity-io/sanity/blob/next/packages/@sanity/form-builder/src/inputs/ObjectInput/Field.tsx
    if (typeof fieldValue !== 'undefined') {
      const expectedType = fieldType.name;
      const actualType = resolveTypeName(fieldValue);
      const isCompatible = actualType === fieldType.jsonType;

      if (expectedType !== actualType && !isCompatible) {
        return (
          <div {...fieldWrapperProps}>
            <InvalidValue
              value={fieldValue}
              onChange={fieldProps.onChange}
              validTypes={[fieldType.name]}
              actualType={actualType}
              ref={setInput}
            />
          </div>
        );
      }
    }

    return (
      <div {...fieldWrapperProps}>
        <FormBuilderInput {...fieldProps} />
      </div>
    );
  }, [level, firstFieldInput, getFieldMarkers, value, otherProps, focusPath, readOnly, onFieldFocusHandler, onFieldChangeHandler, onFieldBlurHandler, setInput]);

  const tabFields = getActiveTabFields();

  let contentStyle = styles.content_document;

  if (type.options.layout === 'object') {
    contentStyle = styles.content_object;
  }

  var fieldSets = [];
  if (
    fieldsets &&
    fieldsets.length > 0 &&
    fieldsets[0].single !== true
  ) {
    fieldSets = fieldsets.sort((a, b) => {
      if (a.options && b.options) {
        return a.options.sortOrder - b.options.sortOrder;
      }

      return 0;
    });
  }

  return (
    <>
      {includeTitleAboveTabs && title ? <div className={classNames(defaultStyles.label, styles.title)}>{title}</div> : null}
      {includeDescriptionAboveTabs && description ? <div className={classNames(defaultStyles.description)}>{description}</div> : null}
      <div className={styles.tabs}>
        {fieldSets.length > 1 && (
          <div className={styles.tab_headers}>
            {fieldSets.map(renderTabHeader)}
          </div>
        )}
        <div
          className={contentStyle}
          tabIndex={0}
          role="tabpanel"
          id={`${activeTab}-tab-panel`}
          aria-labelledby={`${activeTab}-tab`}
          ref={activeTabPanel}
        >
          {tabFields ? tabFields.map(renderField) : null}
        </div>
      </div>
    </>
  );
};

export default withDocument(forwardRef(FieldsetTabs));
