import React, { forwardRef, Fragment, useCallback, useMemo } from "react";
import { Box, Flex, Grid } from '@sanity/ui';
import { FormField } from "@sanity/base/components";
import { FormBuilderInput } from '@sanity/form-builder/lib/FormBuilderInput'
import PatchEvent, {set, setIfMissing } from '@sanity/form-builder/PatchEvent';

const DEFAULT_VALUES = {
  noOfCols: 5,
  noOfRows: 5,
};

const TableInput = forwardRef((props, ref) => {
  const {
    compareValue,
    fieldMarkers,
    focusPath,
    level,
    markers,
    onBlur,
    onChange,
    onFocus,
    presence,
    readOnly,
    type,
    value,
  } = props;

  const defaultValues = useMemo(() => ({ ...DEFAULT_VALUES, ...type?.options?.devaultValues }), [type?.options?.devaultValues]);

  const handleFieldChange = useCallback(
    (field, fieldPatchEvent) => {
      onChange(fieldPatchEvent.prefixAll(field.name).prepend(setIfMissing({ _type: type.name })));
    },
    [onChange]
  );

  const handleArrayFieldChange = useCallback(
    (field, fieldPatchEvent, arrIndex, arrLength) => {
      const patch = fieldPatchEvent.patches.find(p => p.type === 'set');
      const newValue = [...Array(arrLength)].map((e, i) => 
        i === arrIndex ? patch?.value : value && value[field.name] && value[field.name][i]
      )

      const setPatch = PatchEvent.from(set(newValue, [field.name]));
      onChange(setPatch);
    },
    [onChange, value]
  );

  const commonInputProps = useMemo(() => ({
    compareValue,
    focusPath,
    level: level + 1,
    markers: fieldMarkers,
    onBlur,
    onChange,
    onFocus,
    presence,
  }), [compareValue, focusPath, level, fieldMarkers, onBlur, onChange, onFocus, presence]);

  const renderFormBuilderInput = useCallback((field, handleChange, props) => {
    const { hideLabel, placeholder, ...rest } = props || {};
    const type = { ...field.type, placeholder: placeholder };
    if (hideLabel) {
      type.title = null;
    }

    return (
      <FormBuilderInput
        {...commonInputProps}
        {...rest}
        key={field.name}
        type={type}
        value={value && value[field.name] || defaultValues[field.name]}
        onChange={(patchEvent) => handleChange(field, patchEvent)}
        path={[field.name]}
        readOnly={field.readOnly}
      />
    );
  }, [commonInputProps, defaultValues, value])

  const renderFormBuilderArrayInput = useCallback((field, arrIndex, arrLength, handleChange, props) => {
    const { hideLabel, placeholder, ...rest } = props || {};
    const type = { ...(field.type?.of && field.type?.of[0] || field.type), placeholder };
    if (hideLabel) {
      type.title = null;
    }

    return (
      <FormBuilderInput
        {...commonInputProps}
        {...rest}
        key={`${field.name}-${arrIndex}`}
        type={type.of && type.of[0] || type}
        value={value && value[field.name] && value[field.name][arrIndex]}
        onChange={(patchEvent) => handleChange(field, patchEvent, arrIndex, arrLength)}
        path={[field.name, arrIndex]}
        readOnly={field.readOnly}
      />
    );
  }, [commonInputProps, defaultValues, value])

  const fieldsByName = useMemo(() => type.fields.reduce((acc, f) => ({ ...acc, [f.name]: f }), {}), [type]);

  const cols = useMemo(() =>
    value?.noOfCols || value?.noOfCols === 0 ? value.noOfCols : defaultValues.noOfCols
  , [defaultValues, value]);

  const rows = useMemo(() =>
    value?.noOfRows || value?.noOfRows === 0 ? value.noOfRows : defaultValues.noOfRows
  , [defaultValues, value]);

  return (
    <FormField
      description={type.description}
      title={type.title}
      compareValue={compareValue}
      __unstable_markers={markers}
      __unstable_presence={presence}
    >
      <Flex>
        <Box padding={3}>
          {renderFormBuilderInput(fieldsByName.noOfCols, handleFieldChange, { ref })}
        </Box>

        <Box padding={3}>
          {renderFormBuilderInput(fieldsByName.noOfRows, handleFieldChange)}
        </Box>
      </Flex>
    <Box>
      <Grid columns={cols + 1} rows={rows + 1}>
        <Box>
          {renderFormBuilderInput(fieldsByName.cornerLabel, handleFieldChange, { placeholder: 'Corner', hideLabel: true })}
        </Box>

        {[...Array(cols)].map((f, colNo) => (
          <Box key={colNo}>
            {renderFormBuilderArrayInput(fieldsByName.colLabels, colNo, cols, handleArrayFieldChange, { placeholder: `Header #${colNo+1}`, hideLabel: true })}
          </Box>
        ))}

        {[...Array(rows)].map((e, rowNo) => (
          <Fragment key={rowNo}>
            <Box>
              {renderFormBuilderArrayInput(fieldsByName.rowLabels, rowNo, rows, handleArrayFieldChange, { placeholder: `Row #${rowNo+1}`, hideLabel: true })}
            </Box>        

            {[...Array(cols)].map((f, colNo) => (
              <Box key={colNo}>
                {renderFormBuilderArrayInput(fieldsByName[`tableContent${rowNo}`], colNo, cols, handleArrayFieldChange, { hideLabel: true })}
              </Box>
            ))}
          </Fragment>
        ))}
      </Grid>
    </Box>
    </FormField>
  );
});

export default TableInput;
