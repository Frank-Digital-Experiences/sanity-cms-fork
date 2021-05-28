import client from 'part:@sanity/base/client';

export default function uniqueInSchema(schemaName, fieldName) {
  return (value) => {
    return client
      .fetch(`*[_type == "${schemaName}" && ${fieldName} == "${value}"] { _id }`)
      .then(response => {
        const uniqueIds = response.reduce((acc, d) => {
          const id = d._id.replace('drafts.', '');
          return acc.indexOf(id) >= 0 ? acc : [...acc, d._id];
        }, []);

        if (uniqueIds.length > 1) {
          return 'Title needs to be unique';
        } else {
          return true;
        }
      });
  };
};
