import { useMemo } from 'react';
import axios from 'axios';
import client from 'part:@sanity/base/client';

import { useConfirmLogDialog } from "../../utils/actions";

const buildHook = process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK;


export function buildNetlify(props) {
  const { type, draft, published, onComplete } = props;

  const { dialog, onHandle } = useConfirmLogDialog({
    message: 'This will Trigger a rebuild in Netlify. Are you sure?',
    onComplete,

    onConfirm: (log) => {
      log("Calling Build hook...")
      
      axios.post(buildHook, {})
        .then((response) => {
          log("DONE\n\nResponse from Netlify:\n");
          log(JSON.stringify(response));

          setTimeout(onComplete, 10000);
        })
        .catch(error => {
          console.error(error);
          log(`\n${JSON.stringify(error)}`);
        });
    },
  });

  return {
    label: 'Re-Build Netlify Site',
    
    // Opens the confirm dialog with a message
    onHandle,

    // The confirm/modal dialog based on the latest state
    dialog,
  } 
}
