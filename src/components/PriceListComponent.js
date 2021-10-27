import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  TextInput,
  Label,
  Text,
} from '@sanity/ui';
import client from 'part:@sanity/base/client';
import PatchEvent, {set, unset, setIfMissing, insert } from '@sanity/form-builder/PatchEvent';
import { nanoid } from 'nanoid';

const PriceForm = (props) => {
  const {
    onChange,
    productPrice,
    priceList,
  } = props;
  const {
    price,
  } = productPrice || {};

  const handlePriceChange = useCallback((e) => {
    const ppObj = productPrice || { _type: 'scoped.productPrice', priceList: { _ref: priceList._id } };
    const priceObj = price || { _type: 'price' };

    onChange({ ...ppObj, price: { ...priceObj, amount: e.target.value } })
  }, [onChange, priceList, productPrice]);

  const handleCompareChange = useCallback((e) => {
    const ppObj = productPrice || { _type: 'scoped.productPrice', priceList: { _ref: priceList._id } };
    const priceObj = price || { _type: 'price' };

    onChange({ ...ppObj, price: { ...priceObj, compareToPrice: e.target.value } })
  }, [onChange, priceList, productPrice]);

  return (
    <Flex>
      <Box padding={1} flex={1}>
        <TextInput
          value={price?.amount}
          onChange={handlePriceChange}
          
        />
      </Box>
      <Box padding={1} flex={1}>
        <TextInput
          value={price?.compareToPrice}
          onChange={handleCompareChange}
        />
      </Box>
    </Flex>
  );
};

const PriceListComponent = forwardRef((props, ref) => {
  const { 
    type,         // Schema information
    value,        // Current field value
    readOnly,     // Boolean if field is not editable
    placeholder,  // Placeholder text from the schema
    markers,      // Markers including validation rules
    presence,     // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus,      // Method to handle focus state
    onBlur,       // Method to handle blur state
    onChange,     
  } = props;

  const [priceLists, setPriceLists] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const query = `*[_type == "priceList" && !(_id in path("drafts.**"))] | order(code asc)`;
    client
      .fetch(query)
      .then(setPriceLists)
      .catch(setError);
  }, []);

  const priceByPriceList = useMemo(() => {
    if (Array.isArray(value)) {
      return value.reduce((acc, p) => p.priceList?._ref ? ({ ...acc, [p.priceList?._ref]: p}) : acc, {});
    }
    return {};
  }, [value]);

  const onChangePrice = useCallback((productPrice) => {
    const setIfMissingPatch = [{ path: [], type: "setIfMissing", value: [] }];
    const patches = [
      setIfMissingPatch,
      ...(productPrice._key ? [{
        type: "unset",

      }] : []),
      {
        type: "append",
        items: [{ ...productPrice, _key: productPrice._key || nanoid() }],
      },
    ];

    const patch = PatchEvent.from();

    //onChange(patch)
  }, [value]);

  if (error) {
    return <Box>Failed to load Price Lists</Box>;
  }

  return (
    <Box>
      <Grid rows={priceLists.length + 1} autoFlow="column">
        <Box padding={1}><Label>Price List</Label></Box>
        {priceLists.map((priceList, i) => (
          <Box align="center" key={i}>{`${priceList.code} ${priceList.name} (${priceList.mainCurrencyCode})`}</Box>
        ))}

        <Flex>
          <Box padding={1} flex={1}><Label>Cur. Price</Label></Box>
          <Box padding={1} flex={1}><Label>Disc. From</Label></Box>
        </Flex>
        {priceLists.map((priceList, i) => (
          <PriceForm
            key={i}
            onChange={onChangePrice}
            productPrice={priceByPriceList[priceList._id]}
            priceList={priceList}
          />
        ))}
      </Grid>
    </Box>
  );
});

export default PriceListComponent;
